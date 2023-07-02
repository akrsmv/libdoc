'use strict'
import { AttributeValue, BatchGetItemCommand, BatchGetItemInput, BatchGetItemOutput } from '@aws-sdk/client-dynamodb'
import { dynamoDbClient, fromAttributeMapArray, DB_NAME, toAttributeMapArray } from '../DynamoDbClient';
import { IDdbItemKey, DdbItem, __itemMetadata, _sep2, withPrefix, IIdentity, _sep1, withoutPrefix, prefixPattern, IClaims, _nGSIKeyPrefix, _sGSIKeyPrefix } from '@incta/ddb-model';
import { ValidationError, chunks, delay, logdebug } from '@incta/common-utils';
import { DdbLoadPeersInput, EMPTY_LOAD_PEERS_INPUT, Result } from './queryItems';

export type ddbBatchGetItemProps = {
    id: IDdbItemKey[] | string[] | string,
    loadPeersInput?: DdbLoadPeersInput,
    isPublic?: boolean
}

/**
 * Ensures mimum required keys in a projection expression are present
 * NOTE projection expression may not exists, which is a valid case for "give me the entire item"
 * @param loadPeersInput 
 * @returns 
 */
export const ensureProjectionExpressionRequiredKeys = (loadPeersInput: DdbLoadPeersInput): void => {
    if (!loadPeersInput.projectionExpression) {
        return // having projectionExpression=undefined is an important feature, meanining return me ALL properties
    }
    const tmpProjectionArr = loadPeersInput.projectionExpression.split(',').map(key => key.trim());
    if (!tmpProjectionArr.includes("HASH")) {
        tmpProjectionArr.push("HASH")
    }
    if (!tmpProjectionArr.includes("rev")) {
        tmpProjectionArr.push("rev")
    }
    if (!tmpProjectionArr.includes("RANGE")) {
        tmpProjectionArr.push("RANGE")
    }
    if (!tmpProjectionArr.includes("__typename")) {
        tmpProjectionArr.push("__typename")
    }
    loadPeersInput.projectionExpression = tmpProjectionArr.join(",")
}


