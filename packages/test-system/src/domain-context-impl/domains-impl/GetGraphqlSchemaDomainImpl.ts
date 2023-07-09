import { GetItemProps, IClaims, IDdbItemKey, IIdentity, Result } from "@incta/ddb-model";
import { createItem, deleteItem, getItems, patchItem, updateItem } from "@incta/ddb-actions";
import { GetGraphqlSchema } from "../../domain-context/items/queryItems/GetGraphqlSchema";

export const get = async(params: GetItemProps, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<Result<GetGraphqlSchema>> => {
    const getGraphqlSchemas = await getItems(params, identity)
    /* Any additional custom logic */
    return getGraphqlSchemas 
}
export const create = async(item: Partial<GetGraphqlSchema>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {
    await createItem(item, identity)
}
export const update = async(item: Partial<GetGraphqlSchema>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {
    await updateItem(item, identity)
}
export const patch = async(item: Partial<GetGraphqlSchema>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {
    await patchItem(item, identity)
}
export const del = async(dto: Required<IDdbItemKey>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {
    await deleteItem(dto, identity)
}

