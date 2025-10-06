import { TestCaseBase } from 'types/common';

export type GetNestedPropertyFn = (
  obj: Record<string, unknown>,
  path: string,
) => unknown;

export type GetNestedPropertyTestCase = TestCaseBase<
  [Record<string, unknown>, string],
  unknown
>;
