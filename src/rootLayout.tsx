import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import { ColorModeContext, useMode } from './themes';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { GlobalContextType } from './types';

export const GlobalContext = createContext<GlobalContextType>({
  apiData: null,
  isLoading: true,
});

function RootLayout() {
  const [theme, colorMode] = useMode();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [apiData, setApiData] = useState<{ [key: string]: any }>({});
  useEffect(() => {
    //fetch data from proxy node server to prevent cors errors
    axios.get('http://localhost:4000').then((res) => {
      setApiData(res.data.data);
      setIsLoading(false);
    });
  }, []);
  return (
    <GlobalContext.Provider
      value={{
        apiData,
        isLoading,
      }}
    >
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box
            className="MainContainer"
            sx={{
              display: 'flex',
              padding: 4,
            }}
          >
            <Sidebar />
            <Box
              className="PageContent"
              sx={{
                flexGrow: 1,
                padding: 2,
              }}
            >
              <Outlet />
            </Box>
          </Box>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </GlobalContext.Provider>
  );
}

export default RootLayout;
