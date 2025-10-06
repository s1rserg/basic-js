import { MergeObjectArraysTestCase } from './types';

export const mergeObjectArraysCases: MergeObjectArraysTestCase[] = [
  {
    input: [
      [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
      ],
      [
        { id: 2, age: 30 },
        { id: 3, name: 'Carol' },
      ],
    ],
    expected: [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob', age: 30 },
      { id: 3, name: 'Carol' },
    ],
  },
  {
    input: [[], []],
    expected: [],
  },
  {
    input: [[{ id: 1, name: 'A' }], []],
    expected: [{ id: 1, name: 'A' }],
  },
  {
    input: [[], [{ id: 2, name: 'B' }]],
    expected: [{ id: 2, name: 'B' }],
  },
  {
    input: [[{ id: 1, value: 1 }], [{ id: 1, value: 2 }]],
    expected: [{ id: 1, value: 2 }],
  },
  {
    input: [[{ id: 1, name: 'X' }], [{ id: 1, name: 'Y', age: 20 }]],
    expected: [{ id: 1, name: 'Y', age: 20 }],
  },
];
