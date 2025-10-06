import { TestCaseBase } from 'types/common';

export type ConvertPathToObjectFn = (
  path: string,
  value: unknown,
) => Record<string, unknown>;

export type ConvertPathToObjectTestCase = TestCaseBase<
  [string, unknown],
  Record<string, unknown>
>;
