'use strict'
// TODO keys (HASH / RANGE) as separate params, and a string for the update expression?
// https://github.com/aws/aws-sdk-js/blob/master/ts/dynamodb.ts
import { dynamoDbClient, fromAttributeMapArray, DB_NAME, toAttributeMap } from '../DynamoDbClient';
import { ensureProjectionExpressionRequiredKeys, getItems, populatePeerKeys } from './getItems';
import { DdbItem, DdbLoadPeersInput, GsiProjectionType, IClaims, IIdentity, Result, __itemMetadata, __tableModel, _nGSIKeyPrefix, _sGSIKeyPrefix, _sep1, _sep2, calculatePrivateOrPublicData, withPrefix } from '@incta/ddb-model';
import { AttributeValue, QueryCommand, QueryInput } from '@aws-sdk/client-dynamodb';
import { ValidationError, decodeBase64ToJSON, encodeJSONToBase64, logdebug, ppjson } from '@incta/common-utils';

/**
 * 
 * Note that if `filter` and `dbIndexName`  are being passed toghether,
 * some properties inside the filter array may be excluded from the search, depending on ddbIndex configuration:
 * - if ddbIndex configuration is INCLUDE - only filter properties that are also present in the nonKeyAttributes will be taken for the search
 * - if ddbIndex configuration is KEYS_ONLY - filter properties are not taken for the search at all
 * - if ddbIndex configuration is ALL - all filter properties are taken for the search
 * 
 * if ddbQueryPayload.filter is passed and there is no ddbQueryPayload.ddbIndex passed, the GSI nshard__TITEM will be used
 *  !TODO: no hard requirements for item_state, i.e to set it explicitly to "undefined" as the query over TITEM(the SK) will be begins_with!
 * 
 * if no ddbQueryPayload.ddbIndex passed, but HASH is present - automatically querying the table? HOw does it work
 * TODO idea with using more and more the nshard getting heat:
 *  - by just having the TABLE + a GSI nshard__TITEM with ProjectionType.ALL 
 *      +PLUS+ the guidelines that item types should have high cardinality, i.e not having one big Tourist record but to have Tourist main and then TouristDestProps, TourisDemographicProps etc? 
 * @param ddbQueryPayload 
 * @returns 
 */
export interface DdbQueryInput {
    dbIndexName?: string

    // TODO how to define in ts that only one property is possible for primaryKeyValue
    hashKey?: PrimaryKey
    // TODO how to define in ts that only one property is possible for rangeKeyValue
    rangeKey?: KeyPredicateValueTripple

    filter?: KeyPredicateValueTripple,
    pageToken?: string
    keysOnly?: boolean
    limit?: number
    searchBackward?: boolean
    publicData?: boolean
    privateData?: boolean
    loadPeersInput?: DdbLoadPeersInput
    __typename?: string
}

export const EMPTY_LOAD_PEERS_INPUT: { loadPeersInput: DdbLoadPeersInput } = {
    loadPeersInput: {
        loadPeersLevel: 0,
        peersPropsToLoad: []
    }
}

export type RangeKeyPredicate = "gt" |
    "lt" |
    "ge" |
    "le" |
    "eq" |
    "between" |
    "attribute_exists" |
    "attribute_not_exists" |
    "begins_with" |
    "contains"

export type RangeKeyValue = string | number | { min: string | number, max: string | number }
export type PredicateAndValue = Partial<{ [rangeKeyPredicate in RangeKeyPredicate]: RangeKeyValue }>
export type KeyPredicateValueTripple = { [rangeKeyName: string]: PredicateAndValue }

export type PrimaryKey = { [primaryKeyName: string]: { "eq": string | number } }

/**
 * 
 * https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Condition.html
 * https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.OperatorsAndFunctions.html
 * @param kpv 
 * @param dexpressionAttributeNames 
 * @param dexpressionAttributeValues 
 * @returns 
 */
