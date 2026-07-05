import { GetItemProps, IClaims, IDdbItemKey, IIdentity, Result, calculatePrivateOrPublicData, withPrefix } from "@incta/ddb-model";
import { DB_NAME, createItem, ddbRequest, deleteItem, getCreateItemTransactWriteArray, getItems, patchItem, preparePkforUniqueItemKey, queryItems, toAttributeMap, updateItem } from "@incta/ddb-actions";
import { UserEmailRule } from "../../domain-context/items/dataItems/UserEmailRule";
import { ValidationError } from "@incta/common-utils";
import { User } from "../../domain-context/items/dataItems/User";

export const get = async (params: GetItemProps, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<Result<UserEmailRule>> => {
    const userEmailRules = await getItems(params, identity)
    /* Any additional custom logic */
    return userEmailRules
}

export const getUserByEmail = async (email: string): Promise<User> => {
    const result = await queryItems<UserEmailRule>({
        	__typename: UserEmailRule.__typename,
            dbIndexName: "sGSI1-sGSI2",
        	hashKey: { sGSI1: { eq: email } },
        	loadPeersInput: { loadPeersLevel: 1, peersPropsToLoad: ["user", "agent"] /*, projectionExpression: "user,agent,idpId"*/ },
        	limit: 1
        }, null)
        
        if (!result.items.length) {
            throw new ValidationError('User not found for that email')
        }
        // @ts-ignore
        return result.items[0].User
} 

export const create = async (dto: Partial<UserEmailRule>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {

    const [item, transactionItems] = await getCreateItemTransactWriteArray(
        {
            ...dto,
            __typename: 'UserEmailRule'
        },
        identity)

    //unique record for email->user->pattern record
    const duniqueItem = toAttributeMap({
        HASH: withPrefix(preparePkforUniqueItemKey(item, 'email'), calculatePrivateOrPublicData(item, UserEmailRule), identity),
        RANGE: withPrefix(`${item.email}/${item.user}/${item.match_pattern}`, calculatePrivateOrPublicData(item, UserEmailRule), identity)
    })
    transactionItems.push({
        Put: {
            Item: duniqueItem,
            TableName: DB_NAME(),
            ReturnValuesOnConditionCheckFailure: "ALL_OLD",
            ConditionExpression: 'attribute_not_exists(#HASH) and attribute_not_exists(#RANGE)',
            ExpressionAttributeNames: { "#HASH": 'HASH', "#RANGE": 'RANGE' },
        }
    })

    await ddbRequest(transactionItems)
}
export const update = async (item: Partial<UserEmailRule>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {
    await updateItem({ ...item, __typename: 'UserEmailRule' }, identity)
}
export const patch = async (item: Partial<UserEmailRule>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {
    await patchItem({ ...item, __typename: 'UserEmailRule' }, identity)
}
export const del = async (dto: Required<IDdbItemKey>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {
    await deleteItem(dto, identity)
}

