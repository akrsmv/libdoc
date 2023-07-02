import { IClaims, IIdentity, IDdbCommand, staticImplements } from "@incta/ddb-model";
import { ChangeActiveAgentCommandDomain } from "../domains/ChangeActiveAgentCommandDomain";
import { ChangeActiveAgent } from "../items/commandItems/ChangeActiveAgent";
import { logdebug } from "@incta/common-utils";

@staticImplements<IDdbCommand<ChangeActiveAgent>>()
export class ChangeActiveAgentCommand extends ChangeActiveAgentCommandDomain {
    public static async start(changeActiveAgent: ChangeActiveAgent, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        await this.validateStart(changeActiveAgent, identity)
        const changeActiveAgentImpl = require('../../domain-context-impl/commands-impl/ChangeActiveAgentCommandImpl')
        if (changeActiveAgentImpl && changeActiveAgentImpl.start && typeof changeActiveAgentImpl.start === 'function') {
            try {
                await changeActiveAgentImpl.start(changeActiveAgent, identity)
            } catch (error){
                await this.onCommandErrored(changeActiveAgent, identity, error)
                throw error
            }
            await this.onCommandCompleted(changeActiveAgent, identity)
        } else {
            throw new Error('Command implementation not found for ChangeActiveAgent')
        }
    }
    public static async validateStart(changeActiveAgent: ChangeActiveAgent, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        const changeActiveAgentImpl = require('../../domain-context-impl/commands-impl/ChangeActiveAgentCommandImpl')
        if (changeActiveAgentImpl && changeActiveAgentImpl.validateStart && typeof changeActiveAgentImpl.validateStart === 'function') {
            await changeActiveAgentImpl.validateStart(changeActiveAgent, identity)
        } else {
            logdebug('No validateStart implementation found for ChangeActiveAgent')
        }
    }
    
    public static async onCommandCompleted(changeActiveAgent: ChangeActiveAgent, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        const changeActiveAgentImpl = require('../../domain-context-impl/commands-impl/ChangeActiveAgentCommandImpl')
        if (changeActiveAgentImpl && changeActiveAgentImpl.onCommandCompleted && typeof changeActiveAgentImpl.onCommandCompleted === 'function') {
            await changeActiveAgentImpl.onCommandCompleted(changeActiveAgent, identity)
        } else {
            logdebug('No onCommandCompleted implementation found for ChangeActiveAgent')
        }
    }

    public static async onCommandErrored(changeActiveAgent: ChangeActiveAgent, identity: Partial<IIdentity<Partial<IClaims>>> | null, error?: any): Promise<void> {
        const changeActiveAgentImpl = require('../../domain-context-impl/commands-impl/ChangeActiveAgentCommandImpl')
        if (changeActiveAgentImpl && changeActiveAgentImpl.onCommandErrored && typeof changeActiveAgentImpl.onCommandErrored === 'function') {
            await changeActiveAgentImpl.onCommandErrored(changeActiveAgent, identity)
        } else {
            logdebug('No onCommandErrored implementation found for ChangeActiveAgent')
        }
    }
}