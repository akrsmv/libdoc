import { IClaims, IIdentity, IDdbDomain, staticImplements, GetItemProps, IDdbItemKey, Result} from "@incta/ddb-model";
import { SetUserAgents } from "../items/commandItems/SetUserAgents";
import { createItem, updateItem, patchItem, deleteItem, getItems } from "@incta/ddb-actions";
import { loginfo, logwarn } from "@incta/common-utils";

@staticImplements<IDdbDomain<SetUserAgents>>()
export class SetUserAgentsCommandDomain {

    public static async get(params: GetItemProps, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<Result<SetUserAgents>> {
        let setUserAgentsDomainImpl
        try {
            setUserAgentsDomainImpl = require('../../domain-context-impl/domains-impl/SetUserAgentsDomainImpl')
        } catch { }
        if (setUserAgentsDomainImpl && setUserAgentsDomainImpl.get && typeof setUserAgentsDomainImpl.get === 'function') {
            try {
                return await setUserAgentsDomainImpl.get(params, identity)
            } catch (error) {
                throw error
            }
        }
        loginfo("No implmentation found for SetUserAgents.get. Using generic getItems method")
        return await getItems(params, identity)
    }
    public static async create(item: Partial<SetUserAgents>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<SetUserAgents> {
        let setUserAgentsDomainImpl
        try {
            setUserAgentsDomainImpl = require('../../domain-context-impl/domains-impl/SetUserAgentsDomainImpl')
        } catch { }
        if (setUserAgentsDomainImpl && setUserAgentsDomainImpl.create && typeof setUserAgentsDomainImpl.create === 'function') {
            try {
                return await setUserAgentsDomainImpl.create(item, identity)
            } catch (error) {
                throw error
            }
        }
        loginfo("No implmentation found for SetUserAgents.create. Using generic createItem method")
        return await createItem(item, identity)
    }
    public static async update(item: Partial<SetUserAgents>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        let setUserAgentsDomainImpl
        try {
            setUserAgentsDomainImpl = require('../../domain-context-impl/domains-impl/SetUserAgentsDomainImpl')
        } catch { }
        if (setUserAgentsDomainImpl && setUserAgentsDomainImpl.update && typeof setUserAgentsDomainImpl.update === 'function') {
            try {
                return await setUserAgentsDomainImpl.update(item, identity)
            } catch (error) {
                throw error
            }
        }
        loginfo("No implmentation found for SetUserAgents.update. Using generic updateItem method")
        return await updateItem(item, identity)
    }
    public static async patch(item: Partial<SetUserAgents>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        let setUserAgentsDomainImpl
        try {
            setUserAgentsDomainImpl = require('../../domain-context-impl/domains-impl/SetUserAgentsDomainImpl')
        } catch { }
        if (setUserAgentsDomainImpl && setUserAgentsDomainImpl.patch && typeof setUserAgentsDomainImpl.patch === 'function') {
            try {
                return await setUserAgentsDomainImpl.patch(item, identity)
            } catch (error) {
                throw error
            }
        }
        loginfo("No implmentation found for SetUserAgents.patch. Using generic patchItem method")
        return await patchItem(item, identity)
    }
    public static async del(dto: Required<IDdbItemKey>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        let setUserAgentsDomainImpl
        try {
            setUserAgentsDomainImpl = require('../../domain-context-impl/domains-impl/SetUserAgentsDomainImpl')
        } catch { }
        if (setUserAgentsDomainImpl && setUserAgentsDomainImpl.del && typeof setUserAgentsDomainImpl.del === 'function') {
            try {
                return await setUserAgentsDomainImpl.del(dto, identity)
            } catch (error) {
                throw error
            }
        }
        loginfo("No implmentation found for SetUserAgents.del. Using generic deleteItem method")
        return await deleteItem(dto, identity)
    }

    public static async invokeAction<T>(action: string, args: T, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        let setUserAgentsDomainImpl
        try {
            setUserAgentsDomainImpl = require('../../domain-context-impl/domains-impl/SetUserAgentsDomainImpl')
        } catch { }
        if (setUserAgentsDomainImpl && action in setUserAgentsDomainImpl && typeof setUserAgentsDomainImpl[action] === 'function') {
            try {
                return await setUserAgentsDomainImpl[action](args, identity)
            } catch (error) {
                throw error
            }
        }
        throw new Error(`No implmentation found for SetUserAgents.${action} at '../../domain-context-impl/domains-impl/SetUserAgentsDomainImpl'`)
    }
}