import { ShallowEqualTestCase } from './types';

const sharedRef = { x: 1 };

export const shallowEqualCases: ShallowEqualTestCase[] = [
  {
    input: [
      { a: 1, b: 2 },
      { a: 1, b: 2 },
    ],
    expected: true,
  },
  {
    input: [
      { a: 1, b: 2 },
      { a: 1, b: 3 },
    ],
    expected: false,
  },
  { input: [{ a: 1 }, { a: 1, b: 2 }], expected: false },
  { input: [{ a: { x: 1 } }, { a: { x: 1 } }], expected: false },
  { input: [{ a: sharedRef }, { a: sharedRef }], expected: true },
  { input: [{}, {}], expected: true },
  { input: [{ a: undefined }, { a: undefined }], expected: true },
  { input: [{ a: undefined }, {}], expected: false },
  { input: [{ a: null }, { a: null }], expected: true },
  { input: [{ a: NaN }, { a: NaN }], expected: false }, // NaN !== NaN
  {
    input: [
      { a: 1, b: 2 },
      { b: 2, a: 1 },
    ],
    expected: true,
  },
  { input: [{ a: 1, b: 2 }, { a: 1 }], expected: false },
];
