import { IIdentity, __domain, _sep1, _sep2, versionString, IClaims, IInctaUserItem, _default_agent_id } from "@incta/ddb-cqd-model"
import { DispatchActionInput, VALID_INPUT_ACTIONS } from "./interface/DispatchActionInput"
import { NotAuthenticatedError, NotAuthorizedError, firstCaseUpper } from "@incta/common-utils"
import { createItem, deleteItem, getItems, patchItem, queryItems, searchItems, updateItem } from "@incta/ddb-actions"
import { inferLoadPeersInput, transformGraphQLSelection } from "./transformGraphql"

// export const dispatchAction = async (input: DispatchActionInput, __usr?: string, __agt?: string) => {
export const dispatchAction = async (input: DispatchActionInput, identity: Partial<IIdentity<Partial<IClaims>>> | null) => {

    if (!identity) {
        throw new NotAuthenticatedError("No Identity")
    }
    if (!identity.claims) {
        throw new NotAuthorizedError("No Identity Caims")
    }

    const __typenameObject = __domain().domainsMap?.get(input.meta.__typename)
    // for get and delete actions do not require __typename as these actions deal only with IDs and 
    // we removed individual getXYZ/deleteXYZ and left only get/del, without being interested in __typename
    if (input.meta.action !== "get" && input.meta.action !== "delete") {
        const isValidAction = __typenameObject && (VALID_INPUT_ACTIONS.includes(input.meta.action) || input.meta.action in __typenameObject && typeof __typenameObject[input.meta.action] === 'function')
        if (!isValidAction) {
            throw new Error(`Bad action for __typename ${input.meta.__typename}`)
        }
    }

    input.arguments.__typename = input.meta.__typename
    input.arguments.loadPeersInput = input.loadPeersInput
    // load user from DB based on identity passed (WHICH IS ONLY THE ACCESS TOKEN, and does not contain custom claims for agents, active_agent etc)
    const existingUser = (await getItems<IInctaUserItem>({
        id: `User${_sep1}${identity?.sub}${_sep2}${versionString(0)}${_sep1}User${_sep1}${identity?.sub}`
    }, identity)).items[0]
    identity.claims = { ...(identity.claims ?? {}), active_agent: existingUser.active_agent, agents: existingUser.agents }

    //if both __typename and action valid invoke corresponding __typename[action] 
    // CAUTION see difference in params for __usr __agt
    // ************************************************************************************
    // TODO figure out what to do with __usr and __agt - do we simply concatenate them, OR?
    // ************************************************************************************
    // return await __domain().domainsMap?.get(input.meta.__typename)![input.meta.action](input.arguments, `${__usr}${_sep1}${__agt}`)
    switch (input.meta.action) {
        case 'create':
            if (__typenameObject && typeof __typenameObject.create === 'function') {
                return await __typenameObject.create(input.arguments, identity)
            } else {
                await await createItem(input.arguments, identity)
            }
        case 'update': return await updateItem(input.arguments, identity)
        case 'patch': return await patchItem(input.arguments, identity)
        case 'delete': return await deleteItem(input.arguments, identity)
        case 'get':
            if (__typenameObject && typeof __typenameObject.get === 'function') {
                return await __typenameObject.get({ ...input.arguments, ...transformGraphQLSelection(input) }, identity)
            } else {
                await await getItems({ ...input.arguments, ...transformGraphQLSelection(input) }, identity)
            }
        case 'query': return await queryItems({ ...input.arguments, ...transformGraphQLSelection(input) }, identity)
        case 'search': return await searchItems({ ...input.arguments, ...transformGraphQLSelection(input) }, identity)
        case 'start': return __typenameObject && await __typenameObject['start'](input.arguments, identity)
        case 'stop': throw new Error('not implemented')
        default: return __typenameObject && __typenameObject[input.meta.action] && await __typenameObject[input.meta.action](input.arguments, identity)
    }
}