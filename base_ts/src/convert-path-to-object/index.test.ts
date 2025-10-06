import { describe, it, expect } from 'vitest';
import * as functions from './index';
import { convertPathToObjectCases } from './mock';

describe('convert-path-to-object tests', () => {
  convertPathToObjectCases.forEach(({ input, expected }, index) => {
    Object.entries(functions).forEach(([fnName, fn]) => {
      it(`function: ${fnName}, mock data index: ${index}`, () => {
        expect(fn(...input)).toEqual(expected);
      });
    });
  });
});
