import { IClaims, IIdentity, IDdbDomain, staticImplements } from "@incta/ddb-model";
import { queryBe } from "../items/queryItems/queryBe";

@staticImplements<IDdbDomain<queryBe>>()
export class queryBeQueryDomain {
    
    public static async validateGet(queryBe: queryBe, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateQuery(queryBe: queryBe, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateCreate(queryBe: queryBe, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async validateUpdate(queryBe: queryBe, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async validatePatch(queryBe: queryBe, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateDelete(queryBe: queryBe, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async onCreate(queryBe: queryBe, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async onUpdate(queryBe: queryBe, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async onPatch(queryBe: queryBe, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async onDelete(queryBe: queryBe, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

}