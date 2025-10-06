import { PickOmitTestCase } from './types';

export const pickOmitCases: PickOmitTestCase[] = [
  {
    input: [{ a: 1, b: 2, c: 3 }, ['a', 'c'], 'pick'],
    expected: { a: 1, c: 3 },
  },
  { input: [{ a: 1, b: 2, c: 3 }, ['b'], 'omit'], expected: { a: 1, c: 3 } },
  { input: [{ a: 1, b: 2 }, [], 'pick'], expected: {} },
  { input: [{ a: 1, b: 2 }, [], 'omit'], expected: { a: 1, b: 2 } },
  { input: [{}, ['a'], 'pick'], expected: {} },
  { input: [{}, ['a'], 'omit'], expected: {} },
  { input: [{ a: 1 }, ['b'], 'pick'], expected: {} },
  { input: [{ a: 1 }, ['b'], 'omit'], expected: { a: 1 } },
];
