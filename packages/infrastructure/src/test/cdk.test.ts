// import { describe, jest, expect, test, beforeEach, afterEach } from '@jest/globals';
// import * as cdk from 'aws-cdk-lib';
// import { Template, Match } from 'aws-cdk-lib/assertions';
// import * as Cdk from '../lib/cdk-stack';

// // test('SQS Queue and SNS Topic Created', () => {
// //   const app = new cdk.App();
// //   // WHEN
// //   const stack = new Cdk.CdkStack(app, 'MyTestStack');
// //   // THEN

// //   const template = Template.fromStack(stack);

// //   template.hasResourceProperties('AWS::SQS::Queue', {
// //     VisibilityTimeout: 300
// //   });
// //   template.resourceCountIs('AWS::SNS::Topic', 1);
// // });

// test('Dynamo Table created', () => {
//     const app = new cdk.App();
//     // WHEN
//     const stack = new Cdk.CdkStack(app, 'MyTestStack',
//         {
//             clientAppDomainName: 'serverlessdesign.cloud',
//             awsProfile: 'akrsmv',
//             clientAppDirName: '../../',
//             clientAppName: 'TEST',
//             cognitoInitialUser: 'akrsmv@gmail.com',
//             tableName: 'TEST',
//             dataModelJson: {
//                 Items: {},
//                 Commands: {},
//                 Queries: {},
//                 GlobalSecondaryIndexes: [],
//                 meta: {},
//                 version: 1

//             },
//             envName: 'testEnv',
//             infraRootPath: '',
//             tableConfigJson: {
//                 Mode: 'PAY_PER_REQUEST',
//                 ProvisionedCapacity: { RCU: 1, WCU: 1 },
//                 RemovalPolicy: 'RETAIN'
//             },
//             tableModelJson: {
//                 AttributeDefinitions:[

//                 ],
//                 BillingMode:'PAY_PER_REQUEST',
//                 GlobalSecondaryIndexes:[],
//                 KeySchema: [],
//                 TableName: 'TEST_TABLE'
//             }
//         });
//     // THEN

//     const template = Template.fromStack(stack);

//     template.hasResourceProperties('AWS::SQS::Table', {
//     });
//     // template.resourceCountIs('AWS::SNS::Table', 1);
// });
