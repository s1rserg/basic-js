import { CreateBreadcrumbsTestCase } from './types';

export const createBreadcrumbsCases: CreateBreadcrumbsTestCase[] = [
  {
    input: ['/home', '/home/products', '/home/products/electronics'],
    expected: [
      { path: '/home', label: 'Home' },
      { path: '/home/products', label: 'Products' },
      { path: '/home/products/electronics', label: 'Electronics' },
    ],
  },
  {
    input: ['/'],
    expected: [{ path: '/', label: 'Home' }],
  },
  {
    input: ['/about', '/about/team'],
    expected: [
      { path: '/about', label: 'About' },
      { path: '/about/team', label: 'Team' },
    ],
  },
  {
    input: ['/products/', '/products/toys'],
    expected: [
      { path: '/products/', label: 'Products' },
      { path: '/products/toys', label: 'Toys' },
    ],
  },
  {
    input: ['/nested/deep/path'],
    expected: [{ path: '/nested/deep/path', label: 'Path' }],
  },
  {
    input: [],
    expected: [],
  },
];
