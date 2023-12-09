import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../rootLayout';
import Home from '../components/Home';
import CryptoConverter from '../components/CryptoConverter';

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
                element: <CryptoConverter />,
            },
        ],
    },
]);

export { router };
