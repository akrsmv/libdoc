import { GetItemProps, IClaims, IDdbItemKey, IIdentity, Result } from "@incta/ddb-model";
import { createItem, deleteItem, getItems, patchItem, searchItems, updateItem } from "@incta/ddb-actions";
import { User } from "../../domain-context/items/dataItems/User";
import { Agent } from "../../domain-context/items/dataItems/Agent";

export const get = async(params: GetItemProps, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<Result<User>> => {
    const users = await getItems(params, identity)
    /* Any additional custom logic */
    const userPrivateAgents = (await searchItems<Agent>({
        privateData: true,
        __typename: "Agent",
        loadPeersInput: params.loadPeersInput
        }, {...identity, claims: {active_agent: undefined}})).items
    users.items[0].Agents = [...(users.items[0].Agents || []), ...userPrivateAgents] 
    users.items[0].agents = [...(users.items[0].agents || []), ...userPrivateAgents.map(agt => agt.id)] 
    return users 
}
export const create = async(item: Partial<User>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {
    await createItem(item, identity)
}
export const update = async(item: Partial<User>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {
    await updateItem(item, identity)
}
export const patch = async(item: Partial<User>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {
    await patchItem(item, identity)
}
export const del = async(dto: Required<IDdbItemKey>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {
    await deleteItem(dto, identity)
}

