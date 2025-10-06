import { TestCaseBase } from 'types/common';

export type SchemaDefinition = Record<string, 'string' | 'number' | 'boolean'>;

export type ValidateObjectShapeFn = (obj: Record<string, unknown>, schema: SchemaDefinition) => boolean;

export type ValidateObjectShapeTestCase = TestCaseBase<[Record<string, unknown>, SchemaDefinition], boolean>;