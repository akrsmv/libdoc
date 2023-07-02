import * as cdk from 'aws-cdk-lib';
import { ITableModel } from '../lib/interfaces/ITableModel';
import { ITableCofig } from '../lib/interfaces/ITableConfig';
import { CdkStackProps } from '../lib/cdk-stack';
import { JSONDataModel } from '@incta/ddb-model';

export const validateContext = ((app: cdk.App): CdkStackProps => {
  const tableName = app.node.tryGetContext("tableName")
  const tableModelJsonPath = app.node.tryGetContext("tableModelJsonPath")
  const tableConfigJsonPath = app.node.tryGetContext("tableConfigJsonPath")
  const dataModelJsonPath = app.node.tryGetContext("dataModelJsonPath")

  const errors = []
  if (!tableName) {
    errors.push("ERROR: missing tableName context param")
  }
  if (!tableModelJsonPath) {
    errors.push("ERROR: missing tableModelJsonPath context param")
    // TODO more validations on table model json
  }
  // tableConfigJsonPath made optional
  // if (!tableConfigJsonPath) {
  //   errors.push("ERROR: missing tableConfigJsonPath context param")
  //   // TODO more validations on table model json
  // }

  if (errors.length) {
    errors.forEach(e => console.error(e))
    console.error("EXAMPLE: \n" +
      "cdk deploy -c tableName=my-table-name -c tableConfigJsonPath=<path-to-config-json> -c tableModelJsonPath=<path-to-model-json>")
    process.exit(1)
  }

  const tableModelJson = require(tableModelJsonPath) as ITableModel,
    tableConfigJson = tableConfigJsonPath && require(tableConfigJsonPath) as ITableCofig,
    dataModelJson = dataModelJsonPath && require(dataModelJsonPath) as JSONDataModel,
    infraRootPath = app.node.tryGetContext("infraRootPath"),
    clientAppName = app.node.tryGetContext("clientAppName"),
    clientAppDirName = app.node.tryGetContext("clientAppDirName"),
    awsProfile = app.node.tryGetContext("awsProfile"),
    clientAppDomainName = app.node.tryGetContext("clientAppDomainName"),
    cognitoInitialUser = app.node.tryGetContext("cognitoInitialUser")

  return {
    envName: process.env.CDK_ENV ?? "dev",
    tableName,
    tableModelJson,
    tableConfigJson,
    dataModelJson,
    infraRootPath,
    clientAppName,
    clientAppDirName,
    awsProfile,
    clientAppDomainName,
    cognitoInitialUser
  }
})
