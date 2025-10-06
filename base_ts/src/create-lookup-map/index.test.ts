import { describe, it, expect } from 'vitest';
import * as functions from './index';
import { createLookupMapCases } from './mock';

describe('create-lookup-map tests', () => {
  createLookupMapCases.forEach(({ input, expected }, index) => {
    Object.entries(functions).forEach(([fnName, fn]) => {
      it(`function: ${fnName}, mock data index: ${index}`, () => {
        expect(fn(input)).toEqual(expected);
      });
    });
  });
});
