export const getKeys = <T extends Record<string, unknown>>(
  object: T
): Array<keyof T> => <Array<keyof T>>Object.keys(object);
