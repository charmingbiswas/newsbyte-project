export type ThemeModeType = 'dark' | 'light';

export type ColorModeType = {
  toggleColorMode: () => void;
};

export type GlobalContextType = {
  apiData: any;
  isLoading: boolean;
};
