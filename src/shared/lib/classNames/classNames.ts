type Mods = Record<string, boolean | string>;

export const classNames = (
  baseClass: string,
  mods: Mods = {},
  additional: string[] = [],
): string => [
  baseClass,
  ...additional.filter(Boolean),
  ...Object.entries(mods)
    .filter(([, value]) => value)
    .map(([className]) => className),
].join(' ');
