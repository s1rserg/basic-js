import { GroupByFirstLetterTestCase } from './types';

export const groupByFirstLetterCases: GroupByFirstLetterTestCase[] = [
  {
    input: ['apple', 'banana', 'avocado'],
    expected: { a: ['apple', 'avocado'], b: ['banana'] }
  },
  { input: [], expected: {} },
  {
    input: ['car', 'cat', 'dog'],
    expected: { c: ['car', 'cat'], d: ['dog'] }
  },
  {
    input: ['apple', ''],
    expected: { a: ['apple'], '': [''] }
  }
];