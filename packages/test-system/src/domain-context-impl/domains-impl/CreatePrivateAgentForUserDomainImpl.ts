import { GetItemProps, IClaims, IDdbItemKey, IIdentity, Result } from "@incta/ddb-model";
import { createItem, deleteItem, getItems, patchItem, updateItem } from "@incta/ddb-actions";
import { CreatePrivateAgentForUser } from "../../domain-context/items/commandItems/CreatePrivateAgentForUser";

export const get = async(params: GetItemProps, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<Result<CreatePrivateAgentForUser>> => {
    const createPrivateAgentForUsers = await getItems(params, identity)
    /* Any additional custom logic */
    return createPrivateAgentForUsers 
}
export const create = async(item: Partial<CreatePrivateAgentForUser>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {
    await createItem({...item, __typename: 'CreatePrivateAgentForUser'}, identity)
}
export const update = async(item: Partial<CreatePrivateAgentForUser>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {
    await updateItem({...item, __typename: 'CreatePrivateAgentForUser'}, identity)
}
export const patch = async(item: Partial<CreatePrivateAgentForUser>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {
    await patchItem({...item, __typename: 'CreatePrivateAgentForUser'}, identity)
}
export const del = async(dto: Required<IDdbItemKey>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {
    await deleteItem(dto, identity)
}

