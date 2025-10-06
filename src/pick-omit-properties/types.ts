import { TestCaseBase } from 'types/common';

export type PickOmitMode = 'pick' | 'omit';

export type PickOmitTestCase = TestCaseBase<
  [Record<string, unknown>, string[], PickOmitMode],
  Record<string, unknown>
>;
