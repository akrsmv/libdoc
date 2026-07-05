import { IClaims, IIdentity, IDdbDomain, staticImplements, GetItemProps, IDdbItemKey, Result} from "@incta/ddb-model";
import { UserEmailRule } from "../items/dataItems/UserEmailRule";
import { createItem, updateItem, patchItem, deleteItem, getItems } from "@incta/ddb-actions";
import { loginfo, logwarn } from "@incta/common-utils";

@staticImplements<IDdbDomain<UserEmailRule>>()
export class UserEmailRuleDataDomain {

    public static async get(params: GetItemProps, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<Result<UserEmailRule>> {
        let userEmailRuleDomainImpl
        try {
            userEmailRuleDomainImpl = require('../../domain-context-impl/domains-impl/UserEmailRuleDomainImpl')
        } catch { }
        if (userEmailRuleDomainImpl && userEmailRuleDomainImpl.get && typeof userEmailRuleDomainImpl.get === 'function') {
            try {
                return await userEmailRuleDomainImpl.get(params, identity)
            } catch (error) {
                throw error
            }
        }
        loginfo("No implmentation found for UserEmailRule.get. Using generic getItems method")
        return await getItems(params, identity)
    }
    public static async create(item: Partial<UserEmailRule>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<UserEmailRule> {
        let userEmailRuleDomainImpl
        try {
            userEmailRuleDomainImpl = require('../../domain-context-impl/domains-impl/UserEmailRuleDomainImpl')
        } catch { }
        if (userEmailRuleDomainImpl && userEmailRuleDomainImpl.create && typeof userEmailRuleDomainImpl.create === 'function') {
            try {
                return await userEmailRuleDomainImpl.create(item, identity)
            } catch (error) {
                throw error
            }
        }
        loginfo("No implmentation found for UserEmailRule.create. Using generic createItem method")
        return await createItem(item, identity)
    }
    public static async update(item: Partial<UserEmailRule>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        let userEmailRuleDomainImpl
        try {
            userEmailRuleDomainImpl = require('../../domain-context-impl/domains-impl/UserEmailRuleDomainImpl')
        } catch { }
        if (userEmailRuleDomainImpl && userEmailRuleDomainImpl.update && typeof userEmailRuleDomainImpl.update === 'function') {
            try {
                return await userEmailRuleDomainImpl.update(item, identity)
            } catch (error) {
                throw error
            }
        }
        loginfo("No implmentation found for UserEmailRule.update. Using generic updateItem method")
        return await updateItem(item, identity)
    }
    public static async patch(item: Partial<UserEmailRule>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        let userEmailRuleDomainImpl
        try {
            userEmailRuleDomainImpl = require('../../domain-context-impl/domains-impl/UserEmailRuleDomainImpl')
        } catch { }
        if (userEmailRuleDomainImpl && userEmailRuleDomainImpl.patch && typeof userEmailRuleDomainImpl.patch === 'function') {
            try {
                return await userEmailRuleDomainImpl.patch(item, identity)
            } catch (error) {
                throw error
            }
        }
        loginfo("No implmentation found for UserEmailRule.patch. Using generic patchItem method")
        return await patchItem(item, identity)
    }
    public static async del(dto: Required<IDdbItemKey>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        let userEmailRuleDomainImpl
        try {
            userEmailRuleDomainImpl = require('../../domain-context-impl/domains-impl/UserEmailRuleDomainImpl')
        } catch { }
        if (userEmailRuleDomainImpl && userEmailRuleDomainImpl.del && typeof userEmailRuleDomainImpl.del === 'function') {
            try {
                return await userEmailRuleDomainImpl.del(dto, identity)
            } catch (error) {
                throw error
            }
        }
        loginfo("No implmentation found for UserEmailRule.del. Using generic deleteItem method")
        return await deleteItem(dto, identity)
    }

    public static async invokeAction<T>(action: string, args: T, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        let userEmailRuleDomainImpl
        try {
            userEmailRuleDomainImpl = require('../../domain-context-impl/domains-impl/UserEmailRuleDomainImpl')
        } catch { }
        if (userEmailRuleDomainImpl && action in userEmailRuleDomainImpl && typeof userEmailRuleDomainImpl[action] === 'function') {
            try {
                return await userEmailRuleDomainImpl[action](args, identity)
            } catch (error) {
                throw error
            }
        }
        throw new Error(`No implmentation found for UserEmailRule.${action} at '../../domain-context-impl/domains-impl/UserEmailRuleDomainImpl'`)
    }
}