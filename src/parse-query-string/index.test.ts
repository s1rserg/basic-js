import { describe, it, expect } from 'vitest';
import * as functions from './index';
import { parseQueryStringCases } from './mock';

describe('parseQueryString', () => {
  parseQueryStringCases.forEach(({ input, expected }, index) => {
    Object.entries(functions).forEach(([fnName, fn]) => {
      it(`function: ${fnName}, mock data index: ${index}`, () => {
        expect(fn(input)).toEqual(expected);
      });
    });
  });
});
