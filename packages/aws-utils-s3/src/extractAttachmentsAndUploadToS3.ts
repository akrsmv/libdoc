import { logdebug } from "@incta/common-utils";
import { MailParser } from "mailparser";
import { Readable, Stream } from "stream";
import { SdkStream } from "@aws-sdk/types"
import { uploadStreamToS3 } from "./uploadStreamToS3";

export const extractAttachmentsAndUploadToS3 = (
    stream: SdkStream<Readable | ReadableStream<any> | Blob | undefined> | undefined,
    calculateObjectDirectory: (emailHeaders: Map<string, any>) => Promise<string>
): Promise<any[]> => new Promise((resolve, reject) => {
    const mailParser = new MailParser();
    let emailHeaders: Map<string, any>
    let emailText: any = {}
    const extractedAttachmentsKeys: string[] = []

    //email headers are guaranteed to be parsed first
    mailParser.on('headers', headers => {
        logdebug('[extractAttachmentsAndUploadToS3] email headers parsed', headers)
        emailHeaders = headers
        logdebug('emailHeaders are ', emailHeaders)
    });

    // email text is NOT guaranted to be parsed before attachments
    mailParser.on('data', async data => {
        logdebug('[extractAttachmentsAndUploadToS3] data event in mailparser')
        if (data.type === 'text') {
            logdebug('[extractAttachmentsAndUploadToS3] email text parsed', data)
            emailText = { ...emailText, ...data }
        }
        if (data.type === 'attachment') {
            logdebug('[extractAttachmentsAndUploadToS3] attachment event in mailparser for filename', data.filename)
            await uploadStreamToS3({
                stream: data.content,
                bucketName: process.env.OPERATIONS_BUCKET!, // TODO pass bucket name from caller
                objectDirectory: await calculateObjectDirectory(emailHeaders),
                objectFileName: data.filename
            }).then(([obj, Key]: any[]) => {
                extractedAttachmentsKeys.push(Key)
                logdebug('[extractAttachmentsAndUploadToS3] releasing data content: ', obj)
                data.release()
            })
            data.content.on('end', () => logdebug('data content: on end'));
        }
    });

    mailParser.on('error', (error: any) => {
        reject(error);
    });

    mailParser.on('end', () => resolve([emailHeaders, emailText, extractedAttachmentsKeys]));

    (stream as Stream).pipe(mailParser)
});