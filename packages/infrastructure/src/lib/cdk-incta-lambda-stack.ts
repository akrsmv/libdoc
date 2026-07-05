// import { Code, Runtime, LayerVersion } from 'aws-cdk-lib/aws-lambda';
// import { aws_iam as iam } from 'aws-cdk-lib';
import { join, sep } from 'path';
import {
  App, StackProps,
  Stack,
  CfnOutput,
  aws_lambda as lambda,
  aws_iam as iam,
  aws_lambda_nodejs as nodejs,
  aws_cognito as cognito, RemovalPolicy, aws_s3 as s3,
  SymlinkFollowMode, DockerImage, BundlingOutput,
  aws_lambda_event_sources as lambda_event_sources,
} from 'aws-cdk-lib';
import { DynamoDBConstruct } from './constructs/dynamoDbConstruct';
import { ITableModel } from './interfaces/ITableModel';
import { ITableCofig } from './interfaces/ITableConfig';
import { EventBusConstruct } from './constructs/eventBusConstruct';
import { CognitoConstruct } from './constructs/cognitoConstruct';
import { JSONDataModel } from '@incta/ddb-model';
import { AppSyncConstruct } from './constructs/appSyncConstruct';
import { WorkerConstruct } from './constructs/workerConstruct';
import { DynamoEventsConstruct } from './constructs/dynamoEventsConstruct';
import { S3Construct } from './constructs/s3Construct';
import { UserPool, UserPoolOperation } from 'aws-cdk-lib/aws-cognito';
import { Function } from 'aws-cdk-lib/aws-lambda';
import {
  Duration,
  aws_sqs as sqs,
  aws_sns as sns,
  aws_sns_subscriptions as sns_subscriptions,
} from 'aws-cdk-lib';


export interface CdkStackProps extends StackProps {
  envName: string,
  clientAppName: string
  clientAppDirName: string
  awsProfile: string
  clientAppDomainName: string
  cognitoInitialUser: string
  infraRootPath: string,

  tableName: string,
  tableModelJson: ITableModel,
  tableConfigJson: ITableCofig,
  dataModelJson: JSONDataModel
}

export class InctaLambdaStack extends Stack {
  constructor(scope: App, id: string, props: CdkStackProps) {
    super(scope, id, props);


    // dispatcher lambda
    //--------------------------------------------------
    // const dispatcherLambda = new nodejs.NodejsFunction(this, 'DispatchEventLambda', {
    //   runtime: lambda.Runtime.NODEJS_18_X,
    //   functionName: `lam-${props.envName}-${props.clientAppName}-dispatch-event`,
    //   entry: join(props.clientAppDirName, 'packages', 'test-system', 'src', 'lambda.dispatchAction.ts'),
    //   timeout: Duration.minutes(10),
    // });
    //---------------------------------------------------

    // cogntio pre token generation lambda trigger
    //-----------------------------------------------------
    const cognitoTriggerLambda = new nodejs.NodejsFunction(this, 'CognitoTriggerLambda', {
      runtime: lambda.Runtime.NODEJS_18_X,
      functionName: `lam-${props.envName}-${props.clientAppName}-cog-trigger`,
      entry: join(props.clientAppDirName, 'packages', 'test-system', 'src', 'lambda.cognitoTrigger.ts'),
    });

    // // worker lambda
    // //----------------
    // const workerLambda = new nodejs.NodejsFunction(this, 'Lambda', {
    //   runtime: lambda.Runtime.NODEJS_18_X,
    //   functionName: `lam-${props.envName}-${props.clientAppName}-worker`,
    //   entry: join(props.clientAppDirName, 'packages', 'test-system', 'src', 'lambda.sqsWorker.ts'),

    //   timeout: Duration.minutes(15), //Duration.seconds(props.workerConfig.Timeout),
    //   memorySize: 256, //props.workerConfig.RAM || 256,
    // })

    // //-----------------------
    // const dynamoEventsAggregationLambda = new nodejs.NodejsFunction(this, 'Aggregation', {
    //   runtime: lambda.Runtime.NODEJS_18_X,
    //   functionName: `lam-${props.envName}-${props.clientAppName}-ddb-events`,
    //   entry: join(props.clientAppDirName, 'packages', 'test-system', 'src', 'lambda.dbStreams.ts'),

    //   memorySize: 256,
    //   timeout: Duration.minutes(10),

    //   retryAttempts: 2,
    //   reservedConcurrentExecutions: 1
    // })

    // new CfnOutput(this, "dispatcher_lambda", {
    //   description: "dispatcher_lambda",
    //   value: dispatcherLambda.functionArn
    // })    
    // new CfnOutput(this, "worker_lambda", {
    //   description: "worker_lambda",
    //   value: workerLambda.functionArn
    // })
    new CfnOutput(this, "cognito_trigger_lambda", {
      description: "cognito_trigger_lambda",
      value: cognitoTriggerLambda.functionArn
    }) 
    // new CfnOutput(this, "dynamo_events_aggregation_lambda", {
    //   description: "dynamo_events_aggregation_lambda",
    //   value: dynamoEventsAggregationLambda.functionArn
    // })
  }
}
