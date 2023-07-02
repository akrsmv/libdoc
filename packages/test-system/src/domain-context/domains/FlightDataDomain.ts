import { IClaims, IIdentity, IDdbDomain, staticImplements } from "@incta/ddb-model";
import { Flight } from "../items/dataItems/Flight";

@staticImplements<IDdbDomain<Flight>>()
export class FlightDataDomain {
    
    public static async validateGet(flight: Flight, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateQuery(flight: Flight, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateCreate(flight: Flight, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async validateUpdate(flight: Flight, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async validatePatch(flight: Flight, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateDelete(flight: Flight, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async onCreate(flight: Flight, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async onUpdate(flight: Flight, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async onPatch(flight: Flight, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async onDelete(flight: Flight, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

}