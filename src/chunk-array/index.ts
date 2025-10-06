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
export const chunkArray: ChunkArrayFn = (arr, size) => {
  throw new Error('Not Implemented');
};
