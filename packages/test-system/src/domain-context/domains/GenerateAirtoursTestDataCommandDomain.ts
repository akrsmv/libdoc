import { IClaims, IIdentity, IDdbDomain, staticImplements } from "@incta/ddb-model";
import { GenerateAirtoursTestData } from "../items/commandItems/GenerateAirtoursTestData";

@staticImplements<IDdbDomain<GenerateAirtoursTestData>>()
export class GenerateAirtoursTestDataCommandDomain {
    
    public static async validateGet(generateAirtoursTestData: GenerateAirtoursTestData, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateQuery(generateAirtoursTestData: GenerateAirtoursTestData, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateCreate(generateAirtoursTestData: GenerateAirtoursTestData, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async validateUpdate(generateAirtoursTestData: GenerateAirtoursTestData, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async validatePatch(generateAirtoursTestData: GenerateAirtoursTestData, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateDelete(generateAirtoursTestData: GenerateAirtoursTestData, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async onCreate(generateAirtoursTestData: GenerateAirtoursTestData, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async onUpdate(generateAirtoursTestData: GenerateAirtoursTestData, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async onPatch(generateAirtoursTestData: GenerateAirtoursTestData, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async onDelete(generateAirtoursTestData: GenerateAirtoursTestData, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

}