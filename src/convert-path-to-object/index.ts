import { ConvertPathToObjectFn } from './types';

/**
 * @task Convert Path to Object
 * @description Convert a dot-delimited string path into a nested object structure with a value at the end.
 * The function takes a path string (like 'a.b.c') and a value, then returns an object such that the path is represented as nested keys leading to the given value.
 *
 * @example
 * Input:
 * ('a.b.c', 42)
 * Output:
 * { a: { b: { c: 42 } } }
 *
 * Input:
 * ('x', 'value')
 * Output:
 * { x: 'value' }
 *
 * Input:
 * ('', 123)
 * Output:
 * {}
 */
export const convertPathToObject: ConvertPathToObjectFn = (path, value) => {
  if (!path) {
    return {};
  }

  const createPath = (parts: string[], index = 0): Record<string, unknown> => {
    const key = parts[index];
    if (index === parts.length - 1) {
      return { [key]: value };
    }
    return { [key]: createPath(parts, index + 1) };
  };

  return createPath(path.split('.'));
};

export const convertPathToObjectIterative: ConvertPathToObjectFn = (
  path,
  value,
) => {
  if (!path) return {};

  const parts = path.split('.');
  const result: Record<string, any> = {};
  let current = result;

  for (let i = 0; i < parts.length; i++) {
    const key = parts[i];
    if (i !== parts.length - 1) {
      current[key] = {};
      current = current[key];
    } else {
      current[key] = value;
    }
  }

  return result;
};
