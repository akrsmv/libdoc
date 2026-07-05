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

export class InctaBootstrapStack extends Stack {
  constructor(scope: App, id: string, props: CdkStackProps) {
    super(scope, id, props);

    const dynamoDbConstruct = new DynamoDBConstruct(this, 'DB', props)

    // eventBusConstruct
    //--------------------------------------------------
    const eventBusSNS = new sns.Topic(this, 'Bus')
    const dispatcherLambda = new nodejs.NodejsFunction(this, 'DispatchEventLambda', {
      runtime: lambda.Runtime.NODEJS_18_X,
      functionName: `lam-${props.envName}-${props.clientAppName}-dispatch-event`,
      entry: join(props.clientAppDirName, 'packages', 'test-system', 'src', 'lambda.dispatchAction.ts'),
      timeout: Duration.minutes(10),
      environment: {
        "LOGLEVEL": "DEBUG",
        'DB_NAME': dynamoDbConstruct.table.tableName
      }
    });
    dynamoDbConstruct.table.grantFullAccess(dispatcherLambda)
    //---------------------------------------------------

    // cognitoConstruct
    //-----------------------------------------------------
    const cognitoTriggerLambda = new nodejs.NodejsFunction(this, 'CognitoTriggerLambda', {
      runtime: lambda.Runtime.NODEJS_18_X,
      functionName: `lam-${props.envName}-${props.clientAppName}-cog-trigger`,
      entry: join(props.clientAppDirName, 'packages', 'test-system', 'src', 'lambda.cognitoTrigger.ts'),
      environment: {
        "LOGLEVEL": "DEBUG",
        'DB_NAME': dynamoDbConstruct.table.tableName,
        'AWS_ACCOUNT_NUMBER': String(process.env.AWS_ACCOUNT_NUMBER)
      }
    });
    dynamoDbConstruct.table.grantFullAccess(cognitoTriggerLambda)

    const userPool = new cognito.UserPool(this, `UserPool`, {
      userPoolName: `${props.clientAppName}UserPool`,
      autoVerify: { email: true },
      userVerification: {},
      removalPolicy: RemovalPolicy.DESTROY,
      signInAliases: {
        email: true
      },
      customAttributes: {
        "agents": {
          bind: () => ({
            dataType: "String",
            mutable: true
          })
        },
        "active_agent": {
          bind: () => ({
            dataType: "String",
            mutable: true
          })
        }
      },
      signInCaseSensitive: false,
      selfSignUpEnabled: true,
      lambdaTriggers: {
        // refer to lambda by hand crafted ARN to avoid circular dependency with the AppSync construct                
        // postConfirmation: Function.fromFunctionArn(scope, 'PostConfirmationCognitoTrigger', `arn:aws:lambda:${process.env.AWS_ACCOUNT_REGION}:${process.env.AWS_ACCOUNT_NUMBER}:function:lam-${props.envName}-${props.clientAppName}-cog-trigger`), 
        // postConfirmation: this.cognitoTrigger,

        // postAuthentication: cognitoLambdaTest

        // postAuthentication: Function.fromFunctionArn(scope, 'PostAuthCognitoTrigger', `arn:aws:lambda:${process.env.AWS_ACCOUNT_REGION}:${process.env.AWS_ACCOUNT_NUMBER}:function:lam-${props.envName}-${props.clientAppName}-cog-trigger`),  // for syncing user identities with db (before successful auth first time there is no cognito identity yet)

        preTokenGeneration: Function.fromFunctionArn(this, 'PreTokenCognitoTrigger', `arn:aws:lambda:${process.env.AWS_ACCOUNT_REGION}:${process.env.AWS_ACCOUNT_NUMBER}:function:lam-${props.envName}-${props.clientAppName}-cog-trigger`) // for syncing users with db
        // preTokenGeneration: cognitoTriggerLambda
      }
    })
    userPool.grant(cognitoTriggerLambda, "cognito-idp:AdminGetUser", "cognito-idp:AdminAddUserToGroup", "cognito-idp:GetGroup", "cognito-idp:CreateGroup")
    userPool.grant(dispatcherLambda, "cognito-idp:AdminAddUserToGroup", "cognito-idp:GetGroup", "cognito-idp:CreateGroup", "cognito-idp:AdminUpdateUserAttributes")

    const cfnUserPool = userPool.node.defaultChild as cognito.CfnUserPool;
    cfnUserPool.policies = {
      passwordPolicy: {
        minimumLength: 8,
        requireLowercase: false,
        requireNumbers: false,
        requireUppercase: false,
        requireSymbols: false
      }
    };
    const userPoolClient = new cognito.UserPoolClient(this, `UserPoolClient`, {
      generateSecret: false,
      userPool: userPool,
      userPoolClientName: `UserPoolClientName`,
      preventUserExistenceErrors: true,
      accessTokenValidity: Duration.days(1),
      refreshTokenValidity: Duration.days(1),
      idTokenValidity: Duration.days(1)
    });
    // L2 construct for identityPool is still in alpha: https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cognito-identitypool-alpha-readme.html
    const identityPool = new cognito.CfnIdentityPool(this, `IdentityPool`, {
      identityPoolName: `${props.clientAppName}IdentityPool`,
      allowUnauthenticatedIdentities: true,
      cognitoIdentityProviders: [{
        clientId: userPoolClient.userPoolClientId,
        providerName: userPool.userPoolProviderName,
        serverSideTokenCheck: true
      }]
    });
    // comment out because not using L2 constructs...
    // identityPool.grantFullAccess(this.cognitoTrigger)
    // and instead grant 'manually':
    const identityoolGetId = new iam.PolicyStatement({
      actions: ["cognito-identity:GetId", "cognito-identity:GetCredentialsForIdentity"],
      resources: ['*'], // Adjust the resource ARN if necessary
      // resources: [`arn:aws:cognito-identity:${process.env.AWS_ACCOUNT_REGION}:${process.env.AWS_ACCOUNT_NUMBER}:identitypool/${identityPool.ref}`], // Adjust the resource ARN if necessary
    });
    cognitoTriggerLambda.addToRolePolicy(identityoolGetId)

    const unauthenticatedRole = new iam.Role(this, `DefaultUnauthenticatedRole`, {
      assumedBy: new iam.FederatedPrincipal('cognito-identity.amazonaws.com', {
        "StringEquals": { "cognito-identity.amazonaws.com:aud": identityPool.ref },
        "ForAnyValue:StringLike": { "cognito-identity.amazonaws.com:amr": "unauthenticated" },
      }, "sts:AssumeRoleWithWebIdentity"),
    });
    //----------------
    // Graphql permissions given in appSync construct
    // TODO: wider permissions given for development. REMOVE THIS LATER
    unauthenticatedRole.addToPolicy(new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      actions: [
        // "mobileanalytics:PutEvents",
        "appsync:GraphQL"
      ],
      resources: ["*"],
    }));
    //------------
    unauthenticatedRole.grantAssumeRole(dispatcherLambda.role!)

    const authenticatedRole = new iam.Role(this, `DefaultAuthenticatedRole`, {
      assumedBy: new iam.FederatedPrincipal('cognito-identity.amazonaws.com', {
        "StringEquals": { "cognito-identity.amazonaws.com:aud": identityPool.ref },
        "ForAnyValue:StringLike": { "cognito-identity.amazonaws.com:amr": "authenticated" },
      }, "sts:AssumeRoleWithWebIdentity"),
    });
    authenticatedRole.addToPolicy(new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      actions: [
        "cognito-identity:*"
      ],
      resources: ["*"],
    }));
    authenticatedRole.addToPolicy(new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      actions: [
        "s3:PutObject",
        "s3:GetObject",
        "s3:GetObjectVersion"
      ],
      resources: [
        // TODO USE excerpted common constants as CONVENTION OVER CONFIGURATION on a higer level not in the constructs (see s3 construct)
        `arn:aws:s3:::s3-${props.envName}-${props.clientAppName.toLowerCase()}-operations${props.clientAppDomainName ? '.' + props.clientAppDomainName : ''}/*`,
        `arn:aws:s3:::s3-${props.envName}-${props.clientAppName.toLowerCase()}-resource${props.clientAppDomainName ? '.' + props.clientAppDomainName : ''}/*`
      ],
    }));
    authenticatedRole.addToPolicy(new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      actions: [
        "s3:ListBucket",
        "s3:GetBucketLocation"
      ],
      resources: [
        // TODO USE excerpted common constants as CONVENTION OVER CONFIGURATION on a higer level not in the constructs (see s3 construct)
        `arn:aws:s3:::s3-${props.envName}-${props.clientAppName.toLowerCase()}-operations${props.clientAppDomainName ? '.' + props.clientAppDomainName : ''}`,
        `arn:aws:s3:::s3-${props.envName}-${props.clientAppName.toLowerCase()}-resource${props.clientAppDomainName ? '.' + props.clientAppDomainName : ''}`
      ],
    }));

    // TODO probably with the modifications from here we can achieve CognitoUsers acting with different IAM roles based on their groups?
    const defaultPolicy = new cognito.CfnIdentityPoolRoleAttachment(this, `DefaultValidAttachment`, {
      identityPoolId: identityPool.ref,
      roles: {
        'unauthenticated': unauthenticatedRole.roleArn,
        'authenticated': authenticatedRole.roleArn
      }
    });



    // //#region add user pool groups
    // // TODO define roles for each group and test
    // const superuserRole = new iam.Role(this, `SuperUserRole`, {
    //   assumedBy: new iam.FederatedPrincipal('cognito-identity.amazonaws.com', {
    //     "StringEquals": { "cognito-identity.amazonaws.com:aud": identityPool.ref },
    //     "ForAnyValue:StringLike": { "cognito-identity.amazonaws.com:amr": "authenticated" },
    //   }, "sts:AssumeRoleWithWebIdentity"),
    // });
    // superuserRole.addToPolicy(new iam.PolicyStatement({
    //   effect: iam.Effect.ALLOW,
    //   actions: [
    //     "cognito-idp:AdminCreateUser"
    //   ],
    //   resources: [
    //     userPool.userPoolArn
    //   ],
    // }));
    // // TODO how to automatically change the "authentication role selection"
    // new cognito.CfnUserPoolGroup(this, `UsersGroup`, {
    //   userPoolId: userPool.userPoolId,
    //   groupName: 'user',
    // });
    // const superuserGroup = new cognito.CfnUserPoolGroup(this, `SuperUsersGroup`, {
    //   precedence: 0,
    //   userPoolId: userPool.userPoolId,
    //   groupName: 'superuser',
    //   roleArn: superuserRole.roleArn
    // });
    // new cognito.CfnUserPoolGroup(this, `AdminsGroup`, {
    //   userPoolId: userPool.userPoolId,
    //   groupName: 'admin',
    // });
    // //#endregion

    //#region
    // create initial superuser
    // The code below shows an example of how to instantiate this type.
    // The values are placeholders you should change.


    // // declare const clientMetadata: any;
    // const cfnUserPoolUser = new cognito.CfnUserPoolUser(this, 'UserPoolSuperUser', {
    //   userPoolId: userPool.userPoolId,
    //   username: props.cognitoInitialUser,

    //   // the properties below are optional
    //   // clientMetadata: clientMetadata,
    //   // desiredDeliveryMediums: ['desiredDeliveryMediums'],
    //   // forceAliasCreation: false,
    //   // messageAction: 'messageAction',
    //   // userAttributes: [{
    //   //     name: 'name',
    //   //     value: 'value'
    //   // }],
    //   // 
    //   // validationData: [{
    //   //     name: 'name',
    //   //     value: 'value',
    //   // }],
    // });

    // const cfnUserPoolUserToGroupAttachment = new cognito.CfnUserPoolUserToGroupAttachment(this, 'SuperUserGroupAttachement', {
    //   groupName: superuserGroup.groupName!,
    //   username: cfnUserPoolUser.username!,
    //   userPoolId: userPool.userPoolId,
    // });

    // cfnUserPoolUserToGroupAttachment.addDependency(superuserGroup)
    // cfnUserPoolUserToGroupAttachment.addDependency(cfnUserPoolUser)

    //#endregion
    //-----------------------------------------------------

    // const s3Construct = new S3Construct(this, `Buckets`, props)
    //-----------------------------------------------------
    // TODO excerpt common constants as CONVENTION OVER CONFIGURATION on a higer level not in the constructs
    const operationsBucketName = `s3-${props.envName}-${props.clientAppName.toLowerCase()}-operations${props.clientAppDomainName ? '.' + props.clientAppDomainName : ''}`
    const resourceBucketName = `s3-${props.envName}-${props.clientAppName.toLowerCase()}-resource${props.clientAppDomainName ? '.' + props.clientAppDomainName : ''}`

    const awsExistingBuckets = require('child_process').execSync(`aws s3 ls --profile ${props.awsProfile}`).toString();

    const operationsBucketExists = awsExistingBuckets.indexOf(operationsBucketName) > -1
    const resourceBucketExists = awsExistingBuckets.indexOf(resourceBucketName) > -1

    const operationsBucket =
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

    const resourceBucket =
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

    // Define the resource policy for the S3 bucket
    const resourcePolicy = new s3.BucketPolicy(this, 's3OperationsPolicy', {
      bucket: operationsBucket,
    });

    // Add a policy statement with conditions to the resource policy
    const statement = new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      actions: ['s3:PutObject'],
      principals: [new iam.ServicePrincipal('ses.amazonaws.com')],
      resources: [`${operationsBucket.bucketArn}/*`],
      conditions: {
        StringEquals: {
          'AWS:SourceAccount': process.env.AWS_ACCOUNT_NUMBER,
        },
        StringLike: {
          'AWS:SourceArn': 'arn:aws:ses:*',
        },
      }
    })

    resourcePolicy.document.addStatements(statement);
    //-----------------------------------------------------

    dispatcherLambda.addEnvironment("USERPOOLID", userPool.userPoolId)

    // superuserRole.assumeRolePolicy!.addStatements(new iam.PolicyStatement({
    //   actions: ['sts:AssumeRole'],
    //   effect: iam.Effect.ALLOW,
    //   principals: [new iam.ArnPrincipal(dispatcherLambda.role!.roleArn)],//new iam.ServicePrincipal('lambda.amazonaws.com')
    // }))

    //new WorkerConstruct(
    // ----------------------
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
    // functionInputQueue.node.addDependency(functionInputDeadletterQueue)
    // add a for future use subscription (i.e async commands)
    eventBusSNS.addSubscription(new sns_subscriptions.SqsSubscription(functionInputQueue, {
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
    // functionInboundMailQueue.node.addDependency(functionInboundMailDeadletterQueue)
    const subscriptionMail = new sns.CfnSubscription(this, 'InboundMailSubscription1', {
      topicArn: eventBusSNS.topicArn,
      protocol: sns.SubscriptionProtocol.SQS,
      endpoint: functionInboundMailQueue.queueArn,
      rawMessageDelivery: true,
      filterPolicyScope: 'MessageBody',
      filterPolicy: {
        "receipt": {
          "action": {
            "type": [
              "S3"
            ],
            "objectKeyPrefix": [
              "ses-action-ingesting/"
            ]
          }
        }
        // since using L1 object, pass the final json for the subscription filter and not below
        // notificationType: sns.SubscriptionFilter.stringFilter({
        //     allowlist: ['Received'],
        // }),
        // mail: sns.SubscriptionFilter.existsFilter()
      }
    });
    // since not using the L2 object, grant the sendMessage manually to sns principal:
    // Define the resource policy for the S3 bucket
    const resourcePolicyInboundMailQueue = new sqs.QueuePolicy(this, 'InboundMailQueuePolicy', {
      queues: [functionInboundMailQueue]
    });

    // Add a policy statement with conditions to the resource policy
    const statementInboundMailQueue = new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      actions: ['sqs:SendMessage'],
      principals: [new iam.ServicePrincipal('sns.amazonaws.com')],
      resources: [`${functionInboundMailQueue.queueArn}`],
      conditions: {
        ArnEquals: {
          'aws:SourceArn': eventBusSNS.topicArn
        }
      }
    })

    resourcePolicyInboundMailQueue.document.addStatements(statementInboundMailQueue);

    // props.eventBus.addSubscription(subscriptionMail)
    // <----------------------------------

    const workerLambda = new nodejs.NodejsFunction(this, 'Lambda', {
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
        'DB_NAME': dynamoDbConstruct.table.tableName,
        // 'QUEUE_URL': functionInputQueue.queueUrl,
        'EVENT_BUS_TOPIC_ARN': eventBusSNS.topicArn,
        'OPERATIONS_BUCKET': operationsBucket.bucketName
      },
      events: [
        new lambda_event_sources.SqsEventSource(functionInputQueue,
          {
            // TODO swith settings: comment for dev for faster dev (not to wait 5 minutes), uncomment for production for cheaper cost
            // batchSize: 100,//props.workerConfig.eventSourceBatchSize || 1
            // maxBatchingWindow: Duration.minutes(5),

            reportBatchItemFailures: true
          }),
        new lambda_event_sources.SqsEventSource(functionInboundMailQueue,
          {
            // TODO swith settings: comment for dev for faster dev (not to wait 5 minutes), uncomment for production for cheaper cost
            // batchSize: 100,//props.workerConfig.eventSourceBatchSize || 1
            // maxBatchingWindow: Duration.minutes(5),

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
    operationsBucket.grantReadWrite(workerLambda)

    eventBusSNS.grantPublish(workerLambda)

    dynamoDbConstruct.table.grantFullAccess(workerLambda)
    // Grant the necessary SES permissions to the Lambda function
    const sesEmailPolicy = new iam.PolicyStatement({
      actions: ['ses:SendEmail', 'ses:SendRawEmail'],
      resources: ['*'], // Adjust the resource ARN if necessary
    });

    workerLambda.addToRolePolicy(sesEmailPolicy);
    // ----------------------

    //-----------------------
    // new DynamoEventsConstruct(this, 'DBStreams', { ...props, ...eventBusConstruct, ...dynamoDbConstruct })
    const dynamoEventsAggregationLambda = new nodejs.NodejsFunction(this, 'Aggregation', {
      runtime: lambda.Runtime.NODEJS_18_X,
      functionName: `lam-${props.envName}-${props.clientAppName}-ddb-events`,
      entry: join(props.clientAppDirName, 'packages', 'test-system', 'src', 'lambda.dbStreams.ts'),

      memorySize: 256,
      timeout: Duration.minutes(10),

      retryAttempts: 2,
      reservedConcurrentExecutions: 1,
      environment: {
          "LOGLEVEL": "DEBUG",
          'DB_NAME': dynamoDbConstruct.table.tableName
      }
  })

  dynamoDbConstruct.table.grantFullAccess(dynamoEventsAggregationLambda)


  const dlq = new sqs.Queue(this, `DDBEVENTSDEADLETTER`, {
      queueName: `sqs-${props.envName}-${props.clientAppName}-ddb-events-DEADLETTER`
  })
  dlq.grantSendMessages(dynamoEventsAggregationLambda)

  dynamoEventsAggregationLambda.addEventSource(new lambda_event_sources.DynamoEventSource(dynamoDbConstruct.table, {
      startingPosition: lambda.StartingPosition.LATEST,
      batchSize: 1000,
      bisectBatchOnError: true,
      parallelizationFactor: 10,
      maxBatchingWindow: Duration.minutes(5),
      onFailure: {
          bind: (iEventSourceMapping: any, lambda: any) => { return { destination: dlq.queueArn } }
      }
  }))

      eventBusSNS.grantPublish(dynamoEventsAggregationLambda)
      dynamoEventsAggregationLambda.addEnvironment('EVENT_BUS_TOPIC_ARN', eventBusSNS.topicArn)
    //-----------------------

    // const appSyncConstruct = new AppSyncConstruct(this, `AppSync`, {
    //   ...props,
    //   ...cognitoConstruct,
    //   lambdaDs: eventBusConstruct.controller
    // })

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

    // new CfnOutput(this, "aws_project_region", {
    //   description: "aws_project_region",
    //   value: this.region
    // })
    // new CfnOutput(this, "aws_cognito_identity_pool_id", {
    //   description: "aws_cognito_identity_pool_id",
    //   value: cognitoConstruct.identityPool.ref
    // })
    // new CfnOutput(this, "aws_user_pools_id", {
    //   description: "aws_user_pools_id",
    //   value: cognitoConstruct.userPool.userPoolId
    // })
    // new CfnOutput(this, "aws_user_pools_web_client_id", {
    //   description: "aws_user_pools_web_client_id",
    //   value: cognitoConstruct.webClient.userPoolClientId
    // })
    // new CfnOutput(this, "aws_appsync_graphqlEndpoint", {
    //   description: "aws_appsync_graphqlEndpoint",
    //   value: appSyncConstruct.graphQLApi.graphqlUrl
    // })
    // new CfnOutput(this, "aws_appsync_api_id", {
    //   description: "aws_appsync_api_id",
    //   value: appSyncConstruct.graphQLApi.apiId
    // })
    // new CfnOutput(this, "aws_s3_bucket_operations", {
    //   description: "aws_s3_bucket_operations",
    //   value: s3Construct && s3Construct.operationsBucket && s3Construct.operationsBucket.bucketName
    // })
    // new CfnOutput(this, "aws_s3_bucket_resources", {
    //   description: "aws_s3_bucket_resources",
    //   value: s3Construct && s3Construct.operationsBucket && s3Construct.resourceBucket.bucketName
    // })
  }
}
