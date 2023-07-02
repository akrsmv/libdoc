export interface JSONTableModel {
    TableName: string,
    AttributeDefinitions: { AttributeName: string, AttributeType: "S" | "N" }[],
    KeySchema: { AttributeName: string, KeyType: "HASH" | "RANGE" }[],
    GlobalSecondaryIndexes: {
        IndexName: string,
        KeySchema: { AttributeName: string, AttributeType: "S" | "N" }[],
        Projection: TableGSIProjectionConfig,
        ProvisionedThroughput: { WriteCapacityUnits: number, ReadCapacityUnits: number }
    }[],
    BillingMode: "PAY_PER_REQUEST"
}

export interface TableGSIProjectionConfig { ProjectionType: "ALL" | "KEYS_ONLY" | "INCLUDE", NonKeyAttributes?: string[] }

export interface Gsi {
    name: string,
    projectionType?: GsiProjectionType | undefined
    nonKeyAttributes?: string[]
}

export enum GsiProjectionType {
    /**
     * Only the index and primary keys are projected into the index.
     */
    KEYS_ONLY = "KEYS_ONLY",
    /**
     * Only the specified table attributes are projected into the index.
     *
     * The list of projected attributes is in `nonKeyAttributes`.
     */
    INCLUDE = "INCLUDE",
    /**
     * All of the table attributes are projected into the index.
     */
    ALL = "ALL"
}