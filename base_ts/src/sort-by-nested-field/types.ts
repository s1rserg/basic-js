import { TestCaseBase } from 'types/common';

export type SortByNestedFieldFn = <T extends Record<string, unknown>>(
  arr: T[],
  field: string,
) => T[];

export type SortByNestedFieldTestCase = TestCaseBase<
  [Record<string, unknown>[], string],
  Record<string, unknown>[]
>;
