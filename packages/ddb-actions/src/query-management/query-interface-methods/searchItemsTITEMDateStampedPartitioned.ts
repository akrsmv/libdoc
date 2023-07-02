// import { transformQueryFilter } from "../query-payload-utils/transformQueryFilter"
// import { getAllApplicableIndexesByrangeKeys } from "../query-strategy-utils/getAllApplicableIndexesByrangeKeys"
// import { onlyDdbIndexKeys } from "../item-keys-utils/onlyDdbIndexKeys";
// import { locateQueryStrategyFromQueryArguments } from "../query-strategy-utils/locateQueryStrategyFromQueryArguments";
// import { DdbItem, IClaims, IIdentity, __domain, __itemMetadata, __tableModel, _sep1, _sep2, getRegularKeyForSystemKey, withPrefix } from "@incta/ddb-model";
// import { DdbQueryInput, KeyPredicateValueTripple, PrimaryKey, Result, queryItems } from "../../interface-methods/queryItems";
// import { isPredicate_HASH } from "../item-keys-utils/isPredicate_HASH";
// import { isPredicate_RANGE } from "../item-keys-utils/isPredicate_RANGE";
// import { ValidationError, logerror } from "@incta/common-utils";
// import { isPredicate_undefined } from "../item-keys-utils/isPredicate_undefined";
// import { isPredicate_TITEM } from "../item-keys-utils/isPredicate_TITEM";
// import { SearchItemsInput } from "../../interfaces";

// const QUERY_DEFAULT_DAYS_BEFORE_TODAY = 3
// const addDays = (date: Date, days: number) => {
//     var result = new Date(date);
//     result.setDate(result.getDate() + days);
//     return result;
// }
// /**
//  * 
//  * @param params EXPERIMENTAL
//  * main idea - issue queries against a key (TITEM) that is of the form <string>|yyyy-mm-dd
//  * I.e queries for items, created at specific date
//  * date_created filter needs debugging and fixing
//  * @param identity 
//  * @returns 
//  */
// export const searchItems = async <T extends DdbItem>(params: SearchItemsInput, identity: Partial<IIdentity<Partial<IClaims>>> | null):
//     Promise<Result<T>> => {

//     let queryArgs = transformQueryFilter(params)


//     // if no __typename is provided, we cannot get metadata, thus only query is possible
//     // i.e calling directly by index keys provided /if they are valid/
//     if (!queryArgs.__typename) {
//         return await queryItems<T>(queryArgs, identity)
//     }

//     // else there should be valid __typename
//     // 1. validate __typename is indeed for domain item
//     const domain = __domain()
//     if (!domain.dataItemsMap?.has(String(queryArgs.__typename))) {
//         throw new ValidationError("[searchItems] invalid __typename provided");
//     }
//     let
//         queryStrategyIdentified = false,
//         result: Result<T> = {
//             items: [],
//             count: 0
//         },
//         pageToken: Record<string, any> | undefined = queryArgs.pageToken,
//         queryDate: string,
//         _dates_created: string[] | undefined = (pageToken && pageToken._dsc as string[]) || queryArgs._dsc,
//         _date_created_start: string | undefined = (pageToken && pageToken._dc_srt as string) || queryArgs._dc_srt as string,
//         _date_created_stop: string | undefined = (pageToken && pageToken._dc_stp as string) || queryArgs._dc_stp as string,
//         searchBackward: boolean | undefined = (pageToken && !!pageToken.searchBackward) || queryArgs.searchBackward
//     const limit = Number(queryArgs.limit) <= 1000 ? Number(queryArgs.limit) : 1000

