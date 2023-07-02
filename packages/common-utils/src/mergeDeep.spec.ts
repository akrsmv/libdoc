import { expect, test } from '@jest/globals';
import { mergeDeep } from './mergeDeep';


test('merges two objects keys', () => {
    expect(mergeDeep({ 'a': 1, 'c': 3 }, { 'b': 2 }))
        .toStrictEqual({ 'a': 1, 'c': 3, 'b': 2 })
})
test('merges subobjects of two objects', () => {
    expect(mergeDeep({ 'A': { 'a': 1, 'c': 3 } }, { 'B': { 'b': 2 } }))
        .toStrictEqual({ 'A': { 'a': 1, 'c': 3 }, 'B': { 'b': 2 } })
})
test('recurse: bigger __typename, if overlaping keys which are objects, merges their subobjects', () => {
    expect(mergeDeep({ 'A': { 'a': 1, 'c': 3 } }, { 'A': { 'b': 2 } }))
        .toStrictEqual({ 'A': { 'a': 1, 'b': 2, 'c': 3 } })
})
test('recurse: bigger source, if overlaping keys which are objects, merges their subobjects', () => {
    expect(mergeDeep({
        "Flight": {
            "__attributes": {
                "date_created": {
                    "__type": "isodatestring",
                    "__gsiKeys": [
                        "sGSI6"
                    ],
                    "__required": true
                }
            }
        }
    }, {
        "Flight": {
            "__attributes": {
                "date_created": {
                    "__type": "isodatestring"
                }
            }
        }
    }))
        .toStrictEqual({
            "Flight": {
                "__attributes": {
                    "date_created": {
                        "__type": "isodatestring",
                        "__gsiKeys": [
                            "sGSI6"
                        ],
                        "__required": true
                    }
                }
            }
        })
})
test('if overlaping keys which are objects, merges their subobjects', () => {
    expect(mergeDeep({
        "Flight": {
            "__attributes": {
                "date_created": {
                    "__type": "isodatestring"
                }
            }
        }
    }, {
        "Flight": {
            "__attributes": {
                "date_created": {
                    "__type": "isodatestring",
                    "__gsiKeys": [
                        "sGSI6"
                    ],
                    "__required": true
                }
            }
        }
    }))
        .toStrictEqual({
            "Flight": {
                "__attributes": {
                    "date_created": {
                        "__type": "isodatestring",
                        "__gsiKeys": [
                            "sGSI6"
                        ],
                        "__required": true
                    }
                }
            }
        })
})