import { IClaims, IIdentity, IDdbDomain, staticImplements } from "@incta/ddb-model";
import { AirplaneModel } from "../items/dataItems/AirplaneModel";

@staticImplements<IDdbDomain<AirplaneModel>>()
export class AirplaneModelDataDomain {
    
    public static async validateGet(airplaneModel: AirplaneModel, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateQuery(airplaneModel: AirplaneModel, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateCreate(airplaneModel: AirplaneModel, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async validateUpdate(airplaneModel: AirplaneModel, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async validatePatch(airplaneModel: AirplaneModel, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateDelete(airplaneModel: AirplaneModel, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async onCreate(airplaneModel: AirplaneModel, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async onUpdate(airplaneModel: AirplaneModel, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async onPatch(airplaneModel: AirplaneModel, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async onDelete(airplaneModel: AirplaneModel, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

}