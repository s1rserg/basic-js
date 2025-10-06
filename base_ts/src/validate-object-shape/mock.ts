import { ValidateObjectShapeTestCase } from './types';

export const validateObjectShapeCases: ValidateObjectShapeTestCase[] = [
  {
    input: [{ name: 'Alice', age: 30 }, { name: 'string', age: 'number' }],
    expected: true,
  },
  {
    input: [{ name: 'Bob', age: '30' }, { name: 'string', age: 'number' }],
    expected: false,
  },
  {
    input: [{ name: 'Eve' }, { name: 'string', active: 'boolean' }],
    expected: false,
  },
  {
    input: [{ id: 1, active: true }, { id: 'number', active: 'boolean' }],
    expected: true,
  },
];