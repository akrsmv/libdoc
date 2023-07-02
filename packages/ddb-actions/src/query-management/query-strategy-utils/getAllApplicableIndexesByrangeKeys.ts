import { DdbItem, IDdbItemStaticMetadata, TableGSIProjectionConfig, __tableModel } from "@incta/ddb-model";
import { KeyPredicateValueTripple } from "../../interface-methods/queryItems";

/**
 * From a passed set of query arguments, builds a map clientName=>hashKeysName
 * for all the passed query arguments that have their indecies
 * TODO client may sent clientName or hashKeysName
 * TODO if you use hashKeys for index, make sure you remove hashKeys from arguments (clientName may stay)
 * @param domainItemConfig 
 * @param kpvQueryArguments 
 * @returns 
 */
 export const getAllApplicableIndexesByrangeKeys = (
    kpvQueryArguments: KeyPredicateValueTripple = {},
    _itemMetadata: IDdbItemStaticMetadata<DdbItem>): Map<string, {
        IndexName: string;
        KeySchema: {
            AttributeName: string;
            AttributeType: "S" | "N";
        }[];
        Projection: TableGSIProjectionConfig;
        ProvisionedThroughput: {
            WriteCapacityUnits: number;
            ReadCapacityUnits: number;
        };
    }[]> =>
    Object.keys(kpvQueryArguments).reduce((acumm, next) => {

        if (["eq", "begins_with", "between", "le", "ge", "lt", "gt"]
            .indexOf(Object.keys(kpvQueryArguments[next])[0]) === -1) {
            return acumm    // range keys may only be of above predicates
        }

        // get all hashKeyss that may be defined by the client
        for (const _ddbIndex of __tableModel().GlobalSecondaryIndexes) {
            if (!!_ddbIndex.KeySchema[1] && _ddbIndex.KeySchema[1].AttributeName === next) {
                if (acumm.has(next)) {
                    acumm.get(next)?.push(_ddbIndex)
                } else {
                    acumm.set(next, [_ddbIndex])
                }
            }
        }
        // get all hashKeyss that may be defined internally by incta
        const gsiKeysForRegularKey = _itemMetadata.gsiKeys.get(next)
        if (Array.isArray(gsiKeysForRegularKey)) {
            for (const gsiKey of gsiKeysForRegularKey) {
                for (const _ddbIndex of __tableModel().GlobalSecondaryIndexes) {
                    if (!!_ddbIndex.KeySchema[1] && _ddbIndex.KeySchema[1].AttributeName === gsiKey) {
                        if (acumm.has(next)) {
                            acumm.get(next)?.push(_ddbIndex)
                        } else {
                            acumm.set(next, [_ddbIndex])
                        }
                    }
                }
            }
        }
        return acumm
    }, new Map<string, {
        IndexName: string;
        KeySchema: {
            AttributeName: string;
            AttributeType: "S" | "N";
        }[];
        Projection: TableGSIProjectionConfig;
        ProvisionedThroughput: {
            WriteCapacityUnits: number;
            ReadCapacityUnits: number;
        };
    }[]>())