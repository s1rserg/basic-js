import { TestCaseBase } from 'types/common';

export type ShallowEqualFn = (a: Record<string, unknown>, b: Record<string, unknown>) => boolean;

export type ShallowEqualTestCase = TestCaseBase<[Record<string, unknown>, Record<string, unknown>], boolean>;