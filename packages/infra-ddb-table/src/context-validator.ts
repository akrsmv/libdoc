import * as cdk from 'aws-cdk-lib';
import { IDynamoDBStackProps } from './interfaces/IDynamoDBStackProps';

export const validateContext = ((app: cdk.App) : IDynamoDBStackProps => {
  const tableName = app.node.tryGetContext("tableName")
  const tableModelJsonPath = app.node.tryGetContext("tableModelJsonPath")
  const tableConfigJsonPath = app.node.tryGetContext("tableConfigJsonPath")

  const errors = []
  if (!tableName) {
    errors.push("ERROR: missing tableName context param")
  }
  if (!tableModelJsonPath) {
    errors.push("ERROR: missing tableModelJsonPath context param")
  }
  if (!tableConfigJsonPath) {
    errors.push("ERROR: missing tableConfigJsonPath context param")
  }

  if (errors.length) {
    errors.forEach(e => console.error(e))
    console.error("EXAMPLE: \n" +
      "cdk deploy -c tableName=my-table-name -c tableConfigJsonPath=<path-to-config-json> -c tableModelJsonPath=<path-to-model-json>")
    process.exit(1)
  }

  return {
    tableName,
    tableModelJsonPath,
    tableConfigJsonPath
  }
})
