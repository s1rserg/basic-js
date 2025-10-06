import { TestCaseBase } from 'types/common';

export type FormatPhoneNumberFn = (input: string) => string;

export type FormatPhoneNumberTestCase = TestCaseBase<string, string>;