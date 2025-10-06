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
  throw new Error('Not Implemented');
};
