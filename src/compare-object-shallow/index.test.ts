import { describe, it, expect } from 'vitest';
import * as functions from './index';
import { shallowEqualCases } from './mock';

describe('compare-object-shallow tests', () => {
  shallowEqualCases.forEach(({ input, expected }, index) => {
    Object.entries(functions).forEach(([fnName, fn]) => {
      it(`function: ${fnName}, mock data index: ${index}`, () => {
        expect(fn(...input)).toBe(expected);
      });
    });
  });
});
