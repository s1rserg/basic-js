import { TestCaseBase } from 'types/common';

export type NestedItem = {
  id: number;
  tags: string[];
};

export type UniqueTagsResult = Record<string, number>;

export type ExtractUniqueTagsFn = (items: NestedItem[]) => UniqueTagsResult;

export type ExtractUniqueTagsTestCase = TestCaseBase<
  NestedItem[],
  UniqueTagsResult
>;
