'use strict'

import { DB_NAME, toAttributeMap, preparePkforUniqueItemKey, ddbRequest, dbConfig } from '../DynamoDbClient';
import { DdbItem, IClaims, IIdentity, __createItem, __domain, __itemMetadata, _sep1, calculatePrivateOrPublicData, withPrefix } from '@incta/ddb-model'
import { convertDatesToIsoDateStrings, logdebug, removeEmpty } from '@incta/common-utils';
import { AttributeValue, TransactWriteItem, TransactWriteItemsCommand, TransactWriteItemsInput } from '@aws-sdk/client-dynamodb';

export const createItem = async <T extends DdbItem>(dto: Partial<T>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {
    
    const item = __createItem(removeEmpty(dto), identity)
    const _item_metadata = __itemMetadata(item)
    const ditem = toAttributeMap({
        user_created: identity?.sub,
        user_updated: identity?.sub,
        ...convertDatesToIsoDateStrings(item, _item_metadata)
    })

    logdebug(`[createItem] item to create:`, item)
    logdebug(`[createItem] _item_metadata:`, _item_metadata)
    logdebug(`[createItem] ditem:`, ditem)

    //#region check required fields
    const itemRequiredKeys = (_item_metadata.requiredKeys || []) as string[]
    const requiredFieldsMissing: string[] = []
    itemRequiredKeys.reduce<string[]>((accum: string[], reqKey: string) => {
        if (!item[reqKey]) {
            accum.push(reqKey)
        }
        return accum
    }, requiredFieldsMissing)
    if (requiredFieldsMissing.length > 0) {
        throw new Error(`required [${requiredFieldsMissing.join(",")}] keys for creating ${item.__typename} were not provided`)
    }
    //#endregion

    //#region copy gsi keys
    Object.keys(ditem).reduce<Record<string, AttributeValue>>((accum, key) => {
        if (_item_metadata.gsiKeys.has(key)) {
            for (const xGSI of _item_metadata.gsiKeys.get(key) || []) {
                if ("S" in ditem[key]) {
                    accum[xGSI] = { S: withPrefix(`${ditem[key].S}`, calculatePrivateOrPublicData(item, _item_metadata), identity) }
                } else {
                    accum[xGSI] = ditem[key]
                }
            }
        }
        return accum
    }, ditem)
    //#endregion

    // set the system TITEM key
    ditem['TITEM'] = { S: withPrefix(`${item.__typename}${_sep1}${item.date_updated.toISOString().slice(0, 10)}`, calculatePrivateOrPublicData(item, _item_metadata), identity) }
    // set the NSHARD key
    ditem['NSHARD'] = { S: withPrefix(`${~~(Math.random() * Number((await dbConfig()).NSHARD))}`, calculatePrivateOrPublicData(item, _item_metadata), identity) }

    // put item request for each unique key defined in metadataz
    const allTransactWriteItemList = Object.keys(ditem).reduce<TransactWriteItem[]>((accum, key) => {
        if (_item_metadata.uniqueKeys.includes(key)) {
            const duniqueItem = toAttributeMap({ HASH: withPrefix(preparePkforUniqueItemKey(item, key), calculatePrivateOrPublicData(item, _item_metadata), identity), RANGE: withPrefix(item[key], calculatePrivateOrPublicData(item, _item_metadata), identity) })
            accum.push({
                Put: {
                    Item: duniqueItem,
                    TableName: DB_NAME(),
                    ReturnValuesOnConditionCheckFailure: "ALL_OLD",
                    ConditionExpression: 'attribute_not_exists(#HASH) and attribute_not_exists(#RANGE)',
                    ExpressionAttributeNames: { "#HASH": 'HASH', "#RANGE": 'RANGE' },
                }
            })
        }
        return accum
    },// put item request for the item itself
        [
            {
                Update: {
                    TableName: DB_NAME(),
                    ReturnValuesOnConditionCheckFailure: "ALL_OLD",
                    Key: { HASH: { S: withPrefix(String(ditem.HASH.S), calculatePrivateOrPublicData(item, _item_metadata), identity)}, RANGE: { S: withPrefix(String(ditem.RANGE.S), calculatePrivateOrPublicData(item, _item_metadata), identity)} },
                    UpdateExpression: `set ${Object.keys(ditem).filter(key => key !== "HASH" && key !== "RANGE").map(key => `#${key} = :${key}`).join(", ")}`,
                    ExpressionAttributeNames: Object.keys(ditem).reduce<{ [key: string]: string }>((accum, key) => {
                        accum[`#${key}`] = key;
                        return accum;
                    }, {}),
                    ExpressionAttributeValues: Object.keys(ditem).filter(key => key !== "HASH" && key !== "RANGE").reduce<{ [key: string]: AttributeValue }>((accum, key) => {
                        accum[`:${key}`] = ditem[key]
                        return accum
                    }, {}),
                    ConditionExpression: 'attribute_not_exists(#HASH) and attribute_not_exists(#RANGE)',
                }
            }
        ]
    )
    const params: TransactWriteItemsInput = {
        TransactItems: allTransactWriteItemList,
        ReturnConsumedCapacity: "TOTAL",
        ReturnItemCollectionMetrics: "SIZE",
        // ClientRequestToken: correlation_id // TODO
    }
    logdebug(`[createItem] ==>DDB TransactWriteItemsInput:`, params)
    const result = await ddbRequest(new TransactWriteItemsCommand(params))
    logdebug("[createItem] <==DDB TransactWriteItemsOutput: ", result)
}