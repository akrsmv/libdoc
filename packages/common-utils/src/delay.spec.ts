import { describe, jest, expect, test } from '@jest/globals';
import { delay } from './delay';

test('returns promise which is resolved after specified interval', async () => {
  const timeBefore = new Date().getTime();
  expect(await delay(190));
  const timeAfter = new Date().getTime();
  expect(timeAfter - timeBefore).toBeLessThan(200);
  expect(timeAfter - timeBefore).toBeGreaterThanOrEqual(190);
});