import { TestCaseBase } from 'types/common';

export interface Breadcrumb {
  path: string;
  label: string;
}

export type CreateBreadcrumbsFn = (paths: string[]) => Breadcrumb[];

export type CreateBreadcrumbsTestCase = TestCaseBase<string[], Breadcrumb[]>;