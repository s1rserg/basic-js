import { SortByNestedFieldTestCase } from './types';

export const sortByNestedFieldCases: SortByNestedFieldTestCase[] = [
  {
    input: [
      [
        { id: 1, user: { name: 'B' } },
        { id: 2, user: { name: 'A' } },
      ],
      'user.name',
    ],
    expected: [
      { id: 2, user: { name: 'A' } },
      { id: 1, user: { name: 'B' } },
    ],
  },
  {
    input: [
      [
        { id: 1, stat: { score: 30 } },
        { id: 2, stat: { score: 20 } },
      ],
      'stat.score',
    ],
    expected: [
      { id: 2, stat: { score: 20 } },
      { id: 1, stat: { score: 30 } },
    ],
  },
  {
    input: [[{ id: 1 }, { id: 2, user: { name: 'A' } }], 'user.name'],
    expected: [{ id: 1 }, { id: 2, user: { name: 'A' } }],
  },
  {
    input: [
      [
        { id: 1, x: { y: { z: 3 } } },
        { id: 2, x: { y: { z: 1 } } },
      ],
      'x.y.z',
    ],
    expected: [
      { id: 2, x: { y: { z: 1 } } },
      { id: 1, x: { y: { z: 3 } } },
    ],
  },
  {
    input: [
      [
        { id: 1, data: { value: 10 } },
        { id: 2, data: { value: 10 } },
      ],
      'data.value',
    ],
    expected: [
      { id: 1, data: { value: 10 } },
      { id: 2, data: { value: 10 } },
    ],
  },
  {
    input: [[{ id: 1, info: { score: 10 } }, { id: 2 }], 'info.score'],
    expected: [{ id: 2 }, { id: 1, info: { score: 10 } }],
  },
  {
    input: [
      [
        { id: 1, user: [{ name: 'B' }] },
        { id: 2, user: [{ name: 'A' }] },
      ],
      'user.0.name',
    ],
    expected: [
      { id: 2, user: [{ name: 'A' }] },
      { id: 1, user: [{ name: 'B' }] },
    ],
  },
  {
    input: [
      [
        { id: 1, score: 5 },
        { id: 2, score: 5 },
        { id: 3, score: 5 },
      ],
      'score',
    ],
    expected: [
      { id: 1, score: 5 },
      { id: 2, score: 5 },
      { id: 3, score: 5 },
    ],
  },
];
