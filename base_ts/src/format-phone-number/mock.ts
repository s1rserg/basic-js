import { FormatPhoneNumberTestCase } from './types';

export const formatPhoneNumberCases: FormatPhoneNumberTestCase[] = [
  { input: '+38(093)1234567', expected: '+38 (093) 123-45-67' },
  { input: '380931234567', expected: '+38 (093) 123-45-67' },
  { input: 'not a phone', expected: '' },
  { input: '0931234567', expected: '' },
  { input: '+38(093)1234567', expected: '+38 (093) 123-45-67' },
  { input: '380931234567', expected: '+38 (093) 123-45-67' },
  { input: 'not a phone', expected: '' },
  { input: '0931234567', expected: '' },
  { input: '+38 093 123 45 67', expected: '+38 (093) 123-45-67' },
  { input: '+38(093)1234567890', expected: '' },
  { input: '', expected: '' },
  { input: 'abc123xyz456789000000', expected: '' },
];
