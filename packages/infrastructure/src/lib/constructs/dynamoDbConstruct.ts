
import {
  RemovalPolicy,
  aws_dynamodb as dynamodb,
  aws_lambda as lambda
} from 'aws-cdk-lib';

import { ITableModel } from '../interfaces/ITableModel'
import { Construct } from 'constructs';
import { CdkStackProps } from '../cdk-stack';
import { Table } from 'aws-cdk-lib/aws-dynamodb';
import { DynamoEventsConstruct } from './dynamoEventsConstruct';

export class DynamoDBConstruct extends Construct {

  public readonly table: dynamodb.ITable;

  constructor(scope: Construct, id: string, props: CdkStackProps) {
    super(scope, id);

    const importTable = (tableArn: string) => {
      return Table.fromTableArn(this, props.tableName, tableArn)
    }

    const createTable = (tableModel: ITableModel) => {
      const table = new dynamodb.Table(this, props.tableName, {
        tableName: props.tableName,
        partitionKey: { name: "HASH", type: dynamodb.AttributeType.STRING },
        sortKey: { name: "RANGE", type: dynamodb.AttributeType.STRING },

        billingMode: dynamodb.BillingMode[props.tableConfigJson?.Mode || "PAY_PER_REQUEST"],
        readCapacity: props.tableConfigJson?.ProvisionedCapacity?.RCU || undefined,
        writeCapacity: props.tableConfigJson?.ProvisionedCapacity?.WCU || undefined,

        stream: dynamodb.StreamViewType.NEW_AND_OLD_IMAGES,
        removalPolicy: props.envName === "dev" ? RemovalPolicy.DESTROY : RemovalPolicy[props.tableConfigJson?.RemovalPolicy || RemovalPolicy.RETAIN]
      })

      for (const gsi of tableModel.GlobalSecondaryIndexes) {
        const hashName = gsi.KeySchema[0].AttributeName
        const hashType = tableModel.AttributeDefinitions.filter(attr => attr.AttributeName === hashName)[0].AttributeType === "S" ? dynamodb.AttributeType.STRING : dynamodb.AttributeType.NUMBER
        const rangeName = gsi.KeySchema[1] ? gsi.KeySchema[1].AttributeName : undefined
        let rangeType
        if (!!rangeName) {
          rangeType = tableModel.AttributeDefinitions.filter(attr => attr.AttributeName === rangeName)[0].AttributeType === "S" ? dynamodb.AttributeType.STRING : dynamodb.AttributeType.NUMBER
        }

        const gsiDef = {
          indexName: gsi.IndexName,
          sortKey: undefined, //defined below
          partitionKey: { name: hashName, type: hashType },
          projectionType: gsi.Projection.ProjectionType as dynamodb.ProjectionType,
          nonKeyAttributes: gsi.Projection.NonKeyAttributes
        }
        if (!!rangeName && !!rangeType) {
          //@ts-ignore
          gsiDef.sortKey = { name: rangeName, type: rangeType }
        }

        table.addGlobalSecondaryIndex(gsiDef)
      }

      return table;
    }
    const exisingTableArn: string | undefined = this.node.tryGetContext("exisingTableArn")
    if (props.envName !== "dev" && exisingTableArn) { // in dev do not consider exisingTableArn and always destroy/create table
      this.table = importTable(exisingTableArn)
    } else {
      this.table = createTable(props.tableModelJson)
    }
  }
}