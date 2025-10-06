import { ValidateObjectShapeFn } from './types';

/**
 * @task Validate Object Shape
 * @description Given an object and a schema definition, validate that the object has all the keys required by the schema,
 * and that each key has the correct primitive type ('string', 'number', or 'boolean').
 * Additional fields of the object, not indicated in the scheme, do not affect the result
 *
 * @example
 * Input: ({ name: 'Alice', age: 30 }, { name: 'string', age: 'number' })
 * Output: true
 *
 * Input: ({ name: 'Bob' }, { name: 'string', age: 'number' })
 * Output: false (missing key)
 */
export const validateObjectShape: ValidateObjectShapeFn = (obj, schema) => {
  throw new Error('Not Implemented');
};
