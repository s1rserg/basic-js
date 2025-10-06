import { describe, it, expect } from 'vitest';
import * as functions from './index';
import { validateObjectShapeCases } from './mock';

describe('validate-object-shape tests', () => {
  validateObjectShapeCases.forEach(({ input, expected }, index) => {
    Object.entries(functions).forEach(([fnName, fn]) => {
      it(`function: ${fnName}, mock data index: ${index}`, () => {
        expect(fn(...input)).toEqual(expected);
      });
    });
  });
});
