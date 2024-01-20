import { Navigate, createBrowserRouter } from 'react-router-dom';
import { PAGES } from '../constants/pages';
import { Base, LogIn } from '../pages';

export default createBrowserRouter([
    {
        path: '',
        element: <Base />,
        children: [
            // -------------- PUBLIC PAGE
            {
                path: PAGES.landing.url,
                element: <div>landing page</div>,
                index: true,
            },
            {
                path: PAGES.logIn.url,
                element: <LogIn />,
            },
            // -------------- 404
            {
                path: PAGES.notFound.url,
                element: <Navigate to={PAGES.landing.url} />,
            },
        ],
        errorElement: <div>ERROR</div>,
    },
]);
