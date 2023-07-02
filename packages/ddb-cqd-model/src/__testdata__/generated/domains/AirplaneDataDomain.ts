import { IClaims, IIdentity, IDdbDomain, staticImplements } from "@incta/ddb-model";
import { Airplane } from "../items/dataItems/Airplane";

@staticImplements<IDdbDomain<Airplane>>()
export class AirplaneDataDomain {
    
    public static async validateGet(airplane: Airplane, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateQuery(airplane: Airplane, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateCreate(airplane: Airplane, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async validateUpdate(airplane: Airplane, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async validatePatch(airplane: Airplane, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateDelete(airplane: Airplane, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async onCreate(airplane: Airplane, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async onUpdate(airplane: Airplane, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async onPatch(airplane: Airplane, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async onDelete(airplane: Airplane, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

}