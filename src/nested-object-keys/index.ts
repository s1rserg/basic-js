import { NestedObjectKeysFn } from './types';

/**
 * @task Nested Object Keys
 * @description Return all nested keys of an object as dot-delimited paths.
 * The function should recurse through all nested objects and return full paths to all leaf and intermediate keys.
 *
 * @example
 * Input: { a: { b: { c: 1 } } }
 * Output: ['a', 'a.b', 'a.b.c']
 *
 * Input: { x: 1, y: { z: 2 } }
 * Output: ['x', 'y', 'y.z']
 *
 * Input: {}
 * Output: []
 */
export const nestedObjectKeys: NestedObjectKeysFn = (obj) => {
  const result: string[] = [];

  for (const key in obj) {
    result.push(key);
    if (Object.prototype.toString.call(obj) === '[object Object]') {
      result.push(
        ...nestedObjectKeys(obj[key] as Record<string, unknown>).map(
          (item) => `${key}.${item}`,
        ),
      );
    }
  }

  return result;
};
