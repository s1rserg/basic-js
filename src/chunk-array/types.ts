import { TestCaseBase } from 'types/common';

export type ChunkArrayFn = <T>(arr: T[], size: number) => T[][];

export type ChunkArrayTestCase = TestCaseBase<[number[], number], number[][]>;