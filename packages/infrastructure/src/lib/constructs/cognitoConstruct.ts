import { aws_cognito as cognito, RemovalPolicy, aws_lambda as lambda, aws_lambda_nodejs as nodejs, Duration } from 'aws-cdk-lib';
import { aws_iam as iam } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CdkStackProps } from '../cdk-stack';
import { EventBusConstruct } from './eventBusConstruct';
import { DynamoDBConstruct } from './dynamoDbConstruct';
import { join } from 'path';

// based on https://stackoverflow.com/questions/55784746/how-to-create-cognito-identitypool-with-cognito-userpool-as-one-of-the-authentic
export class CognitoConstruct extends Construct {

    public readonly userPool: cognito.IUserPool;
    public readonly identityPool: cognito.CfnIdentityPool
    public readonly webClient: cognito.UserPoolClient
    public readonly unauthenticatedRole: iam.Role
    public readonly authenticatedRole: iam.Role
    public readonly superUserRole: iam.Role
    public readonly cognitoTrigger: lambda.Function


    constructor(scope: Construct, id: string, props: CdkStackProps & { eventBusConstruct: EventBusConstruct } & { dynamoDbConstruct: DynamoDBConstruct }) {
        super(scope, id);
        this.cognitoTrigger = new nodejs.NodejsFunction(this, 'CognitoTriggerLambda', {
            runtime: lambda.Runtime.NODEJS_18_X,
            functionName: `lam-${props.envName}-${props.clientAppName}-cog-trigger`,
            entry: join(props.clientAppDirName, 'packages', 'test-system', 'src', 'lambda.cognitoTrigger.ts'),
            environment: {
                "LOGLEVEL": "DEBUG",
                'DB_NAME': props.dynamoDbConstruct.table.tableName
            }
        });
        this.cognitoTrigger.node.addDependency(props.dynamoDbConstruct.table)
        props.dynamoDbConstruct.table.grantFullAccess(this.cognitoTrigger)

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
                postConfirmation: this.cognitoTrigger,


                // postAuthentication: cognitoLambdaTest

                postAuthentication: this.cognitoTrigger,  // for syncing users with db
                // preTokenGeneration: this.cognitoTrigger // for syncing users with db
            }
        })

        // userPool.grant(props.eventBusConstruct.cognitoTrigger, "cognito-idp:AdminAddUserToGroup" ,"cognito-idp:GetGroup", "cognito-idp:CreateGroup")
        userPool.grant(props.eventBusConstruct.controller, "cognito-idp:AdminAddUserToGroup", "cognito-idp:GetGroup", "cognito-idp:CreateGroup", "cognito-idp:AdminUpdateUserAttributes")

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
        const identityPool = new cognito.CfnIdentityPool(this, `IdentityPool`, {
            identityPoolName: `${props.clientAppName}IdentityPool`,
            allowUnauthenticatedIdentities: true,
            cognitoIdentityProviders: [{
                clientId: userPoolClient.userPoolClientId,
                providerName: userPool.userPoolProviderName,
                serverSideTokenCheck: true
            }]
        });
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
        unauthenticatedRole.grantAssumeRole(props.eventBusConstruct.controller.role!)

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

        

        //#region add user pool groups
        // TODO define roles for each group and test
        const superuserRole = new iam.Role(this, `SuperUserRole`, {
            assumedBy: new iam.FederatedPrincipal('cognito-identity.amazonaws.com', {
                "StringEquals": { "cognito-identity.amazonaws.com:aud": identityPool.ref },
                "ForAnyValue:StringLike": { "cognito-identity.amazonaws.com:amr": "authenticated" },
            }, "sts:AssumeRoleWithWebIdentity"),
        });
        superuserRole.addToPolicy(new iam.PolicyStatement({
            effect: iam.Effect.ALLOW,
            actions: [
                "cognito-idp:AdminCreateUser"
            ],
            resources: [
                userPool.userPoolArn
            ],
        }));
        // TODO how to automatically change the "authentication role selection"
        new cognito.CfnUserPoolGroup(this, `UsersGroup`, {
            userPoolId: userPool.userPoolId,
            groupName: 'user',
        });
        const superuserGroup = new cognito.CfnUserPoolGroup(this, `SuperUsersGroup`, {
            precedence: 0,
            userPoolId: userPool.userPoolId,
            groupName: 'superuser',
            roleArn: superuserRole.roleArn
        });
        new cognito.CfnUserPoolGroup(this, `AdminsGroup`, {
            userPoolId: userPool.userPoolId,
            groupName: 'admin',
        });
        //#endregion



        //#region
        // create initial superuser
        // The code below shows an example of how to instantiate this type.
        // The values are placeholders you should change.


        // declare const clientMetadata: any;
        const cfnUserPoolUser = new cognito.CfnUserPoolUser(this, 'UserPoolSuperUser', {
            userPoolId: userPool.userPoolId,
            username: props.cognitoInitialUser,

            // the properties below are optional
            // clientMetadata: clientMetadata,
            // desiredDeliveryMediums: ['desiredDeliveryMediums'],
            // forceAliasCreation: false,
            // messageAction: 'messageAction',
            // userAttributes: [{
            //     name: 'name',
            //     value: 'value'
            // }],
            // 
            // validationData: [{
            //     name: 'name',
            //     value: 'value',
            // }],
        });

        const cfnUserPoolUserToGroupAttachment = new cognito.CfnUserPoolUserToGroupAttachment(this, 'SuperUserGroupAttachement', {
            groupName: superuserGroup.groupName!,
            username: cfnUserPoolUser.username!,
            userPoolId: userPool.userPoolId,
        });

        cfnUserPoolUserToGroupAttachment.addDependency(superuserGroup)
        cfnUserPoolUserToGroupAttachment.addDependency(cfnUserPoolUser)

        //#endregion

        this.userPool = userPool
        this.identityPool = identityPool
        this.unauthenticatedRole = unauthenticatedRole
        this.authenticatedRole = authenticatedRole
        this.superUserRole = superuserRole
        this.webClient = userPoolClient
    }
}