//     // >>>>>>>>>>>>> BASE VALIDATIONS
//     // - do not try to think of primary/range keys, only validate against what is being passed and if possible set the ddbIndex
//     //#region validations
//     // if HASH/RANGE passed in the query arguments with applicable predicates, used them as primary/range key
//     if (queryArgs.filter && !queryArgs.hashKey && queryArgs.filter["id"] && Object.keys(queryArgs.filter["HASH"])[0] === "eq") {
//         queryArgs.hashKey = { "HASH": queryArgs.filter["HASH"] } as PrimaryKey
//         delete queryArgs.filter["HASH"]
//     }
//     if (queryArgs.filter && !!queryArgs.hashKey && !!queryArgs.hashKey.id && !queryArgs.rangeKey && queryArgs.filter["RANGE"] && ["eq", "begins_with", "between", "le", "ge", "lt", "gt"]
//         .indexOf(Object.keys(queryArgs.filter["RANGE"])[0]) > -1) {
//         queryArgs.rangeKey = { "RANGE": queryArgs.filter["RANGE"] } as PrimaryKey
//         delete queryArgs.filter["RANGE"]
//     }
//     if (isPredicate_HASH(queryArgs.hashKey) && isPredicate_RANGE(queryArgs.rangeKey)) {
//         queryStrategyIdentified = true
//         queryArgs.dbIndexName = undefined // table search
//     }
//     // if no pageToken, i.e a fresh new search - respect hash/range keys that are directly passed
//     if (!queryArgs.hashKey && !!queryArgs.rangeKey) {
//         throw new ValidationError("cannot pass rangeKey without also passing hashKey")
//     }
//     // ensure any passed primary key is valid
//     if (queryArgs.hashKey && Object.keys(queryArgs.hashKey)[0] !== "HASH") {
//         let indexPkFound = false
//         for (const _ddbIndex of __tableModel().GlobalSecondaryIndexes) {
//             if (_ddbIndex.KeySchema[0].AttributeName === Object.keys(queryArgs.hashKey)[0]) {
//                 indexPkFound = true;
//                 queryArgs.dbIndexName = _ddbIndex.IndexName
//                 queryStrategyIdentified = true
//                 break;
//             } else {
//                 // support case where client name is used for index name
//                 const gsiKeyForRegularKey = getRegularKeyForSystemKey(Object.keys(queryArgs.hashKey)[0], __itemMetadata(String(queryArgs.__typename)))
//                 if (gsiKeyForRegularKey) {
//                     indexPkFound = true;
//                     queryArgs.dbIndexName = _ddbIndex.IndexName
//                     // swap the client name passed with the internal name
//                     queryArgs.hashKey[gsiKeyForRegularKey] = JSON.parse(JSON.stringify(Object.values(queryArgs.hashKey)[0]))
//                     delete queryArgs.hashKey[Object.keys(queryArgs.hashKey)[0]]
//                     queryStrategyIdentified = true
//                 }
//             }
//         }
//         if (!indexPkFound) {
//             throw new ValidationError("invalid primary key");
//         }
//         // ensure keys passed explicitly do not participate in the filter
//         queryArgs.filter && delete queryArgs.filter[Object.keys(queryArgs.hashKey)[0]]
//     }

