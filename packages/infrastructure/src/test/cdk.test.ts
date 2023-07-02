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
//   const app = new cdk.App();
//   // WHEN
//   const stack = new Cdk.CdkStack(app, 'MyTestStack',
//     {
//       clientAppDomainName: 'serverlessdesign.cloud',
//       awsProfile: 'akrsmv',
//       clientAppDirName: '../../',
//       clientAppName: 'TEST',
//       cognitoInitialUser: 'akrsmv@gmail.com',
//       tableConfigJsonPath: 'some-table-config-json-path',
//       tableModelJsonPath: 'som-table-model-json-path',
//       tableName: 'TEST'      
//     });
//   // THEN

//   const template = Template.fromStack(stack);

//   template.hasResourceProperties('AWS::SQS::Table', {
//   });
//   // template.resourceCountIs('AWS::SNS::Table', 1);
// });
