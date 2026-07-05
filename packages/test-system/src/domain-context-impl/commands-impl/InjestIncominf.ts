import { GetObjectCommand } from "@aws-sdk/client-s3";
import { s3Client, extractAttachmentsAndUploadToS3, moveS3Object } from "@incta/aws-utils-s3";
import { loginfo, logdebug, logerror } from "@incta/common-utils";
import { queryItems } from "@incta/ddb-actions";
import { IClaims, IIdentity, _default_agent_id } from "@incta/ddb-cqd-model";
import { join, sep } from "path";
import { UserEmailRule } from "../../domain-context/items/dataItems/UserEmailRule";
import { getUserByEmail } from "../domains-impl/UserEmailRuleDomainImpl";

export const start = async (messageBody: any, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {

    //#region Download the file from S3
    const command = new GetObjectCommand({
        Bucket: messageBody.receipt.action.bucketName,
        Key: messageBody.receipt.action.objectKey,
    });
    // The Body object also has 'transformToByteArray' and 'transformToWebStream' methods.
    // str = await responseGet.Body?.transformToString();
    // loginfo('file downloaded', str); --> but this will load all eml into memory and we dont want that
    const responseGet = await s3Client.send(command);
    //#endregion

    const [emailHeaders, emailText, extractedAttachmentsKeys] = await extractAttachmentsAndUploadToS3(
        responseGet.Body, async (emailHeaders: Map<string, any>) => {
            // --- this is to be performed for every attachment - a bit redundant to query every time ddb and build the same emailRulesMap, but due to nature of async parsing...
            const senderEmail = emailHeaders.get('from').value[0].address
            logdebug('[extractAttachmentsAndUploadToS3] will identify email address ', senderEmail)

            const user = await getUserByEmail(emailHeaders.get('from').value[0].address)

            const todayDateString = new Date().toISOString()
            const s3DirectoryPath = join(
                'extracted_attachments',
                messageBody.receipt.action.objectKey,
                String(user.sub),
                _default_agent_id,
                todayDateString.slice(0, 4),
                todayDateString.slice(5, 7).padStart(2, '0'),
                todayDateString.slice(8, 10).padStart(2, '0'));
            return s3DirectoryPath
            //----------
        })
        .catch(error => {
            logerror('[parseEmailFromStream] async error: ', error)
            throw new Error(error.stack)
        })

    logdebug('[handler] email headers are', emailHeaders)
    logdebug('[handler] email text parsed are', emailText)
    logdebug('[handler] keys of extracted locations are', extractedAttachmentsKeys)
    //#endregion

    // --- this is to be performed for every attachment +1 (one more time here, after all attachments parsed) 
    // - a bit redundant to query every time ddb and build the same emailRulesMap, but due to nature of async parsing...
    const senderEmail = emailHeaders.get('from').value[0].address
    const result = await queryItems<UserEmailRule>({
        __typename: UserEmailRule.__typename,
        dbIndexName: 'sGSI1-sGSI2',
        hashKey: { sGSI1: { eq: emailHeaders.get('from').value[0].address } },
        loadPeersInput: { loadPeersLevel: 1, peersPropsToLoad: ["user", "agent"] /*, projectionExpression: "user,agent,idpId"*/ }
    }, null)
    logdebug(`[handler] there are  ${result.items.length} rules for ${senderEmail}. Building emailRulesMap to identify which are matching rules from `, result)
    //@ts-ignore
    const userId = String(result.items[0].User.sub)
    let defaultAgentInCaseOfNoRuleMatch: string
    const brokenEmailRulesMap = new Map<string, string>()
    const emailRulesMap = result.items.reduce<Map<string, string>>((emailRulesMap, userEmailRule) => {
        //@ts-ignore
        if (!userEmailRule.Agent) {
            brokenEmailRulesMap.set(userEmailRule.id, 'No Agent found for email rule')
            return emailRulesMap
        }
        //@ts-ignore
        const agentId = userEmailRule.Agent.id
        if (agentId.endsWith('v_0|Agent|DEFAULT')) {
            defaultAgentInCaseOfNoRuleMatch = agentId
        } else {
            emailRulesMap.set(String(userEmailRule.match_pattern), String(userEmailRule.agent))
        }
        return emailRulesMap
    }, new Map<string, string>())
    if (brokenEmailRulesMap.size) {
        logerror('There are broken email rules! Operation will continue but some documents may end up in a wrong location. ', brokenEmailRulesMap)
    }
    //----------
    logdebug('[handler] emailRulesMap is ', emailRulesMap)
    let specificAgentFound = false
    const text = emailText.text || emailText.html || emailText.textAsHtml
    const subject = emailHeaders.get('subject')
    logdebug(`[handler] will seek for mathces in this text: ${text}`)

    for (const [pattern, agentId] of emailRulesMap.entries()) {
        let isMatch = false
        // todo regex try match
        const regex = new RegExp(pattern);
        logdebug(`[handler] regex mathicng this pattern: ${regex}`)

        isMatch = regex.test(subject)
        if (!isMatch) { // if matched already in header do not proceed with text
            isMatch = regex.test(text);
        }

        console.log('Is there a match? ', isMatch);

        if (isMatch) {
            logdebug(`[handler] match found for `, agentId)
            specificAgentFound = true
            await Promise.all(extractedAttachmentsKeys.map((key: string) => moveS3Object(process.env.OPERATIONS_BUCKET!, key, join(userId, agentId, key.split(sep).slice(5).join(sep)))))
            break; // DONE for THIS SQS message from the received BATCH.
        }
    }
    logdebug('[handler] specificAgentFound: ', specificAgentFound)
    if (!specificAgentFound) {
        // if no mathcing at all, move attachments into the user's default agent
        await Promise.all(extractedAttachmentsKeys.map((key: string) => moveS3Object(process.env.OPERATIONS_BUCKET!, key, join(userId, defaultAgentInCaseOfNoRuleMatch, key.split(sep).slice(5).join(sep)))))
    }

    //#endregion
}