
import {
    Duration,
    aws_lambda_nodejs as nodejs,
    aws_lambda as lambda,
    aws_lambda_event_sources as lambda_event_sources,
    aws_sqs as sqs
} from 'aws-cdk-lib';
import { Construct } from 'constructs';

import { join } from 'path';

import { DynamoDBConstruct } from './dynamoDbConstruct';
import { EventBusConstruct } from './eventBusConstruct';
import { CdkStackProps } from '../cdk-stack';


export class DynamoEventsConstruct extends Construct {

    public readonly dynamoEventsAggregation: lambda.Function
    public readonly dynamoEventsCallback: lambda.Function

    constructor(scope: Construct, id: string, props: CdkStackProps & DynamoDBConstruct & EventBusConstruct) {
        super(scope, id);

        this.dynamoEventsAggregation = new nodejs.NodejsFunction(this, 'Aggregation', {
            runtime: lambda.Runtime.NODEJS_18_X,
            functionName: `lam-${props.envName}-${props.clientAppName}-ddb-events`,
            entry: join(props.clientAppDirName, 'packages', 'test-system', 'src', 'lambda.dbStreams.ts'),

            memorySize: 256,
            timeout: Duration.minutes(10),

            retryAttempts: 2,
            reservedConcurrentExecutions: 1,
            environment: {
                "LOGLEVEL": "DEBUG",
                'DB_NAME': props.table.tableName
            }
        })

        props.table.grantFullAccess(this.dynamoEventsAggregation)


        const dlq = new sqs.Queue(this, `DEADLETTER`, {
            queueName: `sqs-${props.envName}-${props.clientAppName}-ddb-events-DEADLETTER`
        })
        dlq.grantSendMessages(this.dynamoEventsAggregation)

        this.dynamoEventsAggregation.addEventSource(new lambda_event_sources.DynamoEventSource(props.table, {
            startingPosition: lambda.StartingPosition.LATEST,
            batchSize: 1000,
            bisectBatchOnError: true,
            parallelizationFactor: 10,
            maxBatchingWindow: Duration.minutes(5),
            onFailure: {
                bind: (iEventSourceMapping: any, lambda: any) => { return { destination: dlq.queueArn } }
            }
        }))

        if (!!props.eventBus) {
            this.dynamoEventsAggregation.node.addDependency(props.eventBus)
            props.eventBus.grantPublish(this.dynamoEventsAggregation)
            this.dynamoEventsAggregation.addEnvironment('EVENT_BUS_TOPIC_ARN', props.eventBus.topicArn)
        }

        //---------

        // this.dynamoEventsCallback = new lambda.Function(this, "Callback", {
        //     runtime: lambda.Runtime.NODEJS_18_X,
        //     functionName: `${clientAppName}dynamoEventsCallback`,
        //     code: lambda.Code.fromAsset(join(clientAppDirName, "dist", "src"), { exclude: ["aws-sdk"], followSymlinks: SymlinkFollowMode.ALWAYS }),
        //     handler: '__bootstrap/index.dynamoEventsCallback',
        //     memorySize: props.callbackFunctionConfig.RAM,
        //     timeout: Duration.seconds(props.callbackFunctionConfig.Timeout),
        //     layers: [props.nodeModulesLayer],
        //     retryAttempts: 0,
        //     reservedConcurrentExecutions: props.callbackFunctionConfig.reservedConcurrentExecutions,
        //     tracing: !!props.callbackFunctionConfig.XRayTracing ? lambda.Tracing.ACTIVE : lambda.Tracing.DISABLED
        // })
        // props.eventBusConstruct.grantAccess(this.dynamoEventsCallback)
        // props.dynamoDbConstruct.grantAccess(this.dynamoEventsCallback)


        // const dlqCb = new sqs.Queue(this, `${clientAppName}CallbackDEADLETTER`, {
        //     queueName: `${clientAppName}dynamoEventsCallback-DEADLETTER`
        // })
        // dlqCb.grantSendMessages(this.dynamoEventsCallback)

        // this.dynamoEventsCallback.addEventSource(new lambda_event_sources.DynamoEventSource(props.dynamoDbConstruct.table, {
        //     startingPosition: lambda.StartingPosition.LATEST,
        //     batchSize: 1,
        //     bisectBatchOnError: true,
        //     parallelizationFactor: 10,
        //     maxBatchingWindow: Duration.seconds(0),
        //     onFailure: {
        //         bind: (iEventSourceMapping: any, lambda: any) => { return { destination: dlqCb.queueArn } }
        //     }
        // }))

        // if (!!props.eventBusConstruct) {
        //     this.dynamoEventsCallback.node.addDependency(props.eventBusConstruct.eventBus)
        //     props.eventBusConstruct.grantAccess(this.dynamoEventsCallback)
        // }
    }
}