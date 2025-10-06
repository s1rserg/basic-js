import { MostFrequentCharTestCase } from './types';

export const mostFrequentCharCases: MostFrequentCharTestCase[] = [
  { input: 'aabbbcc', expected: 'b' },
  { input: 'xyz', expected: 'x' },
  { input: '', expected: '' },
  { input: 'aabbccddeeffggg', expected: 'g' },
  { input: 'abcbac', expected: 'a' },
];
