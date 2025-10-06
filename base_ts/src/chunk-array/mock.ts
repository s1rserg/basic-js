import { ChunkArrayTestCase } from './types';

export const chunkArrayCases: ChunkArrayTestCase[] = [
  { input: [[1, 2, 3, 4, 5], 2], expected: [[1, 2], [3, 4], [5]] },
  { input: [[1, 2, 3], 1], expected: [[1], [2], [3]] },
  { input: [[1, 2, 3], 5], expected: [[1, 2, 3]] },
  { input: [[], 3], expected: [] },
  { input: [[1, 2, 3], 0], expected: [] },
  { input: [[1], 1], expected: [[1]] },
  { input: [[1, 2, 3, 4], 4], expected: [[1, 2, 3, 4]] },
  { input: [[1, 2, 3, 4], 3], expected: [[1, 2, 3], [4]] },
];
