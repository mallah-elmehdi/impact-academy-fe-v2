import { Bs0Circle, BsCheck, BsHouse, BsPerson, BsQuestion } from 'react-icons/bs';
import { PAGES } from './pages';

export const PARTICIPANT_NAVBAR = [
    {
        id: 'participant-home',
        title: 'Accueil',
        icon: <BsHouse />,
        url: PAGES.participantHome.url,
    },
    {
        id: 'participant-profile',
        title: 'Profile',
        icon: <BsPerson />,
        url: PAGES.participantProfile.url,
    },

    {
        id: 'participant-quiz',
        title: 'Quiz',
        icon: <BsQuestion />,
        url: PAGES.logIn.url,
    },
    {
        id: 'participant-evaluation',
        title: 'Évaluation',
        icon: <BsCheck />,
        url: PAGES.logIn.url,
    },
];
