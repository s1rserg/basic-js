import { CreateLookupMapTestCase } from './types';

export const createLookupMapCases: CreateLookupMapTestCase[] = [
  {
    input: [
      { id: 1, name: 'A' },
      { id: 2, name: 'B' },
    ],
    expected: { 1: { id: 1, name: 'A' }, 2: { id: 2, name: 'B' } },
  },
  {
    input: [],
    expected: {},
  },
  {
    input: [{ id: 10, data: true }],
    expected: { 10: { id: 10, data: true } },
  },
  {
    input: [
      { id: 1, value: 'a' },
      { id: 1, value: 'override' },
      { id: 2, value: null },
      { id: 3, nested: { key: 'val' } },
    ],
    expected: {
      1: { id: 1, value: 'override' },
      2: { id: 2, value: null },
      3: { id: 3, nested: { key: 'val' } },
    },
  },
  {
    input: [
      { id: 99, arr: [1, 2, 3] },
      { id: 100, flag: true },
    ],
    expected: {
      99: { id: 99, arr: [1, 2, 3] },
      100: { id: 100, flag: true },
    },
  },
];
