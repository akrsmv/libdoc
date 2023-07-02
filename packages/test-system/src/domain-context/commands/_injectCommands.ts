import { DdbCommandItem, IDdbCommand, setDomainContext } from '@incta/ddb-model';
import { GenerateAirtoursTestData } from '../items/commandItems/GenerateAirtoursTestData';
import { GenerateAirtoursPublicTestData } from '../items/commandItems/GenerateAirtoursPublicTestData';
import { ChangeActiveAgent } from '../items/commandItems/ChangeActiveAgent';
import { SetUserAgents } from '../items/commandItems/SetUserAgents';
import { GenerateAirtoursTestDataCommand } from './GenerateAirtoursTestDataCommand';
import { GenerateAirtoursPublicTestDataCommand } from './GenerateAirtoursPublicTestDataCommand';
import { ChangeActiveAgentCommand } from './ChangeActiveAgentCommand';
import { SetUserAgentsCommand } from './SetUserAgentsCommand';
export const _injectCommands = () => setDomainContext({
    commandsMap: new Map<string, IDdbCommand<DdbCommandItem>>(
        [
            [GenerateAirtoursTestData.__typename, GenerateAirtoursTestDataCommand],
            [GenerateAirtoursPublicTestData.__typename, GenerateAirtoursPublicTestDataCommand],
            [ChangeActiveAgent.__typename, ChangeActiveAgentCommand],
            [SetUserAgents.__typename, SetUserAgentsCommand]
        ]
    )
})
