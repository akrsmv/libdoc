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
  SymlinkFollowMode, DockerImage, BundlingOutput
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
// import { CognitoConstruct } from './constructs/cognitoConstruct';
// import { EventBusConstruct } from './constructs/eventBusConstruct';
// import { AppSyncConstruct } from './constructs/appSyncConstruct';
// import { AppSyncLocalDatasourceConstruct } from './constructs/AppSyncLocalDatasourceConstruct';
// import { AartsResolver, AppSyncLambdaDataSourceConstruct } from './constructs/appSyncLambdaDataSourceConstruct';
// import { WorkerConstruct } from './constructs/workerConstruct';
// import { DynamoEventsConstruct } from './constructs/dynamoEventsConstruct';
// import { S3Construct } from './constructs/s3Construct';


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

export class CdkStack extends Stack {
  constructor(scope: App, id: string, props: CdkStackProps) {
    super(scope, id, props);

    const dynamoDbConstruct = new DynamoDBConstruct(this, 'DB', props)
    const eventBusConstruct = new EventBusConstruct(this, `Events`, { ...props, ...dynamoDbConstruct })
    const cognitoConstruct = new CognitoConstruct(this, `Auth`, { ...props, eventBusConstruct, dynamoDbConstruct })
    const s3Construct = new S3Construct(this, `Buckets`, props)

    eventBusConstruct.controller.addEnvironment("USERPOOLID", cognitoConstruct.userPool.userPoolId)

    cognitoConstruct.superUserRole.assumeRolePolicy!.addStatements(new iam.PolicyStatement({
      actions: ['sts:AssumeRole'],
      effect: iam.Effect.ALLOW,
      principals: [new iam.ArnPrincipal(eventBusConstruct.controller.role!.roleArn)],//new iam.ServicePrincipal('lambda.amazonaws.com')
    }))

    // ----------------------
    new WorkerConstruct(this, 'Worker', {
      ...props,
      ...dynamoDbConstruct,
      ...eventBusConstruct,
      ...s3Construct
    })
    // ----------------------

    //-----------------------
    new DynamoEventsConstruct(this, 'DBStreams', { ...props, ...eventBusConstruct, ...dynamoDbConstruct })
    //-----------------------

    const appSyncConstruct = new AppSyncConstruct(this, `AppSync`, {
      ...props,
      ...cognitoConstruct,
      lambdaDs: eventBusConstruct.controller
    })

    // const appSyncLambdaDatasourceConstruct = new AppSyncLambdaDataSourceConstruct(this, "Mutation", {
    //   lambdaFunction: eventBusConstruct.controller,
    //   appSyncConstruct: appSyncConstruct,
    //   mutateResolvers: new Set<AartsResolver>([
    //     { fieldName: 'start', payloadSubstitues: { jobType: "long" } },
    //     // { fieldName: 'stop', payloadSubstitues: { jobType: "long" } },
    //     { fieldName: 'create' },
    //     { fieldName: 'update' },
    //     { fieldName: 'delete' },
    //   ]),
    //   queryResolvers: new Set<AartsResolver>(
    //     Object.keys({...props.dataModelJson.Items, ...props.dataModelJson.Queries, ...props.dataModelJson.Commands}).reduce<AartsResolver[]>((resolversArray, itemName) => {
    //       // WE DONT WANT 2xN RESOLVERS WHERE N is number of entities. Dont want to depend on that 
    //       // resolversArray.push({ fieldName: `get${itemName}`, payloadSubstitues: { action: 'get', jobType: "short", __typename: itemName } })
    //       // resolversArray.push({ fieldName: `list${itemName}`, payloadSubstitues: { action: 'query', jobType: "short", __typename: itemName } })
    //       return resolversArray
    //     }, [
    //       // static 'admin queries', independant of model - > WE ONLY WANT SUCH, INDEPENDANT OF MODEL
    //       { fieldName: 'get' },
    //       { fieldName: 'query' },
    //       // { fieldName: `getMetadata` },
    //       // { fieldName: 'customQuery', payloadSubstitues: { action: 'query' } }
    //     ]))
    // })

    //   const appSyncLocalDatasourceConstruct = new AppSyncLocalDatasourceConstruct(this, "Local", {
    //     eventBusConstruct,
    //     appSyncConstruct,
    //     nodeModulesLayer,
    //     feederConfig: aartsConfig.Lambda.Feeder
    //   })

    //   const dynamoEventsConstruct = new DynamoEventsConstruct(this, `${props.clientAppName}DynamoEvents`, {
    //     eventBusConstruct, dynamoDbConstruct, nodeModulesLayer,
    //     aggregationFunctionConfig: aartsConfig.Lambda.DynamoStreamsProcessors.Aggregation,
    //     callbackFunctionConfig: aartsConfig.Lambda.DynamoStreamsProcessors.ItemCallbacks
    //   })

    //   for (const worker of aartsConfig.Lambda.Workers) {
    //     const workerFunction = new WorkerConstruct(this, `${props.clientAppName}Worker${worker.name}`, {
    //       workerName: `${props.clientAppName}Worker${worker.name}`,
    //       workerConfig: worker,
    //       functionHandler: "__bootstrap/index.worker",
    //       functionImplementationPath: join(props.clientAppDirName, "dist", "src"),
    //       functionRuntime: Runtime.NODEJS_18_X,
    //       eventBusConstruct: eventBusConstruct,
    //       dynamoDbConstruct: dynamoDbConstruct,
    //       eventSource: `worker:input:${worker.name.toLowerCase()}`,
    //       layers: [
    //         nodeModulesLayer
    //       ],
    //     });
    //     eventBusConstruct.controller.addEnvironment(`WORKER_${worker.name.toUpperCase()}`, workerFunction.function.functionName)
    //     if (!!this.node.tryGetContext("debug-mode")) {
    //       workerFunction.function.addEnvironment("DEBUGGER", "1")
    //     }
    //     //@ts-ignore
    //     if (aartsConfig.AsyncPROC) {
    //       workerFunction.function.addEnvironment(ENV_VARS__ASYNC_PROC, "1")
    //     }
    //   }

    //   if (!!this.node.tryGetContext("debug-mode")) {
    //     eventBusConstruct.controller.addEnvironment("DEBUGGER", "1")
    //     eventBusConstruct.cognitoTrigger.addEnvironment("DEBUGGER", "1")
    //     dynamoEventsConstruct.dynamoEventsAggregation.addEnvironment("DEBUGGER", "1")
    //     dynamoEventsConstruct.dynamoEventsCallback.addEnvironment("DEBUGGER", "1")
    //     appSyncLocalDatasourceConstruct.notifierFunctionConstruct.function.addEnvironment("DEBUGGER", "1")
    //   }

    new CfnOutput(this, "aws_project_region", {
      description: "aws_project_region",
      value: this.region
    })
    new CfnOutput(this, "aws_cognito_identity_pool_id", {
      description: "aws_cognito_identity_pool_id",
      value: cognitoConstruct.identityPool.ref
    })
    new CfnOutput(this, "aws_user_pools_id", {
      description: "aws_user_pools_id",
      value: cognitoConstruct.userPool.userPoolId
    })
    new CfnOutput(this, "aws_user_pools_web_client_id", {
      description: "aws_user_pools_web_client_id",
      value: cognitoConstruct.webClient.userPoolClientId
    })
    new CfnOutput(this, "aws_appsync_graphqlEndpoint", {
      description: "aws_appsync_graphqlEndpoint",
      value: appSyncConstruct.graphQLApi.graphqlUrl
    })
    new CfnOutput(this, "aws_appsync_api_id", {
      description: "aws_appsync_api_id",
      value: appSyncConstruct.graphQLApi.apiId
    })
    new CfnOutput(this, "aws_s3_bucket_operations", {
      description: "aws_s3_bucket_operations",
      value: s3Construct && s3Construct.operationsBucket && s3Construct.operationsBucket.bucketName
    })
    new CfnOutput(this, "aws_s3_bucket_resources", {
      description: "aws_s3_bucket_resources",
      value: s3Construct && s3Construct.operationsBucket && s3Construct.resourceBucket.bucketName
    })
  }
}
