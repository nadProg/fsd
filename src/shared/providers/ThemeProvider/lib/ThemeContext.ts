import { createContext } from 'react';
import { ValuesOf } from 'shared/types';

export const Theme = {
  Dark: 'dark',
  Light: 'light',
} as const;

export type ValuesOfTheme = ValuesOf<typeof Theme>;

export type ThemeContextValue = {
  theme?: ValuesOfTheme;
  setTheme?: (theme: ValuesOfTheme) => void;
};

export const ThemeContext = createContext<ThemeContextValue>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
