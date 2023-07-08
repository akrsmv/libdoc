import {
    Duration,
    aws_iam as iam,
    aws_lambda_nodejs as nodejs,
    aws_lambda as lambda,
    aws_sqs as sqs,
    aws_s3 as s3,
    aws_sns as sns,
    aws_sns_subscriptions as sns_subscriptions,
    aws_lambda_event_sources as lambda_event_sources,
} from 'aws-cdk-lib';
import * as s3Notifications from 'aws-cdk-lib/aws-s3-notifications';
import { Construct } from 'constructs';

// import { FunctionConfig } from '@incta/common';
import { EventBusConstruct } from './eventBusConstruct';
import { DynamoDBConstruct } from './dynamoDbConstruct';
import { join } from 'path';
import { CdkStackProps } from '../cdk-stack';
import { S3Construct } from './s3Construct';
export interface WorkerConstructProps {
    workerName: string,
    // workerConfig: FunctionConfig
    eventBusConstruct?: EventBusConstruct
    dynamoDbConstruct?: DynamoDBConstruct
    eventSource: string
    functionImplementationPath: string
    functionHandler: string
    functionRuntime: lambda.Runtime
    envVars?: { [key: string]: string }
    layers?: lambda.ILayerVersion[] | undefined,
}

export class WorkerConstruct extends Construct {

    public readonly function: lambda.Function

