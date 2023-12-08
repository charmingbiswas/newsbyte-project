import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../rootLayout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
    },
]);

export { router };
