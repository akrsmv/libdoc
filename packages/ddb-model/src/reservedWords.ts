// TODO add description/docs properties in each object
// these words should not have GSI attached to them, 
// as all of them will be skipped when analysing query params and loading GSIs

export const reservedWords = {
    "ddbIndex": {},
    "hashKey": {},
    "rangeKey": {},

    "date_created_start": {},
    "date_created_stop": {},
    "dates_created": {},
    "filter": {},

    "and": {},
    "or": {},

    //TODO remove from here
    // "__type": {},
    // "__typename": {},
    //^^^^^^^^^^^^^^^^^^^^^^^^

    "loadPeersInput": {},
    "loadPeersLevel": {},
    "peersPropsToLoad": {},
    "projectionExpression": {},
    "selectionSetGraphQL": {},
    "selectionSetList": {},

    "pageToken": {},
    "keysOnly": {},
    "limit": {}
}

export const reservedWordsArray = Object.keys(reservedWords)

export const except_system_fields = (__attributes: any): any => Object.keys(__attributes).reduce(
    (result, key) => {
        if (key !== "date_created" && key !== "date_updated" && key !== "user_created" && key !== "user_updated" && key !== "id") {
            Object.assign(result, { [key]: __attributes[key] })
        };
        return result
    }, {})

export const except_typename = (__attributes: any): any => Object.keys(__attributes).reduce(
    (result, key) => {
        if (key !== "__typename") {
            Object.assign(result, { [key]: __attributes[key] })
        };
        return result
    }, {})