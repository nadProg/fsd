import { createContext } from 'react';
import { ValuesOf } from 'shared/types';

export const Theme = {
  Dark: 'dark',
  Light: 'light',
  Orange: 'orange',
} as const;

export type ValuesOfTheme = ValuesOf<typeof Theme>;

export type ThemeContextValue = {
  theme: ValuesOfTheme;
  setTheme?: (theme: ValuesOfTheme) => void;
};

export const LOCAL_STORAGE_THEME_KEY = 'theme';

const DEFAULT_THEME = Theme.Light;

const savedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ValuesOfTheme;

export const initialThemeContext: ThemeContextValue = {
  theme: savedTheme || DEFAULT_THEME,
};

export const ThemeContext = createContext<ThemeContextValue>(initialThemeContext);
