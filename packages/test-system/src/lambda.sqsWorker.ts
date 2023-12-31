import { logdebug, logerror, loginfo, set_correlation_token } from "@incta/common-utils"
import { __domain, _sep1, _sep2, versionString } from "@incta/ddb-model"
import { createItem, getItems, patchItem, queryItems, searchItems } from "@incta/ddb-actions"
import { User } from "./domain-context/items/dataItems/User"
import { _injectDataItems } from "./domain-context/items/dataItems/_injectDataItems"
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { S3Client, GetObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3';
import { join } from "path"
import { MailParser } from 'mailparser'
import { Readable, Stream } from "stream"
import { SdkStream } from "@aws-sdk/types"
import { Upload } from "@aws-sdk/lib-storage";
import { UserEmail } from "./domain-context/items/dataItems/UserEmail"

// Create an S3 client
const s3Client = new S3Client({ region: process.env.AWS_REGION });

const uploadStreamToS3 = async (stream: Readable, bucketName: string, objectKey: string, emailHeaders: Map<string, any> ) => {
	logdebug('[uploadStreamToS3] entering')
	logdebug('[uploadStreamToS3] will need to identify email address ', emailHeaders.get('from').value[0].address)
	const result = await queryItems({__typename: UserEmail.__typename, dbIndexName: "RANGE-TITEM", hashKey: {RANGE: {eq: `v_0|UserEmail|${emailHeaders.get('from').value[0].address}`}}, rangeKey: {TITEM: {begins_with: "UserEmail|"}}, loadPeersInput: {loadPeersLevel: 1, peersPropsToLoad:["agent"]}}, null)
	logdebug('The located user is ', result)
	logdebug('The located user is ', result.items[0])
	try {
		const parallelUploads3 = new Upload({
			client: s3Client,
			tags: [], // optional tags
			//   queueSize: 4, // optional concurrency configuration
			//   partSize: 5MB, // optional size of each part
			leavePartsOnError: false, // optional manually handle dropped parts
			params: {
				Bucket: bucketName,
				Key: objectKey,
				Body: stream // Body is stream which enables streaming
			},
		});
		parallelUploads3.on("httpUploadProgress", (progress) => {
			logdebug('[parallelUploads3] on httpUploadProgress: ', progress);
		});
		logdebug('returning from s3 upload')
		return parallelUploads3.done().catch(logerror);
	} catch (error) {
		console.error('Error uploading stream to S3:', error);
		throw error;
	}
};

const extractAttachmentsAndUploadToS3 = (stream: SdkStream<Readable | ReadableStream<any> | Blob | undefined> | undefined): Promise<any[]> => {
	return new Promise((resolve, reject) => {
		const mailParser = new MailParser();
		let emailHeaders: Map<string, any>
		let emailText: any = {
			
		}	

		mailParser.on('headers', headers => {
			logdebug('email headers parsed', headers)
			emailHeaders = headers
		});

		mailParser.on('data', async data => {
			if (data.type === 'text') {
				logdebug('email text parsed', data)
				emailText = {...emailText, ...data}
			}
			if (data.type === 'attachment') {
				console.log(data.filename);
				uploadStreamToS3(data.content, process.env.OPERATIONS_BUCKET!, join('processed', data.filename), emailHeaders)
					.then((obj) => {
						logdebug('releasing data content: ', obj)
						data.release()
					})
				data.content.on('end', () => logdebug('data content: on end'));
			}
		});

		mailParser.on('error', (error: any) => {
			reject(error);
		});

		mailParser.on('end', () => resolve([emailHeaders, emailText]));

		(stream as Stream).pipe(mailParser)
	});
};

/**
 * @param evnt 
 * @param context 
 * @param callback 
 * @returns 
 */
export const handler = async (evnt: any, context?: any, callback?: Function): Promise<any> => {
	logdebug('SQS LAMBDA WORKER TRIGGERED', { evnt, context })
	const failedMessages = []
	_injectDataItems() // load metadata for items, we need only the user item here

	for (var message of evnt.Records) {
		logdebug("processing SQS Record", message)
		set_correlation_token(message.messageId)
		try {
			const messageBody = JSON.parse(message.body)
			//#region Download the file from S3
			const command = new GetObjectCommand({
				Bucket: messageBody.receipt.action.bucketName,
				Key: messageBody.receipt.action.objectKey,
			});

			const responseGet = await s3Client.send(command);
			// The Body object also has 'transformToByteArray' and 'transformToWebStream' methods.
			// str = await responseGet.Body?.transformToString();
			// loginfo('file downloaded', str);
			loginfo('file downloaded and response NOT converted to string yet');
			//#endregion

			//#region extract attachments
			const [emailHeaders, emailText] = await extractAttachmentsAndUploadToS3(responseGet.Body)
				.catch(error => {
					logerror('[parseEmailFromStream] async error: ', error)
					throw new Error(error.stack)
				})

			logdebug('headers parsed are', emailHeaders)
			logdebug('email text parsed are', emailText)
			//#endregion

		} catch (err: any) {
			logerror(err);
			failedMessages.push({ itemIdentifier: message.messageId })
		}
	}

	//#region 
	//-----------------------------------------------------------------------------------
	// SEND MAIL WITH AWS SES

	// Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
	// SPDX-License-Identifier: Apache-2.0

	// const ses = new SESClient({ region: "eu-west-1" });

	// const command = new SendEmailCommand({
	// 	Destination: {
	// 		ToAddresses: ["office@inctasoft.com"],
	// 	},
	// 	Message: {
	// 		Body: {
	// 			Text: { Data: "Test" },
	// 		},

	// 		Subject: { Data: "Hello from AWS SES" },
	// 	},
	// 	Source: "office@inctasoft.com",
	// });

	// try {
	// 	let response = await ses.send(command);
	// 	// process data.
	// 	logdebug('SES send response is', response)
	// 	return response;
	// }
	// catch (error) {
	// 	logdebug('CATCH send error is', error)

	// 	// error handling.
	// }
	// finally {
	// 	// finally.
	// }
	//-----------------------------------------------------------
	//#endregion

	return { batchItemFailures: failedMessages }

};



