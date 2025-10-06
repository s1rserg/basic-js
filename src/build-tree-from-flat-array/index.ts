import { BuildTreeFn } from './types';

/**
 * @task Build Tree from Flat Array
 * @description Convert a flat array of items with id and parentId into a nested tree structure.
 * Each item has a unique id and may optionally have a parentId referring to another item.
 * Items without a parentId (or with parentId set to null) are considered root nodes.
 * Each tree node should include its children in a `children` array.
 *
 * @example
 * Input:
 * [
 *   { id: 1, name: 'Root 1', parentId: null },
 *   { id: 2, name: 'Child 1.1', parentId: 1 },
 *   { id: 3, name: 'Child 1.2', parentId: 1 },
 *   { id: 4, name: 'Root 2', parentId: null },
 *   { id: 5, name: 'Child 2.1', parentId: 4 }
 * ]
 *
 * Output:
 * [
 *   {
 *     id: 1,
 *     name: 'Root 1',
 *     parentId: null,
 *     children: [
 *       { id: 2, name: 'Child 1.1', parentId: 1, children: [] },
 *       { id: 3, name: 'Child 1.2', parentId: 1, children: [] }
 *     ]
 *   },
 *   {
 *     id: 4,
 *     name: 'Root 2',
 *     parentId: null,
 *     children: [
 *       { id: 5, name: 'Child 2.1', parentId: 4, children: [] }
 *     ]
 *   }
 * ]
 */
export const buildTree: BuildTreeFn = (items) => {
  throw new Error('Not Implemented');
};
