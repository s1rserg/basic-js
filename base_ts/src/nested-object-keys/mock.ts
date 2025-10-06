import { NestedObjectKeysTestCase } from './types';

export const nestedObjectKeysCases: NestedObjectKeysTestCase[] = [
  {
    input: { a: { b: { c: 1 } } },
    expected: ['a', 'a.b', 'a.b.c'],
  },
  {
    input: { x: 1, y: { z: 2 } },
    expected: ['x', 'y', 'y.z'],
  },
  {
    input: {},
    expected: [],
  },
  {
    input: { a: { b: {} } },
    expected: ['a', 'a.b'],
  },
  {
    input: { a: null, b: { c: null } },
    expected: ['a', 'b', 'b.c'],
  },
  {
    input: { 'a key': { 'with space': 42 } },
    expected: ['a key', 'a key.with space'],
  },
];