    constructor(scope: Construct, id: string, props: CdkStackProps & EventBusConstruct & DynamoDBConstruct & S3Construct) {
        super(scope, id);
        // ---------------------->
        //define queue for worker input (for future use in async commands)
        const functionInputDeadletterQueue = new sqs.Queue(this, "DEADLETTER", {
            queueName: `sqs-${props.envName}-${props.clientAppName}-worker-DEADLETTER`
        })
        const functionInputQueue = new sqs.Queue(this, "Queue", {
            // as per best practices from AWS visibilityTimeout is suggesteed 6 times lambda timeout
            // however we reduce to only 2 the lambda timeout, as we do not have retries in the lambda
            // visibilityTimeout: Duration.seconds(2 * props.workerConfig.Timeout),
            visibilityTimeout: Duration.minutes(30),
            receiveMessageWaitTime: Duration.seconds(20), // long polling for events
            queueName: `sqs-${props.envName}-${props.clientAppName}-worker`,
            // defining DLQ on SQS level, see https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-async-api
            deadLetterQueue: {
                maxReceiveCount: 3,//props.workerConfig.sqsRetries || 3,
                queue: functionInputDeadletterQueue
            }
        })
        functionInputQueue.node.addDependency(functionInputDeadletterQueue)
        // add a for future use subscription (i.e async commands)
        props.eventBus.addSubscription(new sns_subscriptions.SqsSubscription(functionInputQueue, {
            rawMessageDelivery: true,
            deadLetterQueue: functionInputDeadletterQueue,
            filterPolicy: {
                eventSource: {
                    conditions: [
                        { prefix: 'worker:in' }
                    ]
                }
            }
        }))
        // <----------------------------------

        // ---------------------->
        //define queue for worker input (for future use in async commands)
        const functionInboundMailDeadletterQueue = new sqs.Queue(this, "InboundMailDEADLETTER", {
            queueName: `sqs-${props.envName}-${props.clientAppName}-mail-worker-DEADLETTER`,
            // fifo: !!props.workerConfig.SQSFIFO || undefined,
            // contentBasedDeduplication: !!props.workerConfig.SQSFIFO || undefined
        })
        const functionInboundMailQueue = new sqs.Queue(this, "WorkerInboundMailQueue", {
            // as per best practices from AWS visibilityTimeout is suggesteed 6 times lambda timeout
            // however we reduce to only 2 the lambda timeout, as we do not have retries in the lambda
            // visibilityTimeout: Duration.seconds(2 * props.workerConfig.Timeout),
            visibilityTimeout: Duration.minutes(30),
            receiveMessageWaitTime: Duration.seconds(20), // long polling for events
            queueName: `sqs-${props.envName}-${props.clientAppName}-mail-worker`,
            // defining DLQ on SQS level, see https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-async-api
            deadLetterQueue: {
                maxReceiveCount: 1,//props.workerConfig.sqsRetries || 3,
                queue: functionInboundMailDeadletterQueue
            }
        })
        // seems by time of writing `filterPolicyScope` was not present on L2 objects, so use L1 Cfn object
        functionInboundMailQueue.node.addDependency(functionInboundMailDeadletterQueue)
        const subscriptionMail = new sns.CfnSubscription(this, 'InboundMailSubscription1', {
            topicArn: props.eventBus.topicArn,
            protocol: sns.SubscriptionProtocol.SQS,
            endpoint: functionInboundMailQueue.queueArn,
            rawMessageDelivery: true,
            filterPolicyScope: 'MessageBody',
            filterPolicy: {
                "mail": [{ "exists": true }],
                "notificationType": ["Received"]
                // since using L1 object, pass the final json for the subscription filter and not below
                // notificationType: sns.SubscriptionFilter.stringFilter({
                //     allowlist: ['Received'],
                // }),
                // mail: sns.SubscriptionFilter.existsFilter()
            }
        });
        // since not using the L2 object, grant the sendMessage manually to sns principal:
        // Define the resource policy for the S3 bucket
        const resourcePolicy = new sqs.QueuePolicy(this, 'InboundMailQueuePolicy', {
            queues: [functionInboundMailQueue]
        });

        // Add a policy statement with conditions to the resource policy
        const statement = new iam.PolicyStatement({
            effect: iam.Effect.ALLOW,
            actions: ['sqs:SendMessage'],
            principals: [new iam.ServicePrincipal('sns.amazonaws.com')],
            resources: [`${functionInboundMailQueue.queueArn}`],
            conditions: {
                ArnEquals: {
                    'aws:SourceArn': props.eventBus.topicArn
                }
            }
        })

        resourcePolicy.document.addStatements(statement);

        // props.eventBus.addSubscription(subscriptionMail)
        // <----------------------------------

        this.function = new nodejs.NodejsFunction(this, 'Lambda', {
            runtime: lambda.Runtime.NODEJS_18_X,
            functionName: `lam-${props.envName}-${props.clientAppName}-worker`,
            entry: join(props.clientAppDirName, 'packages', 'test-system', 'src', 'lambda.sqsWorker.ts'),

            timeout: Duration.minutes(15), //Duration.seconds(props.workerConfig.Timeout),
            memorySize: 256, //props.workerConfig.RAM || 256,
            // tracing: !!props.workerConfig.XRayTracing? lambda.Tracing.ACTIVE : lambda.Tracing.DISABLED,

            // DLQ enabled on a Queue level, see https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-async-api
            // but lambda is also setup to have its own DLQ, according to this article: https://aws.amazon.com/blogs/compute/designing-durable-serverless-apps-with-dlqs-for-amazon-sns-amazon-sqs-aws-lambda/
            // so far testing it, lambda's DLQ never gets used, only the SQS DLQ

            environment: {
                'LOGLEVEL': 'DEBUG',
                'DB_NAME': props.table.tableName,
                // 'QUEUE_URL': functionInputQueue.queueUrl,
                'EVENT_BUS_TOPIC_ARN': props.eventBus.topicArn,
                'OPERATIONS_BUCKET': props.operationsBucket.bucketName
            },
            events: [
                new lambda_event_sources.SqsEventSource(functionInputQueue,
                    {
                        batchSize: 100,//props.workerConfig.eventSourceBatchSize || 1
                        maxBatchingWindow: Duration.minutes(5),
                        reportBatchItemFailures: true
                    }),
                new lambda_event_sources.SqsEventSource(functionInboundMailQueue,
                    {
                        batchSize: 10,//props.workerConfig.eventSourceBatchSize || 1
                        maxBatchingWindow: Duration.minutes(5),
                        reportBatchItemFailures: true
                    }),
            ],
            // unlike the dispatcher who must not have retries
            // workers must have retries - to tackle dynamo scaling events or transaction conflicting events
            // or any other application specific situations resulting in error

            // WARNING 1) make sure domain logic is idempotent
            retryAttempts: 1, // WARNING 2) with SQS event source for the lambda, retries are actually controlled via the maxReceiveCount above, 
            // and a DLQ attached there, will be used only if the lambda is called asynchronously (--invocation-type=Event)
            // disabling it for now, as within aarts framework lambdas are not expected to be called outside the SNS-SQS topology
            // deadLetterQueueEnabled: true,
            // deadLetterQueue: new Queue(this, "DEADLETTER-LAMBDA", {
            //     queueName: `${props.workerName}-DEADLETTER-LAMBDA`
            // }),

            // reservedConcurrentExecutions: props.workerConfig.reservedConcurrentExecutions,
            // layers: props.layers
        })

        // do not add s3 trigger for emails saved in s3, rather rely on the SNS notification sent by SES,
        // and received via SQS subscription SEE above: functionInboundMailQueue
        // props.operationsBucket.addEventNotification(
        //     s3.EventType.OBJECT_CREATED,
        //     new s3Notifications.LambdaDestination(this.function),
        //     { prefix: '/ingesting' });
        props.operationsBucket.grantReadWrite(this.function)

        if (!!props.eventBus) {
            this.function.node.addDependency(props.eventBus)
            props.eventBus.grantPublish(this.function)

            functionInputQueue.node.addDependency(props.eventBus)
            functionInboundMailQueue.node.addDependency(props.eventBus)

        }

        if (props.table) {
            this.function.node.addDependency(props.table)
            props.table.grantFullAccess(this.function)
        }
        // Grant the necessary SES permissions to the Lambda function
        const sesEmailPolicy = new iam.PolicyStatement({
            actions: ['ses:SendEmail', 'ses:SendRawEmail'],
            resources: ['*'], // Adjust the resource ARN if necessary
        });

        this.function.addToRolePolicy(sesEmailPolicy);
    }
}

