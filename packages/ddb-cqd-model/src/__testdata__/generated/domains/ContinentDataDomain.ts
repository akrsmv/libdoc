import { IClaims, IIdentity, IDdbDomain, staticImplements } from "@incta/ddb-model";
import { Continent } from "../items/dataItems/Continent";

@staticImplements<IDdbDomain<Continent>>()
export class ContinentDataDomain {
    
    public static async validateGet(continent: Continent, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateQuery(continent: Continent, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateCreate(continent: Continent, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async validateUpdate(continent: Continent, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async validatePatch(continent: Continent, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateDelete(continent: Continent, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async onCreate(continent: Continent, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async onUpdate(continent: Continent, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async onPatch(continent: Continent, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async onDelete(continent: Continent, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

}