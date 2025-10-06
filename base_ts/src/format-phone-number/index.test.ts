import { describe, it, expect } from 'vitest';
import * as functions from './index';
import { formatPhoneNumberCases } from './mock';

describe('format-phone-number tests', () => {
  formatPhoneNumberCases.forEach(({ input, expected }, index) => {
    Object.entries(functions).forEach(([fnName, fn]) => {
      it(`function: ${fnName}, mock data index: ${index}, input: ${input}`, () => {
        expect(fn(input)).toEqual(expected);
      });
    });
  });
});