//     // ensure any passed range keys is valid
//     if (queryArgs.hashKey && queryArgs.rangeKey && Object.keys(queryArgs.rangeKey)[0] !== "RANGE") {
//         let indexRangeKeyFound = false
//         for (const _ddbIndex of __tableModel().GlobalSecondaryIndexes) {
//             // ensure passed range key is valid
//             if (_ddbIndex.KeySchema[0].AttributeName === Object.keys(queryArgs.hashKey)[0]
//                 && _ddbIndex.KeySchema[1] && _ddbIndex.KeySchema[1].AttributeName === Object.keys(queryArgs.rangeKey)[0]) {
//                 queryArgs.dbIndexName = _ddbIndex.IndexName
//                 // support case where internal name is directly passed
//                 indexRangeKeyFound = true
//                 queryStrategyIdentified = true
//                 break
//             } else {
//                 const gsiKeyForRegularKey = getRegularKeyForSystemKey(Object.keys(queryArgs.hashKey)[0], __itemMetadata(String(queryArgs.__typename)))
//                 if (gsiKeyForRegularKey) {
//                     indexRangeKeyFound = true;
//                     queryArgs.dbIndexName = _ddbIndex.IndexName
//                     // swap the client name passed with the internal name
//                     //
//                     queryArgs.rangeKey[gsiKeyForRegularKey] = JSON.parse(JSON.stringify(Object.values(queryArgs.rangeKey)[0]))
//                     delete queryArgs.rangeKey[Object.keys(queryArgs.rangeKey)[0]]
//                     queryStrategyIdentified = true
//                 }
//             }
//         }
//         if (!indexRangeKeyFound) {
//             throw new Error("invalid range key");
//         }
//         queryArgs.filter && delete queryArgs.filter[Object.keys(queryArgs.rangeKey)[0]]
//     } else {
//         // do nothing
//         // if rangeKey is not passed, we allow the search only by hashKey.
//         // NOTE ddbIndex was already selected from the validation of the hashKey
//     }
//     if (!queryStrategyIdentified) {
//         queryArgs = locateQueryStrategyFromQueryArguments(queryArgs, pageToken)
//     }

//     // ----------------- When Index cannot be infered from query filter parameters, use a default one - typename by date_created
//     // This is realized by a NSHARD-TITEM always present index
//     if (isPredicate_undefined(queryArgs.hashKey)) { // i.e locateQueryStrategyFromQueryArguments did not succeeded
//         // so it will go for the NSHARD(-TITEM) query. Do not yet set hashKey, as it is being set per dates identified to query the TITEM
//         // here just try identify any present query param for locating rangeKey
//         //
//         const _itemMetadata = __itemMetadata(String(queryArgs.__typename))
//         const b = getAllApplicableIndexesByrangeKeys(queryArgs.filter, _itemMetadata)

//         // because this way we go towards TITEM[__rangegey?] search
//         if (!queryArgs.rangeKey) {
//             let rangeKeyFound = false
//             // pick rangeKey from applicable range keys ONLY if primary key is not defined
//             if (b.size > 0) {
//                 for (const [rangeKeyClientName, ddbConfigs] of b) {
//                     for (const ddbConfig of ddbConfigs) {
//                         if (Object.keys(queryArgs.filter).includes(rangeKeyClientName)) {
//                             queryArgs.dbIndexName = ddbConfig.IndexName
//                             queryArgs.rangeKey = { [ddbConfig.KeySchema[1].AttributeName]: queryArgs.filter[rangeKeyClientName] || queryArgs.filter[ddbConfig.KeySchema[1].AttributeName] }
//                             delete queryArgs.filter[ddbConfig.KeySchema[1].AttributeName]
//                             rangeKeyFound = true
//                             break
//                         }
//                     }
//                 }
//             }
//             if (!rangeKeyFound) {
//                 queryArgs.dbIndexName = "TITEM"
//             }
//         }
//         // do not set it here, rely on last check before the query
//         // queryStrategyIdentified = true
//     }

//     if (!queryArgs.__typename) {
//         logerror("Query params did not match any supported query paths, NOT QUERYING ", queryArgs)
//         throw new ValidationError("Query params did not match any supported query paths")
//     }

//     // const hashKeyssConfig = (((_domain().lookupItems as unknown) as Map<string, Mixin<typeof DynamoItem>>).get(queryArgs.__typename)?.__hashKeyss as DomainItemPropertiesConfigMap<DomainItem>);
//     let kvpFilter: KeyPredicateValueTripple = queryArgs.filter || {} as KeyPredicateValueTripple

