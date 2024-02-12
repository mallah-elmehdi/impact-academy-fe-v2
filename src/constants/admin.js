import { BsCollection, BsHouse, BsPeople, BsQuestion } from 'react-icons/bs';
import { PAGES } from './pages';

export const ADMIN_NAVBAR = [
    {
        id: 'admin-home',
        title: 'Accueil',
        icon: <BsHouse />,
        url: PAGES.adminHome.url,
    },
    {
        id: 'admin-group',
        title: 'Groupes',
        icon: <BsCollection />,
        url: PAGES.adminGroup.url,
    },
    {
        id: 'admin-user',
        title: 'Utilisateurs',
        icon: <BsPeople />,
        menu: [
            {
                title: 'participant',
                url: PAGES.adminUserParticipant.url,
            },
            {
                title: 'mentor',
                url: PAGES.adminUserMentor.url,
            },
        ],
    },
    {
        id: 'admin-quiz',
        title: 'Quiz',
        icon: <BsQuestion />,
        url: PAGES.adminQuiz.url,
    },
];
