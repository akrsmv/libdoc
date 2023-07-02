import { DdbQueryItem, IDdbQuery, setDomainContext } from '@incta/ddb-model';
import { queryBe } from '../items/queryItems/queryBe';
import { GetGraphqlSchema } from '../items/queryItems/GetGraphqlSchema';
import { queryBeQuery } from './queryBeQuery';
import { GetGraphqlSchemaQuery } from './GetGraphqlSchemaQuery';
export const _injectQueries = () => setDomainContext({
    queriesMap: new Map<string, IDdbQuery<DdbQueryItem>>(
        [
            [queryBe.__typename, queryBeQuery],
            [GetGraphqlSchema.__typename, GetGraphqlSchemaQuery]
        ]
    )
})
