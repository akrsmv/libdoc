import { IClaims, IIdentity, IDdbQuery, staticImplements } from "@incta/ddb-model";
import { queryBeQueryDomain } from "../domains/queryBeQueryDomain";
import { queryBe } from "../items/queryItems/queryBe";

@staticImplements<IDdbQuery<queryBe>>()
export class queryBeQuery extends queryBeQueryDomain {
    public static async start(queryBe: queryBe, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateStart(queryBe: queryBe, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
}