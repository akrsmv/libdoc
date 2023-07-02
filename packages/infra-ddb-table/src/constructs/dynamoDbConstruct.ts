
import {
  RemovalPolicy,
  aws_dynamodb as dynamodb
} from 'aws-cdk-lib';

import { ITableModel } from '../interfaces/ITableModel'
import { Construct } from 'constructs';
import { ITableCofig } from '../interfaces/ITableConfig';
import { IDynamoDBStackProps } from '../interfaces/IDynamoDBStackProps';

export class DynamoDBConstruct extends Construct {

  public readonly table: dynamodb.Table;

  constructor(scope: Construct, id: string, props: IDynamoDBStackProps) {
    super(scope, id);
    const tableModel = require(props.tableModelJsonPath) as ITableModel
    const tableConfig = require(props.tableConfigJsonPath) as ITableCofig

    const createTable = (tableModel: ITableModel) => {
      const table = new dynamodb.Table(this, props.tableName, {
        tableName: props.tableName,
        partitionKey: { name: "HASH", type: dynamodb.AttributeType.STRING },
        sortKey: { name: "RANGE", type: dynamodb.AttributeType.STRING },

        billingMode: dynamodb.BillingMode[tableConfig.Mode],
        readCapacity: tableConfig.ProvisionedCapacity && tableConfig.ProvisionedCapacity.RCU || undefined,
        writeCapacity: tableConfig.ProvisionedCapacity && tableConfig.ProvisionedCapacity.WCU || undefined,

        stream: dynamodb.StreamViewType.NEW_AND_OLD_IMAGES,
        removalPolicy: RemovalPolicy[tableConfig.RemovalPolicy]
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

    this.table = createTable(tableModel)

  }
}