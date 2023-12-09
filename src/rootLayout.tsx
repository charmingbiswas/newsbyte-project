import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import { ColorModeContext, useMode } from './themes';
import { CssBaseline, ThemeProvider } from '@mui/material';
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
        <Sidebar />
        <Outlet />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default RootLayout;