export const inferIdentityOfExitingkey = (str: string): Partial<IIdentity<Partial<IClaims>>> => {
    const match = str.match(prefixPattern)
    const __prefix = ((match ?? [''])[0]).replace(/\^/g, '')
    const [__usr, __agt] = String(__prefix).split(`${_sep1}-${_sep1}`)
    return { sub: `${__usr || ''}`, claims: { active_agent: `${__agt || ''}` } }
}
export const inferItemKeys = (params: any, stripPrefix: boolean) => {
    let keys: IDdbItemKey[]
    let identity = {}
    if (params && Array.isArray(params.id) && params.id.length) {
        keys = params.id.map((i: IDdbItemKey) => {
            let unprefixedKey: IDdbItemKey
            if (typeof i === 'object' && i.id) { // infer from 'id' if present
                identity = inferIdentityOfExitingkey(i.id)
                const idNoPrefix = withoutPrefix(i.id)
                unprefixedKey = { HASH: idNoPrefix.split(_sep2)[0], RANGE: idNoPrefix.split(_sep2)[1] }
            } else if (typeof i === 'object') {
                //if it is object without id string, assume there are HASH/RANGE keys. Otherwise nothing todo more
                identity = inferIdentityOfExitingkey(i.HASH)
                const hashNoPrefix = withoutPrefix(i.HASH)
                const rangeNoPrefix = withoutPrefix(i.RANGE)
                unprefixedKey = { HASH: hashNoPrefix, RANGE: rangeNoPrefix }
            } else {
                // treat it as string -> Latest approach, above may become obsolate
                identity = inferIdentityOfExitingkey(i)
                const idNoPrefix = withoutPrefix(String(i))
                const [hash, range] = idNoPrefix.split(_sep2)
                unprefixedKey = { HASH: hash, RANGE: range }
            }
            return { HASH: withPrefix(unprefixedKey.HASH, stripPrefix, identity), RANGE: withPrefix(unprefixedKey.RANGE, stripPrefix, identity) }
        })
    } else if (params && params.id && typeof params.id === 'string') {
        // if 'id' is string assume it is in the form HASH#RANGE (_sep2 = '#')
        keys = String(params.id).split(',').filter(i => !!i).map(i => {
            const identity = inferIdentityOfExitingkey(i)
            const idNoPrefix = withoutPrefix(i)
            const [hash, range] = idNoPrefix.split(_sep2)
            return { HASH: withPrefix(hash, stripPrefix, identity), RANGE: withPrefix(range, stripPrefix, identity) }
        })
    } else if (params && !Array.isArray(params.id) && typeof params.id === 'object') {
        if (typeof params.id.id === 'string') { // infer from 'id' if present
            identity = inferIdentityOfExitingkey(params.id.id)
            const idNoPrefix = withoutPrefix(params.id.id)
            params.id.HASH = idNoPrefix.split(_sep2)[0]
            params.id.RANGE = idNoPrefix.split(_sep2)[1]
        }
        keys = [{ HASH: withPrefix(params.id.HASH, stripPrefix, identity), RANGE: withPrefix(params.id.RANGE, stripPrefix, identity) }]
    } else if ("HASH" in params && "RANGE" in params) {
        identity = inferIdentityOfExitingkey(params.HASH)
        const hashNoPrefix = withoutPrefix(params.HASH)
        const rangeNoPrefix = withoutPrefix(params.RANGE)
        keys = [{ HASH: withPrefix(hashNoPrefix, stripPrefix, identity), RANGE: withPrefix(rangeNoPrefix, stripPrefix, identity) }]
    } else {
        throw new Error("No id(s) provided")
    }
    // we want it not to fail, rather give empty results for not recognized ids
    // if (keys.filter(key => !key.HASH || !key.RANGE).length) {
    //     throw new ValidationError("Not able to recognize id(s) provided")
    // }
    return keys.filter(key => !!key.HASH && !!key.RANGE)
}
const stripSystemKeys = <T extends DdbItem = DdbItem>(item: Record<string, any>) => Object.keys(item)
    .reduce((accum, key) =>
        key.startsWith(_nGSIKeyPrefix)
            || key.startsWith(_sGSIKeyPrefix)
            // || key === "TITEM"
            // || key === "NSHARD"
            // cannot skip below bcause in cases of update/delete we need info from RANGE key, also __typename is very important to get item metadata
            // || key === "__typename"
            // || key === "HASH"
            // || key === "RANGE"
            || item[key] === "##dell##" ?
            accum
            : Object.assign(accum, { [key]: item[key] })
        , {}) as T

/**
 * 
 * @param params 
 * @returns 
 */
