import { IClaims, IIdentity, IDdbCommand, staticImplements } from "@incta/ddb-model";
import { ChangeActiveAgentCommandDomain } from "../domains/ChangeActiveAgentCommandDomain";
import { ChangeActiveAgent } from "../items/commandItems/ChangeActiveAgent";
import { logdebug } from "@incta/common-utils";
@staticImplements<IDdbCommand<ChangeActiveAgent>>()
export class ChangeActiveAgentCommand extends ChangeActiveAgentCommandDomain {
    public static async start(changeActiveAgent: ChangeActiveAgent, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        const changeActiveAgentImpl = require('../../domain-context-impl/commands-impl/ChangeActiveAgentCommandImpl')
        if (changeActiveAgentImpl && changeActiveAgentImpl.start && typeof changeActiveAgentImpl.start === 'function') {
            try {
                await changeActiveAgentImpl.start(changeActiveAgent, identity)
            } catch (error){
                throw error
            }
        } else {
            throw new Error('Command implementation not found for ChangeActiveAgent')
        }
    }
}
