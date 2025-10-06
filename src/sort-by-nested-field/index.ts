import { SortByNestedFieldFn } from './types';

/**
 * @task Sort by Nested Field
 * @description Sort an array of objects by a nested field specified as a dot-separated string.
 * The sorting should be in ascending order. If the field is missing or values are equal, retain original order (stable sort).
 *
 * @example
 * Input: [
 *   { id: 1, user: { name: 'B' } },
 *   { id: 2, user: { name: 'A' } }
 * ], 'user.name'
 * Output: [
 *   { id: 2, user: { name: 'A' } },
 *   { id: 1, user: { name: 'B' } }
 * ]
 */
export const sortByNestedField: SortByNestedFieldFn = (arr, field) => {
  throw new Error('Not Implemented');
};
