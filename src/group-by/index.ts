import {
  GroupableRecord,
  GroupByFn,
  GroupByKey,
  GroupedResult,
} from 'group-by/types';

/**
 * @task Group By Property
 * @description Group an array of objects by a given key. For each unique value of that key,
 * collect all objects that share it into an array under that key in the resulting object.
 *
 * @example
 * Input:
 * [
 *   { category: 'fruit', name: 'apple' },
 *   { category: 'vegetable', name: 'carrot' },
 *   { category: 'fruit', name: 'banana' }
 * ]
 *
 * Key: 'category'
 *
 * Output:
 * {
 *   fruit: [
 *     { category: 'fruit', name: 'apple' },
 *     { category: 'fruit', name: 'banana' }
 *   ],
 *   vegetable: [
 *     { category: 'vegetable', name: 'carrot' }
 *   ]
 * }
 */
export const groupBy: GroupByFn = <T extends GroupableRecord>(
  array: T[],
  key: GroupByKey<T>,
) => {
  return array.reduce<GroupedResult<T>>((acc, curr) => {
    const keyStr = String(curr[key]);

    if (keyStr in acc) {
      acc[keyStr].push(curr);
      return acc;
    }

    acc[keyStr] = [curr];
    return acc;
  }, {});
};