const ddbConditionExpression = (kpv: KeyPredicateValueTripple,
    dexpressionAttributeNames: { [key: string]: string },
    dexpressionAttributeValues: { [key: string]: AttributeValue },
    identity: Partial<IIdentity<Partial<IClaims>>> | null,
    searchPublicData: boolean): string => {

    let expression = undefined
    const key = Object.keys(kpv)[0]
    const predicate = Object.keys(Object.values(kpv)[0])[0]
    const value = withPrefix(Object.values(Object.values(kpv)[0])[0], searchPublicData, identity)
    const dvalue = Object.values(toAttributeMap({ [Object.keys(kpv)[0]]: value }))[0]

    switch (predicate) {
        case 'eq': expression = `#${key} = :${key} `; break
        case 'ne': expression = `#${key} <> :${key} `; break // NOT SUPPORTED FOR RANGE KEY
        case 'le': expression = `#${key} <= :${key} `; break
        case 'lt': expression = `#${key} < :${key} `; break
        case 'ge': expression = `#${key} >= :${key} `; break
        case 'gt': expression = `#${key} > :${key} `; break

        case 'attribute_exists': expression = !!value ? `attribute_exists(#${key})` : `attribute_not_exists(#${key})`; break // NOT SUPPORTED FOR RANGE KEY
        case 'attribute_not_exists': expression = !!value ? `attribute_not_exists(#${key})` : `attribute_exists(#${key})`; break // NOT SUPPORTED FOR RANGE KEY

        case 'contains': expression = `contains(#${key},:${key}) `; break // NOT SUPPORTED FOR RANGE KEY, NOT SUPPORTED FOR NUMBERS
        case 'not_contains': expression = `not contains(#${key},:${key})`; break // NOT SUPPORTED FOR RANGE KEY
        case 'begins_with': expression = `begins_with(#${key},:${key})`; break
        case 'in': expression = `${key} in (${Array.isArray(value) ? value.reduce((acumm, next, index) => { acumm.push(`:${key}${index}`); return acumm }, []).join(',') : `:${key}`})`; break // NOT SUPPORTED FOR RANGE KEY
        case 'between': expression = `#${key} between :range_min and :range_max`; break

        // new ones // TODO test
        case 'attribute_type': expression = `attribute_type(#${key}, :${key})`; break
        case 'size_ne': expression = `size(#${key}) <> :${key}`; break
        case 'size_eq': expression = `size(#${key}) = :${key}`; break
        case 'size_le': expression = `size(#${key}) <= :${key}`; break
        case 'size_ge': expression = `size(#${key}) >= :${key}`; break
        case 'size_lt': expression = `size(#${key}) < :${key}`; break
        case 'size_gt': expression = `size(#${key}) > :${key}`; break
    }

    if (!expression) {
        return ''
    }
    // populate expressions map accordingly:
    dexpressionAttributeNames[`#${key}`] = key
    if (predicate === "between" && dvalue.M && "min" in dvalue.M && "max" in dvalue.M) {
        dexpressionAttributeValues[`:range_min`] = dvalue.M.min
        dexpressionAttributeValues[`:range_max`] = dvalue.M.max
    } else if (predicate === "attribute_exists" || predicate === "attribute_not_exists") {
        // no need to add to attribute value map
    } else if (predicate === "attribute_type") {
        dexpressionAttributeValues[`:${key}`] = { S: `${value}` }
    } else if (predicate === "size_ne" || predicate === "size_le" || predicate === "size_ge" || predicate === "size_eq" || predicate === "size_lt" || predicate === "size_gt") {
        dexpressionAttributeValues[`:${key}`] = dvalue
    } else if (predicate === "in") {
        if (!!dvalue.M) {
            // note marshall dynamo function convert arrays into maps (M), i.e an array was passed
            let index = 0
            for (const dParam of Object.values(dvalue.M)) {
                dexpressionAttributeValues[`:${key}${index}`] = dParam
                index += 1
            }
        } else {
            dexpressionAttributeValues[`:${key}`] = dvalue
        }
    } else {
        dexpressionAttributeValues[`:${key}`] = dvalue
    }

    return expression
}

const stripSystemKeys = <T extends DdbItem =DdbItem>(item: Record<string, any>) => Object.keys(item)
    .reduce((accum, key) =>
        key.startsWith(_nGSIKeyPrefix)
            || key.startsWith(_sGSIKeyPrefix)
            || key === "TITEM"
            || key === "NSHARD"
            // || key === "__typename"
            || key === "HASH"
            || key === "RANGE"
            || item[key] === "##dell##" ?
            accum
            : Object.assign(accum, { [key]: item[key] })
        , {}) as T

