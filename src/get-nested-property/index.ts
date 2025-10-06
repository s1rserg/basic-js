import { GetNestedPropertyFn } from './types';

/**
 * @task Get Nested Property
 * @description Given an object and a dot-delimited path string, return the value at the nested location.
 * If the path does not exist, return `undefined`. The function should safely handle missing or null intermediate properties.
 *
 * @example
 * Input: ({ a: { b: { c: 42 } } }, 'a.b.c')
 * Output: 42
 *
 * Input: ({}, 'a')
 * Output: undefined
 *
 * Input: ({ a: null }, 'a.b')
 * Output: undefined
 */
export const getNestedProperty: GetNestedPropertyFn = (obj, path) => {
  throw new Error('Not Implemented');
};
