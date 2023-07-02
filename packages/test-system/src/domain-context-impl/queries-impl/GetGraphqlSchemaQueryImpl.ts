import { IClaims, IIdentity } from "@incta/ddb-model";
import { GetGraphqlSchema } from "../../domain-context/items/queryItems/GetGraphqlSchema";

export const start = async (getGraphqlSchema: GetGraphqlSchema, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {
    
}

export const validateStart = async (getGraphqlSchema: GetGraphqlSchema, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {
    
}
