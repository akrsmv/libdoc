import { IClaims, IIdentity, IDdbDomain, staticImplements, GetItemProps, IDdbItemKey, Result} from "@incta/ddb-model";
import { queryBe } from "../items/queryItems/queryBe";
import { createItem, updateItem, patchItem, deleteItem, getItems } from "@incta/ddb-actions";
import { loginfo, logwarn } from "@incta/common-utils";

@staticImplements<IDdbDomain<queryBe>>()
export class queryBeQueryDomain {

    public static async get(params: GetItemProps, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<Result<queryBe>> {
        let queryBeDomainImpl
        try {
            queryBeDomainImpl = require('../../domain-context-impl/domains-impl/queryBeDomainImpl')
        } catch { }
        if (queryBeDomainImpl && queryBeDomainImpl.get && typeof queryBeDomainImpl.get === 'function') {
            try {
                return await queryBeDomainImpl.get(params, identity)
            } catch (error) {
                throw error
            }
        }
        loginfo("No implmentation found for queryBe.get. Using generic getItems method")
        return await getItems(params, identity)
    }
    public static async create(item: Partial<queryBe>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<queryBe> {
        let queryBeDomainImpl
        try {
            queryBeDomainImpl = require('../../domain-context-impl/domains-impl/queryBeDomainImpl')
        } catch { }
        if (queryBeDomainImpl && queryBeDomainImpl.create && typeof queryBeDomainImpl.create === 'function') {
            try {
                return await queryBeDomainImpl.create(item, identity)
            } catch (error) {
                throw error
            }
        }
        loginfo("No implmentation found for queryBe.create. Using generic createItem method")
        return await createItem(item, identity)
    }
    public static async update(item: Partial<queryBe>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        let queryBeDomainImpl
        try {
            queryBeDomainImpl = require('../../domain-context-impl/domains-impl/queryBeDomainImpl')
        } catch { }
        if (queryBeDomainImpl && queryBeDomainImpl.update && typeof queryBeDomainImpl.update === 'function') {
            try {
                return await queryBeDomainImpl.update(item, identity)
            } catch (error) {
                throw error
            }
        }
        loginfo("No implmentation found for queryBe.update. Using generic updateItem method")
        return await updateItem(item, identity)
    }
    public static async patch(item: Partial<queryBe>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        let queryBeDomainImpl
        try {
            queryBeDomainImpl = require('../../domain-context-impl/domains-impl/queryBeDomainImpl')
        } catch { }
        if (queryBeDomainImpl && queryBeDomainImpl.patch && typeof queryBeDomainImpl.patch === 'function') {
            try {
                return await queryBeDomainImpl.patch(item, identity)
            } catch (error) {
                throw error
            }
        }
        loginfo("No implmentation found for queryBe.patch. Using generic patchItem method")
        return await patchItem(item, identity)
    }
    public static async del(dto: Required<IDdbItemKey>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        let queryBeDomainImpl
        try {
            queryBeDomainImpl = require('../../domain-context-impl/domains-impl/queryBeDomainImpl')
        } catch { }
        if (queryBeDomainImpl && queryBeDomainImpl.del && typeof queryBeDomainImpl.del === 'function') {
            try {
                return await queryBeDomainImpl.del(dto, identity)
            } catch (error) {
                throw error
            }
        }
        loginfo("No implmentation found for queryBe.del. Using generic deleteItem method")
        return await deleteItem(dto, identity)
    }

    public static async invokeAction<T>(action: string, args: T, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        let queryBeDomainImpl
        try {
            queryBeDomainImpl = require('../../domain-context-impl/domains-impl/queryBeDomainImpl')
        } catch { }
        if (queryBeDomainImpl && action in queryBeDomainImpl && typeof queryBeDomainImpl[action] === 'function') {
            try {
                return await queryBeDomainImpl[action](args, identity)
            } catch (error) {
                throw error
            }
        }
        throw new Error(`No implmentation found for queryBe.${action} at '../../domain-context-impl/domains-impl/queryBeDomainImpl'`)
    }
}