import { DeepFlattenTestCase } from './types';

export const deepFlattenCases: DeepFlattenTestCase[] = [
  { input: [1, [2, [3, 4]], 5], expected: [1, 2, 3, 4, 5] },
  { input: [[[[1]]], 2, [3, [4]]], expected: [1, 2, 3, 4] },
  { input: [], expected: [] },
  { input: [1, 2, 3], expected: [1, 2, 3] },
  { input: [1, [2], [[3]], [[[4]]], 5], expected: [1, 2, 3, 4, 5] },
  { input: [[null], [[undefined]], true], expected: [null, undefined, true] },
  { input: [[1, [2, [3, [4, [5]]]]]], expected: [1, 2, 3, 4, 5] },
  { input: [[[]]], expected: [] },
];
