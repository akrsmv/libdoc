import { GetItemProps, IClaims, IDdbItemKey, IIdentity, Result } from "@incta/ddb-model";
import { createItem, deleteItem, getItems, patchItem, updateItem } from "@incta/ddb-actions";
import { AirplaneManifacturer } from "../../domain-context/items/dataItems/AirplaneManifacturer";

export const get = async(params: GetItemProps, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<Result<AirplaneManifacturer>> => {
    const airplaneManifacturers = await getItems(params, identity)
    /* Any additional custom logic */
    return airplaneManifacturers 
}
export const create = async(item: Partial<AirplaneManifacturer>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {
    await createItem(item, identity)
}
export const update = async(item: Partial<AirplaneManifacturer>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {
    await updateItem(item, identity)
}
export const patch = async(item: Partial<AirplaneManifacturer>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {
    await patchItem(item, identity)
}
export const del = async(dto: Required<IDdbItemKey>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {
    await deleteItem(dto, identity)
}

