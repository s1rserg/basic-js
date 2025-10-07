import { DeepFlattenFn } from 'deep-flatten/types';

/**
 * @task Deep Flatten
 * @description Flatten a nested array structure into a single-level array. Any depth of nested arrays should be recursively flattened.
 *
 * @example
 * Input: [1, [2, [3, 4]], 5]
 * Output: [1, 2, 3, 4, 5]
 *
 * Input: [[[[1]]], 2, [3, [4]]]
 * Output: [1, 2, 3, 4]
 *
 * Input: []
 * Output: []
 */
export const deepFlatten: DeepFlattenFn = (input) => {
  const result: unknown[] = [];

  for (const element of input) {
    if (Array.isArray(element)) {
      result.push(...deepFlatten(element));
    } else {
      result.push(element);
    }
  }

  return result;
};

export const deepFlattenReduce: DeepFlattenFn = (input) => {
  const result: unknown[] = [];

  return input.reduce<unknown[]>((acc, curr) => {
    return acc.concat(Array.isArray(curr) ? deepFlattenReduce(curr) : curr);
  }, result);
};

export const superDeepFlatten: DeepFlattenFn = (input) => {
  return input.flat(Infinity);
};
