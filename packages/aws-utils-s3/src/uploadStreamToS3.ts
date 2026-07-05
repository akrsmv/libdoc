import { Upload } from "@aws-sdk/lib-storage";
import { logdebug, logerror } from "@incta/common-utils";
import { queryItems } from "@incta/ddb-actions";
import { _sep1, _default_agent_id } from "@incta/ddb-model";
import { join } from "path";
import { Readable } from "stream";
import { s3Client } from "./s3Client";

export const uploadStreamToS3 = async ({ stream, bucketName, objectDirectory, objectFileName }: {
	stream: Readable, bucketName: string, objectDirectory: string, objectFileName: string
}) => {
	logdebug('[uploadStreamToS3] entering with params ', { stream, bucketName, objectDirectory, objectFileName })


	if (!objectDirectory || !objectFileName  || !bucketName || !stream) {
		throw new Error(`some of ${{ stream, bucketName, objectDirectory, objectFileName }} is undefined. Cannot proceed`)
	}

	const key = join(objectDirectory, objectFileName)
	try {
		const parallelUploads3 = new Upload({
			client: s3Client,
			tags: [], // optional tags
			//   queueSize: 4, // optional concurrency configuration
			//   partSize: 5MB, // optional size of each part
			leavePartsOnError: false, // optional manually handle dropped parts
			params: {
				Bucket: bucketName,
				Key: key,
				Body: stream // Body is stream which enables streaming
			},
		});
		parallelUploads3.on("httpUploadProgress", (progress) => {
			logdebug('[parallelUploads3] on httpUploadProgress: ', progress);
		});
		
		const obj = await parallelUploads3.done()
		
		logdebug('returning from s3 upload. Result is ', obj)
		return [obj, key];
	} catch (error) {
		console.error('Error uploading stream to S3:', error);
		throw error;
	}
};