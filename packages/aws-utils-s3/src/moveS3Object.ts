import { CopyObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "./s3Client";
import { logdebug } from "@incta/common-utils";

// Method to move an object from the source location to the destination location in the same bucket
export async function moveS3Object(sourceBucket: string, sourceKey: string, destinationKey: string) {
	try {
		// Copy the object from the source location to the destination location
		const copyCmd = new CopyObjectCommand({
			Bucket: sourceBucket,
			CopySource: encodeURI(`${sourceBucket}/${sourceKey}`),
		Key: destinationKey,
		})
		logdebug('copyCmd is ', copyCmd)
		const resultCopy = await s3Client.send(copyCmd);

		logdebug ('result from copy object is', resultCopy)

		// Delete the original object from its source location
		const deleteCmd = new DeleteObjectCommand({
			Bucket: sourceBucket,
			Key: sourceKey,
		})
		logdebug('deleteCmd is ', deleteCmd)
		const resultDelete = await s3Client.send(deleteCmd);
		logdebug ('result from delete object is', resultDelete)


		console.log(`Object moved successfully from '${sourceKey}' to '${destinationKey}'.`);
	} catch (error) {
		console.error(`Error moving the object ${sourceBucket}/${sourceKey}:`, error);
	}
}