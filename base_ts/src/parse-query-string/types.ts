import { TestCaseBase } from 'types/common';

export type ParseQueryStringFn = (query: string) => Record<string, string>;

export type ParseQueryStringTestCase = TestCaseBase<string, Record<string, string>>;