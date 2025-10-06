import { GroupByFirstLetterFn } from 'group-by-first-letter/types';

/**
 * @task Group By First Letter
 * @description Group an array of words by their first letter. If a word is an empty string, it should be grouped under the empty string key ('').
 *
 * @example
 * Input: ['apple', 'banana', 'avocado']
 * Output: {
 *   a: ['apple', 'avocado'],
 *   b: ['banana']
 * }
 *
 * Input: ['car', 'cat', 'dog']
 * Output: {
 *   c: ['car', 'cat'],
 *   d: ['dog']
 * }
 *
 * Input: ['apple', '']
 * Output: {
 *   a: ['apple'],
 *   '': ['']
 * }
 */
export const groupByFirstLetter: GroupByFirstLetterFn = (words) => {
  throw new Error('Not Implemented');
};
