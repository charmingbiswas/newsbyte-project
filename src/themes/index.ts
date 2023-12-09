import { Theme, ThemeOptions, createTheme } from '@mui/material';
import { ColorModeType, ThemeModeType } from '../types';
import { createContext, useMemo, useState } from 'react';

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

const themeSettings = (mode: ThemeModeType): ThemeOptions => {
  return {};
};

export const useMode = (): [Theme, ColorModeType] => {
  const [mode, setMode] = useState<ThemeModeType>('dark');

  const colorMode = useMemo(() => {
    return {
      toggleColorMode: () =>
        setMode((prev) => (prev === 'dark' ? 'light' : 'dark')),
    };
  }, []);

  const theme = useMemo(() => {
    return createTheme(themeSettings(mode));
  }, [mode]);

  return [theme, colorMode];
};
