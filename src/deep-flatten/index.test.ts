import { describe, it, expect } from 'vitest';
import * as functions from './index';
import { deepFlattenCases } from './mock';

describe('deep-flatten tests', () => {
  deepFlattenCases.forEach(({ input, expected }, index) => {
    Object.entries(functions).forEach(([fnName, fn]) => {
      it(`function: ${fnName}, mock data index: ${index}`, () => {
        expect(fn(input)).toEqual(expected);
      });
    });
  });
});
