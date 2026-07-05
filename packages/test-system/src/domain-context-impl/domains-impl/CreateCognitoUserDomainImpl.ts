import { GetItemProps, IClaims, IDdbItemKey, IIdentity, Result } from "@incta/ddb-model";
import { createItem, deleteItem, getItems, patchItem, updateItem } from "@incta/ddb-actions";
import { CreateCognitoUser } from "../../domain-context/items/commandItems/CreateCognitoUser";

export const get = async(params: GetItemProps, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<Result<CreateCognitoUser>> => {
    const createCognitoUsers = await getItems(params, identity)
    /* Any additional custom logic */
    return createCognitoUsers 
}
export const create = async(item: Partial<CreateCognitoUser>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {
    await createItem({...item, __typename: 'CreateCognitoUser'}, identity)
}
export const update = async(item: Partial<CreateCognitoUser>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {
    await updateItem({...item, __typename: 'CreateCognitoUser'}, identity)
}
export const patch = async(item: Partial<CreateCognitoUser>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {
    await patchItem({...item, __typename: 'CreateCognitoUser'}, identity)
}
export const del = async(dto: Required<IDdbItemKey>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {
    await deleteItem(dto, identity)
}