//     // if the domainItemConfig HAS shardPeriodsOn: true - ONLY THEN DOES below:
//     //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
//     // CASE 1: passed _dates_created
//     // for each date in the _dates_created array do a search
//     // CASE 2: passed either _date_created_start or _date_created_stop or both
//     // if _date_created_start but no stop --> search from today till _date_created_start
//     // if _date_created_stop but no start --> search only for _date_created_stop
//     // CASE 3: no dates passed at all
//     // uses QUERY_DEFAULT_DAYS_BEFORE_TODAY for _date_created_start
//     // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

//     // if the domainItemConfig HAS shardPeriodsOn: false|undefined - ONLY THEN DOES below:
//     // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
//     // disregard any _dates_created _date_created_start, _date_created_stop passed and only search for TITEM=<type>|shardPartition
//     // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//     // if the domainItemConfig HAS shardPartitions > 1, then for does same query for each shard partion

//     if (queryArgs.dbIndexName && queryArgs.dbIndexName.startsWith("TITEM")) {
//         queryArgs.dbIndexName = queryArgs.dbIndexName || "TITEM"
//         // if (true === _domain()!.lookupItems!.get(queryArgs.__typename)!.shardPeriodsOn) {
//         //     console.log("SHARD PERIODS ARE ON FOR " + queryArgs.__typename)
//         // } else {
//         //     console.log("SHARD PERIODS ARE OFF FOR " + queryArgs.__typename)
//         // }
//         do {
//             // ONLY if not already have pageToken:
//             //- try infer _date_created_stop from primary_key
//             if (!pageToken && isPredicate_TITEM(queryArgs.hashKey)) {
//                 // In case primaryKey was explicitly set
//                 _date_created_stop = String(queryArgs.hashKey && Object.values(queryArgs.hashKey)[0].eq)//
//                     .substring(String(queryArgs.hashKey && Object.values(queryArgs.hashKey)[0].eq).indexOf('|') + 1,//
//                         queryArgs.hashKey && Object.values(queryArgs.hashKey[0].eq).lastIndexOf('|'))
//             } else if (!pageToken && "date_created" in kvpFilter) {
//                 // -try infer information for dates based on the date_created predicate
//                 const dateCreatedPredicate = Object.keys(kvpFilter["date_created"])[0]
//                 switch (dateCreatedPredicate) {
//                     case ("eq"):
//                         _date_created_stop = new Date(kvpFilter["date_created"][dateCreatedPredicate] as string).toISOString().slice(0, 10)
//                         break;
//                     case ("between"):
//                         //@ts-ignore
//                         _date_created_stop = new Date(kvpFilter["date_created"][dateCreatedPredicate]["max"] as string).toISOString().slice(0, 10)
//                         //@ts-ignore
//                         _date_created_start = new Date(kvpFilter["date_created"][dateCreatedPredicate]["min"] as string).toISOString().slice(0, 10)
//                         break;
//                     case ("in"):
//                         //@ts-ignore
//                         _dates_created = (kvpFilter["date_created"][dateCreatedPredicate] as string[]).map(dateStr => new Date(dateStr).toISOString().slice(0, 10))
//                         break;
//                     case ("le"):
//                         _date_created_start = addDays(new Date(kvpFilter["date_created"][dateCreatedPredicate] as string), -QUERY_DEFAULT_DAYS_BEFORE_TODAY).toISOString().slice(0, 10)
//                         _date_created_stop = new Date(kvpFilter["date_created"][dateCreatedPredicate] as string).toISOString().slice(0, 10)
//                         break;
//                     case ("lt"):
//                         _date_created_start = addDays(new Date(kvpFilter["date_created"][dateCreatedPredicate] as string), -1).toISOString().slice(0, 10)
//                         _date_created_stop = addDays(new Date(kvpFilter["date_created"][dateCreatedPredicate] as string), -QUERY_DEFAULT_DAYS_BEFORE_TODAY - 1).toISOString().slice(0, 10)
//                         break;
//                     case ("ge"):
//                         _date_created_start = new Date(kvpFilter["date_created"][dateCreatedPredicate] as string).toISOString().slice(0, 10)
//                         _date_created_stop = addDays(new Date(kvpFilter["date_created"][dateCreatedPredicate] as string), QUERY_DEFAULT_DAYS_BEFORE_TODAY).toISOString().slice(0, 10)
//                         break;
//                     case ("gt"):
//                         _date_created_start = addDays(new Date(kvpFilter["date_created"][dateCreatedPredicate] as string), +1).toISOString().slice(0, 10)
//                         _date_created_stop = addDays(new Date(kvpFilter["date_created"][dateCreatedPredicate] as string), QUERY_DEFAULT_DAYS_BEFORE_TODAY + 1).toISOString().slice(0, 10)
//                         break;
//                     default:
//                         throw new Error(dateCreatedPredicate + " not supported for date_created")
//                 }
//                 delete kvpFilter["date_created"]
//             } else if (!pageToken && !_dates_created && !kvpFilter["date_created"]) {
//                 // then, if no dates information passed at all search last QUERY_DEFAULT_DAYS_BEFORE_TODAY days 
//                 _date_created_stop = new Date().toISOString().slice(0, 10)
//                 _date_created_start = addDays(new Date(), -QUERY_DEFAULT_DAYS_BEFORE_TODAY).toISOString().slice(0, 10)
//             }

