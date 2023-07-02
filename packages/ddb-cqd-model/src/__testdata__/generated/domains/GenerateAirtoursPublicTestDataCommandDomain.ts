import { IClaims, IIdentity, IDdbDomain, staticImplements } from "@incta/ddb-model";
import { GenerateAirtoursPublicTestData } from "../items/commandItems/GenerateAirtoursPublicTestData";

@staticImplements<IDdbDomain<GenerateAirtoursPublicTestData>>()
export class GenerateAirtoursPublicTestDataCommandDomain {
    
    public static async validateGet(generateAirtoursPublicTestData: GenerateAirtoursPublicTestData, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateQuery(generateAirtoursPublicTestData: GenerateAirtoursPublicTestData, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateCreate(generateAirtoursPublicTestData: GenerateAirtoursPublicTestData, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async validateUpdate(generateAirtoursPublicTestData: GenerateAirtoursPublicTestData, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async validatePatch(generateAirtoursPublicTestData: GenerateAirtoursPublicTestData, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateDelete(generateAirtoursPublicTestData: GenerateAirtoursPublicTestData, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async onCreate(generateAirtoursPublicTestData: GenerateAirtoursPublicTestData, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async onUpdate(generateAirtoursPublicTestData: GenerateAirtoursPublicTestData, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async onPatch(generateAirtoursPublicTestData: GenerateAirtoursPublicTestData, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async onDelete(generateAirtoursPublicTestData: GenerateAirtoursPublicTestData, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

}