export const queryItems = async <T extends DdbItem = DdbItem>(args: DdbQueryInput, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<Result<T>> => {
    logdebug("[queryItems] args ", args)

    let ddbQueryPayload = args || {}
    let _item_metadata = __itemMetadata(args)
    if (!ddbQueryPayload.hashKey) {
        throw new ValidationError("attempt to query without a hashKey ")
    }

    const primaryKeyName = Object.keys(ddbQueryPayload.hashKey)[0]

    const loadPeersInput = args.loadPeersInput || EMPTY_LOAD_PEERS_INPUT.loadPeersInput // default behaviour, do not load peers if not requested
    ensureProjectionExpressionRequiredKeys(loadPeersInput)

    logdebug("[queryItems] ddbQueryPayload ", ddbQueryPayload)

    let dkeyConditionExpression = `#${primaryKeyName} = :${primaryKeyName}`

    let ddbIndexConfig = __tableModel().GlobalSecondaryIndexes.filter(g => g.IndexName === ddbQueryPayload.dbIndexName)[0]
    if (!!ddbQueryPayload.dbIndexName && !ddbIndexConfig) {
        throw new Error("index configuration not found")
    } else if (!ddbQueryPayload.dbIndexName) {
        // make indexConfig object for the table itself
        ddbIndexConfig = {
            IndexName: "TABLE",
            KeySchema: [
                {
                    "AttributeName": "HASH",
                    "AttributeType": "S"
                },
                {
                    "AttributeName": "RANGE",
                    "AttributeType": "S"
                },
            ],
            Projection: {
                ProjectionType: "ALL"
            },
            // below doesnt make any difference here
            ProvisionedThroughput: {
                WriteCapacityUnits: 1,
                ReadCapacityUnits: 1
            }
        }
    }

    const dexpressionAttributeNames = { [`#${primaryKeyName}`]: primaryKeyName }
    const dexpressionAttributeValues = { [`:${primaryKeyName}`]: toAttributeMap({ primaryKeyValue: withPrefix(String(Object.values(ddbQueryPayload.hashKey)[0].eq), calculatePrivateOrPublicData(ddbQueryPayload, _item_metadata), identity) }).primaryKeyValue }

    // TODO BUG - how to plugin __prefix here
    if (!!ddbQueryPayload.rangeKey) {
        dkeyConditionExpression += ` and ${ddbConditionExpression(ddbQueryPayload.rangeKey, dexpressionAttributeNames, dexpressionAttributeValues, identity, calculatePrivateOrPublicData(ddbQueryPayload, _item_metadata))}`
    }

    //#region Analyse payload and add any additional filters
    let dfilterExpression = undefined
    const excludedFromFilter: any = [] //for returning a warning if any predicates were not used because of Index configuration

    if (!!ddbIndexConfig && ddbQueryPayload.filter && Object.keys(ddbQueryPayload.filter).length) {
        let tmpDfilterExpressionArr = []
        for (const filterKey of Object.keys(ddbQueryPayload.filter)) {
            if (
                // "HASH" also cant be in filter as its primary key of table
                // "Filter Expression can only contain non-primary key attributes"
                (filterKey !== "HASH" && ddbIndexConfig.KeySchema[0].AttributeName !== filterKey)
                &&
                (ddbIndexConfig.Projection.ProjectionType === GsiProjectionType.ALL
                    ||
                    filterKey === "RANGE" // always present as keys of the table.
                    ||
                    // in case of INDEX_KEYS and filter key matching range key
                    (ddbIndexConfig.KeySchema[1] && ddbIndexConfig.KeySchema[1].AttributeName === filterKey)
                    ||
                    (ddbIndexConfig.Projection.ProjectionType === GsiProjectionType.INCLUDE
                        && Array.isArray(ddbIndexConfig.Projection.NonKeyAttributes)
                        && ddbIndexConfig.Projection.NonKeyAttributes.includes(filterKey)))) {

                tmpDfilterExpressionArr.push(ddbConditionExpression({ [filterKey]: ddbQueryPayload.filter[filterKey] }, dexpressionAttributeNames, dexpressionAttributeValues, null, calculatePrivateOrPublicData(ddbQueryPayload, _item_metadata))) // TODO should we pass identity as well, should we consider metadata? and pass identity only if the filter is to be replaced with some sGSI key?
            } else {
                excludedFromFilter.push(filterKey)
            }
        }
        dfilterExpression = tmpDfilterExpressionArr.filter(expression => !!expression.trim()).join(" and ")
    }
    dfilterExpression = !!dfilterExpression ? !!dfilterExpression.trim() ? dfilterExpression.trim() : undefined : undefined
    // TODO support for AND and OR inner query arguments

    //#endregion
    let dProjectionExpression = undefined
    if (!ddbQueryPayload.keysOnly && (!ddbQueryPayload.dbIndexName || (!!ddbQueryPayload.dbIndexName && (ddbIndexConfig && ddbIndexConfig.Projection.ProjectionType === GsiProjectionType.ALL))) && !!loadPeersInput.projectionExpression) {
        Object.assign(dexpressionAttributeNames, loadPeersInput.projectionExpression.split(",").reduce<Record<string, string>>((accum, key) => {
            accum[`#${key}`] = `${key}`
            return accum
        }, {}))
        dProjectionExpression = loadPeersInput.projectionExpression.split(",").map(key => `#${key}`, []).join(",")
    }

    const params: QueryInput = {
        TableName: DB_NAME(),
        IndexName: ddbQueryPayload.dbIndexName,
        Limit: ddbQueryPayload.limit,
        ExclusiveStartKey: !!ddbQueryPayload.pageToken ? decodeBase64ToJSON(ddbQueryPayload.pageToken) : undefined,
        ReturnConsumedCapacity: 'TOTAL',
        KeyConditionExpression: dkeyConditionExpression,
        ExpressionAttributeNames: dexpressionAttributeNames,
        ExpressionAttributeValues: dexpressionAttributeValues,
        FilterExpression: dfilterExpression, // TODO describe better the GSI in DataModel and instead of null pass filtered values based on GSI's keys and includedProps
        ProjectionExpression: dProjectionExpression,
        ScanIndexForward: !ddbQueryPayload.searchBackward
    }

    logdebug("[queryItems] ==>DDB QueryInput ", params);
    const dynamoResult = await dynamoDbClient().send(new QueryCommand(params))
    logdebug("[queryItems] <==DDB QueryOutput: ", dynamoResult)

    let output: Result<T> = {
        items: (fromAttributeMapArray<T>(dynamoResult.Items) || []),
        count: dynamoResult.Count ?? 0,
        pageToken: encodeJSONToBase64(dynamoResult.LastEvaluatedKey)
    }

    if (!ddbQueryPayload.keysOnly && !!ddbQueryPayload.dbIndexName && (ddbIndexConfig && ddbIndexConfig.Projection.ProjectionType !== GsiProjectionType.ALL) && !!dynamoResult && output.items.length > 0) {
        logdebug("[queryItems] Not all keys requested present in index. Calling batch get item with", ppjson({
            pks: output.items.map(r => { return { HASH: r.HASH, RANGE: r.RANGE } }),
            loadPeersLevel: loadPeersInput.loadPeersLevel,
            peersPropsToLoad: loadPeersInput.peersPropsToLoad,
            projectionExpression: loadPeersInput.projectionExpression
        }))
        const unordered = (await getItems({
            id: output.items.map(r => { return { HASH: r.HASH, RANGE: r.RANGE } }),
            loadPeersInput: {
                loadPeersLevel: loadPeersInput.loadPeersLevel,
                peersPropsToLoad: loadPeersInput.peersPropsToLoad,
                projectionExpression: loadPeersInput.projectionExpression
            }
        }, identity)).items.reduce((accum, next) => {
            accum.set(`${next.HASH}${next.RANGE}`, next)
            return accum
        }, new Map())
        output.items = output.items.map(next =>
            unordered.get(`${next.HASH}${next.RANGE}`)
        )
    } else if (!ddbQueryPayload.keysOnly && !!output && output.items.length > 0) {
        logdebug("[queryItems] all requested keys loaded from index. Loading sub level objects (see peersPropsToLoad and loadPeersLevel)")
        logdebug(`[queryItems] Calling 'Promise.all(output.items.map<Promise<void>>(item => populatePeerKeys'.... with:
         `, 'output.items:', output.items,
            'ddbQueryPayload.peersPropsToLoad: ', loadPeersInput.peersPropsToLoad,
            'ddbQueryPayload.projectionExpression: ', loadPeersInput.projectionExpression)

        await Promise.all(output.items.map(item =>
            populatePeerKeys(item, loadPeersInput.loadPeersLevel,
                loadPeersInput.peersPropsToLoad, loadPeersInput.projectionExpression))
        )
    }

    excludedFromFilter.length && (output.excludedFromFilter = excludedFromFilter)
    loadPeersInput.projectionExpression?.includes('selectionSetList') && (output.selectionSetList = loadPeersInput.selectionSetList?.split(','))

    return output
}