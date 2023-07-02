import { DdbQueryItem, IDdbItemStaticMetadata, setDomainContext } from '@incta/ddb-model';
import { queryBe } from './queryBe';
import { GetGraphqlSchema } from './GetGraphqlSchema';

export const _injectQueryItems = () => setDomainContext({
    jsonDataModel: require('../../data-model.json'),
    jsonTableModel: require('../../aws-ddb-table-definition.json'),
    queryItemsMap: new Map<string, IDdbItemStaticMetadata<DdbQueryItem>>(
        [
            [queryBe.__typename, queryBe],
            [GetGraphqlSchema.__typename, GetGraphqlSchema]
        ]
    )
})