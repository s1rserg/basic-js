import { RemoveDuplicatesTestCase } from './types';

export const removeDuplicatesCases: RemoveDuplicatesTestCase<unknown>[] = [
  { input: [1, 2, 3, 2, 4, 1, 5], expected: [1, 2, 3, 4, 5] },
  { input: [], expected: [] },
  { input: [1, 2, 3], expected: [1, 2, 3] },
  { input: [7, 7, 7, 7], expected: [7] },
  {
    input: [1, 1, 2, 3, 4, 2, 3, 4, 5, 6, 5, 6],
    expected: [1, 2, 3, 4, 5, 6],
  },
  {
    input: [{ id: 1 }, { id: 2 }, { id: 1 }],
    expected: [{ id: 1 }, { id: 2 }],
  },
  {
    input: ['a', 'b', 'a', { id: 1 }, { id: 1 }, 'b'],
    expected: ['a', 'b', { id: 1 }],
  },
  {
    input: [1, '1', true, 'true', { a: 1 }, { a: 1 }, false, false],
    expected: [1, '1', true, 'true', { a: 1 }, false],
  },
];
