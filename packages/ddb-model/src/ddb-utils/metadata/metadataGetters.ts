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


export const calculatePrivateOrPublicData = (payload: any, _item_metadata?: IDdbItemStaticMetadata<DdbItem>) => {
    if ("privateData" in payload) {
        return !payload.privateData //TODO need to reverse it since the method withPrefix has the parameter dontApplyPrefix!!!
    } else {
        return (_item_metadata && _item_metadata.isPublicItem) || !!payload.publicData
    }
}