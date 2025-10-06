import { TestCaseBase } from 'types/common';

export interface ValidUser {
  name: string;
  age: number;
}

export type User = Partial<ValidUser>;

export type FilterValidUsersFn = (users: User[]) => ValidUser[];

export type FilterValidUsersTestCase = TestCaseBase<User[], ValidUser[]>;
