import { IClaims, IIdentity, IDdbDomain, staticImplements, GetItemProps, IDdbItemKey, Result} from "@incta/ddb-model";
import { ChangeActiveAgent } from "../items/commandItems/ChangeActiveAgent";
import { createItem, updateItem, patchItem, deleteItem, getItems } from "@incta/ddb-actions";
import { loginfo, logwarn } from "@incta/common-utils";

@staticImplements<IDdbDomain<ChangeActiveAgent>>()
export class ChangeActiveAgentCommandDomain {

    public static async get(params: GetItemProps, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<Result<ChangeActiveAgent>> {
        let changeActiveAgentDomainImpl
        try {
            changeActiveAgentDomainImpl = require('../../domain-context-impl/domains-impl/ChangeActiveAgentDomainImpl')
        } catch { }
        if (changeActiveAgentDomainImpl && changeActiveAgentDomainImpl.get && typeof changeActiveAgentDomainImpl.get === 'function') {
            try {
                return await changeActiveAgentDomainImpl.get(params, identity)
            } catch (error) {
                throw error
            }
        }
        loginfo("No implmentation found for ChangeActiveAgent.get. Using generic getItems method")
        return await getItems(params, identity)
    }
    public static async create(item: Partial<ChangeActiveAgent>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<ChangeActiveAgent> {
        let changeActiveAgentDomainImpl
        try {
            changeActiveAgentDomainImpl = require('../../domain-context-impl/domains-impl/ChangeActiveAgentDomainImpl')
        } catch { }
        if (changeActiveAgentDomainImpl && changeActiveAgentDomainImpl.create && typeof changeActiveAgentDomainImpl.create === 'function') {
            try {
                return await changeActiveAgentDomainImpl.create(item, identity)
            } catch (error) {
                throw error
            }
        }
        loginfo("No implmentation found for ChangeActiveAgent.create. Using generic createItem method")
        return await createItem(item, identity)
    }
    public static async update(item: Partial<ChangeActiveAgent>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        let changeActiveAgentDomainImpl
        try {
            changeActiveAgentDomainImpl = require('../../domain-context-impl/domains-impl/ChangeActiveAgentDomainImpl')
        } catch { }
        if (changeActiveAgentDomainImpl && changeActiveAgentDomainImpl.update && typeof changeActiveAgentDomainImpl.update === 'function') {
            try {
                return await changeActiveAgentDomainImpl.update(item, identity)
            } catch (error) {
                throw error
            }
        }
        loginfo("No implmentation found for ChangeActiveAgent.update. Using generic updateItem method")
        return await updateItem(item, identity)
    }
    public static async patch(item: Partial<ChangeActiveAgent>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        let changeActiveAgentDomainImpl
        try {
            changeActiveAgentDomainImpl = require('../../domain-context-impl/domains-impl/ChangeActiveAgentDomainImpl')
        } catch { }
        if (changeActiveAgentDomainImpl && changeActiveAgentDomainImpl.patch && typeof changeActiveAgentDomainImpl.patch === 'function') {
            try {
                return await changeActiveAgentDomainImpl.patch(item, identity)
            } catch (error) {
                throw error
            }
        }
        loginfo("No implmentation found for ChangeActiveAgent.patch. Using generic patchItem method")
        return await patchItem(item, identity)
    }
    public static async del(dto: Required<IDdbItemKey>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        let changeActiveAgentDomainImpl
        try {
            changeActiveAgentDomainImpl = require('../../domain-context-impl/domains-impl/ChangeActiveAgentDomainImpl')
        } catch { }
        if (changeActiveAgentDomainImpl && changeActiveAgentDomainImpl.del && typeof changeActiveAgentDomainImpl.del === 'function') {
            try {
                return await changeActiveAgentDomainImpl.del(dto, identity)
            } catch (error) {
                throw error
            }
        }
        loginfo("No implmentation found for ChangeActiveAgent.del. Using generic deleteItem method")
        return await deleteItem(dto, identity)
    }

    public static async invokeAction<T>(action: string, args: T, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        let changeActiveAgentDomainImpl
        try {
            changeActiveAgentDomainImpl = require('../../domain-context-impl/domains-impl/ChangeActiveAgentDomainImpl')
        } catch { }
        if (changeActiveAgentDomainImpl && action in changeActiveAgentDomainImpl && typeof changeActiveAgentDomainImpl[action] === 'function') {
            try {
                return await changeActiveAgentDomainImpl[action](args, identity)
            } catch (error) {
                throw error
            }
        }
        throw new Error(`No implmentation found for ChangeActiveAgent.${action} at '../../domain-context-impl/domains-impl/ChangeActiveAgentDomainImpl'`)
    }
}