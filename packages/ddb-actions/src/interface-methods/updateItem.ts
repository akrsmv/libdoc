'use strict'

import { AttributeValue, TransactWriteItem, TransactWriteItemsCommand, TransactWriteItemsInput } from '@aws-sdk/client-dynamodb'
import { DB_NAME, toAttributeMap, preparePkforUniqueItemKey, ddbRequest } from '../DynamoDbClient';
import { DdbItem, __itemMetadata, getRegularKeyForSystemKey, isUniqueKey, withPrefix, versionString, IIdentity, _sep1, IClaims, _nGSIKeyPrefix, _sGSIKeyPrefix, calculatePrivateOrPublicData } from '@incta/ddb-model';
import { ValidationError, convertDatesToIsoDateStrings, get_correlation_token, logdebug } from '@incta/common-utils';
import { getItems, inferItemKeys } from './getItems';
import { syncItemSystemKeys } from '../utils/syncItemSystemKeys';
import { checkRequiredKeysPresent } from '../validations/checkRequiredKeysPresent';
import { getSystemKeysForReguarKeys } from '../utils/getSystemKeysForRegularKey';
import { EMPTY_LOAD_PEERS_INPUT } from './queryItems';

const stripSystemKeys = (item: Record<string, any>) => Object.keys(item)
    .reduce((accum, key) =>
        key.startsWith(_nGSIKeyPrefix)
            || key.startsWith(_sGSIKeyPrefix)
            || key === "TITEM"
            || key === "NSHARD"
            || key === "__typename"
            || key === "rev"
            || key === "HASH"
            || key === "RANGE"
            || item[key] === "##dell##"
            || key === "user_created"
            || key === "user_updated"
            || key === "date_created"
            || key === "date_updated" ?
            accum
            : Object.assign(accum, { [key]: item[key] })
        , {})

