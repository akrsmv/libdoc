import { IClaims, IIdentity } from "@incta/ddb-model";
import { DdbQueryInput, KeyPredicateValueTripple } from "./interface-methods/queryItems";

export type SearchItemsInput = DdbQueryInput & {
    __typename?: string
    identity: Partial<IIdentity<Partial<IClaims>>> | null
    _dc_stp?: string
    _dc_srt?: string
    _dsc?: string[]
    filter: KeyPredicateValueTripple
};