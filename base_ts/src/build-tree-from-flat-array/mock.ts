import { BuildTreeTestCase } from './types';

export const buildTreeCases: BuildTreeTestCase[] = [
  {
    input: [
      { id: 1, parentId: null, name: 'root' },
      { id: 2, parentId: 1, name: 'child' },
      { id: 3, parentId: 2, name: 'subchild' },
    ],
    expected: [
      {
        id: 1,
        parentId: null,
        name: 'root',
        children: [
          {
            id: 2,
            parentId: 1,
            name: 'child',
            children: [
              {
                id: 3,
                parentId: 2,
                name: 'subchild',
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    input: [
      { id: 1, parentId: null, name: 'Root 1' },
      { id: 2, parentId: 1, name: 'Child 1.1' },
      { id: 3, parentId: 1, name: 'Child 1.2' },
      { id: 4, parentId: 2, name: 'Child 1.1.1' },
      { id: 5, parentId: null, name: 'Root 2' },
      { id: 6, parentId: 5, name: 'Child 2.1' },
      { id: 7, parentId: 5, name: 'Child 2.2' },
      { id: 8, parentId: 6, name: 'Child 2.1.1' },
      { id: 9, parentId: null, name: 'Root 3' },
    ],
    expected: [
      {
        id: 1,
        parentId: null,
        name: 'Root 1',
        children: [
          {
            id: 2,
            parentId: 1,
            name: 'Child 1.1',
            children: [
              {
                id: 4,
                parentId: 2,
                name: 'Child 1.1.1',
                children: [],
              },
            ],
          },
          {
            id: 3,
            parentId: 1,
            name: 'Child 1.2',
            children: [],
          },
        ],
      },
      {
        id: 5,
        parentId: null,
        name: 'Root 2',
        children: [
          {
            id: 6,
            parentId: 5,
            name: 'Child 2.1',
            children: [
              {
                id: 8,
                parentId: 6,
                name: 'Child 2.1.1',
                children: [],
              },
            ],
          },
          {
            id: 7,
            parentId: 5,
            name: 'Child 2.2',
            children: [],
          },
        ],
      },
      {
        id: 9,
        parentId: null,
        name: 'Root 3',
        children: [],
      },
    ],
  },
];
