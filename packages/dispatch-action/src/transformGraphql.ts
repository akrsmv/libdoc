import { loginfo } from "@incta/common-utils"
import { DdbLoadPeersInput, EMPTY_LOAD_PEERS_INPUT } from "@incta/ddb-actions"
import { DispatchActionInput } from "./interface/DispatchActionInput"

/**
 * 
 * @param evnt 
 */
export const inferLoadPeersInput = (evnt: DispatchActionInput) => {
    loginfo("[inferLoadPeersInput] start", evnt)
    Object.assign(evnt, transformGraphQLSelection({
        selectionSetGraphQL: evnt.selectionSetGraphQL,
        selectionSetList: evnt.selectionSetList
    }))
    delete evnt["selectionSetGraphQL"]
    delete evnt["selectionSetList"]
    loginfo("[inferLoadPeersInput] end", evnt)
}

/**
 * 
 * @param graphqlQuery TODO switch to using graphql-tag
 * 
 * // main product of this function is the *selectionSetList*
        // loadPeersLevel, peersPropsToLoad are derived from it^ by counting nested levels and getting unique fields
        // projectionExpression idea is same as *selectionSetList* and is of type *string* and passed to dynamodb

        // IDEA is clients to pass either some graphql query string, which to be transformed to selectionSetList and others infered from there
        // or to directly pass either selectionSetList or projectionExpression, and in case of both present *selectionSetList* takes precedece

        // There is a difference between selectionSetList and projectionExpression: projectionExpression only lists dynamo keys in comma separated string, while selectionSetList lists also their hierarchy 

        // eg: selectionSetList="Country/name,Tourist/lname", projectionExpression="name,lname"; peersPropsToLoad=["Country", "Tourist"]; loadPeersLevel=1


        // ?todo later may completley remove projectionExpression from interfaces and only give/require selectionSetList from clients, and deriving projectionExpression on lower dynamo level functions

 * https://stackoverflow.com/questions/49047259/how-to-parse-graphql-request-string-into-an-object
 * Currently complex graphql queries are not optimized
 */
export const transformGraphQLSelection = (input: {
    selectionSetList?: string[] | string,
    selectionSetGraphQL?: string,
    projectionExpression?: string,
    loadPeersInput?: DdbLoadPeersInput
}): { loadPeersInput: DdbLoadPeersInput } => {
    if (input.loadPeersInput &&
        ("peersPropsToLoad" in input.loadPeersInput || "projectionExpression" in input.loadPeersInput)) {
        return { loadPeersInput: input.loadPeersInput}
    }

    const result: { loadPeersInput: DdbLoadPeersInput } = JSON.parse(JSON.stringify(EMPTY_LOAD_PEERS_INPUT))
    const tmpResult = {
        loadPeersInput: {
            loadPeersLevel: 0,
            peersPropsToLoad: [] as string[],

            selectionSetList: (input.selectionSetList && typeof input.selectionSetList === "string") ?
                input.selectionSetList.split(',').map(s => s.trim())
                : Array.isArray(input.selectionSetList) ?
                    input.selectionSetList.map(s => s.trim())
                    // legacy input should be removed from here (BUT NOT from DDBLoadPeersInput)
                    : (input.projectionExpression && typeof input.projectionExpression === "string") ?
                        input.projectionExpression.split(',').map(s => s.trim())
                        : [],

            //  lectionSetList or selectionSetGraphQl (whatever is passed, but graphql takes precedence)
            projectionExpression: (input.selectionSetList && typeof input.selectionSetList === "string") ?
                input.selectionSetList.split(',').map(s => s.trim()).join(",")
                : Array.isArray(input.selectionSetList) ?
                    input.selectionSetList.map(s => s.trim()).join(",")
                    // legacy input should be removed from here (BUT NOT from DDBLoadPeersInput)
                    : (input.projectionExpression && typeof input.projectionExpression === "string") ?
                        input.projectionExpression.split(',').map(s => s.trim()).join(",")
                        : undefined,
        }
    }

    // if no graphql passed stay with whatever selectionSetList was passed
    if (!input.selectionSetGraphQL) {
        return {
            loadPeersInput: {
                ...tmpResult.loadPeersInput,
                selectionSetList: tmpResult.loadPeersInput.selectionSetList.join(",")
            }
        }
    }

    const words = input.selectionSetGraphQL
        .replace(/\.\.\./g, ' ... ')
        .replace(/{/g, ' { ')
        .replace(/}/g, ' } ')
        .replace(/\n|\\n|/g, '')
        .split(/\s+|,/)
        .filter(word => !!word || word.trim() !== '')
    let nesting = 0, prjExp = ['__typename'], loadPeersLevels: number[] = [], propPath = ""
    for (let i = 1; i < words.length; i++) { // skip first '{'

        if (words[i] === "{") {
            nesting++
            propPath += `${words[i - 1]}/`
        } else if (words[i] === "...") {
            // skip '...' 'on' 'SomeItem' '{' 'xyz'<-- and position here
            i += 3
            continue
        } else if (words[i] === "}") {
            let tmpPropPath = propPath.substring(0, propPath.lastIndexOf('/'))
            propPath = tmpPropPath.substring(0, tmpPropPath.lastIndexOf('/') + 1)
            loadPeersLevels.push(nesting)
            if (nesting >= 1) {
                nesting--
            }
        }
        else {
            if (!words[i].startsWith("_") && `${words[i][0].toUpperCase()}${words[i].slice(1)}` === words[i]) {
                (tmpResult.loadPeersInput.peersPropsToLoad).push(words[i])
            } else {
                prjExp.push(words[i])
                tmpResult.loadPeersInput.selectionSetList?.push(`${propPath}${words[i]}`)
            }
        }
    }

    result.loadPeersInput.peersPropsToLoad = Array.from(new Set(tmpResult.loadPeersInput.peersPropsToLoad))
    result.loadPeersInput.projectionExpression = Array.from(new Set(prjExp.concat(tmpResult.loadPeersInput.peersPropsToLoad.map(p => `${p[0].toLowerCase()}${p.slice(1)}`)))).join(",")
    result.loadPeersInput.loadPeersLevel = Math.max(...loadPeersLevels)
    result.loadPeersInput.selectionSetList = tmpResult.loadPeersInput.selectionSetList.join(",")
    return result
}