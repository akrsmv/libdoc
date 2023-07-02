import { IClaims, IIdentity, IDdbDomain, staticImplements } from "@incta/ddb-model";
import { AirtoursTicketPriceConfig } from "../items/dataItems/AirtoursTicketPriceConfig";

@staticImplements<IDdbDomain<AirtoursTicketPriceConfig>>()
export class AirtoursTicketPriceConfigDataDomain {
    
    public static async validateGet(airtoursTicketPriceConfig: AirtoursTicketPriceConfig, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateQuery(airtoursTicketPriceConfig: AirtoursTicketPriceConfig, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateCreate(airtoursTicketPriceConfig: AirtoursTicketPriceConfig, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async validateUpdate(airtoursTicketPriceConfig: AirtoursTicketPriceConfig, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async validatePatch(airtoursTicketPriceConfig: AirtoursTicketPriceConfig, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateDelete(airtoursTicketPriceConfig: AirtoursTicketPriceConfig, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async onCreate(airtoursTicketPriceConfig: AirtoursTicketPriceConfig, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async onUpdate(airtoursTicketPriceConfig: AirtoursTicketPriceConfig, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async onPatch(airtoursTicketPriceConfig: AirtoursTicketPriceConfig, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async onDelete(airtoursTicketPriceConfig: AirtoursTicketPriceConfig, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

}