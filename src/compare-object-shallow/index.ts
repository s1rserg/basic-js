import { ShallowEqualFn } from './types';

/**
 * @task Compare Objects Shallow
 * @description Compare two objects for shallow equality. Two objects are considered shallowly equal if they have the same set of own enumerable properties with equal values using strict comparison (===).
 *
 * This comparison does NOT recurse into nested objects. It only checks top-level keys and values.
 *
 * @example
 * Input:
 * ({ a: 1, b: 2 }, { a: 1, b: 2 }) => true
 * Input:
 * ({ a: 1, b: 2 }, { a: 1, b: 3 }) => false
 * Input:
 * ({ a: 1 }, { a: 1, b: 2 }) => false
 * Input:
 * ({ a: { x: 1 } }, { a: { x: 1 } }) => false // different object references
 * Input:
 * ({ a: { x: 1 } }, { a: obj }) => true // if obj is same reference as value of a
 */
export const shallowEqual: ShallowEqualFn = (a, b) => {
  throw new Error('Not Implemented');
};
