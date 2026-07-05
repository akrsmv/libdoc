import * as cdk from 'aws-cdk-lib';
import { ITableModel } from '../lib/interfaces/ITableModel';
import { ITableCofig } from '../lib/interfaces/ITableConfig';
import { CdkStackProps } from '../lib/cdk-stack';
import { JSONDataModel, tryGetProcessParam } from '@incta/ddb-model';

export const validateContext = ((app: cdk.App): CdkStackProps => {
  
  const tableName = tryGetProcessParam("tableName")
    || app.node.tryGetContext("tableName")
  const tableModelJsonPath = tryGetProcessParam("tableModelJsonPath")
    || app.node.tryGetContext("tableModelJsonPath")
  const tableConfigJsonPath = tryGetProcessParam("tableConfigJsonPath")
    || app.node.tryGetContext("tableConfigJsonPath")
  const dataModelJsonPath = tryGetProcessParam("dataModelJsonPath")
    || app.node.tryGetContext("dataModelJsonPath")

  const errors = []
  if (!tableName) {
    errors.push("ERROR: missing tableName context param")
  }
  if (!tableModelJsonPath) {
    errors.push("ERROR: missing tableModelJsonPath context param")
  }

  if (errors.length) {
    errors.forEach(e => console.error(e))
    console.error("EXAMPLE: \n" +
      "cdk deploy -c tableName=my-table-name -c dataModelJsonPath=<path-to-data-model-json> -c tableModelJsonPath=<path-to-aws-table-definition.json>")
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