//             // defend from infinete loops
//             if ((!!_dates_created && !!_dates_created.length) && (_date_created_start || _date_created_stop)) {
//                 throw new Error("Allowed are either (_dates_created) or (_date_created_start or _date_created_stop) but not both")
//             }
//             if (!!_date_created_start && !!_date_created_stop
//                 && _date_created_start > _date_created_stop) {
//                 throw new Error("_date_created_start cannot be greater than _date_created_stop")
//             }

//             queryDate = (searchBackward ? _date_created_stop : _date_created_start) || _date_created_stop || (_dates_created && _dates_created.pop()) || addDays(new Date(), searchBackward ? 0 : -QUERY_DEFAULT_DAYS_BEFORE_TODAY).toISOString().slice(0, 10)
//             queryArgs.hashKey = { "TITEM": { "eq": withPrefix(`${queryArgs.__typename}|${queryDate}`, !!queryArgs.searchPublicData, identity) } }

//             do {
//                 // pageToken is either undefined or only with ddb index keys
//                 const strippedPageToken = onlyDdbIndexKeys(pageToken)
//                 pageToken = !!strippedPageToken ? !!Object.keys(strippedPageToken).length ? strippedPageToken : undefined : undefined

//                 const singleQueryResult = await queryItems<T>({
//                     ...queryArgs,
//                     dbIndexName: queryArgs.dbIndexName,
//                     filter: queryArgs.filter,
//                     pageToken,
//                     hashKey: queryArgs.hashKey,
//                     rangeKey: queryArgs.rangeKey,
//                     keysOnly: queryArgs.keysOnly,
//                     limit,
//                     searchBackward
//                 }, identity)

