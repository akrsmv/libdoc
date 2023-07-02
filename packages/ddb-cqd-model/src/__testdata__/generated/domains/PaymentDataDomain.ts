import { IClaims, IIdentity, IDdbDomain, staticImplements } from "@incta/ddb-model";
import { Payment } from "../items/dataItems/Payment";

@staticImplements<IDdbDomain<Payment>>()
export class PaymentDataDomain {
    
    public static async validateGet(payment: Payment, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateQuery(payment: Payment, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateCreate(payment: Payment, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async validateUpdate(payment: Payment, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async validatePatch(payment: Payment, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateDelete(payment: Payment, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async onCreate(payment: Payment, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async onUpdate(payment: Payment, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async onPatch(payment: Payment, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async onDelete(payment: Payment, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

}