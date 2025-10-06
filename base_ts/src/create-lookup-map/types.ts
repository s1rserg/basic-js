import { TestCaseBase } from 'types/common';

export type ItemWithId = { id: number; [key: string]: unknown };

export type CreateLookupMapFn = (array: ItemWithId[]) => Record<number, ItemWithId>;

export type CreateLookupMapTestCase = TestCaseBase<ItemWithId[], Record<number, ItemWithId>>;