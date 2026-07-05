import { GetItemProps, IClaims, IDdbItemKey, IIdentity, Result } from "@incta/ddb-model";
import { createItem, deleteItem, getItems, patchItem, updateItem } from "@incta/ddb-actions";
import { InjestEmail } from "../../domain-context/items/commandItems/InjestEmail";

export const get = async(params: GetItemProps, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<Result<InjestEmail>> => {
    const injestEmails = await getItems(params, identity)
    /* Any additional custom logic */
    return injestEmails 
}
export const create = async(item: Partial<InjestEmail>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {
    await createItem({...item, __typename: 'InjestEmail'}, identity)
}
export const update = async(item: Partial<InjestEmail>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {
    await updateItem({...item, __typename: 'InjestEmail'}, identity)
}
export const patch = async(item: Partial<InjestEmail>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {
    await patchItem({...item, __typename: 'InjestEmail'}, identity)
}
export const del = async(dto: Required<IDdbItemKey>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {
    await deleteItem(dto, identity)
}

