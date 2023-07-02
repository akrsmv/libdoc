import { AttributeValue } from "@aws-sdk/client-dynamodb";
import { __itemMetadata, _nGSIKeyPrefix, _sGSIKeyPrefix, getRegularKeyForSystemKey } from "@incta/ddb-model"

/**
 * Modifies passed object by copying its key values into corresponding system keys according to current metadata.
 * @param ditem 
 * @returns an Array with system keys that are also present on the item, but are not part of the current metadata configuration
 */
export const syncItemSystemKeys = (ditem: Record<string, AttributeValue>, __typename?: string): [string[],string[]] => {

    const _item_current_metadata = __itemMetadata(String(ditem.__typename?.S || __typename));
    console.log('syncItemSystemKeys: ditem', ditem)
    console.log('syncItemSystemKeys: _item_current_metadata', _item_current_metadata)
    //#region figure out if missing keys
    const missingKeys: string[] = []
    for (const [regularKey, arrayWithPotentiallyMissingrangeKeys] of _item_current_metadata.gsiKeys) {
        if (ditem[regularKey]) {
            for (const maybeMissingrangeKey of arrayWithPotentiallyMissingrangeKeys) {
                if (!ditem[maybeMissingrangeKey]) {
                    missingKeys.push(maybeMissingrangeKey)
                }
            }
        }
    }
    //#endregion

    //#region figure out obsolate keys
    const all_gsi_keys_in_ditem =
        new Set(Array.from(Object.keys(ditem).filter(key =>
            key.startsWith(_nGSIKeyPrefix)
            || key.startsWith(_sGSIKeyPrefix))))
   
    Object.keys(ditem).reduce<Record<string, AttributeValue>>((accum, key) => {
        if (_item_current_metadata.gsiKeys.has(key)) {
            for (const xGsi of _item_current_metadata.gsiKeys.get(key) || []) {
                accum[xGsi] = ditem[key]
                // mark used and valid
                all_gsi_keys_in_ditem.delete(xGsi)
            }
        }
        return accum
    }, ditem);
    //#endregion

    // whatever left in the Set<string> are all system keys that are no longer valid as per current metadata
    return [Array.from(all_gsi_keys_in_ditem), missingKeys];
}
