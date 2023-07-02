import { ITableGSIProjectionConfig } from "./ITableGSIProjectionConfig"

export interface ITableModel {
    TableName: string,
    AttributeDefinitions: { AttributeName: string, AttributeType: "S" | "N" }[],
    KeySchema: { AttributeName: string, KeyType: "HASH" | "RANGE" }[],
    GlobalSecondaryIndexes: {
        IndexName: string,
        KeySchema: { AttributeName: string, AttributeType: "S" | "N" }[],
        Projection: ITableGSIProjectionConfig,
        ProvisionedThroughput: { WriteCapacityUnits: number, ReadCapacityUnits: number }
    }[],
    BillingMode: "PAY_PER_REQUEST"
}