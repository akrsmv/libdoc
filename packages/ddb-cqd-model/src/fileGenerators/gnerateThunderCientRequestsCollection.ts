import { uuid } from "@incta/common-utils";
import * as nunjucks from 'nunjucks'
import { writeFile } from "fs/promises";
import { join, sep } from "path";
import { readFileSync } from "fs";
import * as pluralize from "pluralize";
import { JSONDataModel, INestedDataModelObject, GsiKey, except_system_fields, except_typename, GSIDefinition } from "@incta/ddb-model";

export const gnerateThunderCientRequestsCollection = async (cqDataModel: JSONDataModel, collectionName: string, dataModelFilesOutDir: string, globalSecondaryIndexesToCreate?: GSIDefinition[]) => {
    let initialRequestsSortNum = 50000;
    const nunjucksEnv = nunjucks.configure({ autoescape: false, noCache: true })

    nunjucksEnv.addFilter('onlyUnique', (__attributes: any): any => Object.keys(__attributes).reduce(
        (result, key) => {
            if (__attributes[key].__unique) {
                Object.assign(result, { [key]: __attributes[key] })
            };
            return result
        }, {}));
    const withoutMeta = (__attributes: any): any => Object.keys(__attributes).reduce(
        (result, key) => {
            if (key !== '__meta') {
                Object.assign(result, { [key]: __attributes[key] })
            };
            return result
        }, {});
    nunjucksEnv.addFilter('except_system_fields', except_system_fields);
    nunjucksEnv.addFilter('except_typename', except_typename);
    nunjucksEnv.addFilter('withoutMeta', withoutMeta);
    nunjucksEnv.addFilter('onlyRequired', (__attributes: any): any => Object.keys(__attributes).reduce(
        (result, key) => {
            if (__attributes[key].__required) {
                Object.assign(result, { [key]: __attributes[key] })
            };
            return result
        }, {}));
    const onlyWithGsiKeys = (__attributes: INestedDataModelObject): INestedDataModelObject => Object.keys(__attributes).reduce(
        (result, key) => {
            if (Array.isArray(__attributes[key].__gsiKeys) && __attributes[key].__gsiKeys?.length) {
                Object.assign(result, { [key]: __attributes[key] })
            };
            return result
        }, {})
    nunjucksEnv.addFilter('onlyWithGsiKeys', onlyWithGsiKeys);
    nunjucksEnv.addFilter('onlyWithPeerKeys', (__attributes: any): any => Object.keys(__attributes).reduce(
        (result, key) => {
            if (__attributes[key].__peer) {
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
    const getThunderTestPayloadValueType = (__typename: string, key: string, attrs: any): string => {
        if (typeof attrs.__type === 'object' && Array.isArray(attrs.__type)) {
            return `[${getThunderTestPayloadValueType('', key, withoutMeta(attrs.__type[0]))},\\n${getThunderTestPayloadValueType('', key, withoutMeta(attrs.__type[0]))}]`
        }
        else if (typeof attrs.__type === 'object') {
            return Object.keys(withoutMeta(attrs.__type)).reduce<string>((accum: string, key: string) => {
                return accum + ',\\n' + getThunderTestPayloadValueType('', key, withoutMeta((attrs.__type as any)))
            }, '')
        }
        switch (attrs.__type) {
            case "isodatestring": return `\\\"{{#date, 'YYYY-MM-DD hh:mm:ss:fff'}}\\\"`;
            case "enum": return `\\\"${attrs.__values.split("|")[0]}\\\"`;
            case "string": return `\\\"${key}{{#number}}\\\"`;
            case "string[]": return `[\\\"${key}{{#number}}\\\"]`;
            case "number": return `{{#number}}`;
            default: return attrs.__type;
        }
    };
    nunjucksEnv.addGlobal('getThunderTestPayloadValueType', getThunderTestPayloadValueType);

    const
        allCommandQueryItems = Object.keys(cqDataModel.Items).filter(key => key !== '__meta').concat(Object.keys(cqDataModel.Queries).filter(key => key !== '__meta')).concat(Object.keys(cqDataModel.Commands).filter(key => key !== '__meta')).filter(key => key !== '__meta'),
        ddbActions$itemsTopLevelFolderIds = allCommandQueryItems.reduce((accum, key) => {
            accum.set(key, uuid());
            return accum
        }, new Map<string, string>()),
        ddbActions$itemsQueryFolderIds = allCommandQueryItems.reduce((accum, key) => {
            accum.set(key, uuid());
            return accum
        }, new Map<string, string>()),
        ddbActions$itemsQueryBySystemKeysFolderIds = allCommandQueryItems.reduce((accum, key) => {
            accum.set(key, uuid());
            return accum
        }, new Map<string, string>()),
        cqdActions$itemsTopLevelFolderIds = allCommandQueryItems.reduce((accum, key) => {
            accum.set(key, uuid());
            return accum
        }, new Map<string, string>()),
        cqdActions$itemsQueryFolderIds = allCommandQueryItems.reduce((accum, key) => {
            accum.set(key, uuid());
            return accum
        }, new Map<string, string>()),
        cqdActions$itemsQueryBySystemKeysFolderIds = allCommandQueryItems.reduce((accum, key) => {
            accum.set(key, uuid());
            return accum
        }, new Map<string, string>());


    const
        ddb_actions_folder_guid = uuid(),
        cqd_actions_folder_guid = uuid(),
        cqd_actions_$_items_folder_guid = uuid(),
        cqd_actions_$_commands_folder_guid = uuid(),
        cqd_actions_$_queries_folder_guid = uuid(),
        colId = uuid(),
        dateExportedIsoString = new Date().toISOString(),
        initialFolderSortCount = 10000,
        itemsFolders = [
            //#region ddb-actions
            ...allCommandQueryItems.map((key, index) => ({
                _id: ddbActions$itemsTopLevelFolderIds.get(key),
                name: key,
                containerId: ddb_actions_folder_guid,
                created: dateExportedIsoString,
                sortNum: initialFolderSortCount + (index + 1) * 10000
            })),
            ...allCommandQueryItems.map((key, index) => ({
                _id: ddbActions$itemsQueryFolderIds.get(key),
                name: `${key} Queries`,
                containerId: ddbActions$itemsTopLevelFolderIds.get(key),
                created: dateExportedIsoString,
                sortNum: initialFolderSortCount + (index + 1) * 10000
            })),
            ...allCommandQueryItems.map((key, index) => ({
                _id: ddbActions$itemsQueryBySystemKeysFolderIds.get(key),
                name: `${key} Queries by system keys`,
                containerId: ddbActions$itemsQueryFolderIds.get(key),
                created: dateExportedIsoString,
                sortNum: initialFolderSortCount + (index + 1) * 10000
            })),
            //#endregion ddb-acions
            //#region cqd-actions
            ...Object.keys(cqDataModel.Items).filter(key => key !== '__meta').map((key, index) => ({
                _id: cqdActions$itemsTopLevelFolderIds.get(key),
                name: key,
                containerId: cqd_actions_$_items_folder_guid,
                created: dateExportedIsoString,
                sortNum: initialFolderSortCount + (index + 1) * 10000
            })),
            ...Object.keys(cqDataModel.Commands).filter(key => key !== '__meta').map((key, index) => ({
                _id: cqdActions$itemsTopLevelFolderIds.get(key),
                name: key,
                containerId: cqd_actions_$_commands_folder_guid,
                created: dateExportedIsoString,
                sortNum: initialFolderSortCount + (index + 1) * 10000
            })),
            ...Object.keys(cqDataModel.Queries).filter(key => key !== '__meta').map((key, index) => ({
                _id: cqdActions$itemsTopLevelFolderIds.get(key),
                name: key,
                containerId: cqd_actions_$_queries_folder_guid,
                created: dateExportedIsoString,
                sortNum: initialFolderSortCount + (index + 1) * 10000
            })),
            //#region Query folders  for items
            ...Object.keys(cqDataModel.Items).filter(key => key !== '__meta').map((key, index) => ({
                _id: cqdActions$itemsQueryFolderIds.get(key),
                name: `${key} Queries`,
                containerId: cqdActions$itemsTopLevelFolderIds.get(key),
                created: dateExportedIsoString,
                sortNum: initialFolderSortCount + (index + 1) * 10000
            })),
            ...Object.keys(cqDataModel.Items).filter(key => key !== '__meta').map((key, index) => ({
                _id: cqdActions$itemsQueryBySystemKeysFolderIds.get(key),
                name: `${key} Queries by system keys`,
                containerId: cqdActions$itemsQueryFolderIds.get(key),
                created: dateExportedIsoString,
                sortNum: initialFolderSortCount + (index + 1) * 10000
            })),
            //#endregion for items
            //#region Query folders for commands

            ...Object.keys(cqDataModel.Commands).filter(key => key !== '__meta').map((key, index) => ({
                _id: cqdActions$itemsQueryFolderIds.get(key),
                name: `${key} Queries`,
                containerId: cqdActions$itemsTopLevelFolderIds.get(key),
                created: dateExportedIsoString,
                sortNum: initialFolderSortCount + (index + 1) * 10000
            })),
            ...Object.keys(cqDataModel.Commands).filter(key => key !== '__meta').map((key, index) => ({
                _id: cqdActions$itemsQueryBySystemKeysFolderIds.get(key),
                name: `${key} Queries by system keys`,
                containerId: cqdActions$itemsQueryFolderIds.get(key),
                created: dateExportedIsoString,
                sortNum: initialFolderSortCount + (index + 1) * 10000
            })),
            //#endregion for commands
            //#region Query folder for queries

            ...Object.keys(cqDataModel.Queries).filter(key => key !== '__meta').map((key, index) => ({
                _id: cqdActions$itemsQueryFolderIds.get(key),
                name: `${key} Queries`,
                containerId: cqdActions$itemsTopLevelFolderIds.get(key),
                created: dateExportedIsoString,
                sortNum: initialFolderSortCount + (index + 1) * 10000
            })),
            ...Object.keys(cqDataModel.Queries).filter(key => key !== '__meta').map((key, index) => ({
                _id: cqdActions$itemsQueryBySystemKeysFolderIds.get(key),
                name: `${key} Queries by system keys`,
                containerId: cqdActions$itemsQueryFolderIds.get(key),
                created: dateExportedIsoString,
                sortNum: initialFolderSortCount + (index + 1) * 10000
            }))
            //#endregion for queries
            //#endregion cqd-actions
        ],
        // #region ddb-actions
        ddbActions$itemsBatchGetItemRequests = Object.keys(cqDataModel.Items).filter(key => key !== '__meta').map((key, index) => {
            initialRequestsSortNum += (index + 1) * 10000
            return {
                "_id": uuid(),
                "colId": colId,
                "containerId": ddbActions$itemsTopLevelFolderIds.get(key),
                "name": `get:${key}`,
                "url": "localhost:5000/lambda/invoke/ddb-actions/getItems?__usr={{__usr}}&__agt={{__agt}}",
                "method": "POST",
                "sortNum": 10000,
                "created": dateExportedIsoString,
                "modified": dateExportedIsoString,
                "headers": [],
                "params": [
                    {
                        "name": "__usr",
                        "value": "{{__usr}}",
                        "isPath": false
                    },
                    {
                        "name": "__agt",
                        "value": "{{__agt}}",
                        "isPath": false
                    }
                ],
                "body": {
                    "type": "json",
                    "raw": nunjucks.renderString(
                        readFileSync(join(__dirname.replace(`${sep}dist${sep}`, `${sep}src${sep}`), '..', './ddb-cq-model-templates/thunder-client-templates/ddbAction_get.nunjucks')).toString(),
                        { __parent_typename: cqDataModel.Items[key]?.__meta.__parent_typename ?? key, __typename: key, __attributes: cqDataModel.Items[key].__attributes }),
                    "form": []
                },
                "tests": []
            }
        }),
        ddbActions$itemsBatchDeleteItemRequests = Object.keys(cqDataModel.Items).filter(key => key !== '__meta').map((key, index) => {
            initialRequestsSortNum += (index + 1) * 10000
            return {
                "_id": uuid(),
                "colId": colId,
                "containerId": ddbActions$itemsTopLevelFolderIds.get(key),
                "name": `delete:${key}`,
                "url": "localhost:5000/lambda/invoke/ddb-actions/deleteItem?__usr={{__usr}}&__agt={{__agt}}",
                "method": "POST",
                "sortNum": 10000,
                "created": dateExportedIsoString,
                "modified": dateExportedIsoString,
                "headers": [],
                "params": [
                    {
                        "name": "__usr",
                        "value": "{{__usr}}",
                        "isPath": false
                    },
                    {
                        "name": "__agt",
                        "value": "{{__agt}}",
                        "isPath": false
                    }
                ],
                "body": {
                    "type": "json",
                    "raw": nunjucks.renderString(
                        readFileSync(join(__dirname.replace(`${sep}dist${sep}`, `${sep}src${sep}`), '..', './ddb-cq-model-templates/thunder-client-templates/ddbAction_delete.nunjucks')).toString(),
                        { __parent_typename: cqDataModel.Items[key]?.__meta.__parent_typename ?? key, __typename: key, __attributes: cqDataModel.Items[key].__attributes }),
                    "form": []
                },
                "tests": []
            }
        }),
        ddbActions$itemsTransactPutItemRequests = Object.keys(cqDataModel.Items).filter(key => key !== '__meta').map((key, index) => {
            initialRequestsSortNum += (index + 1) * 10000
            return {
                "_id": uuid(),
                "colId": colId,
                "containerId": ddbActions$itemsTopLevelFolderIds.get(key),
                "name": `create:${key}`,
                "url": "localhost:5000/lambda/invoke/ddb-actions/createItem?__usr={{__usr}}&__agt={{__agt}}",
                "method": "POST",
                "sortNum": 10000,
                "created": dateExportedIsoString,
                "modified": dateExportedIsoString,
                "headers": [],
                "params": [
                    {
                        "name": "__usr",
                        "value": "{{__usr}}",
                        "isPath": false
                    },
                    {
                        "name": "__agt",
                        "value": "{{__agt}}",
                        "isPath": false
                    }
                ],
                "body": {
                    "type": "json",
                    "raw": nunjucks.renderString(
                        readFileSync(join(__dirname.replace(`${sep}dist${sep}`, `${sep}src${sep}`), '..', './ddb-cq-model-templates/thunder-client-templates/ddbAction_create.nunjucks')).toString(),
                        { __parent_typename: cqDataModel.Items[key]?.__meta.__parent_typename ?? key, __typename: key, __attributes: cqDataModel.Items[key].__attributes }),
                    "form": []
                },
                "tests": []
            }
        }),
        ddbActions$itemsTransactUpdateItemRequests = Object.keys(cqDataModel.Items).filter(key => key !== '__meta').map((key, index) => {
            initialRequestsSortNum += (index + 1) * 10000
            return {
                "_id": uuid(),
                "colId": colId,
                "containerId": ddbActions$itemsTopLevelFolderIds.get(key),
                "name": `update:${key}`,
                "url": "localhost:5000/lambda/invoke/ddb-actions/updateItem?__usr={{__usr}}&__agt={{__agt}}",
                "method": "POST",
                "sortNum": 10000,
                "created": dateExportedIsoString,
                "modified": dateExportedIsoString,
                "headers": [],
                "params": [
                    {
                        "name": "__usr",
                        "value": "{{__usr}}",
                        "isPath": false
                    },
                    {
                        "name": "__agt",
                        "value": "{{__agt}}",
                        "isPath": false
                    }
                ],
                "body": {
                    "type": "json",
                    "raw": nunjucks.renderString(
                        readFileSync(join(__dirname.replace(`${sep}dist${sep}`, `${sep}src${sep}`), '..', './ddb-cq-model-templates/thunder-client-templates/ddbAction_update.nunjucks')).toString(),
                        { __parent_typename: cqDataModel.Items[key]?.__meta.__parent_typename ?? key, __typename: key, __attributes: cqDataModel.Items[key].__attributes, action: 'update' }),
                    "form": []
                },
                "tests": []
            }
        }),
        ddbActions$patchItemRequests = Object.keys(cqDataModel.Items).filter(key => key !== '__meta').map((key, index) => {
            initialRequestsSortNum += (index + 1) * 10000
            return {
                "_id": uuid(),
                "colId": colId,
                "containerId": ddbActions$itemsTopLevelFolderIds.get(key),
                "name": `patch:${key}`,
                "url": "localhost:5000/lambda/invoke/ddb-actions/patchItem?__usr={{__usr}}&__agt={{__agt}}",
                "method": "POST",
                "sortNum": 10000,
                "created": dateExportedIsoString,
                "modified": dateExportedIsoString,
                "headers": [],
                "params": [
                    {
                        "name": "__usr",
                        "value": "{{__usr}}",
                        "isPath": false
                    },
                    {
                        "name": "__agt",
                        "value": "{{__agt}}",
                        "isPath": false
                    }
                ],
                "body": {
                    "type": "json",
                    "raw": nunjucks.renderString(
                        readFileSync(join(__dirname.replace(`${sep}dist${sep}`, `${sep}src${sep}`), '..', './ddb-cq-model-templates/thunder-client-templates/ddbAction_update.nunjucks')).toString(),
                        { __parent_typename: cqDataModel.Items[key]?.__meta.__parent_typename ?? key, __typename: key, __attributes: cqDataModel.Items[key].__attributes, action: 'patch' }),
                    "form": []
                },
                "tests": []
            }
        }),
        ddbActions$itemsQueryPatternRequests = [
            ...Object.keys(cqDataModel.Items).filter(key => key !== '__meta').map((key, index) => {
                const requests = []
                if (Array.isArray(globalSecondaryIndexesToCreate)) {
                    for (const dbIndexName of globalSecondaryIndexesToCreate.filter(gsi => gsi.IndexName !== 'NSHARD-TITEM').map(gsi => gsi.IndexName)) {
                        const [hashKeyName, rangeKeyName] = dbIndexName.split('-')
                        requests.push({
                            "_id": uuid(),
                            "colId": colId,
                            "containerId": ddbActions$itemsQueryBySystemKeysFolderIds.get(key),
                            "name": `query:${key} by custom index ${dbIndexName}`,
                            "url": "localhost:5000/lambda/invoke/ddb-actions/queryItems?__usr={{__usr}}&__agt={{__agt}}",
                            "method": "POST",
                            "sortNum": 10000,
                            "created": dateExportedIsoString,
                            "modified": dateExportedIsoString,
                            "headers": [],
                            "params": [
                                {
                                    "name": "__usr",
                                    "value": "{{__usr}}",
                                    "isPath": false
                                },
                                {
                                    "name": "__agt",
                                    "value": "{{__agt}}",
                                    "isPath": false
                                }
                            ],
                            "body": {
                                "type": "json",
                                "raw": nunjucks.renderString(
                                    readFileSync(join(__dirname.replace(`${sep}dist${sep}`, `${sep}src${sep}`), '..', './ddb-cq-model-templates/thunder-client-templates/queries/ddbAction_queryBy_PK_from_table_OR_index_PayloadTemplate.string.nunjucks')).toString(),
                                    { rangeKeyType: (rangeKeyName ? rangeKeyName.startsWith('n') ? 'number' : 'string' : undefined), dbIndexName, hashKeyName, rangeKeyName, __parent_typename: cqDataModel.Items[key]?.__meta.__parent_typename ?? key, __typename: key, __attributes: cqDataModel.Items[key].__attributes }),
                                "form": []
                            },
                            "tests": []
                        })
                    }
                }
                return requests
            }).reduce((accum, arr) => accum.concat(arr), []),
            ...Object.keys(cqDataModel.Items).filter(key => key !== '__meta').map((key, index) => {
                initialRequestsSortNum += (index + 1) * 10000
                return {
                    "_id": uuid(),
                    "colId": colId,
                    "containerId": ddbActions$itemsQueryFolderIds.get(key),
                    "name": `query:${key} in Table`,
                    "url": "localhost:5000/lambda/invoke/ddb-actions/queryItems?__usr={{__usr}}&__agt={{__agt}}",
                    "method": "POST",
                    "sortNum": 10000,
                    "created": dateExportedIsoString,
                    "modified": dateExportedIsoString,
                    "headers": [],
                    "params": [
                        {
                            "name": "__usr",
                            "value": "{{__usr}}",
                            "isPath": false
                        },
                        {
                            "name": "__agt",
                            "value": "{{__agt}}",
                            "isPath": false
                        }
                    ],
                    "body": {
                        "type": "json",
                        "raw": nunjucks.renderString(
                            readFileSync(join(__dirname.replace(`${sep}dist${sep}`, `${sep}src${sep}`), '..', './ddb-cq-model-templates/thunder-client-templates/queries/ddbAction_queryBy_PK_from_table_OR_index_PayloadTemplate.string.nunjucks')).toString(),
                            { hashKeyName: "HASH", rangeKeyName: "RANGE", __parent_typename: cqDataModel.Items[key]?.__meta.__parent_typename ?? key, __typename: key, __attributes: cqDataModel.Items[key].__attributes }),
                        "form": []
                    },
                    "tests": []
                }
            }),
            ...Object.keys(cqDataModel.Items).filter(key => key !== '__meta').map((key, index) => {
                initialRequestsSortNum += (index + 1) * 10000
                // should always be present, by definition but guard in any case
                if (globalSecondaryIndexesToCreate?.map(gsi => gsi.IndexName).includes('NSHARD-TITEM')) {
                    return {
                        "_id": uuid(),
                        "colId": colId,
                        "containerId": ddbActions$itemsQueryFolderIds.get(key),
                        "name": `query:${key} in NSHARD-TITEM`,
                        "url": "localhost:5000/lambda/invoke/ddb-actions/queryItems?__usr={{__usr}}&__agt={{__agt}}",
                        "method": "POST",
                        "sortNum": 10000,
                        "created": dateExportedIsoString,
                        "modified": dateExportedIsoString,
                        "headers": [],
                        "params": [
                            {
                                "name": "__usr",
                                "value": "{{__usr}}",
                                "isPath": false
                            },
                            {
                                "name": "__agt",
                                "value": "{{__agt}}",
                                "isPath": false
                            }
                        ],
                        "body": {
                            "type": "json",
                            "raw": nunjucks.renderString(
                                readFileSync(join(__dirname.replace(`${sep}dist${sep}`, `${sep}src${sep}`), '..', './ddb-cq-model-templates/thunder-client-templates/queries/ddbAction_queryBy_PK_from_table_OR_index_PayloadTemplate.string.nunjucks')).toString(),
                                { hashKeyName: "TITEM", dbIndexName: "TITEM", __parent_typename: cqDataModel.Items[key]?.__meta.__parent_typename ?? key, __typename: key, __attributes: cqDataModel.Items[key].__attributes }),
                            "form": []
                        },
                        "tests": []
                    }
                }
            }),
            ...Object.keys(cqDataModel.Items).filter(key => key !== '__meta').map((key, index) => {
                initialRequestsSortNum += (index + 1) * 10000
                return {
                    "_id": uuid(),
                    "colId": colId,
                    "containerId": ddbActions$itemsQueryFolderIds.get(key),
                    "name": `SEARCH:${key} auto-infering Index`,
                    "url": "localhost:5000/lambda/invoke/ddb-actions/searchItems?__usr={{__usr}}&__agt={{__agt}}",
                    "method": "POST",
                    "sortNum": 10000,
                    "created": dateExportedIsoString,
                    "modified": dateExportedIsoString,
                    "headers": [],
                    "params": [
                        {
                            "name": "__usr",
                            "value": "{{__usr}}",
                            "isPath": false
                        },
                        {
                            "name": "__agt",
                            "value": "{{__agt}}",
                            "isPath": false
                        }
                    ],
                    "body": {
                        "type": "json",
                        "raw": nunjucks.renderString(
                            readFileSync(join(__dirname.replace(`${sep}dist${sep}`, `${sep}src${sep}`), '..', './ddb-cq-model-templates/thunder-client-templates/queries/ddbAction_search_by_auto_infering_index_PayloadTemplate.nunjucks')).toString(),
                            { __parent_typename: cqDataModel.Items[key]?.__meta.__parent_typename ?? key, __typename: key, __attributes: cqDataModel.Items[key].__attributes }),
                        "form": []
                    },
                    "tests": []
                }
            })
        ],
        //#endregion ddb-actions
        //#region cqd-actions
        // #region for items
        cqdActions$itemsBatchGetItemRequests = Object.keys(cqDataModel.Items).filter(key => key !== '__meta').map((key, index) => {
            initialRequestsSortNum += (index + 1) * 10000
            return {
                "_id": uuid(),
                "colId": colId,
                "containerId": cqdActions$itemsTopLevelFolderIds.get(key),
                "name": `get:${key}`,
                "url": "localhost:5000/lambda/invoke/dispatch-action?__usr={{__usr}}&__agt={{__agt}}",
                "method": "POST",
                "sortNum": 10000,
                "created": dateExportedIsoString,
                "modified": dateExportedIsoString,
                "headers": [],
                "params": [
                    {
                        "name": "__usr",
                        "value": "{{__usr}}",
                        "isPath": false
                    },
                    {
                        "name": "__agt",
                        "value": "{{__agt}}",
                        "isPath": false
                    }
                ],
                "body": {
                    "type": "json",
                    "raw": nunjucks.renderString(
                        readFileSync(join(__dirname.replace(`${sep}dist${sep}`, `${sep}src${sep}`), '..', './ddb-cq-model-templates/thunder-client-templates/dispatchAction_get.nunjucks')).toString(),
                        { __parent_typename: cqDataModel.Items[key]?.__meta.__parent_typename ?? key, __typename: key, __attributes: cqDataModel.Items[key].__attributes }),
                    "form": []
                },
                "tests": []
            }
        }),
        cqdActions$itemsBatchDeleteItemRequests = Object.keys(cqDataModel.Items).filter(key => key !== '__meta').map((key, index) => {
            initialRequestsSortNum += (index + 1) * 10000
            return {
                "_id": uuid(),
                "colId": colId,
                "containerId": cqdActions$itemsTopLevelFolderIds.get(key),
                "name": `delete:${key}`,
                "url": "localhost:5000/lambda/invoke/dispatch-action?__usr={{__usr}}&__agt={{__agt}}",
                "method": "POST",
                "sortNum": 10000,
                "created": dateExportedIsoString,
                "modified": dateExportedIsoString,
                "headers": [],
                "params": [
                    {
                        "name": "__usr",
                        "value": "{{__usr}}",
                        "isPath": false
                    },
                    {
                        "name": "__agt",
                        "value": "{{__agt}}",
                        "isPath": false
                    }
                ],
                "body": {
                    "type": "json",
                    "raw": nunjucks.renderString(
                        readFileSync(join(__dirname.replace(`${sep}dist${sep}`, `${sep}src${sep}`), '..', './ddb-cq-model-templates/thunder-client-templates/dispatchAction_delete.nunjucks')).toString(),
                        { __parent_typename: cqDataModel.Items[key]?.__meta.__parent_typename ?? key, __typename: key, __attributes: cqDataModel.Items[key].__attributes }),
                    "form": []
                },
                "tests": []
            }
        }),
        cqdActions$itemsTransactPutItemRequests = Object.keys(cqDataModel.Items).filter(key => key !== '__meta').map((key, index) => {
            initialRequestsSortNum += (index + 1) * 10000
            return {
                "_id": uuid(),
                "colId": colId,
                "containerId": cqdActions$itemsTopLevelFolderIds.get(key),
                "name": `create:${key}`,
                "url": "localhost:5000/lambda/invoke/dispatch-action?__usr={{__usr}}&__agt={{__agt}}",
                "method": "POST",
                "sortNum": 10000,
                "created": dateExportedIsoString,
                "modified": dateExportedIsoString,
                "headers": [],
                "params": [
                    {
                        "name": "__usr",
                        "value": "{{__usr}}",
                        "isPath": false
                    },
                    {
                        "name": "__agt",
                        "value": "{{__agt}}",
                        "isPath": false
                    }
                ],
                "body": {
                    "type": "json",
                    "raw": nunjucks.renderString(
                        readFileSync(join(__dirname.replace(`${sep}dist${sep}`, `${sep}src${sep}`), '..', './ddb-cq-model-templates/thunder-client-templates/dispatchAction_create.nunjucks')).toString(),
                        { __parent_typename: cqDataModel.Items[key]?.__meta.__parent_typename ?? key, __typename: key, __attributes: cqDataModel.Items[key].__attributes }),
                    "form": []
                },
                "tests": []
            }
        }),
        cqdActions$itemsTransactUpdateItemRequests = Object.keys(cqDataModel.Items).filter(key => key !== '__meta').map((key, index) => {
            initialRequestsSortNum += (index + 1) * 10000
            return {
                "_id": uuid(),
                "colId": colId,
                "containerId": cqdActions$itemsTopLevelFolderIds.get(key),
                "name": `update:${key}`,
                "url": "localhost:5000/lambda/invoke/dispatch-action?__usr={{__usr}}&__agt={{__agt}}",
                "method": "POST",
                "sortNum": 10000,
                "created": dateExportedIsoString,
                "modified": dateExportedIsoString,
                "headers": [],
                "params": [
                    {
                        "name": "__usr",
                        "value": "{{__usr}}",
                        "isPath": false
                    },
                    {
                        "name": "__agt",
                        "value": "{{__agt}}",
                        "isPath": false
                    }
                ],
                "body": {
                    "type": "json",
                    "raw": nunjucks.renderString(
                        readFileSync(join(__dirname.replace(`${sep}dist${sep}`, `${sep}src${sep}`), '..', './ddb-cq-model-templates/thunder-client-templates/dispatchAction_update.nunjucks')).toString(),
                        { __parent_typename: cqDataModel.Items[key]?.__meta.__parent_typename ?? key, __typename: key, __attributes: cqDataModel.Items[key].__attributes, action: 'update' }),
                    "form": []
                },
                "tests": []
            }
        }),
        cqdActions$patchItemRequests = Object.keys(cqDataModel.Items).filter(key => key !== '__meta').map((key, index) => {
            initialRequestsSortNum += (index + 1) * 10000
            return {
                "_id": uuid(),
                "colId": colId,
                "containerId": cqdActions$itemsTopLevelFolderIds.get(key),
                "name": `patch:${key}`,
                "url": "localhost:5000/lambda/invoke/dispatch-action?__usr={{__usr}}&__agt={{__agt}}",
                "method": "POST",
                "sortNum": 10000,
                "created": dateExportedIsoString,
                "modified": dateExportedIsoString,
                "headers": [],
                "params": [
                    {
                        "name": "__usr",
                        "value": "{{__usr}}",
                        "isPath": false
                    },
                    {
                        "name": "__agt",
                        "value": "{{__agt}}",
                        "isPath": false
                    }
                ],
                "body": {
                    "type": "json",
                    "raw": nunjucks.renderString(
                        readFileSync(join(__dirname.replace(`${sep}dist${sep}`, `${sep}src${sep}`), '..', './ddb-cq-model-templates/thunder-client-templates/dispatchAction_update.nunjucks')).toString(),
                        { __parent_typename: cqDataModel.Items[key]?.__meta.__parent_typename ?? key, __typename: key, __attributes: cqDataModel.Items[key].__attributes, action: 'patch' }),
                    "form": []
                },
                "tests": []
            }
        }),
        cqdActions$itemsQueryPatternRequests = [
            ...Object.keys(cqDataModel.Items).filter(key => key !== '__meta').map((key, index) => {
                const requests = []
                if (Array.isArray(globalSecondaryIndexesToCreate)) {
                    for (const dbIndexName of globalSecondaryIndexesToCreate.filter(gsi => gsi.IndexName).map(gsi => gsi.IndexName)) {
                        const [hashKeyName, rangeKeyName] = dbIndexName.split('-')
                        const queryNames: string[] = []
                        for (const [itemKey, attrs] of Object.entries(onlyWithGsiKeys(cqDataModel.Items[key].__attributes))) {
                            if (attrs.__gsiKeys?.includes(hashKeyName as GsiKey)) {
                                queryNames.push(`query:${key} by custom index (${itemKey}) ${dbIndexName}`)
                            }
                            if (attrs.__gsiKeys?.includes(rangeKeyName as GsiKey)) {
                                queryNames.push(`query:${key} by custom index ${dbIndexName} (${itemKey})`)
                            }
                        }
                        for (const queryBySomeKeys of queryNames) {
                            requests.push({
                                "_id": uuid(),
                                "colId": colId,
                                "containerId": cqdActions$itemsQueryBySystemKeysFolderIds.get(key),
                                "name": queryBySomeKeys,
                                "url": "localhost:5000/lambda/invoke/dispatch-action?__usr={{__usr}}&__agt={{__agt}}",
                                "method": "POST",
                                "sortNum": 10000,
                                "created": dateExportedIsoString,
                                "modified": dateExportedIsoString,
                                "headers": [],
                                "params": [
                                    {
                                        "name": "__usr",
                                        "value": "{{__usr}}",
                                        "isPath": false
                                    },
                                    {
                                        "name": "__agt",
                                        "value": "{{__agt}}",
                                        "isPath": false
                                    }
                                ],
                                "body": {
                                    "type": "json",
                                    "raw": nunjucks.renderString(
                                        readFileSync(join(__dirname.replace(`${sep}dist${sep}`, `${sep}src${sep}`), '..', './ddb-cq-model-templates/thunder-client-templates/queries/dispatchAction_queryBy_PK_from_table_OR_index_PayloadTemplate.string.nunjucks')).toString(),
                                        { rangeKeyType: (rangeKeyName ? rangeKeyName.startsWith('n') ? 'number' : 'string' : undefined), dbIndexName, hashKeyName, rangeKeyName, __parent_typename: cqDataModel.Items[key]?.__meta.__parent_typename ?? key, __typename: key, __attributes: cqDataModel.Items[key].__attributes }),
                                    "form": []
                                },
                                "tests": []
                            })
                        }
                    }
                }
                return requests
            }).reduce((accum, arr) => accum.concat(arr), []),
            ...Object.keys(cqDataModel.Items).filter(key => key !== '__meta').map((key, index) => {
                initialRequestsSortNum += (index + 1) * 10000
                return {
                    "_id": uuid(),
                    "colId": colId,
                    "containerId": cqdActions$itemsQueryFolderIds.get(key),
                    "name": `query:${key} in Table`,
                    "url": "localhost:5000/lambda/invoke/dispatch-action?__usr={{__usr}}&__agt={{__agt}}",
                    "method": "POST",
                    "sortNum": 10000,
                    "created": dateExportedIsoString,
                    "modified": dateExportedIsoString,
                    "headers": [],
                    "params": [
                        {
                            "name": "__usr",
                            "value": "{{__usr}}",
                            "isPath": false
                        },
                        {
                            "name": "__agt",
                            "value": "{{__agt}}",
                            "isPath": false
                        }
                    ],
                    "body": {
                        "type": "json",
                        "raw": nunjucks.renderString(
                            readFileSync(join(__dirname.replace(`${sep}dist${sep}`, `${sep}src${sep}`), '..', './ddb-cq-model-templates/thunder-client-templates/queries/dispatchAction_queryBy_PK_from_table_OR_index_PayloadTemplate.string.nunjucks')).toString(),
                            { hashKeyName: "HASH", rangeKeyName: "RANGE", __parent_typename: cqDataModel.Items[key]?.__meta.__parent_typename ?? key, __typename: key, __attributes: cqDataModel.Items[key].__attributes }),
                        "form": []
                    },
                    "tests": []
                }
            }),
            ...Object.keys(cqDataModel.Items).filter(key => key !== '__meta').map((key, index) => {
                initialRequestsSortNum += (index + 1) * 10000
                return {
                    "_id": uuid(),
                    "colId": colId,
                    "containerId": cqdActions$itemsQueryFolderIds.get(key),
                    "name": `SEARCH:${key} by auto-infering index`,
                    "url": "localhost:5000/lambda/invoke/dispatch-action?__usr={{__usr}}&__agt={{__agt}}",
                    "method": "POST",
                    "sortNum": 10000,
                    "created": dateExportedIsoString,
                    "modified": dateExportedIsoString,
                    "headers": [],
                    "params": [
                        {
                            "name": "__usr",
                            "value": "{{__usr}}",
                            "isPath": false
                        },
                        {
                            "name": "__agt",
                            "value": "{{__agt}}",
                            "isPath": false
                        }
                    ],
                    "body": {
                        "type": "json",
                        "raw": nunjucks.renderString(
                            readFileSync(join(__dirname.replace(`${sep}dist${sep}`, `${sep}src${sep}`), '..', './ddb-cq-model-templates/thunder-client-templates/queries/dispatchAction_search_by_auto_infering_index_PayloadTemplate.nunjucks')).toString(),
                            { __parent_typename: cqDataModel.Items[key]?.__meta.__parent_typename ?? key, __typename: key, __attributes: cqDataModel.Items[key].__attributes }),
                        "form": []
                    },
                    "tests": []
                }
            }),
            ...Object.keys(cqDataModel.Items).filter(key => key !== '__meta').map((key, index) => {
                initialRequestsSortNum += (index + 1) * 10000
                // should always be present, by definition but guard in any case
                if (globalSecondaryIndexesToCreate?.map(gsi => gsi.IndexName).includes('NSHARD-TITEM')) {
                    return {
                        "_id": uuid(),
                        "colId": colId,
                        "containerId": cqdActions$itemsQueryFolderIds.get(key),
                        "name": `query:${key} in NSHARD-TITEM`,
                        "url": "localhost:5000/lambda/invoke/dispatch-action?__usr={{__usr}}&__agt={{__agt}}",
                        "method": "POST",
                        "sortNum": 10000,
                        "created": dateExportedIsoString,
                        "modified": dateExportedIsoString,
                        "headers": [],
                        "params": [
                            {
                                "name": "__usr",
                                "value": "{{__usr}}",
                                "isPath": false
                            },
                            {
                                "name": "__agt",
                                "value": "{{__agt}}",
                                "isPath": false
                            }
                        ],
                        "body": {
                            "type": "json",
                            "raw": nunjucks.renderString(
                                readFileSync(join(__dirname.replace(`${sep}dist${sep}`, `${sep}src${sep}`), '..', './ddb-cq-model-templates/thunder-client-templates/queries/dispatchAction_queryBy_PK_from_table_OR_index_PayloadTemplate.string.nunjucks')).toString(),
                                { hashKeyName: "TITEM", dbIndexName: "TITEM", __parent_typename: cqDataModel.Items[key]?.__meta.__parent_typename ?? key, __typename: key, __attributes: cqDataModel.Items[key].__attributes }),
                            "form": []
                        },
                        "tests": []
                    }
                }
            })
        ],
        //#endregion for items
        //#region for commands
        cqdActions$commandsBatchGetItemRequests = Object.keys(cqDataModel.Commands).filter(key => key !== '__meta').map((key, index) => {
            initialRequestsSortNum += (index + 1) * 10000
            return {
                "_id": uuid(),
                "colId": colId,
                "containerId": cqdActions$itemsTopLevelFolderIds.get(key),
                "name": `get:${key}`,
                "url": "localhost:5000/lambda/invoke/dispatch-action?__usr={{__usr}}&__agt={{__agt}}",
                "method": "POST",
                "sortNum": 10000,
                "created": dateExportedIsoString,
                "modified": dateExportedIsoString,
                "headers": [],
                "params": [
                    {
                        "name": "__usr",
                        "value": "{{__usr}}",
                        "isPath": false
                    },
                    {
                        "name": "__agt",
                        "value": "{{__agt}}",
                        "isPath": false
                    }
                ],
                "body": {
                    "type": "json",
                    "raw": nunjucks.renderString(
                        readFileSync(join(__dirname.replace(`${sep}dist${sep}`, `${sep}src${sep}`), '..', './ddb-cq-model-templates/thunder-client-templates/dispatchAction_get.nunjucks')).toString(),
                        { __parent_typename: cqDataModel.Commands[key]?.__meta.__parent_typename ?? key, __typename: key, __attributes: cqDataModel.Commands[key].__attributes }),
                    "form": []
                },
                "tests": []
            }
        }),
        cqdActions$commandsBatchDeleteItemRequests = Object.keys(cqDataModel.Commands).filter(key => key !== '__meta').map((key, index) => {
            initialRequestsSortNum += (index + 1) * 10000
            return {
                "_id": uuid(),
                "colId": colId,
                "containerId": cqdActions$itemsTopLevelFolderIds.get(key),
                "name": `delete:${key}`,
                "url": "localhost:5000/lambda/invoke/dispatch-action?__usr={{__usr}}&__agt={{__agt}}",
                "method": "POST",
                "sortNum": 10000,
                "created": dateExportedIsoString,
                "modified": dateExportedIsoString,
                "headers": [],
                "params": [
                    {
                        "name": "__usr",
                        "value": "{{__usr}}",
                        "isPath": false
                    },
                    {
                        "name": "__agt",
                        "value": "{{__agt}}",
                        "isPath": false
                    }
                ],
                "body": {
                    "type": "json",
                    "raw": nunjucks.renderString(
                        readFileSync(join(__dirname.replace(`${sep}dist${sep}`, `${sep}src${sep}`), '..', './ddb-cq-model-templates/thunder-client-templates/dispatchAction_delete.nunjucks')).toString(),
                        { __parent_typename: cqDataModel.Commands[key]?.__meta.__parent_typename ?? key, __typename: key, __attributes: cqDataModel.Commands[key].__attributes }),
                    "form": []
                },
                "tests": []
            }
        }),
        cqdActions$commandsTransactPutItemRequests = Object.keys(cqDataModel.Commands).filter(key => key !== '__meta').map((key, index) => {
            initialRequestsSortNum += (index + 1) * 10000
            return {
                "_id": uuid(),
                "colId": colId,
                "containerId": cqdActions$itemsTopLevelFolderIds.get(key),
                "name": `create:${key}`,
                "url": "localhost:5000/lambda/invoke/dispatch-action?__usr={{__usr}}&__agt={{__agt}}",
                "method": "POST",
                "sortNum": 10000,
                "created": dateExportedIsoString,
                "modified": dateExportedIsoString,
                "headers": [],
                "params": [
                    {
                        "name": "__usr",
                        "value": "{{__usr}}",
                        "isPath": false
                    },
                    {
                        "name": "__agt",
                        "value": "{{__agt}}",
                        "isPath": false
                    }
                ],
                "body": {
                    "type": "json",
                    "raw": nunjucks.renderString(
                        readFileSync(join(__dirname.replace(`${sep}dist${sep}`, `${sep}src${sep}`), '..', './ddb-cq-model-templates/thunder-client-templates/dispatchAction_create.nunjucks')).toString(),
                        { __parent_typename: cqDataModel.Commands[key]?.__meta.__parent_typename ?? key, __typename: key, __attributes: cqDataModel.Commands[key].__attributes }),
                    "form": []
                },
                "tests": []
            }
        }),
        cqdActions$commandsStartItemRequests = Object.keys(cqDataModel.Commands).filter(key => key !== '__meta').map((key, index) => {
            initialRequestsSortNum += (index + 1) * 10000
            return {
                "_id": uuid(),
                "colId": colId,
                "containerId": cqdActions$itemsTopLevelFolderIds.get(key),
                "name": `start:${key}`,
                "url": "localhost:5000/lambda/invoke/dispatch-action?__usr={{__usr}}&__agt={{__agt}}",
                "method": "POST",
                "sortNum": 10000,
                "created": dateExportedIsoString,
                "modified": dateExportedIsoString,
                "headers": [],
                "params": [
                    {
                        "name": "__usr",
                        "value": "{{__usr}}",
                        "isPath": false
                    },
                    {
                        "name": "__agt",
                        "value": "{{__agt}}",
                        "isPath": false
                    }
                ],
                "body": {
                    "type": "json",
                    "raw": nunjucks.renderString(
                        readFileSync(join(__dirname.replace(`${sep}dist${sep}`, `${sep}src${sep}`), '..', './ddb-cq-model-templates/thunder-client-templates/dispatchAction_start.nunjucks')).toString(),
                        { __parent_typename: cqDataModel.Commands[key]?.__meta.__parent_typename ?? key, __typename: key, __attributes: cqDataModel.Commands[key].__attributes }),
                    "form": []
                },
                "tests": []
            }
        }),
        cqdActions$commandsTransactUpdateItemRequests = Object.keys(cqDataModel.Commands).filter(key => key !== '__meta').map((key, index) => {
            initialRequestsSortNum += (index + 1) * 10000
            return {
                "_id": uuid(),
                "colId": colId,
                "containerId": cqdActions$itemsTopLevelFolderIds.get(key),
                "name": `update:${key}`,
                "url": "localhost:5000/lambda/invoke/dispatch-action?__usr={{__usr}}&__agt={{__agt}}",
                "method": "POST",
                "sortNum": 10000,
                "created": dateExportedIsoString,
                "modified": dateExportedIsoString,
                "headers": [],
                "params": [
                    {
                        "name": "__usr",
                        "value": "{{__usr}}",
                        "isPath": false
                    },
                    {
                        "name": "__agt",
                        "value": "{{__agt}}",
                        "isPath": false
                    }
                ],
                "body": {
                    "type": "json",
                    "raw": nunjucks.renderString(
                        readFileSync(join(__dirname.replace(`${sep}dist${sep}`, `${sep}src${sep}`), '..', './ddb-cq-model-templates/thunder-client-templates/dispatchAction_update.nunjucks')).toString(),
                        { __parent_typename: cqDataModel.Commands[key]?.__meta.__parent_typename ?? key, __typename: key, __attributes: cqDataModel.Commands[key].__attributes, action: 'update' }),
                    "form": []
                },
                "tests": []
            }
        }),
        cqdActions$commandsPatchRequests = Object.keys(cqDataModel.Commands).filter(key => key !== '__meta').map((key, index) => {
            initialRequestsSortNum += (index + 1) * 10000
            return {
                "_id": uuid(),
                "colId": colId,
                "containerId": cqdActions$itemsTopLevelFolderIds.get(key),
                "name": `patch:${key}`,
                "url": "localhost:5000/lambda/invoke/dispatch-action?__usr={{__usr}}&__agt={{__agt}}",
                "method": "POST",
                "sortNum": 10000,
                "created": dateExportedIsoString,
                "modified": dateExportedIsoString,
                "headers": [],
                "params": [
                    {
                        "name": "__usr",
                        "value": "{{__usr}}",
                        "isPath": false
                    },
                    {
                        "name": "__agt",
                        "value": "{{__agt}}",
                        "isPath": false
                    }
                ],
                "body": {
                    "type": "json",
                    "raw": nunjucks.renderString(
                        readFileSync(join(__dirname.replace(`${sep}dist${sep}`, `${sep}src${sep}`), '..', './ddb-cq-model-templates/thunder-client-templates/dispatchAction_update.nunjucks')).toString(),
                        { __parent_typename: cqDataModel.Commands[key]?.__meta.__parent_typename ?? key, __typename: key, __attributes: cqDataModel.Commands[key].__attributes, action: 'patch' }),
                    "form": []
                },
                "tests": []
            }
        }),
        cqdActions$commandsQueryPatternRequests = [
            ...Object.keys(cqDataModel.Commands).filter(key => key !== '__meta').map((key, index) => {
                const requests = []
                if (Array.isArray(globalSecondaryIndexesToCreate)) {
                    for (const dbIndexName of globalSecondaryIndexesToCreate.filter(gsi => gsi.IndexName !== 'NSHARD-TITEM').map(gsi => gsi.IndexName)) {
                        const [hashKeyName, rangeKeyName] = dbIndexName.split('-')
                        const queryNames: string[] = []
                        for (const [itemKey, attrs] of Object.entries(onlyWithGsiKeys(cqDataModel.Commands[key].__attributes))) {
                            if (attrs.__gsiKeys?.includes(hashKeyName as GsiKey)) {
                                queryNames.push(`query:${key} by custom index (${itemKey}) ${dbIndexName}`)
                            }
                            if (attrs.__gsiKeys?.includes(rangeKeyName as GsiKey)) {
                                queryNames.push(`query:${key} by custom index ${dbIndexName} (${itemKey})`)
                            }
                        }
                        for (const queryBySomeKeys of queryNames) {
                            requests.push({
                                "_id": uuid(),
                                "colId": colId,
                                "containerId": cqdActions$itemsQueryBySystemKeysFolderIds.get(key),
                                "name": queryBySomeKeys,
                                "url": "localhost:5000/lambda/invoke/dispatch-action?__usr={{__usr}}&__agt={{__agt}}",
                                "method": "POST",
                                "sortNum": 10000,
                                "created": dateExportedIsoString,
                                "modified": dateExportedIsoString,
                                "headers": [],
                                "params": [
                                    {
                                        "name": "__usr",
                                        "value": "{{__usr}}",
                                        "isPath": false
                                    },
                                    {
                                        "name": "__agt",
                                        "value": "{{__agt}}",
                                        "isPath": false
                                    }
                                ],
                                "body": {
                                    "type": "json",
                                    "raw": nunjucks.renderString(
                                        readFileSync(join(__dirname.replace(`${sep}dist${sep}`, `${sep}src${sep}`), '..', './ddb-cq-model-templates/thunder-client-templates/queries/dispatchAction_queryBy_PK_from_table_OR_index_PayloadTemplate.string.nunjucks')).toString(),
                                        { rangeKeyType: (rangeKeyName ? rangeKeyName.startsWith('n') ? 'number' : 'string' : undefined), dbIndexName, hashKeyName, rangeKeyName, __parent_typename: cqDataModel.Commands[key]?.__meta.__parent_typename ?? key, __typename: key, __attributes: cqDataModel.Commands[key].__attributes }),
                                    "form": []
                                },
                                "tests": []
                            })
                        }
                    }
                }
                return requests
            }).reduce((accum, arr) => accum.concat(arr), []),
            ...Object.keys(cqDataModel.Commands).filter(key => key !== '__meta').map((key, index) => {
                initialRequestsSortNum += (index + 1) * 10000
                return {
                    "_id": uuid(),
                    "colId": colId,
                    "containerId": cqdActions$itemsQueryFolderIds.get(key),
                    "name": `query:${key} in Table`,
                    "url": "localhost:5000/lambda/invoke/dispatch-action?__usr={{__usr}}&__agt={{__agt}}",
                    "method": "POST",
                    "sortNum": 10000,
                    "created": dateExportedIsoString,
                    "modified": dateExportedIsoString,
                    "headers": [],
                    "params": [
                        {
                            "name": "__usr",
                            "value": "{{__usr}}",
                            "isPath": false
                        },
                        {
                            "name": "__agt",
                            "value": "{{__agt}}",
                            "isPath": false
                        }
                    ],
                    "body": {
                        "type": "json",
                        "raw": nunjucks.renderString(
                            readFileSync(join(__dirname.replace(`${sep}dist${sep}`, `${sep}src${sep}`), '..', './ddb-cq-model-templates/thunder-client-templates/queries/dispatchAction_queryBy_PK_from_table_OR_index_PayloadTemplate.string.nunjucks')).toString(),
                            { hashKeyName: "HASH", rangeKeyName: "RANGE", __parent_typename: cqDataModel.Commands[key]?.__meta.__parent_typename ?? key, __typename: key, __attributes: cqDataModel.Commands[key].__attributes }),
                        "form": []
                    },
                    "tests": []
                }
            }),
            ...Object.keys(cqDataModel.Commands).filter(key => key !== '__meta').map((key, index) => {
                initialRequestsSortNum += (index + 1) * 10000
                return {
                    "_id": uuid(),
                    "colId": colId,
                    "containerId": cqdActions$itemsQueryFolderIds.get(key),
                    "name": `SEARCH:${key} by auto-infering index`,
                    "url": "localhost:5000/lambda/invoke/dispatch-action?__usr={{__usr}}&__agt={{__agt}}",
                    "method": "POST",
                    "sortNum": 10000,
                    "created": dateExportedIsoString,
                    "modified": dateExportedIsoString,
                    "headers": [],
                    "params": [
                        {
                            "name": "__usr",
                            "value": "{{__usr}}",
                            "isPath": false
                        },
                        {
                            "name": "__agt",
                            "value": "{{__agt}}",
                            "isPath": false
                        }
                    ],
                    "body": {
                        "type": "json",
                        "raw": nunjucks.renderString(
                            readFileSync(join(__dirname.replace(`${sep}dist${sep}`, `${sep}src${sep}`), '..', './ddb-cq-model-templates/thunder-client-templates/queries/dispatchAction_search_by_auto_infering_index_PayloadTemplate.nunjucks')).toString(),
                            { __parent_typename: cqDataModel.Commands[key]?.__meta.__parent_typename ?? key, __typename: key, __attributes: cqDataModel.Commands[key].__attributes }),
                        "form": []
                    },
                    "tests": []
                }
            }),
            ...Object.keys(cqDataModel.Commands).filter(key => key !== '__meta').map((key, index) => {
                initialRequestsSortNum += (index + 1) * 10000
                // should always be present, by definition but guard in any case
                if (globalSecondaryIndexesToCreate?.map(gsi => gsi.IndexName).includes('NSHARD-TITEM')) {
                    return {
                        "_id": uuid(),
                        "colId": colId,
                        "containerId": cqdActions$itemsQueryFolderIds.get(key),
                        "name": `query:${key} in NSHARD-TITEM`,
                        "url": "localhost:5000/lambda/invoke/dispatch-action?__usr={{__usr}}&__agt={{__agt}}",
                        "method": "POST",
                        "sortNum": 10000,
                        "created": dateExportedIsoString,
                        "modified": dateExportedIsoString,
                        "headers": [],
                        "params": [
                            {
                                "name": "__usr",
                                "value": "{{__usr}}",
                                "isPath": false
                            },
                            {
                                "name": "__agt",
                                "value": "{{__agt}}",
                                "isPath": false
                            }
                        ],
                        "body": {
                            "type": "json",
                            "raw": nunjucks.renderString(
                                readFileSync(join(__dirname.replace(`${sep}dist${sep}`, `${sep}src${sep}`), '..', './ddb-cq-model-templates/thunder-client-templates/queries/dispatchAction_queryBy_PK_from_table_OR_index_PayloadTemplate.string.nunjucks')).toString(),
                                { hashKeyName: "TITEM", dbIndexName: "TITEM", __parent_typename: cqDataModel.Commands[key]?.__meta.__parent_typename ?? key, __typename: key, __attributes: cqDataModel.Commands[key].__attributes }),
                            "form": []
                        },
                        "tests": []
                    }
                }
            })
        ],
        //#endregion for commands
        //#region for queries
        cqdActions$queriesBatchGetItemRequests = Object.keys(cqDataModel.Queries).filter(key => key !== '__meta').map((key, index) => {
            initialRequestsSortNum += (index + 1) * 10000
            return {
                "_id": uuid(),
                "colId": colId,
                "containerId": cqdActions$itemsTopLevelFolderIds.get(key),
                "name": `get:${key}`,
                "url": "localhost:5000/lambda/invoke/dispatch-action?__usr={{__usr}}&__agt={{__agt}}",
                "method": "POST",
                "sortNum": 10000,
                "created": dateExportedIsoString,
                "modified": dateExportedIsoString,
                "headers": [],
                "params": [
                    {
                        "name": "__usr",
                        "value": "{{__usr}}",
                        "isPath": false
                    },
                    {
                        "name": "__agt",
                        "value": "{{__agt}}",
                        "isPath": false
                    }
                ],
                "body": {
                    "type": "json",
                    "raw": nunjucks.renderString(
                        readFileSync(join(__dirname.replace(`${sep}dist${sep}`, `${sep}src${sep}`), '..', './ddb-cq-model-templates/thunder-client-templates/dispatchAction_get.nunjucks')).toString(),
                        { __parent_typename: cqDataModel.Queries[key]?.__meta.__parent_typename ?? key, __typename: key, __attributes: cqDataModel.Queries[key].__attributes }),
                    "form": []
                },
                "tests": []
            }
        }),
        cqdActions$queriesBatchDeleteItemRequests = Object.keys(cqDataModel.Queries).filter(key => key !== '__meta').map((key, index) => {
            initialRequestsSortNum += (index + 1) * 10000
            return {
                "_id": uuid(),
                "colId": colId,
                "containerId": cqdActions$itemsTopLevelFolderIds.get(key),
                "name": `delete:${key}`,
                "url": "localhost:5000/lambda/invoke/dispatch-action?__usr={{__usr}}&__agt={{__agt}}",
                "method": "POST",
                "sortNum": 10000,
                "created": dateExportedIsoString,
                "modified": dateExportedIsoString,
                "headers": [],
                "params": [
                    {
                        "name": "__usr",
                        "value": "{{__usr}}",
                        "isPath": false
                    },
                    {
                        "name": "__agt",
                        "value": "{{__agt}}",
                        "isPath": false
                    }
                ],
                "body": {
                    "type": "json",
                    "raw": nunjucks.renderString(
                        readFileSync(join(__dirname.replace(`${sep}dist${sep}`, `${sep}src${sep}`), '..', './ddb-cq-model-templates/thunder-client-templates/dispatchAction_delete.nunjucks')).toString(),
                        { __parent_typename: cqDataModel.Queries[key]?.__meta.__parent_typename ?? key, __typename: key, __attributes: cqDataModel.Queries[key].__attributes }),
                    "form": []
                },
                "tests": []
            }
        }),
        cqdActions$queriesTransactPutItemRequests = Object.keys(cqDataModel.Queries).filter(key => key !== '__meta').map((key, index) => {
            initialRequestsSortNum += (index + 1) * 10000
            return {
                "_id": uuid(),
                "colId": colId,
                "containerId": cqdActions$itemsTopLevelFolderIds.get(key),
                "name": `create:${key}`,
                "url": "localhost:5000/lambda/invoke/dispatch-action?__usr={{__usr}}&__agt={{__agt}}",
                "method": "POST",
                "sortNum": 10000,
                "created": dateExportedIsoString,
                "modified": dateExportedIsoString,
                "headers": [],
                "params": [
                    {
                        "name": "__usr",
                        "value": "{{__usr}}",
                        "isPath": false
                    },
                    {
                        "name": "__agt",
                        "value": "{{__agt}}",
                        "isPath": false
                    }
                ],
                "body": {
                    "type": "json",
                    "raw": nunjucks.renderString(
                        readFileSync(join(__dirname.replace(`${sep}dist${sep}`, `${sep}src${sep}`), '..', './ddb-cq-model-templates/thunder-client-templates/dispatchAction_create.nunjucks')).toString(),
                        { __parent_typename: cqDataModel.Queries[key]?.__meta.__parent_typename ?? key, __typename: key, __attributes: cqDataModel.Queries[key].__attributes }),
                    "form": []
                },
                "tests": []
            }
        }),
        cqdActions$queriesTransactUpdateItemRequests = Object.keys(cqDataModel.Queries).filter(key => key !== '__meta').map((key, index) => {
            initialRequestsSortNum += (index + 1) * 10000
            return {
                "_id": uuid(),
                "colId": colId,
                "containerId": cqdActions$itemsTopLevelFolderIds.get(key),
                "name": `update:${key}`,
                "url": "localhost:5000/lambda/invoke/dispatch-action?__usr={{__usr}}&__agt={{__agt}}",
                "method": "POST",
                "sortNum": 10000,
                "created": dateExportedIsoString,
                "modified": dateExportedIsoString,
                "headers": [],
                "params": [
                    {
                        "name": "__usr",
                        "value": "{{__usr}}",
                        "isPath": false
                    },
                    {
                        "name": "__agt",
                        "value": "{{__agt}}",
                        "isPath": false
                    }
                ],
                "body": {
                    "type": "json",
                    "raw": nunjucks.renderString(
                        readFileSync(join(__dirname.replace(`${sep}dist${sep}`, `${sep}src${sep}`), '..', './ddb-cq-model-templates/thunder-client-templates/dispatchAction_update.nunjucks')).toString(),
                        { __parent_typename: cqDataModel.Queries[key]?.__meta.__parent_typename ?? key, __typename: key, __attributes: cqDataModel.Queries[key].__attributes, action: 'update' }),
                    "form": []
                },
                "tests": []
            }
        }),
        cqdActions$queriesPatchRequests = Object.keys(cqDataModel.Queries).filter(key => key !== '__meta').map((key, index) => {
            initialRequestsSortNum += (index + 1) * 10000
            return {
                "_id": uuid(),
                "colId": colId,
                "containerId": cqdActions$itemsTopLevelFolderIds.get(key),
                "name": `patch:${key}`,
                "url": "localhost:5000/lambda/invoke/dispatch-action?__usr={{__usr}}&__agt={{__agt}}",
                "method": "POST",
                "sortNum": 10000,
                "created": dateExportedIsoString,
                "modified": dateExportedIsoString,
                "headers": [],
                "params": [
                    {
                        "name": "__usr",
                        "value": "{{__usr}}",
                        "isPath": false
                    },
                    {
                        "name": "__agt",
                        "value": "{{__agt}}",
                        "isPath": false
                    }
                ],
                "body": {
                    "type": "json",
                    "raw": nunjucks.renderString(
                        readFileSync(join(__dirname.replace(`${sep}dist${sep}`, `${sep}src${sep}`), '..', './ddb-cq-model-templates/thunder-client-templates/dispatchAction_update.nunjucks')).toString(),
                        { __parent_typename: cqDataModel.Queries[key]?.__meta.__parent_typename ?? key, __typename: key, __attributes: cqDataModel.Queries[key].__attributes, action: 'patch' }),
                    "form": []
                },
                "tests": []
            }
        }),
        cqdActions$queriesQueryPatternRequests = [
            ...Object.keys(cqDataModel.Queries).filter(key => key !== '__meta').map((key, index) => {
                const requests = []
                if (Array.isArray(globalSecondaryIndexesToCreate)) {
                    for (const dbIndexName of globalSecondaryIndexesToCreate.filter(gsi => gsi.IndexName !== 'NSHARD-TITEM').map(gsi=>gsi.IndexName)) {
                        const [hashKeyName, rangeKeyName] = dbIndexName.split('-')
                        const queryNames: string[] = []
                        for (const [itemKey, attrs] of Object.entries(onlyWithGsiKeys(cqDataModel.Queries[key].__attributes))) {
                            if (attrs.__gsiKeys?.includes(hashKeyName as GsiKey)) {
                                queryNames.push(`query:${key} by custom index (${itemKey}) ${dbIndexName}`)
                            }
                            if (attrs.__gsiKeys?.includes(rangeKeyName as GsiKey)) {
                                queryNames.push(`query:${key} by custom index ${dbIndexName} (${itemKey})`)
                            }
                        }
                        for (const queryBySomeKeys of queryNames) {
                            requests.push({
                                "_id": uuid(),
                                "colId": colId,
                                "containerId": cqdActions$itemsQueryBySystemKeysFolderIds.get(key),
                                "name": queryBySomeKeys,
                                "url": "localhost:5000/lambda/invoke/dispatch-action?__usr={{__usr}}&__agt={{__agt}}",
                                "method": "POST",
                                "sortNum": 10000,
                                "created": dateExportedIsoString,
                                "modified": dateExportedIsoString,
                                "headers": [],
                                "params": [
                                    {
                                        "name": "__usr",
                                        "value": "{{__usr}}",
                                        "isPath": false
                                    },
                                    {
                                        "name": "__agt",
                                        "value": "{{__agt}}",
                                        "isPath": false
                                    }
                                ],
                                "body": {
                                    "type": "json",
                                    "raw": nunjucks.renderString(
                                        readFileSync(join(__dirname.replace(`${sep}dist${sep}`, `${sep}src${sep}`), '..', './ddb-cq-model-templates/thunder-client-templates/queries/dispatchAction_queryBy_PK_from_table_OR_index_PayloadTemplate.string.nunjucks')).toString(),
                                        { rangeKeyType: (rangeKeyName ? rangeKeyName.startsWith('n') ? 'number' : 'string' : undefined), dbIndexName, hashKeyName, rangeKeyName, __parent_typename: cqDataModel.Queries[key]?.__meta.__parent_typename ?? key, __typename: key, __attributes: cqDataModel.Queries[key].__attributes }),
                                    "form": []
                                },
                                "tests": []
                            })
                        }
                    }
                }
                return requests
            }).reduce((accum, arr) => accum.concat(arr), []),
            ...Object.keys(cqDataModel.Queries).filter(key => key !== '__meta').map((key, index) => {
                initialRequestsSortNum += (index + 1) * 10000
                return {
                    "_id": uuid(),
                    "colId": colId,
                    "containerId": cqdActions$itemsQueryFolderIds.get(key),
                    "name": `query:${key} in Table`,
                    "url": "localhost:5000/lambda/invoke/dispatch-action?__usr={{__usr}}&__agt={{__agt}}",
                    "method": "POST",
                    "sortNum": 10000,
                    "created": dateExportedIsoString,
                    "modified": dateExportedIsoString,
                    "headers": [],
                    "params": [
                        {
                            "name": "__usr",
                            "value": "{{__usr}}",
                            "isPath": false
                        },
                        {
                            "name": "__agt",
                            "value": "{{__agt}}",
                            "isPath": false
                        }
                    ],
                    "body": {
                        "type": "json",
                        "raw": nunjucks.renderString(
                            readFileSync(join(__dirname.replace(`${sep}dist${sep}`, `${sep}src${sep}`), '..', './ddb-cq-model-templates/thunder-client-templates/queries/dispatchAction_queryBy_PK_from_table_OR_index_PayloadTemplate.string.nunjucks')).toString(),
                            { hashKeyName: "HASH", rangeKeyName: "RANGE", __parent_typename: cqDataModel.Queries[key]?.__meta.__parent_typename ?? key, __typename: key, __attributes: cqDataModel.Queries[key].__attributes }),
                        "form": []
                    },
                    "tests": []
                }
            }),
            ...Object.keys(cqDataModel.Queries).filter(key => key !== '__meta').map((key, index) => {
                initialRequestsSortNum += (index + 1) * 10000
                return {
                    "_id": uuid(),
                    "colId": colId,
                    "containerId": cqdActions$itemsQueryFolderIds.get(key),
                    "name": `SEARCH:${key} by auto-infering index`,
                    "url": "localhost:5000/lambda/invoke/dispatch-action?__usr={{__usr}}&__agt={{__agt}}",
                    "method": "POST",
                    "sortNum": 10000,
                    "created": dateExportedIsoString,
                    "modified": dateExportedIsoString,
                    "headers": [],
                    "params": [
                        {
                            "name": "__usr",
                            "value": "{{__usr}}",
                            "isPath": false
                        },
                        {
                            "name": "__agt",
                            "value": "{{__agt}}",
                            "isPath": false
                        }
                    ],
                    "body": {
                        "type": "json",
                        "raw": nunjucks.renderString(
                            readFileSync(join(__dirname.replace(`${sep}dist${sep}`, `${sep}src${sep}`), '..', './ddb-cq-model-templates/thunder-client-templates/queries/dispatchAction_search_by_auto_infering_index_PayloadTemplate.nunjucks')).toString(),
                            { __parent_typename: cqDataModel.Queries[key]?.__meta.__parent_typename ?? key, __typename: key, __attributes: cqDataModel.Queries[key].__attributes }),
                        "form": []
                    },
                    "tests": []
                }
            }),
            ...Object.keys(cqDataModel.Queries).filter(key => key !== '__meta').map((key, index) => {
                initialRequestsSortNum += (index + 1) * 10000
                // should always be present, by definition but guard in any case
                if (globalSecondaryIndexesToCreate?.map(gsi => gsi.IndexName).includes('NSHARD-TITEM')) {
                    return {
                        "_id": uuid(),
                        "colId": colId,
                        "containerId": cqdActions$itemsQueryFolderIds.get(key),
                        "name": `query:${key} in TITEM`,
                        "url": "localhost:5000/lambda/invoke/dispatch-action?__usr={{__usr}}&__agt={{__agt}}",
                        "method": "POST",
                        "sortNum": 10000,
                        "created": dateExportedIsoString,
                        "modified": dateExportedIsoString,
                        "headers": [],
                        "params": [
                            {
                                "name": "__usr",
                                "value": "{{__usr}}",
                                "isPath": false
                            },
                            {
                                "name": "__agt",
                                "value": "{{__agt}}",
                                "isPath": false
                            }
                        ],
                        "body": {
                            "type": "json",
                            "raw": nunjucks.renderString(
                                readFileSync(join(__dirname.replace(`${sep}dist${sep}`, `${sep}src${sep}`), '..', './ddb-cq-model-templates/thunder-client-templates/queries/dispatchAction_queryBy_PK_from_table_OR_index_PayloadTemplate.string.nunjucks')).toString(),
                                { hashKeyName: "TITEM", dbIndexName: "TITEM", __parent_typename: cqDataModel.Queries[key]?.__meta.__parent_typename ?? key, __typename: key, __attributes: cqDataModel.Queries[key].__attributes }),
                            "form": []
                        },
                        "tests": []
                    }
                }
            })
        ];
    //#endregion for queries
    //#endregion



    const thunderCollectionTemlateData: any = {
        "client": "Thunder Client",
        "collectionName": collectionName,
        "dateExported": dateExportedIsoString,
        "version": "1.1",
        "folders": [
            {
                "_id": ddb_actions_folder_guid,
                "name": "ddb-actions",
                "containerId": "",
                "created": dateExportedIsoString,
                "sortNum": initialFolderSortCount
            },
            {
                "_id": cqd_actions_folder_guid,
                "name": "cqd-actions",
                "containerId": "",
                "created": dateExportedIsoString,
                "sortNum": initialFolderSortCount
            },
            {
                "_id": cqd_actions_$_items_folder_guid,
                "name": "items",
                "containerId": cqd_actions_folder_guid,
                "created": dateExportedIsoString,
                "sortNum": initialFolderSortCount
            },
            {
                "_id": cqd_actions_$_commands_folder_guid,
                "name": "commands",
                "containerId": cqd_actions_folder_guid,
                "created": dateExportedIsoString,
                "sortNum": initialFolderSortCount
            },
            {
                "_id": cqd_actions_$_queries_folder_guid,
                "name": "queries",
                "containerId": cqd_actions_folder_guid,
                "created": dateExportedIsoString,
                "sortNum": initialFolderSortCount
            }
        ],
        "requests": []
    }

    const genericDdbBatchGetItem = {
        "_id": uuid(),
        "colId": colId,
        "containerId": ddb_actions_folder_guid,
        "name": "ddb-actions:generic:ddbBatchGetItem",
        "url": "localhost:5000/lambda/invoke/ddb-actions/ddbBatchGetItem?__usr={{__usr}}&__agt={{__agt}}",
        "method": "POST",
        "sortNum": 10000,
        "created": dateExportedIsoString,
        "modified": dateExportedIsoString,
        "headers": [],
        "params": [
            {
                "name": "__usr",
                "value": "{{__usr}}",
                "isPath": false
            },
            {
                "name": "__agt",
                "value": "{{__agt}}",
                "isPath": false
            }
        ],
        "body": {
            "type": "json",
            "raw": "{\\n  \\\"pks\\\": [\\n    {\\n      \\\"HASH\\\": \\\"{{parent_type}}|{{parent_guid}}\\\",\\n      \\\"RANGE\\\": \\\"v_0|{{item_type}}|{{item_guid}}\\\"\\n    }\\n  ],\\n  \\\"loadPeersInput\\\": {\\n        \\\"loadPeersLevel\\\": 1,\\n        \\\"peersPropsToLoad\\\": [\\\"model\\\"],\\n        \\\"projectionExpression\\\": \\\"code,model\\\"\\n    }\\n}",
            "form": []
        },
        "tests": []
    };
    const genericDdbTransactDeleteItem = {
        "_id": uuid(),
        "colId": colId,
        "containerId": ddb_actions_folder_guid,
        "name": "ddb-actions:generic:ddbTransactDeleteItem",
        "url": "localhost:5000/lambda/invoke/ddb-actions/ddbTransactDeleteItem?__usr={{__usr}}&__agt={{__agt}}",
        "method": "POST",
        "sortNum": 20000,
        "created": dateExportedIsoString,
        "modified": dateExportedIsoString,
        "headers": [],
        "params": [
            {
                "name": "__usr",
                "value": "{{__usr}}",
                "isPath": false
            },
            {
                "name": "__agt",
                "value": "{{__agt}}",
                "isPath": false
            }
        ],
        "body": {
            "type": "json",
            "raw": "[{\\n  \\\"HASH\\\":\\\"{{parent_type}}|{{parent_guid}}\\\",\\n  \\\"RANGE\\\":\\\"v_0|{{item_type}}|{{item_guid}}\\\",\\n  \\\"rev\\\": {{rev}}\\n}]",
            "form": []
        },
        "tests": []
    };
    const genericDdbTestData = {
        "_id": uuid(),
        "colId": colId,
        "containerId": ddb_actions_folder_guid,
        "name": "ddb-actions:generic:GEN TEST DATA",
        "url": "localhost:5000/lambda/invoke/generate-testdata/airtours-test-data?__usr={{__usr}}&__agt={{__agt}}",
        "method": "POST",
        "sortNum": 10000,
        "created": dateExportedIsoString,
        "modified": dateExportedIsoString,
        "headers": [],
        "params": [
            {
                "name": "__usr",
                "value": "{{__usr}}",
                "isPath": false
            },
            {
                "name": "__agt",
                "value": "{{__agt}}",
                "isPath": false
            }
        ],
        "body": {
            "type": "json",
            "raw": "{}",
            "form": []
        },
        "tests": []
    };

    const ddb_apimetadataRequest = {
        "_id": uuid(),
        "colId": colId,
        "name": "GETMETADATA",
        "url": "localhost:5000/lambda/invoke/apimetadata?__usr={{__usr}}&__agt={{__agt}}",
        "method": "POST",
        "sortNum": 10000,
        "created": dateExportedIsoString,
        "modified": dateExportedIsoString,
        "headers": [],
        "params": [
            {
                "name": "__usr",
                "value": "{{__usr}}",
                "isPath": false
            },
            {
                "name": "__agt",
                "value": "{{__agt}}",
                "isPath": false
            }
        ],
        "body": {
            "type": "json",
            "raw": "{\\n  \\\"pks\\\": [\\n    {\\n      \\\"HASH\\\": \\\"{{parent_type}}|{{parent_guid}}\\\",\\n      \\\"RANGE\\\": \\\"v_0|{{item_type}}|{{item_guid}}\\\"\\n    }\\n  ],\\n  \\\"loadPeersInput\\\": {\\n        \\\"loadPeersLevel\\\": 1,\\n        \\\"peersPropsToLoad\\\": [\\\"model\\\"],\\n        \\\"projectionExpression\\\": \\\"code,model\\\"\\n    }\\n}",
            "form": []
        },
        "tests": []
    };

    nunjucksEnv.addGlobal('guid', (): string => uuid());

    thunderCollectionTemlateData.requests.push(genericDdbBatchGetItem)
    thunderCollectionTemlateData.requests.push(genericDdbTransactDeleteItem)
    thunderCollectionTemlateData.requests.push(genericDdbTestData)
    thunderCollectionTemlateData.requests.push(ddb_apimetadataRequest)

    thunderCollectionTemlateData.folders = thunderCollectionTemlateData.folders.concat(itemsFolders)
    thunderCollectionTemlateData.requests = thunderCollectionTemlateData.requests
        //#region ddb-actions    
        .concat(ddbActions$itemsBatchGetItemRequests)
        .concat(ddbActions$itemsBatchDeleteItemRequests)
        .concat(ddbActions$itemsTransactUpdateItemRequests)
        .concat(ddbActions$itemsTransactPutItemRequests)
        .concat(ddbActions$patchItemRequests)
        .concat(ddbActions$itemsQueryPatternRequests)
        //#endregion ddb-acitons
        //#region cqd-actions    
        // for items
        .concat(cqdActions$itemsBatchGetItemRequests)
        .concat(cqdActions$itemsBatchDeleteItemRequests)
        .concat(cqdActions$itemsTransactUpdateItemRequests)
        .concat(cqdActions$itemsTransactPutItemRequests)
        .concat(cqdActions$patchItemRequests)
        .concat(cqdActions$itemsQueryPatternRequests)
        // for commmands
        .concat(cqdActions$commandsBatchGetItemRequests)
        .concat(cqdActions$commandsBatchDeleteItemRequests)
        .concat(cqdActions$commandsTransactUpdateItemRequests)
        .concat(cqdActions$commandsTransactPutItemRequests)
        .concat(cqdActions$commandsStartItemRequests)
        .concat(cqdActions$commandsPatchRequests)
        .concat(cqdActions$commandsQueryPatternRequests)
        // for queries
        .concat(cqdActions$queriesBatchGetItemRequests)
        .concat(cqdActions$queriesBatchDeleteItemRequests)
        .concat(cqdActions$queriesTransactUpdateItemRequests)
        .concat(cqdActions$queriesTransactPutItemRequests)
        .concat(cqdActions$queriesPatchRequests)
        .concat(cqdActions$queriesQueryPatternRequests)
    //#endregion cqd-actions

    await writeFile(
        join(dataModelFilesOutDir, `thunder_client_${collectionName}_collection.json`),
        nunjucks.renderString(
            readFileSync(join(__dirname.replace(`${sep}dist${sep}`, `${sep}src${sep}`), '..', './ddb-cq-model-templates/thunder-client-templates/thunderCollectionTemplate.nunjucks')).toString(),
            thunderCollectionTemlateData));
}