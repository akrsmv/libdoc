import { IClaims, IIdentity, IDdbDomain, staticImplements } from "@incta/ddb-model";
import { SetUserAgents } from "../items/commandItems/SetUserAgents";

@staticImplements<IDdbDomain<SetUserAgents>>()
export class SetUserAgentsCommandDomain {
    
    public static async validateGet(setUserAgents: SetUserAgents, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateQuery(setUserAgents: SetUserAgents, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateCreate(setUserAgents: SetUserAgents, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async validateUpdate(setUserAgents: SetUserAgents, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async validatePatch(setUserAgents: SetUserAgents, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateDelete(setUserAgents: SetUserAgents, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async onCreate(setUserAgents: SetUserAgents, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async onUpdate(setUserAgents: SetUserAgents, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async onPatch(setUserAgents: SetUserAgents, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async onDelete(setUserAgents: SetUserAgents, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

}