import { IClaims, IIdentity, IDdbQuery, staticImplements } from "@incta/ddb-model";
import { GetGraphqlSchemaQueryDomain } from "../domains/GetGraphqlSchemaQueryDomain";
import { GetGraphqlSchema } from "../items/queryItems/GetGraphqlSchema";

@staticImplements<IDdbQuery<GetGraphqlSchema>>()
export class GetGraphqlSchemaQuery extends GetGraphqlSchemaQueryDomain {
    public static async start(getGraphqlSchema: GetGraphqlSchema, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateStart(getGraphqlSchema: GetGraphqlSchema, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
}