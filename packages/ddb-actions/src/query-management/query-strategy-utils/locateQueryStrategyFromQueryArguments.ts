import { getAllApplicableIndexesByhashKeys } from "./getAllApplicableIndexesByhashKeys"
import { getAllApplicableIndexesByrangeKeys } from "./getAllApplicableIndexesByrangeKeys"
import { DdbQueryInput, PrimaryKey } from "../../interface-methods/queryItems"
import { __itemMetadata, __tableModel, getRegularKeyForSystemKey } from "@incta/ddb-model"

export const locateQueryStrategyFromQueryArguments = (params: DdbQueryInput) : DdbQueryInput => {
    const queryArgs = params || {} as DdbQueryInput

    // try infer it from query Arguments
    // if not yet decided for queryArgs.__primary/range keys
    const _itemMetadata = __itemMetadata(String(params.__typename))
    const a = getAllApplicableIndexesByhashKeys(queryArgs.filter, _itemMetadata)
    const b = getAllApplicableIndexesByrangeKeys(queryArgs.filter, _itemMetadata)

    if (a.size > 0) {
        let indexIdentified = false
        // if a range key was also identified, start from it
        if (b.size > 0) {
            // try find a match between a and b and if yes use it
            const possibleHashKeyIndexesNames = Array.from(a.keys()).reduce<string[]>((accum, next) => {
                //@ts-ignore
                return accum.concat(a.get(next).map(d => next + "##" + d.IndexName))
            }, [])
            const possibleRangeKeyIndexesNames = Array.from(b.keys()).reduce<string[]>((accum, next) => {
                //@ts-ignore
                return accum.concat(b.get(next).map(d => next + "##" + d.IndexName))
            }, [])

            const hashIndexNameToUse = possibleHashKeyIndexesNames.filter(hashIndex =>
                possibleRangeKeyIndexesNames.map(clientNameAndIndexName => clientNameAndIndexName.substring(clientNameAndIndexName.indexOf("##") + 2)).includes(hashIndex.substring(hashIndex.indexOf("##") + 2)))[0]

            const rangeIndexNameToUse = possibleRangeKeyIndexesNames.filter(hashIndex =>
                possibleHashKeyIndexesNames.map(clientNameAndIndexName => clientNameAndIndexName.substring(clientNameAndIndexName.indexOf("##") + 2)).includes(hashIndex.substring(hashIndex.indexOf("##") + 2)))[0]


            if (!!hashIndexNameToUse && !!rangeIndexNameToUse) {
                indexIdentified = true
                const ddbIndexConfigToUse = __tableModel().GlobalSecondaryIndexes.filter(idx => idx.IndexName === hashIndexNameToUse.substring(hashIndexNameToUse.indexOf("##") + 2))[0]
                queryArgs.dbIndexName = hashIndexNameToUse.substring(hashIndexNameToUse.indexOf("##") + 2)
                //@ts-ignore
                queryArgs.hashKey = { [ddbIndexConfigToUse.KeySchema[0].AttributeName]: queryArgs.filter[hashIndexNameToUse.substring(0, hashIndexNameToUse.indexOf("##"))] || queryArgs.filter[ddbIndexConfigToUse.KeySchema[0].AttributeName] } as PrimaryKey
                //@ts-ignore
                queryArgs.rangeKey = { [ddbIndexConfigToUse.KeySchema[1].AttributeName]: queryArgs.filter[rangeIndexNameToUse.substring(0, rangeIndexNameToUse.indexOf("##"))] || queryArgs.filter[ddbIndexConfigToUse.KeySchema[1].AttributeName] } as RangeKey
                //@ts-ignore
                delete queryArgs.filter[hashIndexNameToUse.substring(0, hashIndexNameToUse.indexOf("##"))] //@ts-ignore
                delete queryArgs.filter[ddbIndexConfigToUse.KeySchema[0].AttributeName] //@ts-ignore
                delete queryArgs.filter[rangeIndexNameToUse.substring(0, rangeIndexNameToUse.indexOf("##"))] //@ts-ignore
                delete queryArgs.filter[ddbIndexConfigToUse.KeySchema[1].AttributeName]
            }
        }

        if (!indexIdentified) {
            // if there was no possible indexes by range key or there was, but candidates from a and b didnt intersect, use the hashIndex:
            const clientKeyToUseForHash = a.keys().next().value

            const ddbIndexConfigToUse = a.get(clientKeyToUseForHash) ? a.get(clientKeyToUseForHash)![0] : undefined
            if (ddbIndexConfigToUse) {
                queryArgs.dbIndexName = ddbIndexConfigToUse.IndexName
                queryArgs.hashKey = { [ddbIndexConfigToUse.KeySchema[0].AttributeName]: (queryArgs.filter && queryArgs.filter[clientKeyToUseForHash]) || (queryArgs.filter && queryArgs.filter[ddbIndexConfigToUse.KeySchema[0].AttributeName]) } as PrimaryKey

                queryArgs.filter && (delete queryArgs.filter[clientKeyToUseForHash])
                queryArgs.filter && (delete queryArgs.filter[ddbIndexConfigToUse.KeySchema[0].AttributeName])
            }
        }
    } // if there was none index candidates do not modify the params

    return params
}