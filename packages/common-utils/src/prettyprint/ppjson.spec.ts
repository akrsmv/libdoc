import {describe, jest, expect, test} from '@jest/globals';

import {ppjson} from './ppjson';

describe('pretty printing', () => {
  test('object', () => {
    const obj = {a:1, b:'this is a string', c: { nested: ['elem1','elem2']}}
    const result = ppjson(obj)
    expect(result).toBe(JSON.stringify(obj, null, 4));
  });
// TODO
//   test('Error object', () => {
//     const obj = new Error("ebasi")
//     const result = ppjson(obj)
//     expect(result).toBe(JSON.stringify(obj, null, 4));
//   });
//   test('Map object', () => {
//     const obj = new Map([["elem1", "val1"],["elem2", "val2"]])
//     const result = ppjson(obj)
//     expect(result).toBe(JSON.stringify({elem1:"val1", elem2:"val2"}, null, 4));
//   });
});