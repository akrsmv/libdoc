import { IClaims, IIdentity, IDdbDomain, staticImplements } from "@incta/ddb-model";
import { ChangeActiveAgent } from "../items/commandItems/ChangeActiveAgent";

@staticImplements<IDdbDomain<ChangeActiveAgent>>()
export class ChangeActiveAgentCommandDomain {
    
    public static async validateGet(changeActiveAgent: ChangeActiveAgent, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateQuery(changeActiveAgent: ChangeActiveAgent, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateCreate(changeActiveAgent: ChangeActiveAgent, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async validateUpdate(changeActiveAgent: ChangeActiveAgent, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async validatePatch(changeActiveAgent: ChangeActiveAgent, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateDelete(changeActiveAgent: ChangeActiveAgent, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async onCreate(changeActiveAgent: ChangeActiveAgent, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async onUpdate(changeActiveAgent: ChangeActiveAgent, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async onPatch(changeActiveAgent: ChangeActiveAgent, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async onDelete(changeActiveAgent: ChangeActiveAgent, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

}