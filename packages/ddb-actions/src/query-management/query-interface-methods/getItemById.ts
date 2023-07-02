// import { DdbItem, existingPKWithoutPrefix } from "@incta/ddb-model"
// import { DdbLoadPeersInput } from "../../interface-methods/queryItems"
// import { getItems } from "../../interface-methods/getItems"


// export const getItemById = async <T extends DdbItem>(__type: string, ref: string, loadPeersInput?: DdbLoadPeersInput): Promise<T | null> => {
//     const primaryKeyValue = existingPKWithoutPrefix(__type, ref)
//     loadPeersInput = loadPeersInput || {
//         loadPeersLevel: 0,
//         peersPropsToLoad: []
//     }
//     if (!!primaryKeyValue) {
//         const dbResult = await getItems({
//             id: [{ HASH: primaryKeyValue.HASH, RANGE: primaryKeyValue.RANGE }],
//             loadPeersInput
//         })
//         if (dbResult.items && dbResult.items.length > 0 && dbResult.items[0]) {
//             return dbResult.items[0] as T
//         }
//     }
//     return null
// }