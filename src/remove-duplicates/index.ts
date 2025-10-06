import { RemoveDuplicatesFn } from './types';

/**
 * @task Remove Duplicates
 * @description Remove duplicate values from the array. Array can contain primitive values and objects.
 * Duplicate values (including numbers, strings, booleans, and objects) should be removed based on shallow equality. For objects, comparison should be done using JSON.stringify. The input array may contain mixed types (e.g. primitives and objects together).
 *
 * @example
 * Input:
 * [1, 2, 3, 2, 4, 1, 5]
 * Output:
 * [1, 2, 3, 4, 5]
 *
 * Input:
 * [ { id: 1 }, { id: 2 }, { id: 1 } ]
 * Output:
 * [ { id: 1 }, { id: 2 } ]
 */
export const removeDuplicates: RemoveDuplicatesFn = <T>(array: T[]): T[] => {
  throw new Error('Not Implemented');
};
