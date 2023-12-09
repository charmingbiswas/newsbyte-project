import { Theme, ThemeOptions, createTheme } from '@mui/material';
import { ColorModeType, ThemeModeType } from '../types';
import { createContext, useMemo, useState } from 'react';
import { getColorTokens } from './colorsTokens';

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

const themeSettings = (mode: ThemeModeType): ThemeOptions => {
  const colors = getColorTokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode == 'dark'
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.secondary[500],
            },
            background: {
              default: colors.primary[500],
            },
            text: {
              primary: colors.whiteAccent[500],
            },
          }
        : {
            primary: {
              main: colors.primary[200],
            },
            secondary: {
              main: colors.secondary[200],
            },
          }),
    },
  };
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
