import { IClaims, IIdentity, IDdbDomain, staticImplements } from "@incta/ddb-model";
import { AirplaneManifacturer } from "../items/dataItems/AirplaneManifacturer";

@staticImplements<IDdbDomain<AirplaneManifacturer>>()
export class AirplaneManifacturerDataDomain {
    
    public static async validateGet(airplaneManifacturer: AirplaneManifacturer, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateQuery(airplaneManifacturer: AirplaneManifacturer, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateCreate(airplaneManifacturer: AirplaneManifacturer, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async validateUpdate(airplaneManifacturer: AirplaneManifacturer, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async validatePatch(airplaneManifacturer: AirplaneManifacturer, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateDelete(airplaneManifacturer: AirplaneManifacturer, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async onCreate(airplaneManifacturer: AirplaneManifacturer, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async onUpdate(airplaneManifacturer: AirplaneManifacturer, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async onPatch(airplaneManifacturer: AirplaneManifacturer, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async onDelete(airplaneManifacturer: AirplaneManifacturer, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

}