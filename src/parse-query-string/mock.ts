import { ParseQueryStringTestCase } from './types';

export const parseQueryStringCases: ParseQueryStringTestCase[] = [
  { input: 'a=1&b=2', expected: { a: '1', b: '2' } },
  { input: '', expected: {} },
  { input: 'key=value&empty=', expected: { key: 'value', empty: '' } },
  { input: 'a=1&a=2', expected: { a: '2' } },
  { input: 'noValue', expected: { noValue: '' } },
  { input: 'x=1&&y=2', expected: { x: '1', y: '2' } },
  { input: 'a%20b=c%20d', expected: { 'a%20b': 'c%20d' } },
];
