import { StackProps } from "aws-cdk-lib"

export interface IDynamoDBStackProps extends StackProps {
  tableName: string,
  tableModelJsonPath: string,
  tableConfigJsonPath: string
}