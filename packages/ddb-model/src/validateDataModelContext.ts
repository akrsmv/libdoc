import { dirFilesGenerator, ppjson } from '@incta/common-utils'
import { existsSync } from "fs"
import { join, sep } from 'path'
import { default as baseDomainContextJson } from './base-domain-context.json'
import { mkdir } from 'fs/promises'
import { mergeDeep, logerror, logwarn } from '@incta/common-utils'
import { DataModelerProps, generateModelProps } from './generateDataModel'
import { JSONDataModel, DataModelObject } from './interfaces/DataModel'
import { tryGetProcessParam } from './tryGetProcessParam'
import { INCTA_GSI_BASE_CONFIG } from '.'

/**
 * `dataModelJsonPath` should point to a `data-model.json` file
 * 
 * `dataModelsDir` should point to a directory of the form `/Items /Commands /Queries /GlobalSecondaryIndexes`
 * 
 * cannot specify both `dataModelJsonPath` and `dataModelsDir`
 * 
 * in case `dataModelsDir` is specified, it will first merge all jsons into a temp `data-model.json` and start validating based on it
 * 
 * @returns 
 */
export const validateDataModelContext = async (context?: generateModelProps): Promise<DataModelerProps> => {
    let dataModelJsonPath = context?.dataModelJsonPath ?? tryGetProcessParam("dataModelJsonPath")
    const gsiKeysToRegularKeysMap = new Map<string, string[]>()
    const generateHollowImplFiles = !! (context?.generateHollowImplFiles ?? tryGetProcessParam("generateHollowImplFiles"))
    const dataModelsDir = context?.dataModelsDir ?? tryGetProcessParam("dataModelsDir")
    const dataModelFilesOutDir = context?.dataModelFilesOutDir ?? tryGetProcessParam("dataModelFilesOutDir")
    const importLibraryToUseInGeneratedFiles = context?.importLibraryToUseInGeneratedFiles
        || tryGetProcessParam("importLibraryToUseInGeneratedFiles") || "@incta/ddb-model"

    let dataModelJson: JSONDataModel = { Items: {}, Commands: {}, Queries: {}, GlobalSecondaryIndexes: [] };

    const errors = []

    if (!dataModelFilesOutDir) {
        errors.push("ERROR: missing dataModelFilesOutDir context param")
    }

    if (dataModelJsonPath && dataModelsDir) {
        errors.push("ERROR: cannot specify both `dataModelJsonPath` and `dataModelsDir`")
    } else if (dataModelJsonPath) {
        // user passed a complete data-model.json file

        // merge client model json with system mandatory one 
        dataModelJson = mergeDeep(require(dataModelJsonPath), baseDomainContextJson)
        // enhance every top level item of the json with date created and date updated props of type isodatestring
        for (const modelItemObject of Object.values(dataModelJson.Items || []).concat(Object.values(dataModelJson.Commands || [])).concat(Object.values(dataModelJson.Queries || []))) {
            modelItemObject.__attributes = mergeDeep(modelItemObject.__attributes, { date_created: { __type: "isodatestring" }, date_updated: { __type: "isodatestring" } })
        }
        for (const modelItemObject of Object.values(dataModelJson.Commands || [])) {
            modelItemObject.__attributes = mergeDeep(modelItemObject.__attributes, { }) // no additional attributes for SYNC commands
        }
        // ------------------>
        // TODO 
        // for (const modelItemObject of Object.values(dataModelJson.AsyncCommands || [])) {
        //     modelItemObject.__attributes = mergeDeep(modelItemObject.__attributes, { total_events: { __type: "number" }, errored_events: { __type: "number" }, completed_events: { __type: "number" } })
        // }
        //<-------------------
        // await writeFile(dataModelJsonPath, ppjson(dataModelJson))
    } else if (dataModelsDir) {
        // first wrap up all JSON files into a single data-model.json and then proceed

        for await (let file of dirFilesGenerator(join(dataModelsDir, "Items"))) {
            Object.assign(dataModelJson.Items, { [String(file.split(sep).pop()).replace(/\.json/i, '')]: require(file) })
        }
        for await (let file of dirFilesGenerator(join(dataModelsDir, "Commands"))) {
            Object.assign(dataModelJson.Commands, { [String(file.split(sep).pop()).replace(/\.json/i, '')]: require(file) })
        }
        for await (let file of dirFilesGenerator(join(dataModelsDir, "Queries"))) {
            Object.assign(dataModelJson.Queries, { [String(file.split(sep).pop()).replace(/\.json/i, '')]: require(file) })
        }
        
        dataModelJsonPath = join(dataModelFilesOutDir, "data-model.json")
        // merge client model json with system mandatory one 
        dataModelJson = mergeDeep(dataModelJson, baseDomainContextJson)
        //TODO who/where GSI jsons got validated?
        for await (let file of dirFilesGenerator(join(dataModelsDir, "GlobalSecondaryIndexes"))) {
            dataModelJson.GlobalSecondaryIndexes!.push(require(file))
        }
        // enhance every top level item of the json with date created and date updated props of type isodatestring
        for (const modelItemObject of Object.values(dataModelJson.Items || []).concat(Object.values(dataModelJson.Commands || [])).concat(Object.values(dataModelJson.Queries || []))) {
            modelItemObject.__attributes = mergeDeep(modelItemObject.__attributes,
                {
                    date_created: { __type: "isodatestring" },
                    date_updated: { __type: "isodatestring" },
                    user_created: { __type: "string" },
                    user_updated: { __type: "string" },
                    id: { __type: "string" }
                })
        }
        
        // ---------------->
        // TODO ASYNC COMMANDS
        // for (const modelItemObject of Object.values(dataModelJson.AsyncCommands || [])) {
        //     modelItemObject.__attributes = mergeDeep(modelItemObject.__attributes, { total_events: { __type: "number" }, errored_events: { __type: "number" }, completed_events: { __type: "number" } })
        // }
        // <-----------------

        // await writeFile(dataModelJsonPath, ppjson(dataModelJson))
    } else {
        throw new Error("Either `dataModelJsonPath` or `dataModelsDir` positional params must exists")
    }

    // if (!existsSync(dataModelJsonPath)) {
    //     throw new Error("Cannot find " + dataModelJsonPath + ". Nothing to do")
    // } else {
    // dataModelJson = require(dataModelJsonPath)
    if (!dataModelJson) {
        throw new Error('unable to construct dataModelJson')
    }
    // **************************************
    // VALIDATIONS:
    // **************************************
    const allDataModelItems = Object.entries(dataModelJson.Items || {})
        .concat(Object.entries(dataModelJson.Commands || {}))
        .concat(Object.entries(dataModelJson.Queries || {}))

    // TODO verify that accross all Items there are no keys with same name,but with different type
    // otherwise appsync schema deployment fails in aws


    // uniqueness of sGSI and nGSI keys in each item json
    // Each top level item in a model json should contain ONLY ONCE a particular xGSI key
    for (const [modelItemKey, modelItemObject] of allDataModelItems) {
        // gather all system keys in an array
        const allGsiKeysArray = Object.values((modelItemObject as DataModelObject).__attributes)
            .reduce((allGsiKeysArray: string[], modelItemObject: any) => {
                return allGsiKeysArray.concat(modelItemObject.__gsiKeys ?? [])
            }, [])
        // if array contains duplicates, this model is invalid
        const allSystemKeysSet = new Set(allGsiKeysArray)
        if (allGsiKeysArray.length !== allSystemKeysSet.size) {
            const duplicates = allGsiKeysArray.filter(key => {
                if (allSystemKeysSet.has(key)) {
                    allSystemKeysSet.delete(key);
                    return false;
                }
                return true;
            })
            throw new Error(`${modelItemKey} contains duplicating system keys: ${duplicates.join(", ")}. This will result in unpredicted behaviour and is restricted`)
        }
    }

    // **TODO**
    // total number of xGSI keys with regards to total number of GSI allowed? Should it be here, since GSIs are to be manually defined by user

    // __gsiKeys array should contain only valid values of type `GsiKey`
    for (const [modelItemKey, modelItemObject] of allDataModelItems) {
        // gather all system keys in an array
        const allGsiKeysArray = Object.values((modelItemObject as DataModelObject).__attributes)
            .reduce((allGsiKeysArray: string[], modelItemObject: any) => {
                return allGsiKeysArray.concat(modelItemObject.__gsiKeys ?? [])
            }, [])

        const modelIems_GSI_KeysWithBadValues: string[] = []
        for (const gsiKey of allGsiKeysArray) {
            if (!(gsiKey === "sGSI1" || gsiKey === "sGSI2" || gsiKey === "sGSI3" || gsiKey === "sGSI4" || gsiKey === "sGSI5" || gsiKey === "sGSI6" || gsiKey === "sGSI7" || gsiKey === "sGSI8" || gsiKey === "sGSI9" || gsiKey === "sGSI10" || gsiKey ===
                "sGSI11" || gsiKey === "sGSI12" || gsiKey === "sGSI13" || gsiKey === "sGSI14" || gsiKey === "sGSI15" || gsiKey === "sGSI16" || gsiKey === "sGSI17" || gsiKey === "sGSI18" || gsiKey === "sGSI19" || gsiKey ===
                // number keys
                "nGSI1" || gsiKey === "nGSI2" || gsiKey === "nGSI3" || gsiKey === "nGSI4" || gsiKey === "nGSI5" || gsiKey === "nGSI6" || gsiKey === "nGSI7" || gsiKey === "nGSI8" || gsiKey === "nGSI9" || gsiKey === "nGSI10" || gsiKey ===
                "nGSI11" || gsiKey === "nGSI12" || gsiKey === "nGSI13" || gsiKey === "nGSI14" || gsiKey === "nGSI15" || gsiKey === "nGSI16" || gsiKey === "nGSI17" || gsiKey === "nGSI18" || gsiKey === "nGSI19")) {
                modelIems_GSI_KeysWithBadValues.push(gsiKey)
            }
        }
        if (modelIems_GSI_KeysWithBadValues.length) {
            throw new Error(`${modelItemKey} defines gsiKeys which are with bad values: ${modelIems_GSI_KeysWithBadValues.join(", ")}. Only valid values are sGSI[1-19] or nGSI[1-19] depending on type of key they are present`)
        }
    }

    // GSI keys should correspond to item property's type
    for (const [modelItemKey, modelItemObject] of allDataModelItems) {
        // gather all system keys in an array
        const modelIems_xGSI_KeysWithBadType = Object.entries((modelItemObject as DataModelObject).__attributes)
            .reduce((modelIems_xGSI_KeysWithBadType: string[], dataModelObjectEntry: any) => {
                const [modelItemObjectKey, modelItemObject] = dataModelObjectEntry
                // if __type=="string" only valid are sGSI[n] kesy
                if (Array.isArray(modelItemObject.__gsiKeys) && modelItemObject.__gsiKeys.length > 0 && (modelItemObject.__type === "string" || modelItemObject.__type === "isodatestring" || modelItemObject.__type === "enum")) {
                    for (const gsiKey of modelItemObject.__gsiKeys) {
                        if (gsiKeysToRegularKeysMap.has(gsiKey) && Array.isArray(gsiKeysToRegularKeysMap.get(gsiKey))) {
                            gsiKeysToRegularKeysMap.get(gsiKey)!.push(`${modelItemKey}/${modelItemObjectKey}`)
                        } else {
                            gsiKeysToRegularKeysMap.set(gsiKey, [`${modelItemKey}/${modelItemObjectKey}`])
                        }
                        if (!(gsiKey === "sGSI1" || gsiKey === "sGSI2" || gsiKey === "sGSI3" || gsiKey === "sGSI4" || gsiKey === "sGSI5" || gsiKey === "sGSI6" || gsiKey === "sGSI7" || gsiKey === "sGSI8" || gsiKey === "sGSI9" || gsiKey === "sGSI10" || gsiKey ===
                            "sGSI11" || gsiKey === "sGSI12" || gsiKey === "sGSI13" || gsiKey === "sGSI14" || gsiKey === "sGSI15" || gsiKey === "sGSI16" || gsiKey === "sGSI17" || gsiKey === "sGSI18" || gsiKey === "sGSI19")) {
                            modelIems_xGSI_KeysWithBadType.push(`${modelItemKey}/${modelItemObjectKey}`)
                        }
                    }
                }
                // if __type=="number" only valid are nGSI[n] kesy
                if (Array.isArray(modelItemObject.__gsiKeys) && modelItemObject.__gsiKeys.length > 0 && modelItemObject.__type === "number") {
                    for (const gsiKey of modelItemObject.__gsiKeys) {
                        if (gsiKeysToRegularKeysMap.has(gsiKey) && Array.isArray(gsiKeysToRegularKeysMap.get(gsiKey))) {
                            gsiKeysToRegularKeysMap.get(gsiKey)!.push(`${modelItemKey}/${modelItemObjectKey}`)
                        } else {
                            gsiKeysToRegularKeysMap.set(gsiKey, [`${modelItemKey}/${modelItemObjectKey}`])
                        }
                        if (!(gsiKey === "nGSI1" || gsiKey === "nGSI2" || gsiKey === "nGSI3" || gsiKey === "nGSI4" || gsiKey === "nGSI5" || gsiKey === "nGSI6" || gsiKey === "nGSI7" || gsiKey === "nGSI8" || gsiKey === "nGSI9" || gsiKey === "nGSI10" || gsiKey ===
                            "nGSI11" || gsiKey === "nGSI12" || gsiKey === "nGSI13" || gsiKey === "nGSI14" || gsiKey === "nGSI15" || gsiKey === "nGSI16" || gsiKey === "nGSI17" || gsiKey === "nGSI18" || gsiKey === "nGSI19")) {
                            modelIems_xGSI_KeysWithBadType.push(`${modelItemKey}/${modelItemObjectKey}`)
                        }
                    }
                }
                // item proerties of any other than "string" or "number" type cannot have __gsiKeys
                if (Array.isArray(modelItemObject.__gsiKeys) && modelItemObject.__gsiKeys.length > 0 && modelItemObject.__type !== "number" && modelItemObject.__type !== "string" && modelItemObject.__type !== "isodatestring" && modelItemObject.__type !== "enum") {
                    modelIems_xGSI_KeysWithBadType.push(`${modelItemKey}/${modelItemObjectKey}`)
                }
                return modelIems_xGSI_KeysWithBadType
            }, [])

        if (modelIems_xGSI_KeysWithBadType.length) {
            throw new Error(`${modelItemKey} has gsi keys: [${modelIems_xGSI_KeysWithBadType.join(", ")}]. GSI keys should correspond to item property's type and only valid types are string (sGSI[1-19] keys) and number (nGSI[1-19])`)
        }
    }

    // peer keys should point only to other items that are part of the model
    for (const [modelItemKey, modelItemObject] of allDataModelItems) {
        // gather all system keys in an array
        const modelIemsWithBadPeers = Object.entries((modelItemObject as DataModelObject).__attributes)
            .reduce((modelIemsWithBadPeers: string[], dataModelObjectEntry: any) => {
                const [modelItemObjectKey, modelItemObject] = dataModelObjectEntry
                if (modelItemObject.__peer && !Object.keys(dataModelJson.Items || {})
                    .concat(Object.keys(dataModelJson.Commands || {}))
                    .concat(Object.keys(dataModelJson.Queries || {})).includes(modelItemObject.__peer)) {
                    modelIemsWithBadPeers.push(`${modelItemKey}/${modelItemObjectKey}: ${modelItemObject.__peer}`)
                }
                return modelIemsWithBadPeers
            }, [])

        if (modelIemsWithBadPeers.length) {
            throw new Error(`${modelItemKey} defines a peer item which is not part of the domain model: [${modelIemsWithBadPeers.join(", ")}].`)
        }
    }

    // peerKeys can ONLY be of type string or string[] (peerKey can also be a gsiKey but then only valid type becoms string - validations for gsiKey will catch that)
    for (const [modelItemKey, modelItemObject] of allDataModelItems) {
        // gather all system keys in an array
        const modelIemsWithBadPeers = Object.entries((modelItemObject as DataModelObject).__attributes)
            .reduce((modelIemsWithBadPeers: string[], dataModelObjectEntry: any) => {
                const [modelItemObjectKey, modelItemObject] = dataModelObjectEntry
                if (modelItemObject.__peer && modelItemObject.__type !== "string" && modelItemObject.__type !== "string[]") {
                    modelIemsWithBadPeers.push(`${modelItemKey}/${modelItemObjectKey}: ${modelItemObject.__peer}`)
                }
                return modelIemsWithBadPeers
            }, [])

        if (modelIemsWithBadPeers.length) {
            throw new Error(`${modelItemKey} defines a peer but its type is not "string" or "string[]": [${modelIemsWithBadPeers.join(", ")}]. Items with peers can only be of type "string" or "string[]"`)
        }
    }

    // only valid options for __type of type string are  "string", "string[]", "enum", "number", "isodatestring" 
    const onlyValid__type_StringValues = ["string", "string[]", "enum", "number", "isodatestring"]
    for (const [modelItemKey, modelItemObject] of allDataModelItems) {
        // gather all system keys in an array
        const modelIemsWithBadStringTypes = Object.entries((modelItemObject as DataModelObject).__attributes)
            .reduce((modelIemsWithBadStringTypes: string[], dataModelObjectEntry: any) => {
                const [modelItemObjectKey, modelItemObject] = dataModelObjectEntry
                if (typeof modelItemObject.__type === "string" && !onlyValid__type_StringValues.includes(modelItemObject.__type)) {
                    modelIemsWithBadStringTypes.push(`${modelItemKey}/${modelItemObjectKey}: ${modelItemObject.__type}`)
                }
                return modelIemsWithBadStringTypes
            }, [])

        if (modelIemsWithBadStringTypes.length) {
            throw new Error(`${modelItemKey} defines properties with invalid __type: '[${modelIemsWithBadStringTypes.join("', '")}]'. '${onlyValid__type_StringValues.join("', '")}' are the only valid options for a __type specified as string value`)
        }
    }

    // POJO validation: only valid options for __type which is typeof === object are to be POJO or a [POJO], and the POJO should have __attributes object
    for (const [modelItemKey, modelItemObject] of allDataModelItems) {
        // gather all system keys in an array
        const modelIemsWithBadObjectTypes = Object.entries((modelItemObject as DataModelObject).__attributes)
            .reduce((modelIemsWithBadObjectTypes: string[], dataModelObjectEntry: any) => {
                const [modelItemObjectKey, modelItemObject] = dataModelObjectEntry
                if (typeof modelItemObject.__type === "object" && !Array.isArray(modelItemObject.__type) &&
                    (!modelItemObject.__type.__attributes || (Object.keys(modelItemObject.__type).length !== 1 && !modelItemObject.__type.__attributes && Object.keys(modelItemObject.__type).length !== 2))) {
                    modelIemsWithBadObjectTypes.push(`${modelItemKey}/${modelItemObjectKey}: ${modelItemObject.__type}`)
                }
                return modelIemsWithBadObjectTypes
            }, [])

        if (modelIemsWithBadObjectTypes.length) {
            throw new Error(`${modelItemKey} defines properties with invalid object types: '[${modelIemsWithBadObjectTypes.join("', '")}]'. When __type is an object, it must have at most __meta(optional) and __attributes(required) keys`)
        }
    }

    // array POJO validation: only valid options for __type which is typeof === object and value is [POJO], the array should have a single element with __attibutes in it 
    for (const [modelItemKey, modelItemObject] of allDataModelItems) {
        // gather all system keys in an array
        const modelIemsWithBadObjectTypes = Object.entries((modelItemObject as DataModelObject).__attributes)
            .reduce((modelIemsWithBadObjectTypes: string[], dataModelObjectEntry: any) => {
                const [modelItemObjectKey, modelItemObject] = dataModelObjectEntry
                if (typeof modelItemObject.__type === "object" && Array.isArray(modelItemObject.__type) &&
                    (!modelItemObject.__type[0].__attributes || (Object.keys(modelItemObject.__type[0]).length !== 1 && !modelItemObject.__type[0].__attributes && Object.keys(modelItemObject.__type[0]).length !== 2))) {
                    modelIemsWithBadObjectTypes.push(`${modelItemKey}/${modelItemObjectKey}: ${modelItemObject.__type}`)
                }
                return modelIemsWithBadObjectTypes
            }, [])

        if (modelIemsWithBadObjectTypes.length) {
            throw new Error(`${modelItemKey} defines properties with invalid array object types: '[${modelIemsWithBadObjectTypes.join("', '")}]'. When __type is an array, it must have single element of type object with at most __meta(optional) and __attributes(required) keys`)
        }
    }
    // }

    // after map of system keys to regular keys is initialized, validate the passed additional GSIs to be created 
    const globalSecondaryIndexesToCreate = []
    for (const gsi of dataModelJson.GlobalSecondaryIndexes) {
        // validate input is correct
        const [hashKeyName, rangeKeyName] = gsi.IndexName.split('-')
        if (hashKeyName !== 'NSHARD' && !gsiKeysToRegularKeysMap.has(hashKeyName)) {
            throw new Error(`${hashKeyName} of custom index ${gsi.IndexName} is invalid as it does not participate in map of keys to regular keys`);
        }
        if (rangeKeyName && rangeKeyName !== 'TITEM' && !gsiKeysToRegularKeysMap.has(rangeKeyName)) {
            throw new Error(`${rangeKeyName} of custom index ${gsi.IndexName} is invalid as it does not participate in map of keys to regular keys`);
        }
        globalSecondaryIndexesToCreate.push(gsi)
        // if (INCTA_GSI_BASE_CONFIG.createTITEMgsiForEachGSI && hashKeyName != 'TITEM') {
        //     if (!globalSecondaryIndexesToCreate.includes(`TITEM-${hashKeyName}`)) {
        //         globalSecondaryIndexesToCreate.push(`TITEM-${hashKeyName}`)
        //     }
        // }
        // if (INCTA_GSI_BASE_CONFIG.createTITEMgsiForEachGSI && rangeKeyName != 'TITEM') {
        //     if (!globalSecondaryIndexesToCreate.includes(`TITEM-${rangeKeyName}`)) {
        //         globalSecondaryIndexesToCreate.push(`TITEM-${rangeKeyName}`)
        //     }
        // }
    }

    if (errors.length) {
        errors.forEach(e => logerror(e))
        logwarn("EXAMPLE: \n" +
            "node ./dist/_exec_generateDataModel.js < --dataModelJsonPath <path to data-model.json>|--dataModelsDir <path to dir with models> > --dataModelFilesOutDir <path-to-outudir>")
        throw new Error(errors.join("\\\n"))
    }

    return {
        dataModelJson,
        dataModelFilesOutDir,
        importLibraryToUseInGeneratedFiles,
        gsiKeysToRegularKeysMap,
        generateHollowImplFiles
    }
}
