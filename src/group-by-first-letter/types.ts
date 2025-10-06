import { TestCaseBase } from 'types/common';

export type GroupByFirstLetterFn = (words: string[]) => Record<string, string[]>;

export type GroupByFirstLetterTestCase = TestCaseBase<string[], Record<string, string[]>>;