import { IClaims, IIdentity, IDdbCommand, staticImplements } from "@incta/ddb-model";
import { SetUserAgentsCommandDomain } from "../domains/SetUserAgentsCommandDomain";
import { SetUserAgents } from "../items/commandItems/SetUserAgents";
import { logdebug } from "@incta/common-utils";

@staticImplements<IDdbCommand<SetUserAgents>>()
export class SetUserAgentsCommand extends SetUserAgentsCommandDomain {
    public static async start(setUserAgents: SetUserAgents, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        await this.validateStart(setUserAgents, identity)
        const setUserAgentsImpl = require('../../domain-context-impl/commands-impl/SetUserAgentsCommandImpl')
        if (setUserAgentsImpl && setUserAgentsImpl.start && typeof setUserAgentsImpl.start === 'function') {
            try {
                await setUserAgentsImpl.start(setUserAgents, identity)
            } catch (error){
                await this.onCommandErrored(setUserAgents, identity, error)
                throw error
            }
            await this.onCommandCompleted(setUserAgents, identity)
        } else {
            throw new Error('Command implementation not found for SetUserAgents')
        }
    }
    public static async validateStart(setUserAgents: SetUserAgents, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        const setUserAgentsImpl = require('../../domain-context-impl/commands-impl/SetUserAgentsCommandImpl')
        if (setUserAgentsImpl && setUserAgentsImpl.validateStart && typeof setUserAgentsImpl.validateStart === 'function') {
            await setUserAgentsImpl.validateStart(setUserAgents, identity)
        } else {
            logdebug('No validateStart implementation found for SetUserAgents')
        }
    }
    
    public static async onCommandCompleted(setUserAgents: SetUserAgents, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        const setUserAgentsImpl = require('../../domain-context-impl/commands-impl/SetUserAgentsCommandImpl')
        if (setUserAgentsImpl && setUserAgentsImpl.onCommandCompleted && typeof setUserAgentsImpl.onCommandCompleted === 'function') {
            await setUserAgentsImpl.onCommandCompleted(setUserAgents, identity)
        } else {
            logdebug('No onCommandCompleted implementation found for SetUserAgents')
        }
    }

    public static async onCommandErrored(setUserAgents: SetUserAgents, identity: Partial<IIdentity<Partial<IClaims>>> | null, error?: any): Promise<void> {
        const setUserAgentsImpl = require('../../domain-context-impl/commands-impl/SetUserAgentsCommandImpl')
        if (setUserAgentsImpl && setUserAgentsImpl.onCommandErrored && typeof setUserAgentsImpl.onCommandErrored === 'function') {
            await setUserAgentsImpl.onCommandErrored(setUserAgents, identity)
        } else {
            logdebug('No onCommandErrored implementation found for SetUserAgents')
        }
    }
}