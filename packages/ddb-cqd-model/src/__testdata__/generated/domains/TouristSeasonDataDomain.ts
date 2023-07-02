import { IClaims, IIdentity, IDdbDomain, staticImplements } from "@incta/ddb-model";
import { TouristSeason } from "../items/dataItems/TouristSeason";

@staticImplements<IDdbDomain<TouristSeason>>()
export class TouristSeasonDataDomain {
    
    public static async validateGet(touristSeason: TouristSeason, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateQuery(touristSeason: TouristSeason, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateCreate(touristSeason: TouristSeason, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async validateUpdate(touristSeason: TouristSeason, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async validatePatch(touristSeason: TouristSeason, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateDelete(touristSeason: TouristSeason, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async onCreate(touristSeason: TouristSeason, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async onUpdate(touristSeason: TouristSeason, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async onPatch(touristSeason: TouristSeason, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async onDelete(touristSeason: TouristSeason, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

}