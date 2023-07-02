import { IClaims, IIdentity, IDdbDomain, staticImplements } from "@incta/ddb-model";
import { Agent } from "../items/dataItems/Agent";

@staticImplements<IDdbDomain<Agent>>()
export class AgentDataDomain {
    
    public static async validateGet(agent: Agent, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateQuery(agent: Agent, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateCreate(agent: Agent, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async validateUpdate(agent: Agent, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async validatePatch(agent: Agent, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateDelete(agent: Agent, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async onCreate(agent: Agent, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async onUpdate(agent: Agent, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async onPatch(agent: Agent, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async onDelete(agent: Agent, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

}