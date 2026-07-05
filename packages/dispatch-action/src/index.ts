import { IIdentity, __domain, _sep1, _sep2, versionString, IClaims, IInctaUserItem, _default_agent_id } from "@incta/ddb-cqd-model"
import { NotAuthenticatedError, NotAuthorizedError, logdebug } from "@incta/common-utils"
import { createItem, deleteItem, getItems, patchItem, queryItems, searchItems, updateItem } from "@incta/ddb-actions"
import { transformGraphQLSelection } from "./transformGraphql"
import { DispatchActionInput } from "./interface/DispatchActionInput"

export const dispatchAction = async (input: DispatchActionInput, identity: Partial<IIdentity<Partial<IClaims>>> | null) => {
    logdebug(`[dispatchAction]`, input)
    if (!identity) {
        throw new NotAuthenticatedError("No Identity")
    }
    if (!identity.claims) {
        throw new NotAuthorizedError("No Identity Claims")
    }

    // get the corresponding domain object, NOTE: null is valid case 
    const __typenameObject = __domain().domainsMap?.get(input.meta.__typename)

    // set needed metadata to actual payload as well
    input.arguments.__typename = input.meta.__typename
    input.arguments.loadPeersInput = input.loadPeersInput

    // load user from DB based on sub passed 
    const existingUser = (await getItems<IInctaUserItem>({
        id: `User${_sep1}${identity?.sub}${_sep2}${versionString(0)}${_sep1}User${_sep1}${identity?.sub}`
    }, identity)).items[0]

    // populate identity claims active_agent and agents 
    identity.claims = { ...(identity.claims ?? {}), active_agent: existingUser.active_agent, agents: existingUser.agents }

    //if both __typename and action are valid invoke corresponding __typename[action] 
    switch (input.meta.action) {
        case 'create':
            if (__typenameObject && typeof __typenameObject.create === 'function') {
                return await __typenameObject.create(input.arguments, identity)
            } else {
                return await createItem(input.arguments, identity)
            }
        case 'update': // return await updateItem(input.arguments, identity)
            if (__typenameObject && typeof __typenameObject.update === 'function') {
                return await __typenameObject.update(input.arguments, identity)
            } else {
                return await updateItem(input.arguments, identity)
            }
        case 'patch':
            if (__typenameObject && typeof __typenameObject.patch === 'function') {
                return await __typenameObject.patch(input.arguments, identity)
            } else {
                return await patchItem(input.arguments, identity)
            }
        case 'del':
            if (__typenameObject && typeof __typenameObject.del === 'function') {
                return await __typenameObject.del(input.arguments, identity)
            } else {
                return await deleteItem(input.arguments, identity)
            }
        case 'get':
            if (__typenameObject && typeof __typenameObject.get === 'function') {
                return await __typenameObject.get({ ...input.arguments, ...transformGraphQLSelection(input) }, identity)
            } else {
                return await getItems({ ...input.arguments, ...transformGraphQLSelection(input) }, identity)
            }
        case 'query': return await queryItems({ ...input.arguments, ...transformGraphQLSelection(input) }, identity)
        case 'search': return await searchItems({ ...input.arguments, ...transformGraphQLSelection(input) }, identity)
        case 'start': return __typenameObject && await __typenameObject['start'](input.arguments, identity)
        case 'stop': throw new Error('not implemented')
        default: return __typenameObject && await __typenameObject.invokeAction(input.meta.action, input.arguments, identity)
    }
}