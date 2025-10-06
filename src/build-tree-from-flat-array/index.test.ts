import { describe, it, expect } from 'vitest';
import * as functions from './index';
import { buildTreeCases } from './mock';

describe('build-tree-from-flat-array tests', () => {
  buildTreeCases.forEach(({ input, expected }, index) => {
    Object.entries(functions).forEach(([fnName, fn]) => {
      it(`function: ${fnName}, mock data index: ${index}`, () => {
        expect(fn(input)).toEqual(expected);
      });
    });
  });
});
