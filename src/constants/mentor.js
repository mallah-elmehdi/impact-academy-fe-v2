import { BsHouse, BsListCheck } from 'react-icons/bs';
import { PAGES } from './pages';

export const MENTOR_NAVBAR = [
    {
        id: 'admin-home',
        title: 'Accueil',
        icon: <BsHouse />,
        url: PAGES.mentorHome.url,
    },
    {
        id: 'admin-presence',
        title: 'Présence',
        icon: <BsListCheck />,
        url: PAGES.mentorPresence.url,
    },
];
