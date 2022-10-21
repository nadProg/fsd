import {
  useState, FC, useMemo, useEffect,
} from 'react';
import {
  initialThemeContext, ThemeContext, ValuesOfTheme,
} from '../lib/ThemeContext';

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<ValuesOfTheme>(initialThemeContext.theme);

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
