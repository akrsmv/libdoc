// TODO - read from inc1.config settings 

import { writeFile } from "fs/promises"
import { DataModelObject, GSIDefinition } from "../interfaces/DataModel"
import { ppjson } from "@incta/common-utils"
import { join } from "path"
import { INCTA_GSI_BASE_CONFIG, _sGSIKeyPrefix } from ".."

/**
 * 
 * @param model TODO validation that nr of sSRCH +nSrch + rex + custom indexes defined should not be bigger than 19
 * -because:
 * each [n|s]SRCH produces by default TITEM-[n|S]SRCH index
 * each REF[n] produces by default REF[n]-TITEM index
 * there is always at least one index TITEM
 * custom indecies may be defined
 * --------
 * And hard limit from dynamo is MAX 20 indecies
 * @param tableName 
 * @returns 
 */
export const generateTableDefinitionJson = async (tableName: string, dataModelFilesOutDir: string, globalSecondaryIndexesToCreate: GSIDefinition[]) => {
    const tableJson = {
        "AttributeDefinitions": [
            {
                "AttributeName": "HASH",
                "AttributeType": "S"
            },
            {
                "AttributeName": "RANGE",
                "AttributeType": "S"
            }
        ],
        "TableName": tableName,
        "KeySchema": [
            {
                "AttributeName": "HASH",
                "KeyType": "HASH"
            },
            {
                "AttributeName": "RANGE",
                "KeyType": "RANGE"
            }
        ],
        "GlobalSecondaryIndexes": [],
        "BillingMode": "PAY_PER_REQUEST"
    }

    const makeGSIJsonDef = (pk: string, sk: string, projectionType?: string, nonKeyAttributes?: string[]): object => {

        const gsiDef = {
            "IndexName": `${pk}${!!sk ? '-' + sk : ''}`,
            "KeySchema": [
                {
                    "AttributeName": pk,
                    "KeyType": "HASH"
                }
            ],
            "Projection": {
                "ProjectionType": projectionType || "KEYS_ONLY"
            },
            "ProvisionedThroughput": {
                "ReadCapacityUnits": 100,
                "WriteCapacityUnits": 100
            }
        }
        if (projectionType === "INCLUDE" && Array.isArray(nonKeyAttributes)) {
            //@ts-ignore
            gsiDef.Projection.NonKeyAttributes = nonKeyAttributes
        }
        if (!!sk) {
            gsiDef.KeySchema.push({
                "AttributeName": sk,
                "KeyType": "RANGE"
            })
        }
        return gsiDef
    }

    const pushGSI = (pk: string, sk: string | undefined, projectionType?: "KEYS_ONLY" | "ALL" | "INCLUDE", nonKeyAttributes?: string[]) => {
        //@ts-ignore
        if (tableJson.GlobalSecondaryIndexes.filter(index => index.IndexName === `${pk}${!!sk ? '-' + sk : ''}`).length === 0) {
            //@ts-ignore
            tableJson.GlobalSecondaryIndexes.push(makeGSIJsonDef(pk, sk, projectionType, nonKeyAttributes))
        }
    }

    const pushAttributeDefinition = (key: string | undefined, type: string | undefined) => {
        if (!key || !type) return
        const attrType = type === "string" ? "S" : type === "number" ? "N" : type
        if (attrType !== 'S' && type !== 'N') {
            throw new Error(`invalid type for AttributeName (${type})`)
        }

        if (tableJson.AttributeDefinitions.filter(attr => attr.AttributeName === key).length === 0) {
            tableJson.AttributeDefinitions.push({
                "AttributeName": key,
                "AttributeType": type
            })
        }
    }

    // // add static 'TITEM' index that is always present
    // if (INCTA_GSI_BASE_CONFIG.createTITEMstaticIndex) {
    //     pushGSI('TITEM', undefined, "ALL") // #!! TODO?! NO LONGER CREATE GSIs if not requested externally
    //     pushAttributeDefinition('TITEM', 'S')
    // }
    // for each property of a particular item, add special keys
    // for (const item of Object.keys(model)) {
    //     if (item === "__meta") continue
    //     for (const itemKey of Object.keys(model[item].__attributes)) {
    //         const gsiKeys = model[item].__attributes[itemKey].__gsiKeys
    //         if (Array.isArray(gsiKeys)
    //             && model[item].__attributes[itemKey].__type === "string") {
    //             for (const gsiKey of gsiKeys) {
    //                 if (INCTA_GSI_BASE_CONFIG.createTITEMgsiForEachGSI) {
    //                     pushGSI('TITEM', gsiKey, "KEYS_ONLY") // #!! NO LONGER CREATE GSIs if not requested externally
    //                     pushAttributeDefinition(gsiKey, "S") // ONLY INCLUDE IT IF ITS CONTAINED IN GSI definitions passed
    //                 }
    //             }
    //         }
    //         else if (Array.isArray(gsiKeys)
    //             && model[item].__attributes[itemKey].__type === "number") {
    //             for (const gsiKey of gsiKeys) {
    //                 if (INCTA_GSI_BASE_CONFIG.createTITEMgsiForEachGSI) {
    //                     pushGSI('TITEM', gsiKey, "KEYS_ONLY") // #!! NO LONGER CREATE GSIs if not requested externally
    //                     pushAttributeDefinition(gsiKey, "N") // ONLY INCLUDE IT IF ITS CONTAINED IN GSI definitions passed
    //                 }
    //             }
    //         }
    //     }
    // }

    // one way to create GSIs is to define them in the data-model.json (if initially dataModelJsonPath was passed instead of dataModelsDir param)
    const gsiKeyType = (gsiKeyName: string) => gsiKeyName.startsWith(_sGSIKeyPrefix) || ['HASH','TITEM','NSHARD'].includes(gsiKeyName) ? 'S' : 'N'
    if (Array.isArray(globalSecondaryIndexesToCreate) && globalSecondaryIndexesToCreate.length > 0) {
        for (const gsi of globalSecondaryIndexesToCreate) {
            const hashKeyName = gsi.KeySchema.filter(schema => schema.KeyType === 'HASH')[0].AttributeName
            const rangeKeyName = gsi.KeySchema.filter(schema => schema.KeyType === 'RANGE')[0].AttributeName
            pushGSI(hashKeyName, rangeKeyName, gsi.Projection.ProjectionType, gsi.Projection.NonKeyAttributes?.split(',').map(s =>s.trim()))
            pushAttributeDefinition(hashKeyName, gsiKeyType(hashKeyName))
            if (rangeKeyName) {
                pushAttributeDefinition(rangeKeyName, gsiKeyType(rangeKeyName))
            }
        }
    }

    // // another way to create GSIs is if they were passed as an array to this function
    // // TODO currently only supported KEYS_ONLY indecies, i.e from array of strings only infer primaryKeyName and rangeKeyName
    // if (Array.isArray(globalSecondaryIndexesToCreate) && globalSecondaryIndexesToCreate.length > 0) {
    //     for (const customGSI of globalSecondaryIndexesToCreate) {
    //         const [primaryKeyName, rangeKeyName] = customGSI.split('-')
    //         pushGSI(primaryKeyName, rangeKeyName)
    //         pushAttributeDefinition(primaryKeyName, primaryKeyName.startsWith('n') ? 'N' : 'S')
    //         if (rangeKeyName) {
    //             pushAttributeDefinition(rangeKeyName, rangeKeyName.startsWith('n') ? 'N' : 'S')
    //         }
    //     }
    // }

    await writeFile(join(dataModelFilesOutDir, "aws-ddb-table-definition.json"), ppjson(tableJson))
}