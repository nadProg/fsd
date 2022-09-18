type Mods = Record<string, boolean | string>;

export const classNames = (
  baseClass: string,
  mods: Mods,
  additional: string[]
): string => {
  return [
    baseClass,
    ...additional,
    ...Object.entries(mods)
      .filter(([className, value]) => value)
      .map(([className]) => className),
  ].join(' ');
};
