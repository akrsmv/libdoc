import { IClaims, IIdentity, IDdbDomain, staticImplements } from "@incta/ddb-model";
import { Tourist } from "../items/dataItems/Tourist";

@staticImplements<IDdbDomain<Tourist>>()
export class TouristDataDomain {
    
    public static async validateGet(tourist: Tourist, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateQuery(tourist: Tourist, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateCreate(tourist: Tourist, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async validateUpdate(tourist: Tourist, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async validatePatch(tourist: Tourist, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateDelete(tourist: Tourist, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async onCreate(tourist: Tourist, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async onUpdate(tourist: Tourist, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async onPatch(tourist: Tourist, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async onDelete(tourist: Tourist, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

}