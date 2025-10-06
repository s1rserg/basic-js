import { describe, it, expect } from 'vitest';
import * as functions from './index';
import { sortByNestedFieldCases } from './mock';

describe('sort-by-nested-field tests', () => {
  sortByNestedFieldCases.forEach(({ input, expected }, index) => {
    Object.entries(functions).forEach(([fnName, fn]) => {
      it(`function: ${fnName}, mock data index: ${index}`, () => {
        expect(fn(...input)).toEqual(expected);
      });
    });
  });
});
