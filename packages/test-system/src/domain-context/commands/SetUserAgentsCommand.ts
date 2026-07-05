import { IClaims, IIdentity, IDdbCommand, staticImplements } from "@incta/ddb-model";
import { SetUserAgentsCommandDomain } from "../domains/SetUserAgentsCommandDomain";
import { SetUserAgents } from "../items/commandItems/SetUserAgents";
import { logdebug } from "@incta/common-utils";
@staticImplements<IDdbCommand<SetUserAgents>>()
export class SetUserAgentsCommand extends SetUserAgentsCommandDomain {
    public static async start(setUserAgents: SetUserAgents, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        const setUserAgentsImpl = require('../../domain-context-impl/commands-impl/SetUserAgentsCommandImpl')
        if (setUserAgentsImpl && setUserAgentsImpl.start && typeof setUserAgentsImpl.start === 'function') {
            try {
                await setUserAgentsImpl.start(setUserAgents, identity)
            } catch (error){
                throw error
            }
        } else {
            throw new Error('Command implementation not found for SetUserAgents')
        }
    }
}
