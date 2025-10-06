import { Mergeable } from 'merge-object-arrays/types';

/**
 * @task Merge Object Arrays
 * @description Merge two arrays of objects by their `id` field. If objects share the same `id`, their properties should be combined.
 * If a property appears in both, the value from the second array overwrites the one from the first.
 *
 * @example
 * Input:
 * arr1 = [ { id: 1, name: 'Alice' }, { id: 2, name: 'Bob' } ]
 * arr2 = [ { id: 2, age: 30 }, { id: 3, name: 'Carol' } ]
 * Output:
 * [
 *   { id: 1, name: 'Alice' },
 *   { id: 2, name: 'Bob', age: 30 },
 *   { id: 3, name: 'Carol' }
 * ]
 */
export const mergeObjectArrays = <T extends Mergeable>(
  arr1: T[],
  arr2: T[],
): T[] => {
  throw new Error('Not Implemented');
};
