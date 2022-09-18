import { useState, FC, useMemo } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, ValuesOfTheme } from '../lib/ThemeContext';

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ValuesOfTheme) || Theme.Light;

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<ValuesOfTheme>(defaultTheme);

  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
