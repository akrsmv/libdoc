import {
    aws_iam as iam,
    aws_s3 as s3,
    RemovalPolicy
} from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CdkStackProps } from '../cdk-stack';

export class S3Construct extends Construct {

    public readonly operationsBucket: s3.IBucket //s3.Bucket
    public readonly resourceBucket: s3.IBucket

    /* 
    WARNING
    even though there is a WORKING code for importing an s3 buckets, that was intended to work in combination with 
    removalPolicy: cdk.RemovalPolicy.RETAIN,

    it turns out that when a bucket is imported it has a different status than the the other resources in the stack
    (for example it stops appearing in the CloudFormation/Stack/Resources tab)

    A consequence from this is also that any bucket policy being set once the bucket was created from the stack later is being removed
    A consequent attempts to add a policy to an imported s3 bucket does nothing

    Thus, because the resource bucket needs the publicAcces policy, if its created, then stack deleted, and later imported --> it will stop having that policy
    reverted to removalPolicy: cdk.RemovalPolicy.DESTROY + autoDeleteObjects: true,
    */
    constructor(scope: Construct, id: string, props: CdkStackProps) {
        super(scope, id);
        // TODO excerpt common constants as CONVENTION OVER CONFIGURATION on a higer level not in the constructs
        const operationsBucketName = `${props.clientAppName.toLowerCase()}-operations-bucket${props.clientAppDomainName ? '.' + props.clientAppDomainName : ''}`
        const resourceBucketName = `${props.clientAppName.toLowerCase()}-resource-bucket${props.clientAppDomainName ? '.' + props.clientAppDomainName : ''}`

        const awsExistingBuckets = require('child_process').execSync(`aws s3 ls --profile ${props.awsProfile}`).toString();

        const operationsBucketExists = awsExistingBuckets.indexOf(operationsBucketName) > -1
        const resourceBucketExists = awsExistingBuckets.indexOf(resourceBucketName) > -1

        this.operationsBucket =
            operationsBucketExists ? s3.Bucket.fromBucketName(this, 'OperationsBucket', operationsBucketName) :
                new s3.Bucket(this, `OperationsBucket`, {
                    bucketName: operationsBucketName,
                    removalPolicy: RemovalPolicy.RETAIN,
                    autoDeleteObjects: false,//'Cannot use \'autoDeleteObjects\' property on a bucket without setting removal policy to \'DESTROY\
                    cors: [
                        {
                            id: 'allow_cors',
                            allowedMethods: [
                                s3.HttpMethods.DELETE,
                                s3.HttpMethods.GET,
                                s3.HttpMethods.HEAD,
                                s3.HttpMethods.POST,
                                s3.HttpMethods.PUT,
                            ],
                            allowedOrigins: ['*'],
                            allowedHeaders: ['*'],
                            exposedHeaders: [
                                'x-amz-server-side-encryption',
                                'x-amz-request-id',
                                'x-amz-id-2',
                                'ETag',
                            ]
                        }
                    ]
                })
        if (!operationsBucketExists) {// ie this stack is creating it
            // const operationsBucketPolicy = new s3.BucketPolicy(this, 'OperationsBucketPolicy', {
            //     removalPolicy: cdk.RemovalPolicy.RETAIN,
            //     bucket: this.operationsBucket

            // })
            // this.operationsBucket.policy = operationsBucketPolicy
            this.operationsBucket.policy?.applyRemovalPolicy(RemovalPolicy.RETAIN)
        }

        this.resourceBucket =
            resourceBucketExists ? s3.Bucket.fromBucketName(this, 'ResourceBucket', resourceBucketName) :
                new s3.Bucket(this, `ResourceBucket`, {
                    publicReadAccess: true, // note also calling grantPublicAccess() below because of removing the access policy if bucket is imported / update: but it didnt solves the issue, see the warning at the top /
                    websiteIndexDocument: "index.html",
                    bucketName: resourceBucketName,
                    removalPolicy: RemovalPolicy.RETAIN,
                    autoDeleteObjects: false, //'Cannot use \'autoDeleteObjects\' property on a bucket without setting removal policy to \'DESTROY\
                    cors: [
                        {
                            id: 'allow_cors',
                            allowedMethods: [
                                s3.HttpMethods.DELETE,
                                s3.HttpMethods.GET,
                                s3.HttpMethods.HEAD,
                                s3.HttpMethods.POST,
                                s3.HttpMethods.PUT,
                            ],
                            allowedOrigins: ['*'],
                            allowedHeaders: ['*'],
                            exposedHeaders: [
                                'x-amz-server-side-encryption',
                                'x-amz-request-id',
                                'x-amz-id-2',
                                'ETag',
                            ]
                        }
                    ]
                })

        if (!resourceBucketExists) { // ie this stack is creating it
            // this.resourceBucket.grantPublicAccess();

            // ^^^ NOTE below should do the same, however this way we can also apply removal policy RETAIN
            // (see https://github.com/aws/aws-cdk/issues/877)
            const allowGetPolicy = new iam.PolicyStatement({
                resources: [
                    this.resourceBucket.arnForObjects("*"),
                    this.resourceBucket.bucketArn,
                ],
                actions: ["s3:GetObject"],
                principals: [new iam.AnyPrincipal()]
            })
            // turns out the applyRemovalPolicy method is only available on the Policy class
            // allowGetPolicy.applyRemovalPolicy(cdk.RemovalPolicy.RETAIN)// this is not set by the method grantPublicAccess(), so we are using 2nd approach
            // this.resourceBucket.addToResourcePolicy(allowGetPolicy)

            // ^^^ NOTE so the 2nd approach also doesnt work, we need a whole Policy object to attach?
            // const resourceBucketPolicy = new s3.BucketPolicy(this, 'ResourceBucketPolicy', {
            //     removalPolicy: cdk.RemovalPolicy.RETAIN,
            //     bucket: this.resourceBucket,
            // })
            this.resourceBucket.addToResourcePolicy(allowGetPolicy)
            this.resourceBucket.policy?.applyRemovalPolicy(RemovalPolicy.RETAIN)
        }
    }
}