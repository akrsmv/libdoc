import {describe, jest, expect, test} from '@jest/globals';
import {chunks} from './chunks';

describe('transform an Array into an Array of Arrays(chunks) with exact length', () => {
  test('last chunk contains elements <= chunk_size', () => {
    const result = chunks([1,2,3,4,5,6,7,8,9],4)
    expect(result).toEqual([[1,2,3,4],[5,6,7,8],[9]])
  });
  test('all chunks of equal size if elements/chunk_size is integer', () => {
    const result = chunks([1,2,3,4,5,6,7,8,9],3)
    expect(result).toEqual([[1,2,3],[4,5,6],[7,8,9]])
  });
});