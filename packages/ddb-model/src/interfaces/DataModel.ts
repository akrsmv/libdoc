/**
 * represents the Items portion of a larger data-model.json file
 * which describes paticular business domain.
 * 
 * Items section is intended to describe metadata like:
 * - a property name in particular business object
 * - is it unique
 * - is it indexed
 * - is it of type string or number
 * - is it referencing some other business object
 */
export interface JSONDataModel {
    version?: number,
    meta?: DataModelObjectMeta
    Items: { [x: string]: DataModelObject }
    Commands: { [x: string]: DataModelObject }
    Queries: { [x: string]: DataModelObject }
    GlobalSecondaryIndexes: GSIDefinition[]
}

export type GSIDefinition = {
    IndexName: string
    KeySchema: {
        "AttributeName": string,
        "KeyType": "HASH" | "RANGE"
    }[],
    "Projection": {
        "ProjectionType": "KEYS_ONLY" | "ALL" | "INCLUDE",
        "NonKeyAttributes"?: string
    },
    "ProvisionedThroughput": {
        "ReadCapacityUnits": 100,
        "WriteCapacityUnits": 100
    }
}

export interface DataModelObject {
    __meta: DataModelObjectMeta
    __attributes: INestedDataModelObject
}

/**
 * represents the "__meta" section under a particular Item from a <dynamo-item-definition-name>.json file
 */
export interface DataModelObjectMeta {
    __desc?: string
    __parent_typename?: string
    __typename?: string
    __isPublicItem?: boolean

    shardPeriodsOn?: boolean

    shardPartitios?: number
    resultTypename?: string
    lambdaAction?: string
}

export interface INestedDataModelObject {
    [x: string]: DataModelObjectProps
}

/**
 * The only valid names for a GSI key name
 */
export type GsiKey =
    // string keys
    "sGSI1" | "sGSI2" | "sGSI3" | "sGSI4" | "sGSI5" | "sGSI6" | "sGSI7" | "sGSI8" | "sGSI9" | "sGSI10" |
    "sGSI11" | "sGSI12" | "sGSI13" | "sGSI14" | "sGSI15" | "sGSI16" | "sGSI17" | "sGSI18" | "sGSI19" |
    // number keys
    "nGSI1" | "nGSI2" | "nGSI3" | "nGSI4" | "nGSI5" | "nGSI6" | "nGSI7" | "nGSI8" | "nGSI9" | "nGSI10" |
    "nGSI11" | "nGSI12" | "nGSI13" | "nGSI14" | "nGSI15" | "nGSI16" | "nGSI17" | "nGSI18" | "nGSI19"

/**
 * represents the metadata that a particular Item's property may have in a data-model.json file
 */
export interface DataModelObjectProps {
    __type: string | DataModelObject | INestedDataModelObject  // complex object properties
    __values?: string
    __unique?: boolean
    __id?: boolean
    __required?: boolean
    __peer?: string,
    __gsiKeys?: GsiKey[]
}
