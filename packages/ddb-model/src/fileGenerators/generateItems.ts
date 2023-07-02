import { DataModelObject, JSONDataModel } from "../interfaces/DataModel";
import * as nunjucks from 'nunjucks'
import { mkdir, writeFile } from "fs/promises";
import { join, sep } from "path";
import { readFileSync } from "fs";
import * as pluralize from "pluralize";
/**
 * 
 * @param itemsModel Generates only Items and corresponding Dtos
 * @param dataModelFilesOutDir 
 * @param importLibraryToUseInGeneratedFiles 
 */
export const generateItems = async (itemsModel: { [x: string]: DataModelObject }, dataModelFilesOutDir: string, importLibraryToUseInGeneratedFiles: string) => {
    await mkdir(join(dataModelFilesOutDir, 'dtos'), { recursive: true })

    const nunjucksEnv = nunjucks.configure({ autoescape: false, noCache: true })

    nunjucksEnv.addFilter('onlyUnique', (__attributes: any): any => Object.keys(__attributes).reduce(
        (result, key) => {
            if (__attributes[key].__unique) {
                Object.assign(result, { [key]: __attributes[key] })
            };
            return result
        }, {}));
    nunjucksEnv.addFilter('except_system_fields', (__attributes: any): any => Object.keys(__attributes).reduce(
        (result, key) => {
            if (key !== "date_created" && key !== "date_updated" && key !== "user_created" && key !== "user_updated" && key !== "id") {
                Object.assign(result, { [key]: __attributes[key] })
            };
            return result
        }, {}));
    nunjucksEnv.addFilter('onlyRequired', (__attributes: any): any => Object.keys(__attributes).reduce(
        (result, key) => {
            if (__attributes[key].__required) {
                Object.assign(result, { [key]: __attributes[key] })
            };
            return result
        }, {}));
    nunjucksEnv.addFilter('onlyWithGsiKeys', (__attributes: any): any => Object.keys(__attributes).reduce(
        (result, key) => {
            if (Array.isArray(__attributes[key].__gsiKeys) && __attributes[key].__gsiKeys.length > 0) {
                Object.assign(result, { [key]: __attributes[key] })
            };
            return result
        }, {}));
    nunjucksEnv.addGlobal('getJsType', (__typename: string, key: string, attrs: any): string => {
        if (typeof attrs.__type === 'object' && Array.isArray(attrs.__type)) {
            const singularKey = pluralize.singular(key)
            return `${__typename[0].toUpperCase() + __typename.slice(1)}${singularKey[0].toUpperCase() + singularKey.slice(1)}Dto []`
        }
        else if (typeof attrs.__type === 'object') {
            const singularKey = pluralize.singular(key)
            return `${__typename[0].toUpperCase() + __typename.slice(1)}${singularKey[0].toUpperCase() + singularKey.slice(1)}Dto`
        }
        switch (attrs.__type) {
            case "isodatestring": return "Date";
            case "enum": return `"${attrs.__values.split("|").join('"|"')}"`;
            default: return attrs.__type;
        }
    });
    //when generating metadata we do not want to convert enum types to js types
    nunjucksEnv.addGlobal('getJsTypeForMetadataType', (__typename: string, key: string, attrs: any): string => {
        if (typeof attrs.__type === 'object' && Array.isArray(attrs.__type)) {
            const singularKey = pluralize.singular(key)
            return `type: 'object[]', objectTypeDtoName: '${__typename[0].toUpperCase() + __typename.slice(1)}${singularKey[0].toUpperCase() + singularKey.slice(1)}Dto',`
        }
        else if (typeof attrs.__type === 'object') {
            const singularKey = pluralize.singular(key)
            return `type: 'object', objectTypeDtoName: '${__typename[0].toUpperCase() + __typename.slice(1)}${singularKey[0].toUpperCase() + singularKey.slice(1)}Dto',`
        }
        switch (attrs.__type) {
            case "enum": return `type: 'enum', enumValues: ["${attrs.__values.split("|").join('","')}"],`;
            default: return `type: '${attrs.__type}',`;
        }
    });
    //when generating metadata we want enum values to be like a string array
    nunjucksEnv.addGlobal('getJsTypeForMetadataEnumValues', (__typename: string, key: string, attrs: any): string => {
        if (typeof attrs.__type === 'object' && Array.isArray(attrs.__type)) {
            const singularKey = pluralize.singular(key)
            return `${__typename[0].toUpperCase() + __typename.slice(1)}${singularKey[0].toUpperCase() + singularKey.slice(1)}Dto[]`
        }
        else if (typeof attrs.__type === 'object') {
            const singularKey = pluralize.singular(key)
            return `${__typename[0].toUpperCase() + __typename.slice(1)}${singularKey[0].toUpperCase() + singularKey.slice(1)}Dto`
        }
        switch (attrs.__type) {
            case "isodatestring": return "Date";
            case "enum": return `["${attrs.__values.split("|").join('","')}"]`;
            default: return attrs.__type;
        }
    });

    for (const item of Object.keys(itemsModel).filter(key => key !== '__meta')) {

        // gnerate a dto for the complex types used in model
        const inItemJSONs = Object.keys(itemsModel[item].__attributes).reduce((inItemJSONs: any, key: string) => {

            if (typeof itemsModel[item].__attributes[key].__type === 'object' && Array.isArray(itemsModel[item].__attributes[key].__type)) {
                const typedArray = itemsModel[item].__attributes[key].__type as unknown as object[]
                if (typedArray.length === 1) {
                    const singularKey = pluralize.singular(key)
                    Object.assign(inItemJSONs, { [`${item[0].toUpperCase() + item.slice(1)}${singularKey[0].toUpperCase() + singularKey.slice(1)}`]: typedArray[0] })
                } else {
                    throw new Error("Expected sngle object in array type definition")
                }
            }

            else if (typeof itemsModel[item].__attributes[key].__type === 'object') {
                const singularKey = pluralize.singular(key)
                Object.assign(inItemJSONs, { [`${item[0].toUpperCase() + item.slice(1)}${singularKey[0].toUpperCase() + singularKey.slice(1)}`]: itemsModel[item].__attributes[key].__type })
            }

            return inItemJSONs;
        }, {});

        for (const complexTypeName of Object.keys(inItemJSONs).filter(key => key !== '__meta')) {
            await writeFile(
                join(dataModelFilesOutDir, 'dtos', `${complexTypeName}Dto.ts`),
                nunjucks.renderString(
                    readFileSync(join(__dirname.replace(`${sep}dist${sep}`, `${sep}src${sep}`), '..', './ddb-model-templates/inItemJsonDtoTemplate.nunjucks')).toString(),
                    // pass __typename to template engine (make __typename optional in the model json)
                    Object.assign({ __typename: complexTypeName }, inItemJSONs[complexTypeName])));
        }


        await writeFile(
            join(dataModelFilesOutDir, '', `${item}.ts`),
            nunjucks.renderString(
                readFileSync(join(__dirname.replace(`${sep}dist${sep}`, `${sep}src${sep}`), '..', './ddb-model-templates/dynamoItemTemplate.ts.nunjucks')).toString(),
                // pass __typename to template engine (make __typename optional in the model json)
                Object.assign({ importLibraryToUseInGeneratedFiles, __typename: item, __parent_typename: itemsModel[item].__meta?.__parent_typename ?? item, __inItemJSONs: inItemJSONs, __isPublicItem: !!itemsModel[item].__meta?.__isPublicItem  }, itemsModel[item])));

        // generate dto also for every item
        await writeFile(
            join(dataModelFilesOutDir, 'dtos', `${item}Dto.ts`),
            nunjucks.renderString(
                readFileSync(join(__dirname.replace(`${sep}dist${sep}`, `${sep}src${sep}`), '..', './ddb-model-templates/itemDtoTemplate.nunjucks')).toString(),
                // pass __typename to template engine (make __typename optional in the model json)
                Object.assign({ __typename: item, __inItemJSONs: inItemJSONs }, itemsModel[item])));
    }
}


