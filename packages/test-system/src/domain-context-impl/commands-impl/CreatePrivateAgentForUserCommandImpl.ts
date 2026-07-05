import { DdbItem, IClaims, IIdentity } from "@incta/ddb-model";
import { CreatePrivateAgentForUser } from "../../domain-context/items/commandItems/CreatePrivateAgentForUser";
import { createItem, getItems, patchItem } from "@incta/ddb-actions";
import { ValidationError } from "@incta/common-utils";
import { User } from "../../domain-context/items/dataItems/User";
import { Agent } from "../../domain-context/items/dataItems/Agent";

export const start = async (createPrivateAgentForUser: CreatePrivateAgentForUser, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {
    const existingUser = (await getItems<User>({
        id: createPrivateAgentForUser.user!
    }, identity)).items[0]
    if (existingUser) {
        await createItem<Agent & DdbItem>(
            {
                ...createPrivateAgentForUser.agentItem!,
                privateData: true,
                __typename: Agent.__typename
            },
            // the identity based on which private data prefix will be infered
			{
				sub: existingUser.sub,
				claims: {
					active_agent: undefined,
				},
				username: existingUser.sub
			})
    } else {
        throw new ValidationError('User not found')
    }
}
