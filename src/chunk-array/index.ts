import { ChunkArrayFn } from './types';

/**
 * @task Chunk Array
 * @description Split an array into smaller chunks of a specified size. Each chunk should be an array containing at most `size` elements. The final chunk may contain fewer elements if there are not enough remaining.
 *
 * @example
 * Input:
 * ([1, 2, 3, 4, 5], 2)
 * Output:
 * [[1, 2], [3, 4], [5]]
 *
 * Input:
 * ([1, 2, 3], 1)
 * Output:
 * [[1], [2], [3]]
 *
 * Input:
 * ([1, 2, 3], 5)
 * Output:
 * [[1, 2, 3]]
 *
 * Input:
 * ([], 3)
 * Output:
 * []
 */
export const chunkArray: ChunkArrayFn = <T>(arr: T[], size: number) => {
  if (size <= 0) {
    return [];
  }

  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
};
