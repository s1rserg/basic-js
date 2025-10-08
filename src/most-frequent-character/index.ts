import { MostFrequentCharFn } from './types';

/**
 * @task Most Frequent Character
 * @description Given a string, return the character that appears most frequently.
 * If multiple characters share the same highest frequency, return the one that appears first in the string.
 * If the input string is empty, return an empty string.
 *
 * @example
 * Input: 'aabbbcc'
 * Output: 'b'
 *
 * Input: 'xyz'
 * Output: 'x'
 *
 * Input: ''
 * Output: ''
 */
export const mostFrequentChar: MostFrequentCharFn = (text) => {
  if (!text) return '';

  const frequencies: Record<string, number> = {};

  text
    .split('')
    .forEach((char) => (frequencies[char] = (frequencies[char] ?? 0) + 1));

  let maxFrequency = 0;
  let mostFrequentChar = '';

  for (const [key, value] of Object.entries(frequencies)) {
    if (value > maxFrequency) {
      maxFrequency = value;
      mostFrequentChar = key;
    }
  }

  return mostFrequentChar;
};
