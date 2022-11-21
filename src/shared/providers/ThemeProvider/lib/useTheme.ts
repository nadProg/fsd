import { useContext } from 'react';

import {
  Theme, ThemeContext, LOCAL_STORAGE_THEME_KEY, ValuesOfTheme,
} from './ThemeContext';

type UseThemeResult = {
  toggleTheme: () => void;
  theme: ValuesOfTheme;
};

export const useTheme = (): UseThemeResult => {
  const {
    theme,
    setTheme,
  } = useContext(ThemeContext);

  const toggleTheme = () => {
    let newTheme: ValuesOfTheme;

    switch (theme) {
    case Theme.Dark: {
      newTheme = Theme.Light;
      break;
    }

    case Theme.Light: {
      newTheme = Theme.Orange;
      break;
    }

    case Theme.Orange: {
      newTheme = Theme.Dark;
      break;
    }

    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const exhaustiveCheck: never = theme;
      newTheme = Theme.Light;
      break;
    }
    }

    setTheme?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme,
    toggleTheme,
  };
};
