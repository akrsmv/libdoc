import { DdbCommandItem, IDdbItemStaticMetadata, setDomainContext } from '@incta/ddb-model';
import { GenerateAirtoursTestData } from './GenerateAirtoursTestData';
import { GenerateAirtoursPublicTestData } from './GenerateAirtoursPublicTestData';
import { ChangeActiveAgent } from './ChangeActiveAgent';
import { SetUserAgents } from './SetUserAgents';

export const _injectCommandItems = () => setDomainContext({
    jsonDataModel: require('../../data-model.json'),
    jsonTableModel: require('../../aws-ddb-table-definition.json'),
    commandItemsMap: new Map<string, IDdbItemStaticMetadata<DdbCommandItem>>(
        [
            [GenerateAirtoursTestData.__typename, GenerateAirtoursTestData],
            [GenerateAirtoursPublicTestData.__typename, GenerateAirtoursPublicTestData],
            [ChangeActiveAgent.__typename, ChangeActiveAgent],
            [SetUserAgents.__typename, SetUserAgents]
        ]
    )
})