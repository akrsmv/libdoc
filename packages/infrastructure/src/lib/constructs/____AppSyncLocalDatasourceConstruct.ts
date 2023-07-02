
// import {
//     aws_appsync as appsync
// } from 'aws-cdk-lib';
// import { Construct } from 'constructs';
// import { AppSyncConstruct } from './appSyncConstruct';
// import { CdkStackProps } from '../cdk-stack';

// export class AppSyncLocalDatasourceConstruct extends Construct {

//     constructor(scope: Construct, id: string, props: CdkStackProps & AppSyncConstruct) {
//         super(scope, id)

//         //#region LOCAL DATASOURCE
//         const locaNoneDS = new appsync.NoneDataSource(this, `None`, {
//             api: props.graphQLApi,
//             name: 'Loopback',
//             description: 'loopback datasource',
//         });
//     }
// }
