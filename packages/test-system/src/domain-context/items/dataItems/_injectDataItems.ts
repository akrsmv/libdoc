import { DdbItem, IDdbItemStaticMetadata, setDomainContext } from '@incta/ddb-model';
import { User } from './User';
import { Agent } from './Agent';
import { UserEmailRule } from './UserEmailRule';

export const _injectDataItems = () => setDomainContext({
    jsonDataModel: require('../../data-model.json'),
    jsonTableModel: require('../../aws-ddb-table-definition.json'),
    dataItemsMap: new Map<string, IDdbItemStaticMetadata<DdbItem>>(
        [
            [User.__typename, User],
            [Agent.__typename, Agent],
            [UserEmailRule.__typename, UserEmailRule]
        ]
    )
})