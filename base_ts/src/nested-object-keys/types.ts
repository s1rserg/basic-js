import { TestCaseBase } from 'types/common';

export type NestedObjectKeysFn = (obj: Record<string, unknown>) => string[];

export type NestedObjectKeysTestCase = TestCaseBase<Record<string, unknown>, string[]>;