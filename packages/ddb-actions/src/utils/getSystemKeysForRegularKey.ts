import { AttributeValue } from "@aws-sdk/client-dynamodb";
import { __itemMetadata } from "@incta/ddb-model"

export const getSystemKeysForReguarKeys = (regularKeys: string[], ditem: Record<string, AttributeValue>, __typename?: string): string[] => {

    const _item_current_metadata = __itemMetadata(String(ditem.__typename?.S || __typename));

    return regularKeys.reduce<string[]>((accum, key) => accum.concat(
        (_item_current_metadata.gsiKeys.get(key) || [])), [])

}