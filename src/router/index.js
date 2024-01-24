import { Navigate, createBrowserRouter } from 'react-router-dom';
import { PAGES } from '../constants/pages';
import { Admin, Base, LogIn, Mentor, Participant, ParticipantHome, ParticipantProfile } from '../pages';

export default createBrowserRouter([
    {
        path: '',
        element: <Base />,
        children: [
            // -------------- PUBLIC PAGE
            {
                path: PAGES.landing.url,
                element: <Navigate to={PAGES.logIn.url} replace />,
                index: true,
            },
            {
                path: PAGES.logIn.url,
                element: <LogIn />,
            },

            // -------------- PARTICIPANT
            {
                path: PAGES.participant.url,
                element: <Participant />,
                children: [
                    {
                        path: PAGES.participantHome.url,
                        element: <ParticipantHome />,
                        index: true,
                    },
                    {
                        path: PAGES.participantProfile.url,
                        element: <ParticipantProfile />,
                    },
                ],
            },

            // -------------- MENTOR
            {
                path: PAGES.mentor.url,
                element: <Mentor />,
            },

            // -------------- ADMIN
            {
                path: PAGES.admin.url,
                element: <Admin />,
            },

            // -------------- 404
            {
                path: PAGES.notFound.url,
                element: <>404</>,
                // <Navigate to={PAGES.landing.url} />,
            },
        ],
        errorElement: <div>ERROR</div>,
    },
]);
