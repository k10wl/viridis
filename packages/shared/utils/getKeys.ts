export function getKeys<T extends Record<string, unknown>>(
  object: T,
): Array<keyof T> {
  return <Array<keyof T>>Object.keys(object);
}
