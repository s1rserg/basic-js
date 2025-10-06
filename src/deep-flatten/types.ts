import { TestCaseBase } from 'types/common';

export type DeepFlattenFn = (input: unknown[]) => unknown[];

export type DeepFlattenTestCase = TestCaseBase<unknown[], unknown[]>;