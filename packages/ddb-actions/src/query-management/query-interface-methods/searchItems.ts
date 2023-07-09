import { locateQueryStrategyFromQueryArguments } from "../query-strategy-utils/locateQueryStrategyFromQueryArguments";
import { DdbItem, IClaims, IIdentity, Result, __domain, __itemMetadata, __tableModel, _sep1, _sep2, getRegularKeyForSystemKey, withPrefix } from "@incta/ddb-model";
import { DdbQueryInput, KeyPredicateValueTripple, PrimaryKey, queryItems } from "../../interface-methods/queryItems";
import { ValidationError, decodeBase64ToJSON, encodeJSONToBase64, logdebug, logerror } from "@incta/common-utils";
import { dbConfig } from "../../DynamoDbClient";
import { AttributeValue } from "@aws-sdk/client-dynamodb";

const shardsToIterate = (totalNrShards: number, decodedPageToken: Record<string, AttributeValue> | undefined) => {
    const shards = []
    if (decodedPageToken && Object.keys(decodedPageToken).length) {
        return Object.keys(decodedPageToken)
    } else {
        for (let n = 0; n < totalNrShards; n++) {
            shards.push(String(n))
        }
        return shards
    }
}

const queryItemsInShard = async <T extends DdbItem>(
    params: DdbQueryInput,
    nshard: string,
    shardPageToken: string | undefined,
    hashKey: PrimaryKey,
    limit: number,
    identity: Partial<IIdentity<Partial<IClaims>>> | null) => {
    return {
        shard: nshard,
        result: await queryItems<T>({
            ...params,
            dbIndexName: params.dbIndexName,
            filter: params.filter,
            pageToken: shardPageToken,
            hashKey,
            rangeKey: params.rangeKey,
            keysOnly: params.keysOnly,
            limit: limit,
            searchBackward: params.searchBackward
        }, identity)
    }
}

/**
 * 
 * @param params EXPERIMENTAL
 * main idea - issue queries against a key (TITEM) that is of the form <string>|yyyy-mm-dd
 * I.e queries for items, created at specific date
 * date_created filter needs debugging and fixing
 * @param identity 
 * @returns 
 */
export const searchItems = async <T extends DdbItem>(params: DdbQueryInput, identity: Partial<IIdentity<Partial<IClaims>>> | null):
    Promise<Result<T>> => {
        logdebug(`[searchItems] params `, params)

    // - if hashKey is provided - assume query strategy is specified by the client and forward to queryItems (if missing indeg or incorrect hashKey it will handle accordingly)
    // - if no __typename is provided, we cannot get metadata, thus only query is possible
    // i.e calling directly by index keys provided /if they are valid, otherwise will result in error/
    if (!params.__typename || params.hashKey) {
        return await queryItems<T>(params, identity)
    }

    // if HASH was specified as filter - assume this to be the hashKey and forward to queryItems again
    if (params.filter?.HASH && params.filter?.HASH?.eq) {
        params.hashKey = JSON.parse(JSON.stringify(params.filter.HASH))
        delete params.filter.HASH
        //also check for RANGE key existance and transfer it as well if present
        if (params.filter?.RANGE) {
            params.rangeKey = JSON.parse(JSON.stringify(params.filter.RANGE))
            delete params.filter.RANGE
        }
        return await queryItems<T>(params, identity)
    }

    // else, query by NSHARD-TITEM, ONLY if there is a valid __typename
    // 1. validate __typename is indeed for domain item
    const domain = __domain()
    if (domain.dataItemsMap?.has(String(params.__typename))) {
        const limit = Number(params.limit) <= 5000 ? Number(params.limit) : 5000

        params = locateQueryStrategyFromQueryArguments(params)

        if (params.dbIndexName && params.hashKey) {
            return await queryItems({
                ...params,
                dbIndexName: params.dbIndexName,
                filter: params.filter,
                pageToken: params.pageToken,
                hashKey: params.hashKey as PrimaryKey,
                rangeKey: params.rangeKey,
                keysOnly: params.keysOnly,
                limit,
                searchBackward: params.searchBackward
            }, identity)
        } else if (!!params.__typename) {
            params.dbIndexName = "NSHARD-TITEM"
            // ------------------
            // sharding
            // ------------------
            if (params.filter?.date_updated) {
                if (Object.keys(params.filter?.date_updated)[0] !== 'eq' && Object.keys(params.filter?.date_updated)[0] !== 'begins_with') {
                    params.filter = params.filter ? { ...params.filter, __typename: { eq: params.__typename } } : { __typename: { eq: params.__typename } }
                }
                params.rangeKey = {
                    TITEM: {
                        [Object.keys(params.filter?.date_updated)[0]]: `${params.__typename}${_sep1}${String(Object.values(params.filter?.date_updated)[0]).slice(0, 10)}`
                    }
                }
                params.filter && (delete params.filter.date_updated)
            } else {
                params.rangeKey = {
                    TITEM: {
                        begins_with: `${params.__typename}${_sep1}`
                    }
                }
            }
            // theorethically if client requested 100 items but we do 20 differet queries,
            // there is a possibility the shrarded items are not balanced and some shards return less items,
            // thus rsulting in more items than requested
            const probableLimit = Math.round(limit / Number((await dbConfig()).NSHARD))
            const queries = []
            const decodedPageToken = decodeBase64ToJSON(params.pageToken)
            let tempPageTokenFromIndividualShardQueries = {}

            for (const nshard of shardsToIterate(Number((await dbConfig()).NSHARD), decodedPageToken)) {
                const hashKey = {
                    NSHARD: {
                        eq: String(nshard)
                    }
                }
                queries.push(queryItemsInShard<T>(
                    params, nshard,
                    decodedPageToken && decodedPageToken[String(nshard)],
                    hashKey, probableLimit,
                    identity
                ))


                // queries.push(queryItems<T>({
                //     ...params,
                //     dbIndexName: params.dbIndexName,
                //     filter: params.filter,
                //     pageToken: decodedPageToken && decodedPageToken[String(nshard)],
                //     hashKey,
                //     rangeKey: params.rangeKey,
                //     keysOnly: params.keysOnly,
                //     limit: probableLimit,
                //     searchBackward: params.searchBackward
                // }, identity))
            }
            const results = await Promise.all(queries)

            const combinedResult: Result<T> = results.reduce<Result<T>>((combinedResult, singleResult) => {
                combinedResult.items = combinedResult.items.concat(singleResult.result.items)
                combinedResult.count += singleResult.result.count
                if (Array.isArray(singleResult.result.excludedFromFilter)) {
                    if (Array.isArray(combinedResult.excludedFromFilter)) {
                        combinedResult.excludedFromFilter = combinedResult.excludedFromFilter.concat(singleResult.result.excludedFromFilter.filter(exclusion => !combinedResult.excludedFromFilter?.includes(exclusion)))
                    } else {
                        combinedResult.excludedFromFilter = singleResult.result.excludedFromFilter
                    }
                }
                tempPageTokenFromIndividualShardQueries = { ...tempPageTokenFromIndividualShardQueries, [singleResult.shard]: singleResult.result.pageToken }
                combinedResult.selectionSetList = singleResult.result.selectionSetList
                return combinedResult
            }, { items: [], count: 0 })
            if (Object.values(tempPageTokenFromIndividualShardQueries).filter(val => !!val).length) {
                combinedResult.pageToken = encodeJSONToBase64(tempPageTokenFromIndividualShardQueries)
            }
            return combinedResult
        }
    }

    logerror("Query params did not match any supported query paths, NOT QUERYING ", params)
    throw new ValidationError("Query params did not match any supported query paths")
}