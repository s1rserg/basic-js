import { describe, it, expect } from 'vitest';
import * as functions from './index';
import { groupByFirstLetterCases } from './mock';

describe('group-by-first-letter tests', () => {
  groupByFirstLetterCases.forEach(({ input, expected }, index) => {
    Object.entries(functions).forEach(([fnName, fn]) => {
      it(`function: ${fnName}, mock data index: ${index}`, () => {
        expect(fn(input)).toEqual(expected);
      });
    });
  });
});
