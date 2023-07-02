// // TODO refactor
// // - setDomainhashKeysFromPayload method to accept single object for arguments
// // - targetDomainhashKeys argument may be missing, in which case all hashKeys properties to be iterated
// // - if targetDomainhashKeys not missing try search indexes ony for it
// // - excerpt additional method tryLocatePeer and use it in above two scenarios (single use or in a loop)  

// import { DomainItem, loginfo, _domain, Mixin, DynamoItem, DomainItemPropertiesConfigMap, DomainPropertyConfig, ppjson } from "@incta/common"
// import { getItems } from "./getItems"
// import { getItemById } from "./getItemById"

// /**
//  * Utily method helping the creation of _whatever_ domain item, which has a hashKeys property 'domainhashKeys', pointing to the id key of another domain item of type __type.
//  * 
//  *  Examine payload's 'domainhashKeys' property for assigning it to the 'Domain''s 'domainhashKeys', which would be used for domain item creation
//  * - NOTE that this method accepts payload, but the same object is also referred as domain, i.e the same payload is used as DTO for domain item creation
//  * - If no domainhashKeys prop in payload, do nothing and return _true_
//  * - If domainhashKeys prop exists try loading by id, if success, set the found id to it and return _true_
//  * - If above fails, try loading by payload[domainhashKeys], i.e try locating a hashKeys with this value on the __typename item, specified by __type,
//  * - If both attempts fail -> clean the payload[domainhashKeys] and push error to array (if present) and return _false_
//  * 
//  * @param __type Domain item type, where the _domainhashKeys_ points to
//  * @param payload input payload object, which is also used for Domain item creation
//  * @param domainhashKeys property name of the payload, that points to another domain item
//  * @param errorsArray optional string array where explanatory error message woould be pushed
//  */
//  export const setDomainhashKeysFromPayload = async (__type: string, payload: DomainItem, domainhashKeys: string, targetDomainhashKeys: string, ringToken: string, errorsArray?: string[] | undefined): Promise<boolean> => {
//     !process.env.DEBUGGER || loginfo({ ringToken }, `entering setDomainhashKeysFromPayload with params`, { __type, payload, domainhashKeys, targetDomainhashKeys, ringToken, errorsArray })
//     !process.env.DEBUGGER || loginfo({ ringToken }, `data model's ref key config is `, _domain().lookupItems)

//     if (!!payload[domainhashKeys]) {
//         // try get by id
//         const itemByIdResults = await getItemById(__type, payload[domainhashKeys], ringToken)
//         if (itemByIdResults !== null) {
//             payload[domainhashKeys] = itemByIdResults.id
//             return true
//         } else {
//             // if not found, check if passed targetDomainhashKeys was indexed in one of the refN keys for ALL the properties of the __typename domain entity that have refN set
//             const hashKeyssConfig = ((_domain().lookupItems).get(__type)?.__hashKeyss as DomainItemPropertiesConfigMap<DomainItem>);
//             // ensure <__type|> is not part of the payload[domainhashKeys] value, as this search is only by ref values
//             const strippedFrom__type_PayloadValue = payload[domainhashKeys].replace(`${__type}|`, '')
//             if (!!targetDomainhashKeys) {
//                 // do the same but not iterating through all hashKeyss
//             }
//             for (const targetDomainhashKeysNew of Array.from(hashKeyssConfig.keys())) {
//                 const hashKeysConfig = hashKeyssConfig.get(targetDomainhashKeysNew) as DomainPropertyConfig<any>
//                 if (!!hashKeysConfig) {
//                     const hashKeys = hashKeysConfig && hashKeysConfig.hashKeys as string[]
//                     if (!!hashKeys && Array.isArray(hashKeys) && hashKeys.length > 0) {
//                         // iterate trhough all ref keys and return the first found
//                         let valueFound = false
//                         for (const hashKeysName of hashKeys) {
//                             // try find it by hashKey{hashKeysN:{"eq":strippedFrom__type_PayloadValue} and rangeKey:{"__SHARD":{"begins_with":"type"}}
//                             const iterator = getItems({ __typename: __type, ringToken, arguments: { hashKey: { [hashKeysName]: { "eq": strippedFrom__type_PayloadValue } }, rangeKey: { "__SHARD": { "begins_with": `${__type}|` } } } })
//                             const itemByTargethashKeysResults = await iterator.next()
//                             if (itemByTargethashKeysResults.value.items.length === 1) {
//                                 payload[domainhashKeys] = itemByTargethashKeysResults.value.items[0].id
//                                 valueFound = true
//                                 break
//                             }
//                             // only logging here:
//                             // since we are now iterating, dont polute the errors array from here but rather on the loop end
//                             else if (itemByTargethashKeysResults.value.items.length > 1) {
//                                 !process.env.DEBUGGER || loginfo({ ringToken }, `[hashKeys set] no __typename was found by id, and provided value '${strippedFrom__type_PayloadValue}' for '${__type}''s hashKeys '${targetDomainhashKeysNew}'('${hashKeysName}') points to multiple items and cannot take decision`)
//                                 // errorsArray && Array.isArray(errorsArray) && errorsArray.push(`[hashKeys set] no __typename was found by id, and provided value '${strippedFrom__type_PayloadValue}' for '${__type}''s hashKeys '${targetDomainhashKeysNew}'('${Array.isArray(hashKeys) ? hashKeysName : undefined}') points to multiple items and cannot take decision`)
//                             } else if (itemByTargethashKeysResults.value.items.length === 0) {
//                                 !process.env.DEBUGGER || loginfo({ ringToken }, `[hashKeys set] no __typename was found by id, and provided value '${strippedFrom__type_PayloadValue}' for '${__type}''s hashKeys '${targetDomainhashKeysNew}'('${hashKeysName}') was not found`)
//                                 // errorsArray && Array.isArray(errorsArray) && errorsArray.push(`[hashKeys set] no __typename was found by id, and provided value '${strippedFrom__type_PayloadValue}' for '${__type}''s hashKeys '${targetDomainhashKeysNew}'('${Array.isArray(hashKeys) ? hashKeysName : undefined}') was not found`)
//                             }
//                         }
//                         if (valueFound) {
//                             return true
//                         }
//                     }
//                 }
//             }
//             !process.env.DEBUGGER || loginfo({ ringToken }, `[hashKeys set] failed, because no __typename was found by id, and '${strippedFrom__type_PayloadValue}' couldnt be identified in any of '${__type}''s hashKeys configuration: ${ppjson(hashKeyssConfig)}')`)
//             errorsArray && Array.isArray(errorsArray) && errorsArray.push(`[hashKeys set] failed, because no __typename was found by id, and '${strippedFrom__type_PayloadValue}' couldnt be identified in any of '${__type}''s hashKeys configuration: ${ppjson(hashKeyssConfig)}`)
//         }
//     }
//     payload[domainhashKeys] = undefined
//     return false
// }