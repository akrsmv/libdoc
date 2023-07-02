import { DdbItem, IDdbItemStaticMetadata } from "../../interfaces/DdbItem"

export const getRegularKeyForSystemKey = (key: string, _item_metadata: IDdbItemStaticMetadata<DdbItem>) => {
    for (const [regularKey, gsiKeysArray] of _item_metadata.gsiKeys) {
        if (gsiKeysArray.includes(key)) {
            return regularKey
        }
    }
    return undefined
}
export const isRequiredKey = (key: string, _item_metadata: IDdbItemStaticMetadata<DdbItem>) => {
    return _item_metadata.requiredKeys.includes(key)
}
export const isUniqueKey = (key: string, _item_metadata: IDdbItemStaticMetadata<DdbItem>) => {
    return _item_metadata.uniqueKeys.includes(key)
}