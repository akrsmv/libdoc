import { IClaims, IIdentity, IDdbDomain, staticImplements } from "@incta/ddb-model";
import { Airport } from "../items/dataItems/Airport";

@staticImplements<IDdbDomain<Airport>>()
export class AirportDataDomain {
    
    public static async validateGet(airport: Airport, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateQuery(airport: Airport, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateCreate(airport: Airport, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async validateUpdate(airport: Airport, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async validatePatch(airport: Airport, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateDelete(airport: Airport, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async onCreate(airport: Airport, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async onUpdate(airport: Airport, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async onPatch(airport: Airport, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async onDelete(airport: Airport, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

}