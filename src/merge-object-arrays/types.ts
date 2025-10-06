import { TestCaseBase } from 'types/common';

export interface Mergeable {
  id: number;
  [key: string]: unknown;
}

export type MergeObjectArraysTestCase = TestCaseBase<
  [Mergeable[], Mergeable[]],
  Mergeable[]
>;
