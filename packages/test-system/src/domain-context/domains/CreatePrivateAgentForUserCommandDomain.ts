import { IClaims, IIdentity, IDdbDomain, staticImplements, GetItemProps, IDdbItemKey, Result} from "@incta/ddb-model";
import { CreatePrivateAgentForUser } from "../items/commandItems/CreatePrivateAgentForUser";
import { createItem, updateItem, patchItem, deleteItem, getItems } from "@incta/ddb-actions";
import { loginfo, logwarn } from "@incta/common-utils";

@staticImplements<IDdbDomain<CreatePrivateAgentForUser>>()
export class CreatePrivateAgentForUserCommandDomain {

    public static async get(params: GetItemProps, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<Result<CreatePrivateAgentForUser>> {
        let createPrivateAgentForUserDomainImpl
        try {
            createPrivateAgentForUserDomainImpl = require('../../domain-context-impl/domains-impl/CreatePrivateAgentForUserDomainImpl')
        } catch { }
        if (createPrivateAgentForUserDomainImpl && createPrivateAgentForUserDomainImpl.get && typeof createPrivateAgentForUserDomainImpl.get === 'function') {
            try {
                return await createPrivateAgentForUserDomainImpl.get(params, identity)
            } catch (error) {
                throw error
            }
        }
        loginfo("No implmentation found for CreatePrivateAgentForUser.get. Using generic getItems method")
        return await getItems(params, identity)
    }
    public static async create(item: Partial<CreatePrivateAgentForUser>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<CreatePrivateAgentForUser> {
        let createPrivateAgentForUserDomainImpl
        try {
            createPrivateAgentForUserDomainImpl = require('../../domain-context-impl/domains-impl/CreatePrivateAgentForUserDomainImpl')
        } catch { }
        if (createPrivateAgentForUserDomainImpl && createPrivateAgentForUserDomainImpl.create && typeof createPrivateAgentForUserDomainImpl.create === 'function') {
            try {
                return await createPrivateAgentForUserDomainImpl.create(item, identity)
            } catch (error) {
                throw error
            }
        }
        loginfo("No implmentation found for CreatePrivateAgentForUser.create. Using generic createItem method")
        return await createItem(item, identity)
    }
    public static async update(item: Partial<CreatePrivateAgentForUser>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        let createPrivateAgentForUserDomainImpl
        try {
            createPrivateAgentForUserDomainImpl = require('../../domain-context-impl/domains-impl/CreatePrivateAgentForUserDomainImpl')
        } catch { }
        if (createPrivateAgentForUserDomainImpl && createPrivateAgentForUserDomainImpl.update && typeof createPrivateAgentForUserDomainImpl.update === 'function') {
            try {
                return await createPrivateAgentForUserDomainImpl.update(item, identity)
            } catch (error) {
                throw error
            }
        }
        loginfo("No implmentation found for CreatePrivateAgentForUser.update. Using generic updateItem method")
        return await updateItem(item, identity)
    }
    public static async patch(item: Partial<CreatePrivateAgentForUser>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        let createPrivateAgentForUserDomainImpl
        try {
            createPrivateAgentForUserDomainImpl = require('../../domain-context-impl/domains-impl/CreatePrivateAgentForUserDomainImpl')
        } catch { }
        if (createPrivateAgentForUserDomainImpl && createPrivateAgentForUserDomainImpl.patch && typeof createPrivateAgentForUserDomainImpl.patch === 'function') {
            try {
                return await createPrivateAgentForUserDomainImpl.patch(item, identity)
            } catch (error) {
                throw error
            }
        }
        loginfo("No implmentation found for CreatePrivateAgentForUser.patch. Using generic patchItem method")
        return await patchItem(item, identity)
    }
    public static async del(dto: Required<IDdbItemKey>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        let createPrivateAgentForUserDomainImpl
        try {
            createPrivateAgentForUserDomainImpl = require('../../domain-context-impl/domains-impl/CreatePrivateAgentForUserDomainImpl')
        } catch { }
        if (createPrivateAgentForUserDomainImpl && createPrivateAgentForUserDomainImpl.del && typeof createPrivateAgentForUserDomainImpl.del === 'function') {
            try {
                return await createPrivateAgentForUserDomainImpl.del(dto, identity)
            } catch (error) {
                throw error
            }
        }
        loginfo("No implmentation found for CreatePrivateAgentForUser.del. Using generic deleteItem method")
        return await deleteItem(dto, identity)
    }

    public static async invokeAction<T>(action: string, args: T, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        let createPrivateAgentForUserDomainImpl
        try {
            createPrivateAgentForUserDomainImpl = require('../../domain-context-impl/domains-impl/CreatePrivateAgentForUserDomainImpl')
        } catch { }
        if (createPrivateAgentForUserDomainImpl && action in createPrivateAgentForUserDomainImpl && typeof createPrivateAgentForUserDomainImpl[action] === 'function') {
            try {
                return await createPrivateAgentForUserDomainImpl[action](args, identity)
            } catch (error) {
                throw error
            }
        }
        throw new Error(`No implmentation found for CreatePrivateAgentForUser.${action} at '../../domain-context-impl/domains-impl/CreatePrivateAgentForUserDomainImpl'`)
    }
}