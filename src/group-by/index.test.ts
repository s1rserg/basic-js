import { describe, it, expect } from 'vitest';
import * as functions from './index';
import { groupByCases } from './mock';

describe('groupBy', () => {
  groupByCases.forEach(({ input, key, expected }, index) => {
    Object.entries(functions).forEach(([fnName, fn]) => {
      it(`function: ${fnName}, mock data index: ${index}`, () => {
        expect(fn(input, key)).toEqual(expected);
      });
    });
  });
});
