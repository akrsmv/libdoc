import { uuid } from "@incta/common-utils";
import { DataModelObject, GSIDefinition, GsiKey, INestedDataModelObject } from "../interfaces/DataModel";
import * as nunjucks from 'nunjucks'
import { writeFile } from "fs/promises";
import { join, sep } from "path";
import { readFileSync } from "fs";
import * as pluralize from "pluralize";
import { except_system_fields, except_typename } from "../reservedWords";

export const gnerateThunderCientRequestsCollection = async (itemsModel: { [x: string]: DataModelObject }, collectionName: string, dataModelFilesOutDir: string, globalSecondaryIndexesToCreate: GSIDefinition[]) => {
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
    nunjucksEnv.addFilter('withoutMeta', withoutMeta);
    nunjucksEnv.addFilter('except_system_fields', except_system_fields)
    nunjucksEnv.addFilter('except_typename', except_typename)
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
        itemsTopLevelFolderIds = Object.keys(itemsModel).filter(key => key !== '__meta').reduce((accum, key) => {
            accum.set(key, uuid());
            return accum
        }, new Map<string, string>()),
        itemsQueryFolderIds = Object.keys(itemsModel).filter(key => key !== '__meta').reduce((accum, key) => {
            accum.set(key, uuid());
            return accum
        }, new Map<string, string>()),
        itemsQueryBySystemKeysFolderIds = Object.keys(itemsModel).filter(key => key !== '__meta').reduce((accum, key) => {
            accum.set(key, uuid());
            return accum
        }, new Map<string, string>());

    const
        ddb_actions_folder_guid = uuid(),
        colId = uuid(),
        dateExportedIsoString = new Date().toISOString(),
        initialFolderSortCount = 10000,
        itemsFolders = [
            ...Object.keys(itemsModel).filter(key => key !== '__meta').map((key, index) => ({
                _id: itemsTopLevelFolderIds.get(key),
                name: key,
                containerId: ddb_actions_folder_guid,
                created: dateExportedIsoString,
                sortNum: initialFolderSortCount + (index + 1) * 10000
            })),
            ...Object.keys(itemsModel).filter(key => key !== '__meta').map((key, index) => ({
                _id: itemsQueryFolderIds.get(key),
                name: `${key} Queries`,
                containerId: itemsTopLevelFolderIds.get(key),
                created: dateExportedIsoString,
                sortNum: initialFolderSortCount + (index + 1) * 10000
            })),
            ...Object.keys(itemsModel).filter(key => key !== '__meta').map((key, index) => ({
                _id: itemsQueryBySystemKeysFolderIds.get(key),
                name: `${key} By system keys`,
                containerId: itemsQueryFolderIds.get(key),
                created: dateExportedIsoString,
                sortNum: initialFolderSortCount + (index + 1) * 10000
            }))
        ],
        itemsBatchGetItemRequests = Object.keys(itemsModel).filter(key => key !== '__meta').map((key, index) => {
            initialRequestsSortNum += (index + 1) * 10000
            return {
                "_id": uuid(),
                "colId": colId,
                "containerId": itemsFolders.filter(folder => folder.name === key)[0]._id,
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
                        readFileSync(join(__dirname.replace(`${sep}dist${sep}`, `${sep}src${sep}`), '..', './ddb-model-templates/thunder-client-templates/getItemPayloadTemplate.nunjucks')).toString(),
                        { __parent_typename: itemsModel[key]?.__meta.__parent_typename ?? key, __typename: key, __attributes: itemsModel[key].__attributes }),
                    "form": []
                },
                "tests": []
            }
        }),
        itemsBatchDeleteItemRequests = Object.keys(itemsModel).filter(key => key !== '__meta').map((key, index) => {
            initialRequestsSortNum += (index + 1) * 10000
            return {
                "_id": uuid(),
                "colId": colId,
                "containerId": itemsFolders.filter(folder => folder.name === key)[0]._id,
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
                        readFileSync(join(__dirname.replace(`${sep}dist${sep}`, `${sep}src${sep}`), '..', './ddb-model-templates/thunder-client-templates/deleteItemPayloadTemplate.nunjucks')).toString(),
                        { __parent_typename: itemsModel[key]?.__meta.__parent_typename ?? key, __typename: key, __attributes: itemsModel[key].__attributes }),
                    "form": []
                },
                "tests": []
            }
        }),
        itemsTransactPutItemRequests = Object.keys(itemsModel).filter(key => key !== '__meta').map((key, index) => {
            initialRequestsSortNum += (index + 1) * 10000
            return {
                "_id": uuid(),
                "colId": colId,
                "containerId": itemsFolders.filter(folder => folder.name === key)[0]._id,
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
                        readFileSync(join(__dirname.replace(`${sep}dist${sep}`, `${sep}src${sep}`), '..', './ddb-model-templates/thunder-client-templates/createItemPayloadTemplate.nunjucks')).toString(),
                        { __parent_typename: itemsModel[key]?.__meta.__parent_typename ?? key, __typename: key, __attributes: itemsModel[key].__attributes }),
                    "form": []
                },
                "tests": []
            }
        }),
        itemsTransactUpdateItemRequests = Object.keys(itemsModel).filter(key => key !== '__meta').map((key, index) => {
            initialRequestsSortNum += (index + 1) * 10000
            return {
                "_id": uuid(),
                "colId": colId,
                "containerId": itemsFolders.filter(folder => folder.name === key)[0]._id,
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
                        readFileSync(join(__dirname.replace(`${sep}dist${sep}`, `${sep}src${sep}`), '..', './ddb-model-templates/thunder-client-templates/updateItemPayloadTemplate.nunjucks')).toString(),
                        { __parent_typename: itemsModel[key]?.__meta.__parent_typename ?? key, __typename: key, __attributes: itemsModel[key].__attributes }),
                    "form": []
                },
                "tests": []
            }
        }),
        patchItemRequests = Object.keys(itemsModel).filter(key => key !== '__meta').map((key, index) => {
            initialRequestsSortNum += (index + 1) * 10000
            return {
                "_id": uuid(),
                "colId": colId,
                "containerId": itemsFolders.filter(folder => folder.name === key)[0]._id,
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
                        readFileSync(join(__dirname.replace(`${sep}dist${sep}`, `${sep}src${sep}`), '..', './ddb-model-templates/thunder-client-templates/updateItemPayloadTemplate.nunjucks')).toString(),
                        { __parent_typename: itemsModel[key]?.__meta.__parent_typename ?? key, __typename: key, __attributes: itemsModel[key].__attributes }),
                    "form": []
                },
                "tests": []
            }
        }),
        itemsQueryPatternRequests = [
            ...Object.keys(itemsModel).filter(key => key !== '__meta').map((key, index) => {
                const requests = []
                if (Array.isArray(globalSecondaryIndexesToCreate)) {
                    for (const dbIndexName of globalSecondaryIndexesToCreate.filter(gsi => gsi.IndexName !== 'NSHARD-TITEM').map(gsi=>gsi.IndexName)) {
                        const [hashKeyName, rangeKeyName] = dbIndexName.split('-')
                        const queryNames: string[] = []
                        for (const [itemKey, attrs] of Object.entries(onlyWithGsiKeys(itemsModel[key].__attributes))) {
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
                                "containerId": itemsQueryBySystemKeysFolderIds.get(key),
                                "name": queryBySomeKeys,
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
                                        readFileSync(join(__dirname.replace(`${sep}dist${sep}`, `${sep}src${sep}`), '..', './ddb-model-templates/thunder-client-templates/queries/ddbAction_queryBy_PK_from_table_OR_index_PayloadTemplate.nunjucks')).toString(),
                                        { rangeKeyType: (rangeKeyName ? rangeKeyName.startsWith('n') ? 'number' : 'string' : undefined), dbIndexName, hashKeyName, rangeKeyName, __parent_typename: itemsModel[key]?.__meta.__parent_typename ?? key, __typename: key, __attributes: itemsModel[key].__attributes }),
                                    "form": []
                                },
                                "tests": []
                            })
                        }
                    }
                }
                return requests
            }).reduce((accum, arr) => accum.concat(arr), []),
            ...Object.keys(itemsModel).filter(key => key !== '__meta').map((key, index) => {
                initialRequestsSortNum += (index + 1) * 10000
                return {
                    "_id": uuid(),
                    "colId": colId,
                    "containerId": itemsQueryFolderIds.get(key),
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
                            readFileSync(join(__dirname.replace(`${sep}dist${sep}`, `${sep}src${sep}`), '..', './ddb-model-templates/thunder-client-templates/queries/ddbAction_queryBy_PK_from_table_OR_index_PayloadTemplate.nunjucks')).toString(),
                            { hashKeyName: "HASH", rangeKeyName: "RANGE", __parent_typename: itemsModel[key]?.__meta.__parent_typename ?? key, __typename: key, __attributes: itemsModel[key].__attributes }),
                        "form": []
                    },
                    "tests": []
                }
            }),
            ...Object.keys(itemsModel).filter(key => key !== '__meta').map((key, index) => {
                initialRequestsSortNum += (index + 1) * 10000
                // should always be present, by definition but guard in any case
                if (globalSecondaryIndexesToCreate?.map(gsi => gsi.IndexName).includes('NSHARD-TITEM')) {
                    return {
                        "_id": uuid(),
                        "colId": colId,
                        "containerId": itemsQueryFolderIds.get(key),
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
                                readFileSync(join(__dirname.replace(`${sep}dist${sep}`, `${sep}src${sep}`), '..', './ddb-model-templates/thunder-client-templates/queries/ddbAction_queryBy_PK_from_table_OR_index_PayloadTemplate.nunjucks')).toString(),
                                { hashKeyName: "TITEM", dbIndexName: "TITEM", __parent_typename: itemsModel[key]?.__meta.__parent_typename ?? key, __typename: key, __attributes: itemsModel[key].__attributes }),
                            "form": []
                        },
                        "tests": []
                    }
                }
            })
        ];



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
        .concat(itemsBatchGetItemRequests)
        .concat(itemsBatchDeleteItemRequests)
        .concat(itemsTransactUpdateItemRequests)
        .concat(itemsTransactPutItemRequests)
        .concat(patchItemRequests)
        .concat(itemsQueryPatternRequests);

    await writeFile(
        join(dataModelFilesOutDir, `thunder_client_${collectionName}_collection.json`),
        nunjucks.renderString(
            readFileSync(join(__dirname.replace(`${sep}dist${sep}`, `${sep}src${sep}`), '..', './ddb-model-templates/thunder-client-templates/thunderCollectionTemplate.nunjucks')).toString(),
            thunderCollectionTemlateData));
}