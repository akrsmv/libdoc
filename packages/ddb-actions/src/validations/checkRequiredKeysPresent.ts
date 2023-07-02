import { AttributeValue } from "@aws-sdk/client-dynamodb";
import { ValidationError } from "@incta/common-utils";
import { __itemMetadata } from "@incta/ddb-model"

export const checkRequiredKeysPresent = (ditem: Record<string, AttributeValue>, __typename?: string) => {
    
    const _item_current_metadata = __itemMetadata(String(ditem.__typename?.S || __typename));

    const requiredFieldsMissing = _item_current_metadata.requiredKeys.reduce<string[]>((accum, key) => {
        // if existing reguired key is marked for update to undefined
        if (!ditem[key]) {
            accum.push(key)
        }
        // if for some reason the existing item does not contain a required key (data-model rebuild adding reuired itemMetadatadata for ex) 
        if (!ditem[key] && !ditem[key]) {
            accum.push(key)
        }
        return accum
    }, [])
    if (requiredFieldsMissing.length > 0) {
        throw new ValidationError(`required [${requiredFieldsMissing.join(",")}] keys for updating ${String(ditem.__typename.S)} not provided`)
    }
}