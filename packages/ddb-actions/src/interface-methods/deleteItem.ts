'use strict'

import { DB_NAME, toAttributeMap, deletedVersionString, preparePkforUniqueItemKey, ddbRequest } from '../DynamoDbClient';
import { IClaims, IDdbItemKey, IIdentity, __itemMetadata, withoutPrefix } from '@incta/ddb-model';
import { getItems, inferIdentityOfExitingkey, inferItemKeys } from './getItems';
import { _sep1, withPrefix } from '@incta/ddb-model';
import { get_correlation_token, logdebug } from '@incta/common-utils';
import { AttributeValue, TransactWriteItem, TransactWriteItemsCommand, TransactWriteItemsInput } from '@aws-sdk/client-dynamodb';
import { EMPTY_LOAD_PEERS_INPUT } from './queryItems';


export const deleteItem = async (dto: Required<IDdbItemKey>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {

    dto = {
        ...inferItemKeys(dto, false)[0],
        ...dto
    }

    logdebug("[deleteItem] input", dto)

    if (!dto.HASH || !dto.RANGE || !(dto.rev || dto.rev === 0)) {
        throw new Error(`${get_correlation_token()}: {id,rev} keys are mandatory when deleting`)
    }
    const dynamoExistingItems = await getItems({ ...EMPTY_LOAD_PEERS_INPUT, id: [{ HASH: dto.HASH, RANGE: dto.RANGE }] }, identity);
    if (dynamoExistingItems.items.length !== 1) {
        throw new Error(`${get_correlation_token()}: Unable to locate item corresponding to requested { HASH: ${dto.HASH}, RANGE: ${dto.RANGE}}`)
    }
    // putItem does not set rev, i.e first time item inserted and no updates made, rev = undefined
    if ("rev" in dynamoExistingItems.items[0] && dynamoExistingItems.items[0].rev !== dto.rev) {
        throw new Error(`${get_correlation_token()}: rev passed (${dto.rev}) does not match existing item rev: ${dynamoExistingItems.items[0].rev}`)
    }
    const existingItem = dynamoExistingItems.items[0]
    const _item_metadata = __itemMetadata(existingItem)

    const itemUpdates = { HASH: existingItem.HASH, RANGE: existingItem.RANGE } //i.e all items are to be updated, when deleting

    const itemGSIs: string[] = Array.from(_item_metadata.gsiKeys.values()).reduce((accum, nextArr) => accum.concat(nextArr), [])

    const dexistingItemkey = toAttributeMap(itemUpdates);
    const dexistingItem = toAttributeMap(existingItem)
    const existingItemKeyIdentity = inferIdentityOfExitingkey(existingItem.id)

    const updateExprHistory = `set ${Object.keys(dexistingItem).filter(diu => diu !== "HASH" && diu !== "RANGE" && itemGSIs.indexOf(diu) === -1).map(uk => `#${uk} = :${uk}`).join(", ")}`
    // replace v_0 with d_<current revisions + 1>
    const historyRecordRANGE = withPrefix(withoutPrefix(existingItem.RANGE).replace(/v_\d+/, deletedVersionString(existingItem.rev ? ++existingItem.rev : 1)), false, existingItemKeyIdentity)
    const uqItems: TransactWriteItem[] = _item_metadata.uniqueKeys.reduce<TransactWriteItem[]>((uqConstraints: TransactWriteItem[], _key: string) => {
        if (existingItem[_key] !== undefined) { // if key exists on object
            uqConstraints.push(
                {
                    Delete: {
                        Key: { HASH: { S: withPrefix(preparePkforUniqueItemKey(existingItem, String(_key)), _item_metadata.isPublicItem || !!existingItem.isPublic, existingItemKeyIdentity) }, RANGE: { S: withPrefix(String(existingItem[_key]), _item_metadata.isPublicItem || !!existingItem.isPublic, existingItemKeyIdentity) } },
                        TableName: DB_NAME(),
                        ReturnValuesOnConditionCheckFailure: "ALL_OLD"
                    }
                }
            )
        }
        return uqConstraints
    }, [])
    const itemTransactWriteItemList: TransactWriteItem[] = [
        {
            Delete: {
                Key: dexistingItemkey,
                TableName: DB_NAME(),
                ReturnValuesOnConditionCheckFailure: "ALL_OLD"
            }
        },
        { // create a history record
            Update: {
                TableName: DB_NAME(),
                ReturnValuesOnConditionCheckFailure: "ALL_OLD",
                Key: Object.assign({
                    HASH: { S: String(dexistingItemkey.HASH.S) },
                    RANGE: { S: historyRecordRANGE }
                }),
                UpdateExpression: updateExprHistory,
                ExpressionAttributeNames: Object.keys(dexistingItem).reduce<{ [key: string]: string }>((accum, key) => {
                    if (key !== "HASH" && key !== "RANGE") { // all existing keys except the table HASH/RANGE keys, 
                        // and except all gsi keys (we want to de-index the deleted item)
                        if (key !== "TITEM" && key !== "__typename" && key !== "id" // keep TITEM key for searching for deleted items
                            && itemGSIs.indexOf(key) === -1) {
                            accum[`#${key}`] = key
                        }
                    }
                    return accum
                },
                    // and also the system GSIs
                    { "#TITEM": "TITEM", "#__typename": "__typename", "#id": "id" }),
                ExpressionAttributeValues: Object.assign(
                    {},
                    Object.keys(dexistingItem).reduce<{ [key: string]: AttributeValue }>((accum, key) => {
                        if (key !== "HASH" && key !== "RANGE") { // all existing keys except the table HASH key
                            // and except all gsi keys (we want to de-index the deleted item)
                            if (key !== "TITEM" && key !== "__typename" && key !== "id"
                                && itemGSIs.indexOf(key) === -1) {
                                accum[`:${key}`] = dexistingItem[key]
                            }
                        }
                        return accum
                    }, {
                        ":TITEM": { S: `_D|${dexistingItem["TITEM"].S}` },
                        ":__typename": { S: `${existingItem.__typename}History` },
                        ":id": { S: `${String(dexistingItemkey.HASH.S)}#${historyRecordRANGE}`}
                    })
                ),
            }
        }
    ]

    itemTransactWriteItemList.push(...uqItems)

    const params: TransactWriteItemsInput = {
        TransactItems: itemTransactWriteItemList,
        ReturnConsumedCapacity: "TOTAL",
        ReturnItemCollectionMetrics: "SIZE",
        // ClientRequestToken: ringToken // TODO
    }

    logdebug("[deleteItem] ==>DDB TransactWriteItemsInput: ", params)
    const result = await ddbRequest(new TransactWriteItemsCommand(params))
    logdebug("[deleteItem] <==DDB TransactWriteItemsOutput: ", result)
}