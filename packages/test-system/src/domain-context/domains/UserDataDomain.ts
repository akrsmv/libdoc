import { IClaims, IIdentity, IDdbDomain, staticImplements, GetItemProps, IDdbItemKey, Result} from "@incta/ddb-model";
import { User } from "../items/dataItems/User";
import { createItem, updateItem, patchItem, deleteItem, getItems } from "@incta/ddb-actions";
import { loginfo, logwarn } from "@incta/common-utils";

@staticImplements<IDdbDomain<User>>()
export class UserDataDomain {

    public static async get(params: GetItemProps, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<Result<User>> {
        let userDomainImpl
        try {
            userDomainImpl = require('../../domain-context-impl/domains-impl/UserDomainImpl')
        } catch { }
        if (userDomainImpl && userDomainImpl.get && typeof userDomainImpl.get === 'function') {
            try {
                return await userDomainImpl.get(params, identity)
            } catch (error) {
                throw error
            }
        }
        loginfo("No implmentation found for User.get. Using generic getItems method")
        return await getItems(params, identity)
    }
    public static async create(item: Partial<User>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<User> {
        let userDomainImpl
        try {
            userDomainImpl = require('../../domain-context-impl/domains-impl/UserDomainImpl')
        } catch { }
        if (userDomainImpl && userDomainImpl.create && typeof userDomainImpl.create === 'function') {
            try {
                return await userDomainImpl.create(item, identity)
            } catch (error) {
                throw error
            }
        }
        loginfo("No implmentation found for User.create. Using generic createItem method")
        return await createItem(item, identity)
    }
    public static async update(item: Partial<User>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        let userDomainImpl
        try {
            userDomainImpl = require('../../domain-context-impl/domains-impl/UserDomainImpl')
        } catch { }
        if (userDomainImpl && userDomainImpl.update && typeof userDomainImpl.update === 'function') {
            try {
                return await userDomainImpl.update(item, identity)
            } catch (error) {
                throw error
            }
        }
        loginfo("No implmentation found for User.update. Using generic updateItem method")
        return await updateItem(item, identity)
    }
    public static async patch(item: Partial<User>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        let userDomainImpl
        try {
            userDomainImpl = require('../../domain-context-impl/domains-impl/UserDomainImpl')
        } catch { }
        if (userDomainImpl && userDomainImpl.patch && typeof userDomainImpl.patch === 'function') {
            try {
                return await userDomainImpl.patch(item, identity)
            } catch (error) {
                throw error
            }
        }
        loginfo("No implmentation found for User.patch. Using generic patchItem method")
        return await patchItem(item, identity)
    }
    public static async del(dto: Required<IDdbItemKey>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        let userDomainImpl
        try {
            userDomainImpl = require('../../domain-context-impl/domains-impl/UserDomainImpl')
        } catch { }
        if (userDomainImpl && userDomainImpl.del && typeof userDomainImpl.del === 'function') {
            try {
                return await userDomainImpl.del(dto, identity)
            } catch (error) {
                throw error
            }
        }
        loginfo("No implmentation found for User.del. Using generic deleteItem method")
        return await deleteItem(dto, identity)
    }

    public static async invokeAction<T>(action: string, args: T, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        let userDomainImpl
        try {
            userDomainImpl = require('../../domain-context-impl/domains-impl/UserDomainImpl')
        } catch { }
        if (userDomainImpl && action in userDomainImpl && typeof userDomainImpl[action] === 'function') {
            try {
                return await userDomainImpl[action](args, identity)
            } catch (error) {
                throw error
            }
        }
        throw new Error(`No implmentation found for User.${action} at '../../domain-context-impl/domains-impl/UserDomainImpl'`)
    }
}