export const getItems = async <T extends DdbItem = DdbItem>(params: ddbBatchGetItemProps, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<Result<T>> => {
    const infrredKeys = inferItemKeys(params, false) // do not remove any prefixes found
    // if identity is passed this means we want to verify access only to certain keys, that are wih same identity
    if (!!identity) {
        //validate that the identity of caller matches identity of keys requested
        for (const key of infrredKeys) {
            const keyIdentiy = inferIdentityOfExitingkey(`${key.HASH}${_sep2}${key.RANGE}`)
            if (!!keyIdentiy.sub && !!keyIdentiy.claims?.active_agent) {
                // make the check only if keyIdentity is found, i.e it is not about public data
                if (keyIdentiy.sub !== identity?.sub || keyIdentiy.claims?.active_agent !== identity?.claims?.active_agent) {
                    throw new ValidationError('Identity of caller and requested keys do not match')
                }
            }
        }
    }

    // keys are validated, begin getting items
    const keys = toAttributeMapArray(infrredKeys)

    const loadPeersInput = params.loadPeersInput || EMPTY_LOAD_PEERS_INPUT.loadPeersInput // default behaviour, do not load peers if not requested
    ensureProjectionExpressionRequiredKeys(loadPeersInput)

    let result: T[] = [], dbResult: BatchGetItemOutput

    const getChunkOf100 = async (ChunkOf100: Record<string, AttributeValue>[]) => {
        const batchGetItemInput: BatchGetItemInput = {
            RequestItems: {
                [DB_NAME()]: {
                    Keys: ChunkOf100,
                    ProjectionExpression: loadPeersInput.projectionExpression ? loadPeersInput.projectionExpression.split(",").map(key => `#${key}`, []).join(",") : undefined,
                    ExpressionAttributeNames: loadPeersInput.projectionExpression ? loadPeersInput.projectionExpression.split(",").reduce<Record<string, string>>((accum, key) => {
                        accum[`#${key}`] = `${key}`
                        return accum
                    }, {}) : undefined,
                }
            },
            ReturnConsumedCapacity: 'TOTAL',
        }
        // TODO retry count and retry Delay algorithm. Error after N attempts
        let retryCount = 0
        do {
            logdebug("[getItems] ==>DDB batchGetItemInput ", batchGetItemInput);
            dbResult = await dynamoDbClient().send(new BatchGetItemCommand(batchGetItemInput))
            logdebug("[getItems] <==DDB BatchGetItemOutput: ", dbResult)

            batchGetItemInput.RequestItems = dbResult.UnprocessedKeys || {}

            result.push(...fromAttributeMapArray<T>(dbResult.Responses && dbResult.Responses[DB_NAME()]).map<T>(item => stripSystemKeys<T>(item)))

            if (!!dbResult.UnprocessedKeys && !!Object.keys(dbResult.UnprocessedKeys).length) {
                // backoff a little and try again: https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchGetItem.html
                logdebug("[getItems] Backing off ")
                await delay(500 + 500 * Math.random() + retryCount + retryCount * 100)
                /* 1st 10 delays sample:
                0: 0.5
                1: 0.6104346313915622
                2: 1.1087368650884224
                3: 1.130255812332813
                4: 1.2773078708353793
                5: 1.397925966881864
                6: 1.269693258014985
                7: 1.2741515298344617
                8: 1.5875481082420115
                9: 1.620069271274317
                10: 1.7826318707455253
                */
                retryCount += 1
            }
        } while (!!dbResult.UnprocessedKeys && !!Object.keys(dbResult.UnprocessedKeys).length)

        if (loadPeersInput.loadPeersLevel !== 0) {
            for (let resultItem of result) {
                await populatePeerKeys(resultItem, loadPeersInput.loadPeersLevel, loadPeersInput.peersPropsToLoad, loadPeersInput.projectionExpression)
            }
        }
    }

    await Promise.all(chunks(keys, 100).map<Promise<void>>(chunk => getChunkOf100(chunk)))

    let output: Result<T> = {
        items: result,
        count: result.length,
        // pageToken: TODO it is currently looping above in the code, so pageToken will be always exhausted within this method and never propagated outside
    }
    loadPeersInput.projectionExpression?.includes('selectionSetList') && (output = { ...output, selectionSetList: loadPeersInput.selectionSetList?.split(',') })

    return output
}

/**
 * This method is exclusively operating over item metadata's `peerKeys` property 
 * 
 * NOTE: An item's refKey, being also a peerKey is a private case, and imposes further limitation to the peerKey - IT CANNOT BE OF TYPE string[] but only of type string
 * @param resultItem 
 * @param loadPeersLevel 
 * @param peersPropsToLoad 
 * @param projectionExpression 
 * @returns 
 */
export const populatePeerKeys = async (resultItem: DdbItem,
    loadPeersLevel: number | undefined,
    peersPropsToLoad: string[] | undefined,
    projectionExpression: string | undefined) => {
    logdebug(`[populatePeerKeys] loadPeersLevel: `, loadPeersLevel)
    const _item_metadata = __itemMetadata(resultItem)
    if (!loadPeersLevel) return
    const __hashKeyssToItemsTmp0 = _item_metadata.peerKeys
    if (!__hashKeyssToItemsTmp0) {
        logdebug(`[populatePeerKeys] hashKeysToItemsTmp0 is undefined. Returning from populatePeerKeys: `, __hashKeyssToItemsTmp0)
        return
    }
    // take all peer keys, which were requested in peersPropsToLoad, and are valid item keys
    const __hashKeyssToItems = Array.from(__hashKeyssToItemsTmp0.keys()).filter(key => peersPropsToLoad === undefined || peersPropsToLoad.indexOf(String(key)) > -1 || peersPropsToLoad.indexOf(`${String(key)[0].toUpperCase()}${String(key).slice(1)}`) > -1)
    const keysToLoad = __hashKeyssToItems.reduce<Map<string, string[]>>((accum, key) => {
        let primaryKeysToLoadForThisKey: string[]
        if (!accum.has(key) || !accum.get(key)) {
            primaryKeysToLoadForThisKey = []
            accum.set(key, primaryKeysToLoadForThisKey)
        } else {
            primaryKeysToLoadForThisKey = accum.get(key) || []
        }

        if (Object.keys(resultItem).indexOf(String(key)) > -1 && !!resultItem[key]) {
            if (resultItem[key].includes(',')) {
                for (const singleId of resultItem[key].split(',')) {
                    // primaryKeysToLoadForThisKey.push(existingPKWithoutPrefix(null, singleRefKey))
                    primaryKeysToLoadForThisKey.push(singleId)
                }
            } else if (Array.isArray(resultItem[key])) {
                for (const singleId of resultItem[key]) {
                    // primaryKeysToLoadForThisKey.push(existingPKWithoutPrefix(null, singleRefKey))
                    primaryKeysToLoadForThisKey.push(singleId)
                }
            } else {
                // primaryKeysToLoadForThisKey.push(existingPKWithoutPrefix(null, resultItem[key]))
                primaryKeysToLoadForThisKey.push(resultItem[key])
            }
        }
        return accum
    }, new Map<string, string[]>)
    logdebug("[populatePeerKeys] keysToLoad ", keysToLoad)

    const dedublicatedIdsToLoad = Array.from(new Set(
        Array.from(keysToLoad.values()).reduce<string[]>((accum, primaryKeysToLoad) => { accum = accum.concat(primaryKeysToLoad); return accum }, [])
            .map(key => JSON.stringify(key))
    )).map(dedublicated => JSON.parse(dedublicated))
    logdebug("[populatePeerKeys]:dedublicatedIdsToLoad= ", keysToLoad)

    if (dedublicatedIdsToLoad.length > 0) {
        const loadedItemsFromKeys = await getItems({
            id: dedublicatedIdsToLoad,
            // pks: Array.from(keysToLoad.reduce<Map<string, IDdbItemKey>>((accum, item) => { accum.set(`${item.primaryKeyValue.HASH}${item.primaryKeyValue.RANGE}`, item.primaryKeyValue); return accum }, new Map()).values()),
            loadPeersInput: {
                loadPeersLevel: --loadPeersLevel,
                peersPropsToLoad,
                projectionExpression
            }
        }, null)

        for (const [peerKey, ids] of keysToLoad) {
            // item's peerKey may be of type string OR string[]
            if (_item_metadata.keys?.get(peerKey) === 'string') {
                //in case 'string' - populated is only a single object 
                resultItem[`${peerKey[0].toUpperCase()}${peerKey.slice(1)}`] = loadedItemsFromKeys.items.filter(item => ids.includes(item.id))[0] || undefined
            } else if (_item_metadata.keys?.get(peerKey) === 'string[]') {
                //in case 'string[]' - populated is the array returned from ddb (querying for all the pks)
                resultItem[`${peerKey[0].toUpperCase()}${peerKey.slice(1)}`] = loadedItemsFromKeys.items.filter(item => ids.includes(item.id))
            }
        }
        // logdebug("[populatePeerKeys]:LOADED ITEM: ", resultItem) --> too much logging in recursive calls
    }
}
