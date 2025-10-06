import { GroupByTestCase } from 'group-by/types';

export const groupByCases: GroupByTestCase[] = [
  {
    input: [
      { category: 'fruit', name: 'apple' },
      { category: 'vegetable', name: 'carrot' },
      { category: 'fruit', name: 'banana' },
    ],
    key: 'category',
    expected: {
      fruit: [
        { category: 'fruit', name: 'apple' },
        { category: 'fruit', name: 'banana' },
      ],
      vegetable: [{ category: 'vegetable', name: 'carrot' }],
    },
  },
  {
    input: [],
    key: 'anyKey',
    expected: {},
  },
  {
    input: [{ type: 'a', value: 1 }],
    key: 'type',
    expected: {
      a: [{ type: 'a', value: 1 }],
    },
  },
  {
    input: [
      { id: 1, status: 'active' },
      { id: 2, status: 'inactive' },
      { id: 3, status: 'active' },
      { id: 4, status: 'pending' },
    ],
    key: 'status',
    expected: {
      active: [
        { id: 1, status: 'active' },
        { id: 3, status: 'active' },
      ],
      inactive: [{ id: 2, status: 'inactive' }],
      pending: [{ id: 4, status: 'pending' }],
    },
  },
  {
    input: [
      { group: 1, name: 'A' },
      { group: 2, name: 'B' },
      { group: 1, name: 'C' },
      { group: 2, name: 'D' },
    ],
    key: 'group',
    expected: {
      '1': [
        { group: 1, name: 'A' },
        { group: 1, name: 'C' },
      ],
      '2': [
        { group: 2, name: 'B' },
        { group: 2, name: 'D' },
      ],
    },
  },
];
