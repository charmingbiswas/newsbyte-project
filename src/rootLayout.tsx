import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import { ColorModeContext, useMode } from './themes';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function RootLayout() {
  const [theme, colorMode] = useMode();
  return (
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
  );
}

export default RootLayout;
