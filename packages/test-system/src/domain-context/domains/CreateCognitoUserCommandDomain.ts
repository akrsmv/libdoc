import { IClaims, IIdentity, IDdbDomain, staticImplements, GetItemProps, IDdbItemKey, Result} from "@incta/ddb-model";
import { CreateCognitoUser } from "../items/commandItems/CreateCognitoUser";
import { createItem, updateItem, patchItem, deleteItem, getItems } from "@incta/ddb-actions";
import { loginfo, logwarn } from "@incta/common-utils";

@staticImplements<IDdbDomain<CreateCognitoUser>>()
export class CreateCognitoUserCommandDomain {

    public static async get(params: GetItemProps, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<Result<CreateCognitoUser>> {
        let createCognitoUserDomainImpl
        try {
            createCognitoUserDomainImpl = require('../../domain-context-impl/domains-impl/CreateCognitoUserDomainImpl')
        } catch { }
        if (createCognitoUserDomainImpl && createCognitoUserDomainImpl.get && typeof createCognitoUserDomainImpl.get === 'function') {
            try {
                return await createCognitoUserDomainImpl.get(params, identity)
            } catch (error) {
                throw error
            }
        }
        loginfo("No implmentation found for CreateCognitoUser.get. Using generic getItems method")
        return await getItems(params, identity)
    }
    public static async create(item: Partial<CreateCognitoUser>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<CreateCognitoUser> {
        let createCognitoUserDomainImpl
        try {
            createCognitoUserDomainImpl = require('../../domain-context-impl/domains-impl/CreateCognitoUserDomainImpl')
        } catch { }
        if (createCognitoUserDomainImpl && createCognitoUserDomainImpl.create && typeof createCognitoUserDomainImpl.create === 'function') {
            try {
                return await createCognitoUserDomainImpl.create(item, identity)
            } catch (error) {
                throw error
            }
        }
        loginfo("No implmentation found for CreateCognitoUser.create. Using generic createItem method")
        return await createItem(item, identity)
    }
    public static async update(item: Partial<CreateCognitoUser>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        let createCognitoUserDomainImpl
        try {
            createCognitoUserDomainImpl = require('../../domain-context-impl/domains-impl/CreateCognitoUserDomainImpl')
        } catch { }
        if (createCognitoUserDomainImpl && createCognitoUserDomainImpl.update && typeof createCognitoUserDomainImpl.update === 'function') {
            try {
                return await createCognitoUserDomainImpl.update(item, identity)
            } catch (error) {
                throw error
            }
        }
        loginfo("No implmentation found for CreateCognitoUser.update. Using generic updateItem method")
        return await updateItem(item, identity)
    }
    public static async patch(item: Partial<CreateCognitoUser>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        let createCognitoUserDomainImpl
        try {
            createCognitoUserDomainImpl = require('../../domain-context-impl/domains-impl/CreateCognitoUserDomainImpl')
        } catch { }
        if (createCognitoUserDomainImpl && createCognitoUserDomainImpl.patch && typeof createCognitoUserDomainImpl.patch === 'function') {
            try {
                return await createCognitoUserDomainImpl.patch(item, identity)
            } catch (error) {
                throw error
            }
        }
        loginfo("No implmentation found for CreateCognitoUser.patch. Using generic patchItem method")
        return await patchItem(item, identity)
    }
    public static async del(dto: Required<IDdbItemKey>, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        let createCognitoUserDomainImpl
        try {
            createCognitoUserDomainImpl = require('../../domain-context-impl/domains-impl/CreateCognitoUserDomainImpl')
        } catch { }
        if (createCognitoUserDomainImpl && createCognitoUserDomainImpl.del && typeof createCognitoUserDomainImpl.del === 'function') {
            try {
                return await createCognitoUserDomainImpl.del(dto, identity)
            } catch (error) {
                throw error
            }
        }
        loginfo("No implmentation found for CreateCognitoUser.del. Using generic deleteItem method")
        return await deleteItem(dto, identity)
    }

    public static async invokeAction<T>(action: string, args: T, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        let createCognitoUserDomainImpl
        try {
            createCognitoUserDomainImpl = require('../../domain-context-impl/domains-impl/CreateCognitoUserDomainImpl')
        } catch { }
        if (createCognitoUserDomainImpl && action in createCognitoUserDomainImpl && typeof createCognitoUserDomainImpl[action] === 'function') {
            try {
                return await createCognitoUserDomainImpl[action](args, identity)
            } catch (error) {
                throw error
            }
        }
        throw new Error(`No implmentation found for CreateCognitoUser.${action} at '../../domain-context-impl/domains-impl/CreateCognitoUserDomainImpl'`)
    }
}