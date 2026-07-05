import { IClaims, IIdentity, IDdbDomain, staticImplements, GetItemProps, IDdbItemKey, Result} from "@incta/ddb-model";
import { Agent } from "../items/dataItems/Agent";
import { createItem, updateItem, patchItem, deleteItem, getItems } from "@incta/ddb-actions";
import { loginfo, logwarn } from "@incta/common-utils";

@staticImplements<IDdbDomain<Agent>>()
export class AgentDataDomain {

    public static async get(params: GetItemProps, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<Result<Agent>> {
        let agentDomainImpl
        try {
            agentDomainImpl = require('../../domain-context-impl/domains-impl/AgentDomainImpl')
        } catch { }
        if (agentDomainImpl && agentDomainImpl.get && typeof agentDomainImpl.get === 'function') {
            try {
                return await agentDomainImpl.get(params, identity)
            } catch (error) {
                throw error
            }
        }
        loginfo("No implmentation found for Agent.get. Using generic getItems method")
        return await getItems(params, identity)
    }
    public static async create(item: Partial<Agent>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<Agent> {
        let agentDomainImpl
        try {
            agentDomainImpl = require('../../domain-context-impl/domains-impl/AgentDomainImpl')
        } catch { }
        if (agentDomainImpl && agentDomainImpl.create && typeof agentDomainImpl.create === 'function') {
            try {
                return await agentDomainImpl.create(item, identity)
            } catch (error) {
                throw error
            }
        }
        loginfo("No implmentation found for Agent.create. Using generic createItem method")
        return await createItem(item, identity)
    }
    public static async update(item: Partial<Agent>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        let agentDomainImpl
        try {
            agentDomainImpl = require('../../domain-context-impl/domains-impl/AgentDomainImpl')
        } catch { }
        if (agentDomainImpl && agentDomainImpl.update && typeof agentDomainImpl.update === 'function') {
            try {
                return await agentDomainImpl.update(item, identity)
            } catch (error) {
                throw error
            }
        }
        loginfo("No implmentation found for Agent.update. Using generic updateItem method")
        return await updateItem(item, identity)
    }
    public static async patch(item: Partial<Agent>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        let agentDomainImpl
        try {
            agentDomainImpl = require('../../domain-context-impl/domains-impl/AgentDomainImpl')
        } catch { }
        if (agentDomainImpl && agentDomainImpl.patch && typeof agentDomainImpl.patch === 'function') {
            try {
                return await agentDomainImpl.patch(item, identity)
            } catch (error) {
                throw error
            }
        }
        loginfo("No implmentation found for Agent.patch. Using generic patchItem method")
        return await patchItem(item, identity)
    }
    public static async del(dto: Required<IDdbItemKey>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        let agentDomainImpl
        try {
            agentDomainImpl = require('../../domain-context-impl/domains-impl/AgentDomainImpl')
        } catch { }
        if (agentDomainImpl && agentDomainImpl.del && typeof agentDomainImpl.del === 'function') {
            try {
                return await agentDomainImpl.del(dto, identity)
            } catch (error) {
                throw error
            }
        }
        loginfo("No implmentation found for Agent.del. Using generic deleteItem method")
        return await deleteItem(dto, identity)
    }

    public static async invokeAction<T>(action: string, args: T, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        let agentDomainImpl
        try {
            agentDomainImpl = require('../../domain-context-impl/domains-impl/AgentDomainImpl')
        } catch { }
        if (agentDomainImpl && action in agentDomainImpl && typeof agentDomainImpl[action] === 'function') {
            try {
                return await agentDomainImpl[action](args, identity)
            } catch (error) {
                throw error
            }
        }
        throw new Error(`No implmentation found for Agent.${action} at '../../domain-context-impl/domains-impl/AgentDomainImpl'`)
    }
}