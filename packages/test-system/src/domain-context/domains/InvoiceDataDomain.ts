import { IClaims, IIdentity, IDdbDomain, staticImplements } from "@incta/ddb-model";
import { Invoice } from "../items/dataItems/Invoice";

@staticImplements<IDdbDomain<Invoice>>()
export class InvoiceDataDomain {
    
    public static async validateGet(invoice: Invoice, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateQuery(invoice: Invoice, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateCreate(invoice: Invoice, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async validateUpdate(invoice: Invoice, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async validatePatch(invoice: Invoice, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async validateDelete(invoice: Invoice, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async onCreate(invoice: Invoice, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async onUpdate(invoice: Invoice, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }
    
    public static async onPatch(invoice: Invoice, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

    public static async onDelete(invoice: Invoice, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> {
        
    }

}