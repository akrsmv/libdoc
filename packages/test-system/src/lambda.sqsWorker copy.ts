import { logdebug, logerror, loginfo, set_correlation_token } from "@incta/common-utils"
import { __domain, _sep1, _sep2, versionString } from "@incta/ddb-model"
import { createItem, getItems, patchItem } from "@incta/ddb-actions"
import { User } from "./domain-context/items/dataItems/User"
import { _injectDataItems } from "./domain-context/items/dataItems/_injectDataItems"
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { S3Client, GetObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3';
import { join } from "path"
import { MailParser } from 'mailparser'
import { PassThrough, Readable, Stream } from "stream"
import { SdkStream } from "@aws-sdk/types"
import { Upload } from "@aws-sdk/lib-storage";
import { error } from "console"


// Create an S3 client
const s3Client = new S3Client({ region: process.env.AWS_REGION });

const uploadStreamToS3 = (stream: Readable, bucketName: string, objectKey: string) => {
	logdebug('[uploadStreamToS3] entering')
	try {
		const parallelUploads3 = new Upload({
			client: s3Client,
			//   tags: [...], // optional tags
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

const parseEmailFromStream = async (stream: SdkStream<Readable | ReadableStream<any> | Blob | undefined> | undefined) => {
	return new Promise((resolve, reject) => {
		const mailParser = new MailParser();

		mailParser.on('data', data => {
			if (data.type === 'attachment') {
				console.log(data.filename);
				const streamCopy = new PassThrough();
				const a = uploadStreamToS3(streamCopy, process.env.OPERATIONS_BUCKET!, join('processed', data.filename))
				logdebug('start piping the attachment data to s3 ')
				data.content.pipe(streamCopy)
				a.then((obj) => {
					logdebug('releasing data content: ', obj)
					data.release()
				})
				// .then((obj: any) => {
				// 	logdebug('start piping the attachment data to s3: ', obj)
				// 	data.content.pipe(streamCopy)
				// })
				// .then(() => {
				// 	logdebug('releasing data content')
				// 	data.release()
				// })


				// })

				data.content.on('end', () => logdebug('data content: on end'));

			}
		});


		mailParser.on('error', (error: any) => {
			reject(error);
		});

		mailParser.on('end', resolve);

		//@ts-ignore
		stream.pipe(mailParser)
		// stream?.transformToWebStream().pipeThrough(mailParser as unknown as ReadableWritablePair<unknown, any>);
	});
};

/**
 * TODO excerpt in separate npm package
 * TODO should have access to GET ITEMS ONLY FOR TENANTUSERCONFIG
 * @param evnt 
 * @param context 
 * @param callback 
 * @returns 
 */
export const handler = async (evnt: any, context?: any, callback?: Function): Promise<any> => {
	logdebug('SQS LAMBDA WORKER TRIGGERED', { evnt, context })
	const failedMessages = []

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
			let str

			const responseGet = await s3Client.send(command);
			// The Body object also has 'transformToByteArray' and 'transformToWebStream' methods.
			// str = await responseGet.Body?.transformToString();
			// loginfo('file downloaded', str);
			loginfo('file downloaded and response NOT converted to string yet');
			//#endregion

			//#region extract attachments
			const parsedEmail = await parseEmailFromStream(responseGet.Body).catch(error => {logerror('[parseEmailFromStream] async error: ',error)})
			logdebug('parsed email is', parsedEmail)
			// const parser = new MailParser()
			// parser.on('data', (data: any) => {
			// 	if (data.type === 'attachment') {
			// 		console.log(data.filename);
			// 		data.content.pipe(process.stdout);
			// 		data.content.on('end', () => data.release());
			// 	}
			// });
			// parser.
			//#endregion

			//#region upload to s3
			// const putCommand = new PutObjectCommand({
			// 	Bucket: process.env.OPERATIONS_BUCKET,
			// 	Key: join('processed/', (messageBody.receipt.action.objectKey).split('/').pop()),
			// 	Body: str,
			// });

			// const responsePut = await s3Client.send(putCommand);
			// loginfo('Uploaded a file ', responsePut);
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



