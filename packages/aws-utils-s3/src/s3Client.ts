import { S3Client } from "@aws-sdk/client-s3";

// Create an S3 client
export const s3Client = new S3Client({ region: process.env.AWS_REGION });