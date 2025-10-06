import { describe, it, expect } from 'vitest';
import * as functions from './index';
import { mostFrequentCharCases } from './mock';

describe('most-frequent-character tests', () => {
  mostFrequentCharCases.forEach(({ input, expected }, index) => {
    Object.entries(functions).forEach(([fnName, fn]) => {
      it(`function: ${fnName}, mock data index: ${index}`, () => {
        expect(fn(input)).toEqual(expected);
      });
    });
  });
});
