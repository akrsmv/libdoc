import { GetItemProps, IClaims, IDdbItemKey, IIdentity, Result, _default_agent_id } from "@incta/ddb-model";
import { createItem, deleteItem, getItems, patchItem, updateItem } from "@incta/ddb-actions";
import { Agent } from "../../domain-context/items/dataItems/Agent";
import { loginfo } from "@incta/common-utils";

export const get = async(params: GetItemProps, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<Result<Agent>> => {
    const agents = await getItems(params, identity)
    /* Any additional custom logic */
    return agents 
}
export const create = async(item: Partial<Agent>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {
    if ("privateData" in item && item["privateData"] === true) {
        delete identity?.claims?.active_agent
    }
    await createItem(item, identity)
}
export const update = async(item: Partial<Agent>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {
    await updateItem(item, identity)
}
export const patch = async(item: Partial<Agent>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {
    await patchItem(item, identity)
}
export const del = async(dto: Required<IDdbItemKey>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {
    loginfo('REACHED domain-> deleteItem with payload ', dto, identity)
    await deleteItem(dto, {...identity, claims: { active_agent: _default_agent_id }})
}

