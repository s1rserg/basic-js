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
  let current = obj;
  const parts = path.split('.');

  for (let i = 0; i < parts.length; i++) {
    const value = current[parts[i]];

    if (i === parts.length - 1) {
      return value;
    }

    if (typeof value !== 'object' || value === null) {
      return;
    }

    current = value as Record<string, unknown>;
  }
};

export const getNestedPropertyRecursively: GetNestedPropertyFn = (
  obj,
  path,
) => {
  const parts = path.split('.');

  const getNestedPropertyHelper = (
    obj: Record<string, unknown>,
    index: number,
  ): unknown => {
    const value = obj[parts[index]];
    const remainingPath = parts.slice(index + 1);

    if (!remainingPath.length) {
      return value;
    }

    if (typeof value !== 'object' || value === null) {
      return;
    }

    return getNestedPropertyHelper(value as Record<string, unknown>, index + 1);
  };

  return getNestedPropertyHelper(obj, 0);
};