export const updateItem = async <T extends DdbItem>(itemUpdates: Partial<T>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {
    return await __updateOrPatchItem('update', itemUpdates, identity)
}

export const patchItem = async <T extends DdbItem>(itemUpdates: Partial<T>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {
    return await __updateOrPatchItem('patch', itemUpdates, identity)
}

const __updateOrPatchItem = async <T extends DdbItem>(actionToPerform: 'update' | 'patch', itemUpdates: Partial<T>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {
    itemUpdates = {
        ...inferItemKeys(itemUpdates, false)[0],
        ...itemUpdates
    }

    //#region validate proper rev and minimum PK info passed
    if (!itemUpdates.HASH || !itemUpdates.RANGE || !(itemUpdates.rev || itemUpdates.rev === 0)) {
        throw new ValidationError(`${get_correlation_token()}: {HASH,RANGE,rev} keys are mandatory when updating`)
    }
    if (!itemUpdates.__typename) {
        throw new ValidationError(`${get_correlation_token()}: unknown __typename`)
    }
    const dynamoExistingItems = await getItems({ ...EMPTY_LOAD_PEERS_INPUT, id: [{ HASH: itemUpdates.HASH, RANGE: itemUpdates.RANGE }] }, identity);

    if (dynamoExistingItems.items.length !== 1) {
        throw new ValidationError(`${get_correlation_token()}: Unable to locate item corresponding to requested { HASH: ${itemUpdates.HASH}, RANGE: ${itemUpdates.RANGE}}`)
    }
    // putItem does not set rev, i.e first time item inserted and no updates made, rev = undefined
    if ("rev" in dynamoExistingItems.items[0] && dynamoExistingItems.items[0].rev !== itemUpdates.rev) {
        throw new ValidationError(`${get_correlation_token()}: revision passed (${itemUpdates.rev}) does not match existing item revision: ${dynamoExistingItems.items[0].rev}`)
    }
    //#endregion 

    const existingItem = dynamoExistingItems.items[0]
    const dexistingItem = toAttributeMap(existingItem);
    const _item_metadata = __itemMetadata(existingItem)

    const dexistingItemkey = { HASH: { S: withPrefix(itemUpdates.HASH, calculatePrivateOrPublicData(existingItem, _item_metadata), identity) }, RANGE: { S: withPrefix(itemUpdates.RANGE, calculatePrivateOrPublicData(existingItem, _item_metadata), identity) } };
    const drevUpdates = toAttributeMap({ "inc_revision": 1, "start_revision": 0, "rev": itemUpdates.rev })

    //#region check for any refs loaded and unload them before updating starts
    for (const prop of Object.keys(itemUpdates)) {
        if (_item_metadata.peerKeys.has(prop.toLocaleLowerCase())
            && prop === `${prop[0].toUpperCase()}${prop.slice(1)}`) {
            delete itemUpdates[prop]
        }
    }
    itemUpdates = convertDatesToIsoDateStrings(stripSystemKeys(itemUpdates), _item_metadata) as Partial<T>
    //#endregion

    const ditemUpdates: Record<string, AttributeValue> = toAttributeMap(itemUpdates)
    if (actionToPerform === 'update') {
        checkRequiredKeysPresent(ditemUpdates);
    }

    const [_obsolateSystemKeys, _missingSystemKeys] = syncItemSystemKeys(dexistingItem)

    const _regularKeysForDelete =
        actionToPerform === 'update' ?
            Object.keys(stripSystemKeys(dexistingItem))
                .filter(key => !ditemUpdates[key] || (ditemUpdates[key] && ditemUpdates[key].S === "##del##" && !isUniqueKey(key, _item_metadata)))
            // actionToPerform === 'patch':
            : Object.keys(ditemUpdates).filter(key => ditemUpdates[key].S === "##del##" && !isUniqueKey(key, _item_metadata) && dexistingItem[key])

    const _regularKeysForUpdate: string[] =
        actionToPerform === 'update' ?
            Object.keys(stripSystemKeys(ditemUpdates))
                .filter(key => !_regularKeysForDelete.includes(key) && (!dexistingItem[key] || JSON.stringify(dexistingItem[key]) !== JSON.stringify(ditemUpdates[key])))
            // actionToPerform === 'patch':
            : Object.keys(stripSystemKeys(ditemUpdates)).filter(key => (!dexistingItem[key] || JSON.stringify(dexistingItem[key]) !== JSON.stringify(ditemUpdates[key])) && ditemUpdates[key].S !== "##del##")

    _regularKeysForUpdate.push('date_updated')
    _regularKeysForUpdate.push('TITEM')
    _regularKeysForUpdate.push('user_updated')

    const _systemKeysForDelete = getSystemKeysForReguarKeys(_regularKeysForDelete, ditemUpdates, existingItem.__typename)
    const _systemKeysForUpdate: string[] = getSystemKeysForReguarKeys(_regularKeysForUpdate, ditemUpdates, existingItem.__typename)
    const _uniqueKeysToCreate: string[] = _item_metadata.uniqueKeys.filter(key => _regularKeysForUpdate.includes(key) && existingItem[key] !== itemUpdates[key])
    const _uniqueKeysToDelete: string[] = _uniqueKeysToCreate.filter(key => !!existingItem[key] && existingItem[key] !== itemUpdates[key]).concat(_regularKeysForDelete.filter(key => isUniqueKey(key, _item_metadata)))
    const _historyItemRegularKeysToCreate: string[] = _regularKeysForUpdate.concat(_regularKeysForDelete)

    const keysForDelete = _obsolateSystemKeys.concat(_regularKeysForDelete).concat(_systemKeysForDelete);
    const systemKeysForRestore = _missingSystemKeys.filter(key => !_systemKeysForDelete.includes(key) && !_systemKeysForUpdate.includes(key))

    const ExpressionAttributeNames = Object.assign(
        {},
        _regularKeysForUpdate.reduce<{ [key: string]: string }>((accum, key) => {
            accum[`#${key}`] = key
            return accum
        }, {}),
        _systemKeysForUpdate.reduce<{ [key: string]: string }>((accum, key) => {
            accum[`#${key}`] = key
            return accum
        }, {}),
        //--- a system key is considered missing only if existing item had value for its regular key but corresp metadata sys keys were empty **AND** there is no regular key present in the update payload
        systemKeysForRestore.reduce<{ [key: string]: string }>((accum, key) => {
            accum[`#${key}`] = key
            return accum
        }, {}),
        //---
        Array.from(keysForDelete).reduce<{ [key: string]: string }>((accum, key) => {
            accum[`#${key}`] = key
            return accum
        }, {
            '#rev': 'rev'
        })
    );

    if (Object.keys(ExpressionAttributeNames).length === 4 &&
        "#date_updated" in ExpressionAttributeNames &&
        "#TITEM" in ExpressionAttributeNames &&
        "#user_updated" in ExpressionAttributeNames &&
        "#rev" in ExpressionAttributeNames) {
        // avoid empty updates
        return
    }
    const date_updated = new Date()
    const itemTransactWriteItemList: TransactWriteItem[] = ([
        {
            Update: {
                ConditionExpression: `(attribute_not_exists(#rev) OR #rev = :rev)`,
                Key: dexistingItemkey,
                TableName: DB_NAME(),
                ExpressionAttributeNames,
                ExpressionAttributeValues: Object.assign(
                    {},
                    _regularKeysForUpdate.reduce<{ [key: string]: AttributeValue }>((accum, key) => {
                        accum[`:${key}`] = ditemUpdates[key]
                        return accum
                    }, {}),
                    _systemKeysForUpdate.reduce<{ [key: string]: AttributeValue }>((accum, key) => {
                        const regularKeyName = String(getRegularKeyForSystemKey(key, _item_metadata))
                        if (_item_metadata.keys.get(regularKeyName) === 'string') {
                            accum[`:${key}`] = { S: withPrefix(String(ditemUpdates[regularKeyName].S), calculatePrivateOrPublicData(existingItem, _item_metadata), identity) }
                        } else {
                            accum[`:${key}`] = ditemUpdates[regularKeyName]
                        }
                        return accum
                    }, {}),
                    //--- a system key is considered missing only if existing item had value for it regular key but corresp metadata sys keys were empty **AND** there is no regular key present in the update payload ==> thus it will not be present neither in systemKeysForUpdate nor _systemKeysForDelete
                    systemKeysForRestore.reduce<{ [key: string]: AttributeValue }>((accum, key) => {
                        const regularKeyName = String(getRegularKeyForSystemKey(key, _item_metadata))
                        if (_item_metadata.keys.get(regularKeyName) === 'string') {
                            accum[`:${key}`] = { S: withPrefix(String(dexistingItem[regularKeyName].S), calculatePrivateOrPublicData(existingItem, _item_metadata), identity) }
                        } else {
                            accum[`:${key}`] = dexistingItem[regularKeyName]
                        }
                        return accum
                    }, {}),
                    //---
                    Object.keys(drevUpdates).reduce<{ [key: string]: AttributeValue }>((accum, key) => {
                        accum[`:${key}`] = drevUpdates[key]
                        return accum
                    }, { //always mark when update happened and who did it:
                        ':date_updated': { S: date_updated.toISOString() },
                        ':user_updated': { S: String(identity?.sub) },
                        ':TITEM': { S: withPrefix(`${_item_metadata.__typename}${_sep1}${date_updated.toISOString().slice(0, 10)}`, calculatePrivateOrPublicData(existingItem, _item_metadata), identity) }
                    })
                ),
                UpdateExpression: "set #rev = if_not_exists(#rev, :start_revision) + :inc_revision"
                    + (systemKeysForRestore.length > 0
                        ? `, ${systemKeysForRestore.map(uk => `#${uk} = :${uk}`).join(", ")}`
                        : '')
                    + (_regularKeysForUpdate.concat(_systemKeysForUpdate).length > 0
                        ? `, ${_regularKeysForUpdate.concat(_systemKeysForUpdate).map(uk => `#${uk} = :${uk}`).join(", ")}`
                        : '')
                    + (keysForDelete.length > 0 ? ` remove ${Array.from(keysForDelete).map(key => `#${key}`).join(", ")}` : ''),
                ReturnValuesOnConditionCheckFailure: "ALL_OLD"
            }
        },
        { // update (which actually will create) the history record
            Update: {
                TableName: DB_NAME(),
                ReturnValuesOnConditionCheckFailure: "ALL_OLD",
                Key: Object.assign({
                    HASH: { S: dexistingItemkey.HASH.S },
                    RANGE: { S: existingItem.RANGE.replace(/v_\d+/, versionString((existingItem.rev || 0) + 1)) }
                }),
                UpdateExpression: `set ${_historyItemRegularKeysToCreate.map(uk => `#${uk} = :${uk}`).join(", ")}, #__typename = :__typename`,
                ExpressionAttributeNames: _historyItemRegularKeysToCreate
                    .reduce<{ [key: string]: string }>((accum, key) => {
                        accum[`#${key}`] = key
                        return accum
                    }, {
                        '#__typename': '__typename' // always needed as graphql mappers need to know the type
                    }),
                ExpressionAttributeValues:
                    _historyItemRegularKeysToCreate
                        .reduce<{ [key: string]: AttributeValue }>((accum, key) => {
                            accum[`:${key}`] = dexistingItem[key] || { NULL: true }  // value may not existed in item being updated
                            return accum
                        }, {// always needed as graphql mappers need to know the type 
                            ":__typename": { S: `${existingItem.__typename}History` }
                        })
            }
        }
    ] as TransactWriteItem[])
        .concat(
            _uniqueKeysToDelete.reduce<TransactWriteItem[]>((accum, key) => {
                accum.push({
                    Delete: {
                        Key: toAttributeMap({ HASH: withPrefix(preparePkforUniqueItemKey(existingItem, key), calculatePrivateOrPublicData(existingItem, _item_metadata), identity), RANGE: withPrefix(`${existingItem[key]}`, calculatePrivateOrPublicData(existingItem, _item_metadata), identity) }),
                        TableName: DB_NAME(),
                        ReturnValuesOnConditionCheckFailure: "ALL_OLD"
                    }
                })
                return accum
            }, []))
        .concat(
            _uniqueKeysToCreate.reduce<TransactWriteItem[]>((accum, key) => {
                accum.push({
                    Put: {
                        Item: toAttributeMap({ HASH: withPrefix(preparePkforUniqueItemKey(existingItem, key), calculatePrivateOrPublicData(existingItem, _item_metadata), identity), RANGE: withPrefix(`${itemUpdates[key]}`, calculatePrivateOrPublicData(existingItem, _item_metadata), identity) }),
                        TableName: DB_NAME(),
                        ReturnValuesOnConditionCheckFailure: "ALL_OLD",
                        ConditionExpression: "(attribute_not_exists(#HASH) and attribute_not_exists(#RANGE))",
                        ExpressionAttributeNames: { "#HASH": "HASH", "#RANGE": "RANGE" }
                    }
                })
                return accum
            }, []));

    const params: TransactWriteItemsInput = {
        TransactItems: itemTransactWriteItemList,
        ReturnConsumedCapacity: "TOTAL",
        ReturnItemCollectionMetrics: "SIZE",
        // ClientRequestToken: correlation_id ? // TODO
    }

    logdebug(`[${actionToPerform}] ==>DDB TransactWriteItemsInput`, params)
    // const result = await dynamoDbClient().send(new TransactWriteItemsCommand(params));
    const result = await ddbRequest(new TransactWriteItemsCommand(params))
    logdebug(`[${actionToPerform}] <==DDB TransactWriteItemsOutput: `, result)
}