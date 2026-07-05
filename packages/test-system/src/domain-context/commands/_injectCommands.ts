import { DdbCommandItem, IDdbCommand, setDomainContext } from '@incta/ddb-model';
import { InjestEmail } from '../items/commandItems/InjestEmail';
import { CreateCognitoUser } from '../items/commandItems/CreateCognitoUser';
import { ChangeActiveAgent } from '../items/commandItems/ChangeActiveAgent';
import { CreatePrivateAgentForUser } from '../items/commandItems/CreatePrivateAgentForUser';
import { SetUserAgents } from '../items/commandItems/SetUserAgents';
import { InjestEmailCommand } from './InjestEmailCommand';
import { CreateCognitoUserCommand } from './CreateCognitoUserCommand';
import { ChangeActiveAgentCommand } from './ChangeActiveAgentCommand';
import { CreatePrivateAgentForUserCommand } from './CreatePrivateAgentForUserCommand';
import { SetUserAgentsCommand } from './SetUserAgentsCommand';
export const _injectCommands = () => setDomainContext({
    commandsMap: new Map<string, IDdbCommand<DdbCommandItem>>(
        [
            [InjestEmail.__typename, InjestEmailCommand],
            [CreateCognitoUser.__typename, CreateCognitoUserCommand],
            [ChangeActiveAgent.__typename, ChangeActiveAgentCommand],
            [CreatePrivateAgentForUser.__typename, CreatePrivateAgentForUserCommand],
            [SetUserAgents.__typename, SetUserAgentsCommand]
        ]
    )
})
