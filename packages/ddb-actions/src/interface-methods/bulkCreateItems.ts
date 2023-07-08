'use strict'

import { DB_NAME, toAttributeMap, preparePkforUniqueItemKey, dbConfig, dynamoDbClient } from '../DynamoDbClient';
import { DdbItem, IClaims, IIdentity, __createItem, __domain, __itemMetadata, _sep1, calculatePrivateOrPublicData, withPrefix } from '@incta/ddb-model'
import { chunks, convertDatesToIsoDateStrings, logdebug, removeEmpty } from '@incta/common-utils';
import { AttributeValue, BatchWriteItemCommand, WriteRequest } from '@aws-sdk/client-dynamodb';

export const bulkCreateItems = async <T extends DdbItem>(dtos: Partial<T>[], identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {
    const allWriteRequests = []
    for (const dto of dtos) {
        const item = __createItem(removeEmpty(dto), identity)
        const _item_metadata = __itemMetadata(item)
        const ditem = toAttributeMap({
            user_created: String(identity?.sub),
            user_updated: String(identity?.sub),
            ...convertDatesToIsoDateStrings(item, _item_metadata)
        })

        logdebug(`[bulkCreateItems] item to create:`, item)
        logdebug(`[bulkCreateItems] _item_metadata:`, _item_metadata)
        logdebug(`[bulkCreateItems] ditem:`, ditem)

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
        ditem['TITEM'] = { S: withPrefix(`${item.__typename}${_sep1}${new Date().toISOString().slice(0, 10)}`, calculatePrivateOrPublicData(item, _item_metadata), identity) }
        // set the NSHARD key
        ditem['NSHARD'] = { S: withPrefix(`${~~(Math.random() * Number((await dbConfig()).NSHARD))}`, calculatePrivateOrPublicData(item, _item_metadata), identity) }

        // put item request for each unique key defined in metadata
        allWriteRequests.push(...Object.keys(ditem).reduce<WriteRequest[]>((accum, key) => {
            if (_item_metadata.uniqueKeys.includes(key)) {
                const duniqueItem = toAttributeMap({ HASH: withPrefix(preparePkforUniqueItemKey(item, key), calculatePrivateOrPublicData(item, _item_metadata), identity), RANGE: withPrefix(item[key], calculatePrivateOrPublicData(item, _item_metadata), identity) })
                accum.push({
                    PutRequest: {
                        Item: duniqueItem
                    }
                })
            }
            return accum
        },// put item request for the item itself
            [
                {
                    PutRequest: {
                        Item: ditem
                    }
                }
            ]
        ))
    }

    logdebug(`[bulkCreateItems] ALL writeRequests (length=${allWriteRequests.length}):`, { [DB_NAME()]: allWriteRequests })

    await Promise.all(chunks(allWriteRequests, 25).map<Promise<void>>(async (chunk, index) => {
        logdebug("[bulkCreateItems] ==>DDB BatchWriteItemCommand Input for chunk ${index}: ", chunk)
        const result = await dynamoDbClient().send(new BatchWriteItemCommand({
            RequestItems: { [DB_NAME()]: chunk }
        }))
        logdebug("[bulkCreateItems] <==DDB BatchWriteItemCommand Output for chunk ${index}: ", result)
    }))
}