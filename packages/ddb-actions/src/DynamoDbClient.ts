
import { GetItemCommand, PutItemCommand, TransactWriteItemsOutput } from "@aws-sdk/client-dynamodb";
import { BatchGetItemOutput } from "@aws-sdk/client-dynamodb";
import { QueryOutput } from "@aws-sdk/client-dynamodb";
import { BatchWriteItemOutput } from "@aws-sdk/client-dynamodb";
import { UpdateItemOutput } from "@aws-sdk/client-dynamodb";
import { AttributeValue, DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { marshall, unmarshall } from '@aws-sdk/util-dynamodb';
import { DbConfig, DdbItem, IDdbItemStaticMetadata, __domain, _sep1 } from "@incta/ddb-model";
import { DdbError, logdebug, logerror } from "@incta/common-utils";
import { ServiceOutputTypes } from "@aws-sdk/client-dynamodb";
import { ServiceInputTypes } from "@aws-sdk/client-dynamodb";
import { TransactWriteItemsCommand } from "@aws-sdk/client-dynamodb";

export const DB_NAME = (): string => process.env.DB_NAME as string
export const IS_AWS_SAM_LOCAL = (): boolean => !!process.env.AWS_SAM_LOCAL
const DDB_LOCAL_URL = (): string => process.env.DDB_LOCAL_URL as string

// TODO if you want a STS based dynamo client create it on later stage 
// NOTE with latest ideas - sts credentials are only set when synchronous lambda invocations i.e from controller
// And if a controller wants a dynamoDB client - it will have already the sts credentials set, otherwise (if a worker wnats a client), sts credentials 
// will not be set thus it will use the lambda execution role 
let _dynamoDbClient: DynamoDBClient
let _dbConfig: DbConfig
export const dbConfig = async () => {
    if (!_dbConfig) {
        // - initialize temp dbConfig  based on domain context
        const tempDbConfig: DbConfig = { HASH: '__InctaConfig', RANGE: '__DbConfig', NSHARD: `${__domain().dataItemsMap?.size || 0 }` }
        // load DbConfig from dynamo
        const dbResult = await dynamoDbClient().send(new GetItemCommand({
            TableName: DB_NAME(),
            Key: marshall({ HASH: '__InctaConfig', RANGE: '__DbConfig' })
        }))
        logdebug("[ddbBatchGetItem]: BatchGetItemOutput: ", dbResult)
        // - if not present in dynamo 
        // - save temp dbConfig in dynamo
        if (!dbResult.Item) {
            await dynamoDbClient().send(new PutItemCommand({
                TableName: DB_NAME(),
                Item: marshall(tempDbConfig)
            }))
            // - else if present
        } else {
            // - compare NSHARD from temp dbConfig and dynamodb DbConfig
            if (unmarshall(dbResult.Item)["NSHARD"] < tempDbConfig.NSHARD) {
                // - update dynamo DbConfig if NSHARD in temp dbConfig is bigger
                await dynamoDbClient().send(new PutItemCommand({
                    TableName: DB_NAME(),
                    Item: marshall(tempDbConfig)
                }))
            }
        }
        // finally initialize _dbConfig by loading what is lately in DB
        _dbConfig = unmarshall((await dynamoDbClient().send(new GetItemCommand({
            TableName: DB_NAME(),
            Key: marshall({ HASH: '__InctaConfig', RANGE: '__DbConfig' })
        }))).Item!) as DbConfig
    }
    return _dbConfig
}
export const dynamoDbClient = (): DynamoDBClient => {
    if (!_dynamoDbClient) {
        _dynamoDbClient = IS_AWS_SAM_LOCAL() ?
            // offline options for dynamodb
            new DynamoDBClient({
                region: 'us-east-1',
                apiVersion: '2012-08-10',
                endpoint: DDB_LOCAL_URL(),
                // credentials: { accessKeyId: 'String(process.env.AWS_ACCESS_KEY_ID)', secretAccessKey: 'String(process.env.AWS_SECRET_ACCESS_KEY)'}
            })
            :
            // aws runtime options for dynamodb
            new DynamoDBClient({
                // credentials: globalThis.__stsCredentials
            })
    }
    return _dynamoDbClient
}

export const deletedVersionString = (nr: number) => `d_${nr}`
export const preparePkforUniqueItemKey = (item: DdbItem, key: string) => `uq${_sep1}${item.__typename}}/${key}`

export function ensureOnlyNewKeyUpdates(existingItem: Record<string, any>, itemUpdates: Record<string, any>): any {
    return Object.keys(itemUpdates)
        .filter(k => ((!existingItem[k] || JSON.stringify(existingItem[k]) !== JSON.stringify(itemUpdates[k])))
            // preserving sysetem mandatory
            || ["RANGE", "RANGE", "rev"].includes(k))
        .reduce((newObj, k) => ({ ...newObj, [k]: itemUpdates[k] }), {}) // Copy value.
}

/**
 * in dynamo, one can add different types for the same property (TODO check - insert string then insert number and examine in AWS/Dynamo the key S and N values)
 * However when a key is defined to be an index key (partition or range) it should conform to the initial type
 * Thus when we converting toAttributeMap we pass also the DdbItemPropertiesMetadataMap<T>, for verification of any index key's type 
 * and Trying to convert them to the right type if possible
 * @param item 
 * @param __item_hashKeyss 
 * @returns 
 */
export const toAttributeMap = <T extends Record<string, any>>(item: T) => {
    return marshall(
        item,
        {
            convertClassInstanceToMap: true,
            removeUndefinedValues: true
        }
    )
}

/**
 * 
 * item TODO support complex objects, string->dates conversiong etc
 * start here
 * https://awslabs.github.io/dynamodb-data-mapper-js/packages/dynamodb-data-marshaller/
 */
export const fromAttributeMap = <T>(item: Record<string, any> | undefined) => {
    return unmarshall(item || {}) as T
}

export const toAttributeMapArray = <T extends Record<string, any>>(items: T[]) => items.reduce<Record<string, AttributeValue>[]>(
    (arr: Record<string, any>[], item: T) => {
        arr.push(toAttributeMap(item))
        return arr
    }, [])

export const fromAttributeMapArray = <T>(attrMapArray: Record<string, any>[] | undefined) => (attrMapArray || []).reduce<T[]>(
    (accum: T[], attrMap: Record<string, any>) => {
        accum.push(fromAttributeMap(attrMap))
        return accum
    }, [])

export const ddbRequest = async <T extends TransactWriteItemsCommand>(
    input: T
) => {
    try {
        return await dynamoDbClient().send(input)
    } catch (error: any) {
        let uniquePropertiesViolations: string[] = []
        let ddbValidationErrors: string[] = []

        logerror('Error calling dynamo(parsed response is):', error);

        if (Array.isArray(error.CancellationReasons)) {
            uniquePropertiesViolations = (error.CancellationReasons as { Item: { HASH: { S: string }, RANGE: { S: string } }, Code: string, Message: string }[])
                .filter(canellationReason => canellationReason.Code == "ConditionalCheckFailed" && !!canellationReason.Item)
                .map(cancellationReason => `(HASH=${cancellationReason.Item.HASH.S} RANGE=${cancellationReason.Item.RANGE.S})`)
            ddbValidationErrors = (error.CancellationReasons as { Item: { HASH: { S: string }, RANGE: { S: string } }, Code: string, Message: string }[])
                .filter(canellationReason => canellationReason.Code == "ValidationError")
                .map(cancellationReason => cancellationReason.Message)
        }
        if (uniquePropertiesViolations.length) {
            throw new DdbError(`Database already contains item(s) with PK(s): ${uniquePropertiesViolations.concat(ddbValidationErrors).join(", ")}`)
        } else if (ddbValidationErrors.length) {
            throw new DdbError(`${uniquePropertiesViolations.concat(ddbValidationErrors).join(" ")}`)
        } else {
            // throw new DdbError(inspect(error, false, 10, false))
            throw new DdbError(error)
        }
    }
}