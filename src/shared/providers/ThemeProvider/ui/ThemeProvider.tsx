import {
  useState, FC, useMemo, useEffect,
} from 'react';
import {
  LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, ValuesOfTheme,
} from '../lib/ThemeContext';

const DEFAULT_THEME = Theme.Light;

const savedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ValuesOfTheme;

const initialTheme = savedTheme || DEFAULT_THEME;

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<ValuesOfTheme>(initialTheme);

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
