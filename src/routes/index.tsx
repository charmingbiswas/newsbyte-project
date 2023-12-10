import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../rootLayout';
import Home from '../pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);

export { router };
