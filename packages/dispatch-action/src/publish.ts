import { PublishCommand, PublishInput, PublishResponse, SNSClient } from "@aws-sdk/client-sns";
import { ppjson } from "@incta/common-utils";

export const initPublisher = (topicArn: string | undefined) => {
    if (!topicArn) {
        throw new Error("No Topic ARN specified")
    }
    const validateTopicArn = (topicArn: string): string | undefined => {
        let splitedTopicArn: string[] = (topicArn as string).split(":");
        if (splitedTopicArn.length !== 6) { return undefined; }
        return splitedTopicArn[3];
    }
    const region: string | undefined = validateTopicArn(topicArn as string);
    if (!region) {
        throw new Error(`Invalid Topic ARN: ${topicArn}`);
    }

    return {
        client: new SNSClient({region: region }),
        topicArn
    }
}

let publisher: {client: SNSClient, topicArn: string}

export const publish = async (message: PublishInput): Promise<PublishResponse> => {
    publisher = publisher || initPublisher(process.env.EVENT_BUS_TOPIC_ARN)
    if (!process.env.AWS_SAM_LOCAL) {
        const pubishCommand = new PublishCommand({...message, TopicArn: publisher.topicArn})
        return await publisher.client.send(pubishCommand);
    } else {
        const utils = require("./utils")
        const fs = require("fs")
        const path = require("path");

        const publishedContent = utils.ppjson(Object.assign(message, { TopicArn: publisher.topicArn }))

        // @ts-ignore
        const dir = path.resolve(path.join("./local-lambda.out", message["MessageAttributes"]["ringToken"]["StringValue"]))
        
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir, { recursive: true });
        }

        //local development - save payloads to file and also print to console
        fs.writeFile(path.join(dir, `${new Date().toISOString()}__rando_part__${~~(Math.random() * 1000000)}.json`),
        publishedContent
        , () => {
            console.log("======================PUBLISHIG======================")
            console.log(publishedContent)
            console.log("^^^^^^^^^^^^^^^^^^^^^^PUBLISHED^^^^^^^^^^^^^^^^^^^^^^")
        })
        return {}
    }
}

/**
 * 
 * @param eventType 
 * @returns 
 */
export const prepareSNSEvent = <T extends Record<string,any>>(evnt: T, prefix: string) => {
    const message = gateCheckInput(evnt, "Attempt to prepare event for publish to SNS")
    return {
		Message: JSON.stringify({arguments: evnt.arguments, identity: evnt.identity }),
		MessageAttributes: {
			"eventSource": {
				DataType: 'String',
				StringValue: prefix
			},
			"action": {
				DataType: 'String',
				StringValue: message.action
			},
			"__typename": {
				DataType: 'String',
				StringValue: message.__typename
			},
			"correlation_id": {
				DataType: 'String',
				StringValue: message.correlation_id
			}
		}
	}
}

/**
 * Normalizes Input into Message - object conntaining similar properties but gateChecked for mantadory ones
 * 
 * @param evnt 
 * @param gateCheckReason 
 * @returns 
 */
export const gateCheckInput = <T extends Record<string,any>>(evnt: T, gateCheckReason?: string) => {
    gateCheckReason = gateCheckReason || "Gate checking event"
    if (!evnt.correlation_id) {
        throw new Error(`${gateCheckReason} that has no correlation_id key:${ppjson(evnt)}`)
    }
    if (!evnt.action) {
        throw new Error(`${gateCheckReason} that has no action key:${ppjson(evnt)}`)
    }
    if (!evnt.__typename) {
        throw new Error(`${gateCheckReason} that has no __typename key:${ppjson(evnt)}`)
    }

    return {
        ...evnt,
        __typename: evnt.__typename as string,
        action: evnt.action as string,
        correlation_id: evnt.correlation_id as string,
    }
}