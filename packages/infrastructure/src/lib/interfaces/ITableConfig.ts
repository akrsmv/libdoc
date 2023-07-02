export interface ITableCofig {
    Mode: "PAY_PER_REQUEST" | "PROVISIONED"
    RemovalPolicy: "DESTROY" | "RETAIN" | "SNAPSHOT"
    ProvisionedCapacity: {
        RCU: number
        WCU: number
    }
}