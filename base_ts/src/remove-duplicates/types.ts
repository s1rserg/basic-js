import { TestCaseBase } from 'types/common';

export type RemoveDuplicatesFn = <T>(array: T[]) => T[];

export interface RemoveDuplicatesTestCase<T> extends TestCaseBase<T[], T[]> {}
