import { useContext } from 'react';

import {
  Theme, ThemeContext, LOCAL_STORAGE_THEME_KEY, ValuesOfTheme,
} from 'shared/providers/ThemeProvider/lib/ThemeContext';

type UseThemeResult = {
  toggleTheme: () => void;
  theme: ValuesOfTheme;
};

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.Light ? Theme.Dark : Theme.Light;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme,
    toggleTheme,
  };
};
