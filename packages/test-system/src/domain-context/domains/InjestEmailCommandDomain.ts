import { IClaims, IIdentity, IDdbDomain, staticImplements, GetItemProps, IDdbItemKey, Result} from "@incta/ddb-model";
import { InjestEmail } from "../items/commandItems/InjestEmail";
import { createItem, updateItem, patchItem, deleteItem, getItems } from "@incta/ddb-actions";
import { loginfo, logwarn } from "@incta/common-utils";

@staticImplements<IDdbDomain<InjestEmail>>()
export class InjestEmailCommandDomain {

    public static async get(params: GetItemProps, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<Result<InjestEmail>> {
        let injestEmailDomainImpl
        try {
            injestEmailDomainImpl = require('../../domain-context-impl/domains-impl/InjestEmailDomainImpl')
        } catch { }
        if (injestEmailDomainImpl && injestEmailDomainImpl.get && typeof injestEmailDomainImpl.get === 'function') {
            try {
                return await injestEmailDomainImpl.get(params, identity)
            } catch (error) {
                throw error
            }
        }
        loginfo("No implmentation found for InjestEmail.get. Using generic getItems method")
        return await getItems(params, identity)
    }
    public static async create(item: Partial<InjestEmail>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<InjestEmail> {
        let injestEmailDomainImpl
        try {
            injestEmailDomainImpl = require('../../domain-context-impl/domains-impl/InjestEmailDomainImpl')
        } catch { }
        if (injestEmailDomainImpl && injestEmailDomainImpl.create && typeof injestEmailDomainImpl.create === 'function') {
            try {
                return await injestEmailDomainImpl.create(item, identity)
            } catch (error) {
                throw error
            }
        }
        loginfo("No implmentation found for InjestEmail.create. Using generic createItem method")
        return await createItem(item, identity)
    }
    public static async update(item: Partial<InjestEmail>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        let injestEmailDomainImpl
        try {
            injestEmailDomainImpl = require('../../domain-context-impl/domains-impl/InjestEmailDomainImpl')
        } catch { }
        if (injestEmailDomainImpl && injestEmailDomainImpl.update && typeof injestEmailDomainImpl.update === 'function') {
            try {
                return await injestEmailDomainImpl.update(item, identity)
            } catch (error) {
                throw error
            }
        }
        loginfo("No implmentation found for InjestEmail.update. Using generic updateItem method")
        return await updateItem(item, identity)
    }
    public static async patch(item: Partial<InjestEmail>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        let injestEmailDomainImpl
        try {
            injestEmailDomainImpl = require('../../domain-context-impl/domains-impl/InjestEmailDomainImpl')
        } catch { }
        if (injestEmailDomainImpl && injestEmailDomainImpl.patch && typeof injestEmailDomainImpl.patch === 'function') {
            try {
                return await injestEmailDomainImpl.patch(item, identity)
            } catch (error) {
                throw error
            }
        }
        loginfo("No implmentation found for InjestEmail.patch. Using generic patchItem method")
        return await patchItem(item, identity)
    }
    public static async del(dto: Required<IDdbItemKey>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        let injestEmailDomainImpl
        try {
            injestEmailDomainImpl = require('../../domain-context-impl/domains-impl/InjestEmailDomainImpl')
        } catch { }
        if (injestEmailDomainImpl && injestEmailDomainImpl.del && typeof injestEmailDomainImpl.del === 'function') {
            try {
                return await injestEmailDomainImpl.del(dto, identity)
            } catch (error) {
                throw error
            }
        }
        loginfo("No implmentation found for InjestEmail.del. Using generic deleteItem method")
        return await deleteItem(dto, identity)
    }

    public static async invokeAction<T>(action: string, args: T, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        let injestEmailDomainImpl
        try {
            injestEmailDomainImpl = require('../../domain-context-impl/domains-impl/InjestEmailDomainImpl')
        } catch { }
        if (injestEmailDomainImpl && action in injestEmailDomainImpl && typeof injestEmailDomainImpl[action] === 'function') {
            try {
                return await injestEmailDomainImpl[action](args, identity)
            } catch (error) {
                throw error
            }
        }
        throw new Error(`No implmentation found for InjestEmail.${action} at '../../domain-context-impl/domains-impl/InjestEmailDomainImpl'`)
    }
}