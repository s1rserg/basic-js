import { TestCaseBase } from 'types/common';

export interface FlatNode {
  id: number;
  parentId: number | null;
  name: string;
}

export interface TreeNode extends FlatNode {
  children: TreeNode[];
}

export type BuildTreeFn = (items: FlatNode[]) => TreeNode[];

export type BuildTreeTestCase = TestCaseBase<FlatNode[], TreeNode[]>;