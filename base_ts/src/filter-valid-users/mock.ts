import { FilterValidUsersTestCase } from './types';

export const filterValidUsersCases: FilterValidUsersTestCase[] = [
  {
    input: [
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 17 },
      { name: 123, age: 32 },
      { name: 'Carol', age: 18 },
    ],
    expected: [{ name: 'Alice', age: 25 }],
  },
  {
    input: [],
    expected: [],
  },
  {
    input: [
      { name: 'Dan', age: 19 },
      { name: 'Eve', age: 45 },
      { name: 'Frank', age: 18.5 },
    ],
    expected: [
      { name: 'Dan', age: 19 },
      { name: 'Eve', age: 45 },
      { name: 'Frank', age: 18.5 },
    ],
  },
  {
    input: [
      { name: null, age: 22 },
      { name: 'Grace', age: '30' },
      { age: 50 },
      { name: 'Henry' },
    ],
    expected: [],
  },
];