//                 pageToken = singleQueryResult.pageToken
//                 if (!!pageToken && !!Object.keys(pageToken).length) {
//                     Object.assign(pageToken, { _r: queryArgs.rangeKey && Object.keys(queryArgs.rangeKey)[0], _p: Object.keys(queryArgs.hashKey)[0], di: queryArgs.dbIndexName, searchBackward })
//                     // more results for the same date
//                     if (!!_date_created_start) {
//                         Object.assign(pageToken, { _dc_srt: queryDate })
//                     }
//                     if (!!_date_created_stop) {
//                         Object.assign(pageToken, { _dc_stp: _date_created_stop })
//                     }
//                     if (!!_dates_created) {
//                         _dates_created.push(queryDate)
//                         Object.assign(pageToken, { _dsc: _dates_created })
//                     }
//                 } else {
//                     pageToken = pageToken || {}
//                     if (!!_dates_created) {
//                         if (!!_dates_created.length) {
//                             // this date is searched, but other dates to be requested left
//                             Object.assign(pageToken, { _r: queryArgs.rangeKey && Object.keys(queryArgs.rangeKey)[0], _p: Object.keys(queryArgs.hashKey)[0], _dsc: _dates_created, di: queryArgs.dbIndexName, searchBackward })
//                             // otherwise do not add anything to pageToken, effectivley marking the search done
//                         }
//                     } else if (queryDate !== (searchBackward ? _date_created_start : _date_created_stop)) {
//                         Object.assign(pageToken, { _r: queryArgs.rangeKey && Object.keys(queryArgs.rangeKey)[0], _p: Object.keys(queryArgs.hashKey)[0], di: queryArgs.dbIndexName, searchBackward })
//                         if (!!_date_created_stop) {
//                             _date_created_stop = searchBackward ? addDays(new Date(queryDate), -1).toISOString().slice(0, 10) : _date_created_stop
//                             Object.assign(pageToken, { _dc_stp: _date_created_stop })
//                         }
//                         if (!!_date_created_start) {
//                             _date_created_start = searchBackward ? _date_created_start : addDays(new Date(queryDate), 1).toISOString().slice(0, 10)
//                             Object.assign(pageToken, { _dc_srt: _date_created_start })
//                         }
//                     }
//                 }
//                 // when jumping between indexes at the end of the previous there might be no results returned
//                 // avoid it by checking "&& !!result.count"
//                 if (!!pageToken && !!Object.keys(pageToken).length && !!singleQueryResult.count) {
//                     result.items = result.items.concat(singleQueryResult.items)
//                     result.count = result.count + singleQueryResult.count
//                     if (Array.isArray(singleQueryResult.excludedFromFilter)) {
//                         if (Array.isArray(result.excludedFromFilter)) {
//                             result.excludedFromFilter = result.excludedFromFilter.concat(result.excludedFromFilter.filter(exclusion => !result.excludedFromFilter?.includes(exclusion)))
//                         } else {
//                             result.excludedFromFilter = singleQueryResult.excludedFromFilter
//                         }
//                     }
//                 }
//                 if (result.count >= limit) {
//                     return result
//                 }
//             } while (!!pageToken && !!Object.keys(onlyDdbIndexKeys(pageToken)).length)
//         } while ((!!_dates_created && !!_dates_created.length) || ((_date_created_stop || _date_created_start) && queryDate !== (searchBackward ? _date_created_start : _date_created_stop)))
//     } else {
//         do {
//             // pageToken is either undefined or only with ddb index keys
//             const strippedPageToken = onlyDdbIndexKeys(pageToken)
//             pageToken = !!strippedPageToken ? !!Object.keys(strippedPageToken).length ? strippedPageToken : undefined : undefined

//             result = await queryItems({
//                 ...queryArgs,
//                 dbIndexName: queryArgs.dbIndexName,
//                 filter: queryArgs.filter,
//                 pageToken,
//                 hashKey: queryArgs.hashKey as PrimaryKey,
//                 rangeKey: queryArgs.rangeKey,
//                 keysOnly: queryArgs.keysOnly,
//                 limit,
//                 searchBackward
//             }, identity)
//             pageToken = result.pageToken
//             if (!!pageToken && !!Object.keys(pageToken).length) {
//                 // more results for the same index
//                 Object.assign(pageToken, { di: queryArgs.dbIndexName })
//             }
//             // when jumping between indexes at the end of the previous there might be no results returned
//             // avoid it by checking "&& !!result.count"
//             if (!!pageToken && !!Object.keys(pageToken).length && !!result.count) {
//                 return result
//             }
//         } while (!!pageToken && !!Object.keys(onlyDdbIndexKeys(pageToken)).length)
//         // } while ((!!_dates_created && !!_dates_created.length) || (!_dates_created && queryDate !== (_date_created_stop || today)))
//     }

//     return result
// }