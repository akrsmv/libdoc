import { IClaims, IIdentity, IDdbCommand, staticImplements } from "@incta/ddb-model";
import { InjestEmailCommandDomain } from "../domains/InjestEmailCommandDomain";
import { InjestEmail } from "../items/commandItems/InjestEmail";
import { logdebug } from "@incta/common-utils";
@staticImplements<IDdbCommand<InjestEmail>>()
export class InjestEmailCommand extends InjestEmailCommandDomain {
    public static async start(injestEmail: InjestEmail, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        const injestEmailImpl = require('../../domain-context-impl/commands-impl/InjestEmailCommandImpl')
        if (injestEmailImpl && injestEmailImpl.start && typeof injestEmailImpl.start === 'function') {
            try {
                await injestEmailImpl.start(injestEmail, identity)
            } catch (error){
                throw error
            }
        } else {
            throw new Error('Command implementation not found for InjestEmail')
        }
    }
}
