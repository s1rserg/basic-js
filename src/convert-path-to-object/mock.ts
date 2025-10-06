import { ConvertPathToObjectTestCase } from './types';

export const convertPathToObjectCases: ConvertPathToObjectTestCase[] = [
  {
    input: ['a.b.c', 42],
    expected: { a: { b: { c: 42 } } },
  },
  {
    input: ['x', 'value'],
    expected: { x: 'value' },
  },
  {
    input: ['', 123],
    expected: {},
  },
  {
    input: ['a', null],
    expected: { a: null },
  },
  {
    input: ['deep.path.to.value', true],
    expected: { deep: { path: { to: { value: true } } } },
  },
  {
    input: ['a.b.c.d.e', 0],
    expected: { a: { b: { c: { d: { e: 0 } } } } },
  },
  {
    input: ['special.key$', 'val'],
    expected: { special: { key$: 'val' } },
  },
  {
    input: ['num.1.2', 'end'],
    expected: { num: { 1: { 2: 'end' } } },
  },
];
