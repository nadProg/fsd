import { useState, useMemo, useEffect } from 'react';
import { PropsWithChildren } from '@/shared/types';
import { initialThemeContext, ThemeContext, ValuesOfTheme } from '../lib/ThemeContext';

type ThemeProviderProps = PropsWithChildren;

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ValuesOfTheme>(initialThemeContext.theme);

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
