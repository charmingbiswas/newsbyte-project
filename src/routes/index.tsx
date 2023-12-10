import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../rootLayout';
import Home from '../pages/Home';
import Cryptoconverter from '../pages/CryptoConverter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/cryptoconverter',
        element: <Cryptoconverter />,
      },
    ],
  },
]);

export { router };
