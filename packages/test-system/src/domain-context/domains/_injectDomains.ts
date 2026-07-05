import { DdbItem, IDdbDomain, setDomainContext } from '@incta/ddb-model';
import { User } from '../items/dataItems/User';
import { Agent } from '../items/dataItems/Agent';
import { UserEmailRule } from '../items/dataItems/UserEmailRule';
import { UserDataDomain } from './UserDataDomain';
import { AgentDataDomain } from './AgentDataDomain';
import { UserEmailRuleDataDomain } from './UserEmailRuleDataDomain';
import { InjestEmail } from '../items/commandItems/InjestEmail';
import { CreateCognitoUser } from '../items/commandItems/CreateCognitoUser';
import { ChangeActiveAgent } from '../items/commandItems/ChangeActiveAgent';
import { CreatePrivateAgentForUser } from '../items/commandItems/CreatePrivateAgentForUser';
import { SetUserAgents } from '../items/commandItems/SetUserAgents';
import { InjestEmailCommand } from '../commands/InjestEmailCommand';
import { CreateCognitoUserCommand } from '../commands/CreateCognitoUserCommand';
import { ChangeActiveAgentCommand } from '../commands/ChangeActiveAgentCommand';
import { CreatePrivateAgentForUserCommand } from '../commands/CreatePrivateAgentForUserCommand';
import { SetUserAgentsCommand } from '../commands/SetUserAgentsCommand';
import { queryBe } from '../items/queryItems/queryBe';
import { GetGraphqlSchema } from '../items/queryItems/GetGraphqlSchema';
import { queryBeQuery } from '../queries/queryBeQuery';
import { GetGraphqlSchemaQuery } from '../queries/GetGraphqlSchemaQuery';
export const _injectDomains = () => setDomainContext({
    domainsMap: new Map<string, IDdbDomain<DdbItem>>(
        [
            [User.__typename, UserDataDomain],
            [Agent.__typename, AgentDataDomain],
            [UserEmailRule.__typename, UserEmailRuleDataDomain],
            [InjestEmail.__typename, InjestEmailCommand],
            [CreateCognitoUser.__typename, CreateCognitoUserCommand],
            [ChangeActiveAgent.__typename, ChangeActiveAgentCommand],
            [CreatePrivateAgentForUser.__typename, CreatePrivateAgentForUserCommand],
            [SetUserAgents.__typename, SetUserAgentsCommand],
            [queryBe.__typename, queryBeQuery],
            [GetGraphqlSchema.__typename, GetGraphqlSchemaQuery]
        ]
        
    )
})
