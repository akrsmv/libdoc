import { IClaims, IIdentity } from "@incta/ddb-model";
import { InjestEmail } from "../../domain-context/items/commandItems/InjestEmail";

export const start = async (injestEmail: InjestEmail, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {
    
}


