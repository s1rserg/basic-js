import { FilterValidUsersFn } from './types';

/**
 * @task Filter Valid Users
 * @description Given an array of user objects, return only those who are considered valid.
 * A valid user must satisfy the following criteria:
 * - Has a `name` that is a string
 * - Has an `age` that is a number greater than 18
 *
 * @example
 * Input: [
 *   { name: 'Alice', age: 25 },
 *   { name: 'Bob', age: 17 },
 *   { name: 123, age: 32 },
 *   { name: 'Carol', age: 18 }
 * ]
 * Output: [
 *   { name: 'Alice', age: 25 }
 * ]
 */
export const filterValidUsers: FilterValidUsersFn = (users) => {
  throw new Error('Not Implemented');
};
