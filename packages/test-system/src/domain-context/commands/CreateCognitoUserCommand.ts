import { IClaims, IIdentity, IDdbCommand, staticImplements } from "@incta/ddb-model";
import { CreateCognitoUserCommandDomain } from "../domains/CreateCognitoUserCommandDomain";
import { CreateCognitoUser } from "../items/commandItems/CreateCognitoUser";
import { logdebug } from "@incta/common-utils";
@staticImplements<IDdbCommand<CreateCognitoUser>>()
export class CreateCognitoUserCommand extends CreateCognitoUserCommandDomain {
    public static async start(createCognitoUser: CreateCognitoUser, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        const createCognitoUserImpl = require('../../domain-context-impl/commands-impl/CreateCognitoUserCommandImpl')
        if (createCognitoUserImpl && createCognitoUserImpl.start && typeof createCognitoUserImpl.start === 'function') {
            try {
                await createCognitoUserImpl.start(createCognitoUser, identity)
            } catch (error){
                throw error
            }
        } else {
            throw new Error('Command implementation not found for CreateCognitoUser')
        }
    }
}