export const prepareItemDefinitionsDataForTemplating = (dataModelEntries: [string, DataModelObject][]): { [x: string]: {} } => {
    const allItemsDefinition = {}
    const withoutMeta = (__attributes: any): any => Object.keys(__attributes).reduce(
        (result, key) => {
            if (key !== '__meta') {
                Object.assign(result, { [key]: __attributes[key] })
            };
            return result
        }, {});
    for (const [itemKey, itemDef] of dataModelEntries.filter(entry => entry[0] !== '__meta')) {

        // gnerate a dto for the complex types used in model
        const inItemJSONs = Object.keys(withoutMeta(itemDef.__attributes)).reduce((inItemJSONs: any, key: string) => {

            if (typeof itemDef.__attributes[key].__type === 'object' && Array.isArray(itemDef.__attributes[key].__type)) {
                const typedArray = itemDef.__attributes[key].__type as unknown as object[]
                if (typedArray.length === 1) {
                    const singularKey = pluralize.singular(key)
                    Object.assign(inItemJSONs, { [`${itemKey[0].toUpperCase() + itemKey.slice(1)}${singularKey[0].toUpperCase() + singularKey.slice(1)}`]: typedArray[0] })
                } else {
                    throw new Error("Expected single object in array type definition")
                }
            }

            else if (typeof itemDef.__attributes[key].__type === 'object') {
                const singularKey = pluralize.singular(key)
                Object.assign(inItemJSONs, { [`${itemKey[0].toUpperCase() + itemKey.slice(1)}${singularKey[0].toUpperCase() + singularKey.slice(1)}`]: itemDef.__attributes[key].__type })
            }

            return inItemJSONs;
        }, {});

        const inItemStringEnums = Object.keys(withoutMeta(itemDef.__attributes)).reduce((inItemStringEnums: any, key: string) => {

            if (itemDef.__attributes[key].__type === 'enum') {
                const singularKey = pluralize.singular(key)
                Object.assign(inItemStringEnums, { [`${itemKey[0].toUpperCase() + itemKey.slice(1)}${singularKey[0].toUpperCase() + singularKey.slice(1)}`]: itemDef.__attributes[key].__values?.split('|') })
            }
            return inItemStringEnums;
        }, {});

        Object.assign(allItemsDefinition, { [itemKey]: { itemDef, inItemJSONs, inItemStringEnums, __typename: itemKey } })
    }
    return allItemsDefinition
}