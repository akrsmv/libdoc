import {
    Duration,
    aws_lambda_nodejs as nodejs,
    aws_lambda as lambda,
    aws_sqs as sqs,
    aws_sns as sns,
    aws_sns_subscriptions as sns_subscriptions,
    aws_iam as iam
} from 'aws-cdk-lib';
import { Construct } from 'constructs';

import { CdkStackProps } from '../cdk-stack';
import { join } from 'path';
import { DynamoDBConstruct } from './dynamoDbConstruct';

export class EventBusConstruct extends Construct {

    public readonly eventBus: sns.Topic
    public readonly controller: lambda.Function

    constructor(scope: Construct, id: string, props: CdkStackProps & DynamoDBConstruct) {
        super(scope, id);
        this.eventBus = new sns.Topic(this, 'Bus')
        this.controller = new nodejs.NodejsFunction(this, 'DispatchEventLambda', {
            runtime: lambda.Runtime.NODEJS_18_X,
            functionName: `lam-${props.envName}-${props.clientAppName}-dispatch-event`,
            entry: join(props.clientAppDirName, 'packages', 'test-system', 'src', 'lambda.dispatchAction.ts'),
            timeout: Duration.minutes(10),
            environment: {
                "LOGLEVEL": "DEBUG",
                'DB_NAME': props.table.tableName
            }
        });
        this.controller.node.addDependency(props.table)
        props.table.grantFullAccess(this.controller)



        // this.cognitoTrigger.addToRolePolicy(new iam.PolicyStatement({
        //     effect: iam.Effect.ALLOW,
        //     actions: [
        //         "cognito-identity:Describe*",
        //         "cognito-identity:Get*",
        //         "cognito-identity:List*",
        //         "cognito-idp:Describe*",
        //         "cognito-idp:AdminGetDevice",
        //         "cognito-idp:AdminGetUser",
        //         "cognito-idp:AdminList*",
        //         "cognito-idp:List*",
        //         "cognito-sync:Describe*",
        //         "cognito-sync:Get*",
        //         "cognito-sync:List*",
        //         "iam:ListOpenIdConnectProviders",
        //         "iam:ListRoles",
        //         "sns:ListPlatformApplications",
        //         "cognito-idp:ForgotPassword",
        //         "cognito-idp:UpdateAuthEventFeedback",
        //         "cognito-idp:UpdateResourceServer",
        //         "cognito-idp:UpdateUserPoolClient",
        //         "cognito-idp:AdminUpdateUserAttributes",
        //         "cognito-idp:UpdateUserAttributes",
        //         "cognito-idp:UpdateUserPoolDomain",
        //         "cognito-idp:UpdateIdentityProvider",
        //         "cognito-idp:UpdateGroup",
        //         "cognito-idp:AdminUpdateAuthEventFeedback",
        //         "cognito-idp:UpdateDeviceStatus",
        //         "cognito-idp:UpdateUserPool",

        //         "cognito-idp:AdminAddUserToGroup",
        //         "cognito-idp:GetGroup",
        //         "cognito-idp:CreateGroup"
        //     ],
        //     resources: ["*"],
        // }));
        addDebugQueuesIfInMode(this)
    }

    // grantAccess(lambdaFunction: lambda.Function) {
    //     this.eventBus.grantPublish(lambdaFunction)
    //     lambdaFunction.addEnvironment('EVENT_BUS_TOPIC_ARN', this.eventBus.topicArn)
    // }

}
function addDebugQueuesIfInMode(self: EventBusConstruct) {
    if (!!self.node.tryGetContext("debug-mode")) {
        // TODO reflect AartsConfig and add test queue for each worker, if in debug mode

        //#region test queues consuming all the messages
        var debugAllInputQueue = new sqs.Queue(self, "DEBUG_SNS_INPUT", {
            queueName: `sqs-dev-DEBUG-ALL`,
            retentionPeriod: Duration.hours(12)
        });
        self.eventBus.addSubscription(new sns_subscriptions.SqsSubscription(debugAllInputQueue, {
            rawMessageDelivery: true,
            // filterPolicy: {
            //     eventSource: {
            //         conditions: [
            //             { prefix: "input" }
            //         ]
            //     }
            // }
        }));

        var debugAllOutputQueue = new sqs.Queue(self, "DEBUG_OUTPUT", {
            queueName: `sqs-dev-DEBUG-OUTPUT`,
            retentionPeriod: Duration.hours(12)
        });
        self.eventBus.addSubscription(new sns_subscriptions.SqsSubscription(debugAllOutputQueue, {
            rawMessageDelivery: true,
            filterPolicy: {
                eventSource: {
                    conditions: [
                        { prefix: "output" }
                    ]
                }
            }
        }));
        //#endregion
    }
}