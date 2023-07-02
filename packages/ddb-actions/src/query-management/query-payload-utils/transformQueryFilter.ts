import { reservedWordsArray } from "@incta/ddb-model"
import { SearchItemsInput } from "../../interfaces"
import { DdbQueryInput } from "../../interface-methods/queryItems"

/**
 * BECAUSE client queries are all about 
 * - passing predicates for keys in the form 
 * `{ "nr_seats_vip_class" : { ge: 50} }`
 * - passing query limit, direction, page token attributes
 * 
 * This method hides the internal need to pass primary key and (optional) range key, and a filter bject, that wraps all other predicates that are not hash/range 
 * 
 * 
 * TODO verify that this description is correct
 * @param params standartizes a payload by ensuring that:
 * - all keys in the input json will be still present in the result json,
 * - all of the keys THAT are NOT in reservedWords will be under "filter" property 
 * - all of the keys THAT are IN reservedWords will be outside the "filter" property (on root level)
 * @returns 
 */
export const transformQueryFilter = (params: DdbQueryInput): DdbQueryInput => {
    let tmpExistingFilterArgsOnRequest 
    if (!!params.filter) {
        tmpExistingFilterArgsOnRequest = JSON.parse(JSON.stringify(params.filter))
    }
    // deep copy input params
    const rootArgsAsFilter = JSON.parse(JSON.stringify(params))

    //
    if (rootArgsAsFilter.filter) {
        Object.assign(rootArgsAsFilter, {...rootArgsAsFilter.filter })
    }

    Object.assign(params, {filter: tmpExistingFilterArgsOnRequest}, {filter: rootArgsAsFilter})

    for (const resWord of reservedWordsArray) {
        // Not supported inner queries
        // if (resWord !== "and" && resWord !== "or") {
            params.filter && (delete params.filter[resWord])
        // }
    }

    // if filter has NO top level "and" / "or" parameters -> put everything into "and"
    // if there is at least one "and" / "or", but also there are other parameters, that are sibling to them -> put them in the "and" (create one if there isnt)
    // do that for every inner "and" / "or" sections you find

    return params
}