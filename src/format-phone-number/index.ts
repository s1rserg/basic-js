import { FormatPhoneNumberFn } from './types';

/**
 * @task Format Phone Number
 * @description Convert a raw input string into a formatted phone number if it contains exactly 12 digits.
 * The expected format is: +XX (XXX) XXX-XX-XX
 * If the input does not contain exactly 12 digits, return an empty string.
 *
 * @example
 * Input: '+38(093)1234567'
 * Output: '+38 (093) 123-45-67'
 *
 * Input: '380931234567'
 * Output: '+38 (093) 123-45-67'
 *
 * Input: '0931234567'
 * Output: ''
 */
export const formatPhoneNumber: FormatPhoneNumberFn = (str) => {
  const nums = str
    .split('')
    .filter((char) => char !== ' ' && Number.isInteger(+char))
    .join('');

  if (nums.length !== 12) {
    return '';
  }

  return `+${nums.slice(0, 2)} (${nums.slice(2, 5)}) ${nums.slice(5, 8)}-${nums.slice(8, 10)}-${nums.slice(10)}`;
};

export const formatPhoneNumberRegex: FormatPhoneNumberFn = (str) => {
  const nums = str.replace(/\D/g, '');
  if (nums.length !== 12) {
    return '';
  }

  return nums.replace(
    /(\d{2})(\d{3})(\d{3})(\d{2})(\d{2})/,
    '+$1 ($2) $3-$4-$5',
  );
};
