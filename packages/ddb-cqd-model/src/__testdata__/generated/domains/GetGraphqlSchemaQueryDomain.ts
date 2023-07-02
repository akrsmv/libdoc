import { IClaims, IIdentity, IDdbDomain, staticImplements } from "@incta/ddb-model";
import { GetGraphqlSchema } from "../items/queryItems/GetGraphqlSchema";

@staticImplements<IDdbDomain<GetGraphqlSchema>>()
export class GetGraphqlSchemaQueryDomain {
    
    public static async validateGet(getGraphqlSchema: GetGraphqlSchema, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateQuery(getGraphqlSchema: GetGraphqlSchema, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateCreate(getGraphqlSchema: GetGraphqlSchema, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async validateUpdate(getGraphqlSchema: GetGraphqlSchema, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async validatePatch(getGraphqlSchema: GetGraphqlSchema, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateDelete(getGraphqlSchema: GetGraphqlSchema, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async onCreate(getGraphqlSchema: GetGraphqlSchema, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async onUpdate(getGraphqlSchema: GetGraphqlSchema, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async onPatch(getGraphqlSchema: GetGraphqlSchema, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async onDelete(getGraphqlSchema: GetGraphqlSchema, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

}