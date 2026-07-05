import { IClaims, IIdentity, IDdbCommand, staticImplements } from "@incta/ddb-model";
import { CreatePrivateAgentForUserCommandDomain } from "../domains/CreatePrivateAgentForUserCommandDomain";
import { CreatePrivateAgentForUser } from "../items/commandItems/CreatePrivateAgentForUser";
import { logdebug } from "@incta/common-utils";
@staticImplements<IDdbCommand<CreatePrivateAgentForUser>>()
export class CreatePrivateAgentForUserCommand extends CreatePrivateAgentForUserCommandDomain {
    public static async start(createPrivateAgentForUser: CreatePrivateAgentForUser, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        const createPrivateAgentForUserImpl = require('../../domain-context-impl/commands-impl/CreatePrivateAgentForUserCommandImpl')
        if (createPrivateAgentForUserImpl && createPrivateAgentForUserImpl.start && typeof createPrivateAgentForUserImpl.start === 'function') {
            try {
                await createPrivateAgentForUserImpl.start(createPrivateAgentForUser, identity)
            } catch (error){
                throw error
            }
        } else {
            throw new Error('Command implementation not found for CreatePrivateAgentForUser')
        }
    }
}
