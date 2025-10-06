import { GetNestedPropertyTestCase } from './types';

export const getNestedPropertyCases: GetNestedPropertyTestCase[] = [
  { input: [{ a: { b: { c: 42 } } }, 'a.b.c'], expected: 42 },
  { input: [{ a: { b: null } }, 'a.b.c'], expected: undefined },
  { input: [{}, 'a'], expected: undefined },
  { input: [{ a: { b: { c: { d: 99 } } } }, 'a.b.c.d'], expected: 99 },
  { input: [{ a: { b: 5 } }, 'a.b.c'], expected: undefined },
  { input: [{ a: [{ value: 'ok' }] }, 'a.0.value'], expected: 'ok' },
  { input: [{ a: [{ value: 'x' }] }, 'a.1.value'], expected: undefined },
  { input: [{ a: 'text' }, 'a.b'], expected: undefined },
  { input: [{ a: { b: undefined } }, 'a.b.c'], expected: undefined },
  { input: [{ x: 1 }, ''], expected: undefined },
];
