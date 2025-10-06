import { ExtractUniqueTagsFn } from 'unique-tags/types';

/**
 * @task Extract Unique Tags
 * @description From an array of objects with array fields, extract all unique string values from all `tags` arrays **with frequency count**. Ignore empty or whitespace-only strings.
 *
 * @example
 * Input:
 * [
 *   { id: 1, tags: ['a', 'b', 'a'] },
 *   { id: 2, tags: ['b', 'c', ''] },
 *   { id: 3, tags: ['a', 'd', '  '] }
 * ]
 *
 * Output:
 * {
 *   a: 3,
 *   b: 2,
 *   c: 1,
 *   d: 1
 * }
 *
 * Note:
 * - The tags are counted.
 * - Empty strings and whitespace-only strings are ignored.
 * Input:
 * [
 *   { id: 1, tags: ['a', 'b'] },
 *   { id: 2, tags: ['b', 'c'] },
 *   { id: 3, tags: ['a', 'd'] }
 * ]
 *
 * Output:
 * ['a', 'b', 'c', 'd']
 */
export const extractUniqueTags: ExtractUniqueTagsFn = (items) => {
  throw new Error('Not Implemented');
};
