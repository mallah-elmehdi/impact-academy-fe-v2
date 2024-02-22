import { Navigate, createBrowserRouter } from 'react-router-dom';
import { PAGES } from '../constants/pages';
import {
    Admin,
    AdminGroup,
    AdminHome,
    AdminUserParticipant,
    AdminUserMentor,
    Base,
    LogIn,
    Mentor,
    MentorEvaluation,
    MentorEvaluationParticipantEvaluation,
    MentorHome,
    MentorPresence,
    Participant,
    ParticipantEvaluation,
    ParticipantHome,
    ParticipantProfile,
    ParticipantQuiz,
    ParticipantQuizAnswers,
    ParticipantQuizDetails,
} from '../pages';

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
                    {
                        path: PAGES.participantEvaluation.url,
                        element: <ParticipantEvaluation />,
                    },
                    {
                        path: PAGES.participantQuiz.url,
                        element: <ParticipantQuiz />,
                    },
                    {
                        path: PAGES.participantQuiz.url + '/:quizId',
                        element: <ParticipantQuizDetails />,
                    },
                    {
                        path: PAGES.participantQuiz.url + '/:quizId/answers',
                        element: <ParticipantQuizAnswers />,
                    },
                ],
            },

            // -------------- MENTOR
            {
                path: PAGES.mentor.url,
                element: <Mentor />,
                children: [
                    {
                        path: PAGES.mentorHome.url,
                        element: <MentorHome />,
                        index: true,
                    },
                    {
                        path: PAGES.mentorPresence.url,
                        element: <MentorPresence />,
                    },
                    {
                        path: PAGES.mentorEvaluation.url,
                        element: <MentorEvaluation />,
                    },
                    {
                        path: PAGES.mentorEvaluation.url + '/:participantId',
                        element: <MentorEvaluationParticipantEvaluation />,
                    },
                ],
            },

            // -------------- ADMIN
            {
                path: PAGES.admin.url,
                element: <Admin />,
                children: [
                    {
                        path: PAGES.adminHome.url,
                        element: <AdminHome />,
                        index: true,
                    },
                    {
                        path: PAGES.adminGroup.url,
                        element: <AdminGroup />,
                    },
                    {
                        path: PAGES.adminUserParticipant.url,
                        element: <AdminUserParticipant />,
                    },
                    {
                        path: PAGES.adminUserMentor.url,
                        element: <AdminUserMentor />,
                    },
                ],
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
