import { TestCaseBase } from 'types/common';

export type GroupableRecord = Record<string, unknown>;

export type GroupByKey<T extends GroupableRecord> = keyof T;

export type GroupedResult<T extends GroupableRecord> = Record<string, T[]>;

export type GroupByFn = <T extends GroupableRecord>(
  array: T[],
  key: GroupByKey<T>,
) => GroupedResult<T>;

export interface GroupByTestCase
  extends TestCaseBase<GroupableRecord[], GroupedResult<GroupableRecord>> {
  key: GroupByKey<GroupableRecord>;
}
