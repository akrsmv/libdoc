import { IClaims, IIdentity, IDdbDomain, staticImplements } from "@incta/ddb-model";
import { Order } from "../items/dataItems/Order";

@staticImplements<IDdbDomain<Order>>()
export class OrderDataDomain {
    
    public static async validateGet(order: Order, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateQuery(order: Order, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateCreate(order: Order, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async validateUpdate(order: Order, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async validatePatch(order: Order, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateDelete(order: Order, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async onCreate(order: Order, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async onUpdate(order: Order, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async onPatch(order: Order, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async onDelete(order: Order, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

}