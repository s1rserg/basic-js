import { GetNestedPropertyFn } from 'get-nested-property/types';
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
const getNestedProperty: GetNestedPropertyFn = (obj, path) => {
  return path
    .split('.')
    .reduce<unknown>(
      (acc, key) => (acc != null ? acc[key as keyof typeof acc] : undefined),
      obj,
    );
};

export const sortByNestedField: SortByNestedFieldFn = (arr, field) => {
  return arr.sort((a, b) => {
    const aField = getNestedProperty(a, field);
    const bField = getNestedProperty(b, field);

    if (aField === undefined) return -1;
    if (bField === undefined) return 1;

    if (typeof aField === 'number' && typeof bField === 'number')
      return aField - bField;

    return String(aField).localeCompare(String(bField));
  });
};
