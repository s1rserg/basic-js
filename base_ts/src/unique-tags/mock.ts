import { ExtractUniqueTagsTestCase } from 'unique-tags/types';

export const extractUniqueTagsTestCases: ExtractUniqueTagsTestCase[] = [
  {
    input: [
      { id: 1, tags: ['a', 'b'] },
      { id: 2, tags: ['b', 'c'] },
      { id: 3, tags: ['a', 'd'] },
    ],
    expected: { a: 2, b: 2, c: 1, d: 1 },
  },
  {
    input: [],
    expected: {},
  },
  {
    input: [
      { id: 1, tags: [] },
      { id: 2, tags: [] },
    ],
    expected: {},
  },
  {
    input: [
      { id: 1, tags: ['x', 'y', 'x', 'z'] },
      { id: 2, tags: ['y', 'z', 'w'] },
    ],
    expected: { x: 2, y: 2, z: 2, w: 1 },
  },
  {
    input: [{ id: 1, tags: ['a', 'a', ' ', '', 'b'] }],
    expected: { a: 2, b: 1 },
  },
];
