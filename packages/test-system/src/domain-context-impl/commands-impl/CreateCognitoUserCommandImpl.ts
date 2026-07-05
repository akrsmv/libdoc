import { DdbItem, IClaims, IIdentity, _default_agent_id, _sep1, _sep2, versionString } from "@incta/ddb-model";
import { CreateCognitoUser } from "../../domain-context/items/commandItems/CreateCognitoUser";
import { createItem, patchItem } from "@incta/ddb-actions";
import { UserEmailRule } from "../../domain-context/items/dataItems/UserEmailRule";
import { User } from "../../domain-context/items/dataItems/User";
import { Agent } from "../../domain-context/items/dataItems/Agent";
import { uuid } from "@incta/common-utils";

export const start = async (createCognitoUser: CreateCognitoUser, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {
    const user = await createItem<User>(createCognitoUser.userItem!, identity)
    const userDefaultAgent = await createItem<Agent & DdbItem>({
            id: _default_agent_id,
            name: 'Default agent for ' + user.email,
            code: 'DEFAULT_AGT_' + user.email,
            privateData: true,
            __typename: Agent.__parent_typename
    }, identity)
    user.agents = []
    user.active_agent = userDefaultAgent.id
    await patchItem(user, identity) // set the default agent as active for that user
    await createItem({
            // HASH: `${UserEmail.__parent_typename}${_sep1}${createCognitoUser.userItem?.email}`,
            id: `${UserEmailRule.__parent_typename}${_sep1}${createCognitoUser.userItem?.email}${_sep2}${versionString(0)}${_sep1}${UserEmailRule.__typename}${_sep1}${uuid()}`,
            // id: `${UserEmail.__parent_typename}${_sep1}${createCognitoUser.userItem?.sub}${_sep2}${versionString(0)}${_sep1}${UserEmail.__typename}${_sep1}${createCognitoUser.userItem?.email}`,
            agent: userDefaultAgent.id,
            user: user.id,
            __typename: UserEmailRule.__typename
        }, null) // do not create private data for UserEmail, otherwise userId infered by email becomes harder (chicken/egg issue)
}

