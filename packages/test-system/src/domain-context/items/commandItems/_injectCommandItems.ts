import { DdbCommandItem, IDdbItemStaticMetadata, setDomainContext } from '@incta/ddb-model';
import { InjestEmail } from './InjestEmail';
import { CreateCognitoUser } from './CreateCognitoUser';
import { ChangeActiveAgent } from './ChangeActiveAgent';
import { CreatePrivateAgentForUser } from './CreatePrivateAgentForUser';
import { SetUserAgents } from './SetUserAgents';

export const _injectCommandItems = () => setDomainContext({
    jsonDataModel: require('../../data-model.json'),
    jsonTableModel: require('../../aws-ddb-table-definition.json'),
    commandItemsMap: new Map<string, IDdbItemStaticMetadata<DdbCommandItem>>(
        [
            [InjestEmail.__typename, InjestEmail],
            [CreateCognitoUser.__typename, CreateCognitoUser],
            [ChangeActiveAgent.__typename, ChangeActiveAgent],
            [CreatePrivateAgentForUser.__typename, CreatePrivateAgentForUser],
            [SetUserAgents.__typename, SetUserAgents]
        ]
    )
})