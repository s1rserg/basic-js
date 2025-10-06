import { describe, it, expect } from 'vitest';
import * as functions from './index';
import { calculateAverageRatingsTestCases } from './mock';

describe('movie-average-rating tests', () => {
  calculateAverageRatingsTestCases.forEach(({ input, expected }, index) => {
    Object.entries(functions).forEach(([fnName, fn]) => {
      it(`function: ${fnName}, mock data index: ${index}`, () => {
        expect(fn(input)).toEqual(expected);
      });
    });
  });
});
