import { IClaims, IIdentity, IDdbDomain, staticImplements, GetItemProps, IDdbItemKey, Result} from "@incta/ddb-model";
import { GetGraphqlSchema } from "../items/queryItems/GetGraphqlSchema";
import { createItem, updateItem, patchItem, deleteItem, getItems } from "@incta/ddb-actions";
import { loginfo, logwarn } from "@incta/common-utils";

@staticImplements<IDdbDomain<GetGraphqlSchema>>()
export class GetGraphqlSchemaQueryDomain {

    public static async get(params: GetItemProps, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<Result<GetGraphqlSchema>> {
        let getGraphqlSchemaDomainImpl
        try {
            getGraphqlSchemaDomainImpl = require('../../domain-context-impl/domains-impl/GetGraphqlSchemaDomainImpl')
        } catch { }
        if (getGraphqlSchemaDomainImpl && getGraphqlSchemaDomainImpl.get && typeof getGraphqlSchemaDomainImpl.get === 'function') {
            try {
                return await getGraphqlSchemaDomainImpl.get(params, identity)
            } catch (error) {
                throw error
            }
        }
        loginfo("No implmentation found for GetGraphqlSchema.get. Using generic getItems method")
        return await getItems(params, identity)
    }
    public static async create(item: Partial<GetGraphqlSchema>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<GetGraphqlSchema> {
        let getGraphqlSchemaDomainImpl
        try {
            getGraphqlSchemaDomainImpl = require('../../domain-context-impl/domains-impl/GetGraphqlSchemaDomainImpl')
        } catch { }
        if (getGraphqlSchemaDomainImpl && getGraphqlSchemaDomainImpl.create && typeof getGraphqlSchemaDomainImpl.create === 'function') {
            try {
                return await getGraphqlSchemaDomainImpl.create(item, identity)
            } catch (error) {
                throw error
            }
        }
        loginfo("No implmentation found for GetGraphqlSchema.create. Using generic createItem method")
        return await createItem(item, identity)
    }
    public static async update(item: Partial<GetGraphqlSchema>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        let getGraphqlSchemaDomainImpl
        try {
            getGraphqlSchemaDomainImpl = require('../../domain-context-impl/domains-impl/GetGraphqlSchemaDomainImpl')
        } catch { }
        if (getGraphqlSchemaDomainImpl && getGraphqlSchemaDomainImpl.update && typeof getGraphqlSchemaDomainImpl.update === 'function') {
            try {
                return await getGraphqlSchemaDomainImpl.update(item, identity)
            } catch (error) {
                throw error
            }
        }
        loginfo("No implmentation found for GetGraphqlSchema.update. Using generic updateItem method")
        return await updateItem(item, identity)
    }
    public static async patch(item: Partial<GetGraphqlSchema>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        let getGraphqlSchemaDomainImpl
        try {
            getGraphqlSchemaDomainImpl = require('../../domain-context-impl/domains-impl/GetGraphqlSchemaDomainImpl')
        } catch { }
        if (getGraphqlSchemaDomainImpl && getGraphqlSchemaDomainImpl.patch && typeof getGraphqlSchemaDomainImpl.patch === 'function') {
            try {
                return await getGraphqlSchemaDomainImpl.patch(item, identity)
            } catch (error) {
                throw error
            }
        }
        loginfo("No implmentation found for GetGraphqlSchema.patch. Using generic patchItem method")
        return await patchItem(item, identity)
    }
    public static async del(dto: Required<IDdbItemKey>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        let getGraphqlSchemaDomainImpl
        try {
            getGraphqlSchemaDomainImpl = require('../../domain-context-impl/domains-impl/GetGraphqlSchemaDomainImpl')
        } catch { }
        if (getGraphqlSchemaDomainImpl && getGraphqlSchemaDomainImpl.del && typeof getGraphqlSchemaDomainImpl.del === 'function') {
            try {
                return await getGraphqlSchemaDomainImpl.del(dto, identity)
            } catch (error) {
                throw error
            }
        }
        loginfo("No implmentation found for GetGraphqlSchema.del. Using generic deleteItem method")
        return await deleteItem(dto, identity)
    }

    public static async invokeAction<T>(action: string, args: T, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        let getGraphqlSchemaDomainImpl
        try {
            getGraphqlSchemaDomainImpl = require('../../domain-context-impl/domains-impl/GetGraphqlSchemaDomainImpl')
        } catch { }
        if (getGraphqlSchemaDomainImpl && action in getGraphqlSchemaDomainImpl && typeof getGraphqlSchemaDomainImpl[action] === 'function') {
            try {
                return await getGraphqlSchemaDomainImpl[action](args, identity)
            } catch (error) {
                throw error
            }
        }
        throw new Error(`No implmentation found for GetGraphqlSchema.${action} at '../../domain-context-impl/domains-impl/GetGraphqlSchemaDomainImpl'`)
    }
}