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
        url: PAGES.participantQuiz.url,
    },
    {
        id: 'participant-evaluation',
        title: 'Évaluation',
        icon: <BsCheck />,
        url: PAGES.participantEvaluation.url,
    },
];

export const PROFILE_PERSONNEL = [
    {
        title: 'Nom',
        obj: 'firstname',
    },
    {
        title: 'Prénom',
        obj: 'lastname',
    },
    {
        title: 'Milieu',
        obj: 'zone',
    },
    {
        title: 'Téléphone',
        obj: 'phone',
    },
    {
        title: 'Ville',
        obj: 'city',
    },
    {
        title: 'Adresse Email',
        obj: 'email',
    },
];

export const PROFILE_PROFESSIONAL = [
    {
        title: "Quel est votre niveau d'etude?",
        obj: 'education_level',
    },
    {
        title: 'Quelle est votre spécialité?',
        obj: 'speciality',
    },
    {
        title: 'Est-ce que vous occupez un poste actuellement?',
        obj: 'is_working',
        bool: true,
    },
    {
        title: "Quel est votre secteur d'activité?",
        obj: 'job_domain',
    },
    {
        title: "Nombre d'Année d'expérience",
        obj: 'years_of_experience',
        enum: [
            {
                title: 'LT_1',
                value: '< 1 an',
            },
            {
                title: 'BW_1_3',
                value: '1 an - 3 ans',
            },
            {
                title: 'BW_3_5',
                value: '3 ans - 5 ans',
            },
            {
                title: 'GT_5',
                value: '> 5 ans',
            },
        ],
    },
    {
        title: 'Quelle est  votre orientation recherchée?',
        obj: 'orientation',
    },
];

export const ZONE = ['Urbain', 'Rural', 'Semi urbain'];
export const EDUCATION_LEVEL = [
    'Sans / بدون',
    'Primaire / ابتدائي',
    'Collège / ثانوي إعدادي',
    'Lycée / ثانوي تأهيلي',
    'Supérieur Bac +3 / عالي بكالوريا + 3',
    'Supérieur : Bac +5 / عالي بكالوريا + 5',
    'Doctorat / دكتوراه',
];
export const JOB_DOMAIN = [
    'Artisanat',
    'Services',
    'Marketing/communication',
    'Electricité / Electronique',
    'Commerce',
    'Restauration',
    'Textile',
    'Automobile',
    'Education / Formation',
    'Tourisme et loisirs',
    'Agriculture',
    'BTP',
    'E-commerce',
    'Santé / Parapharmacie / soins',
    'Sport et divertissement',
    'Chimie / parachimie',
    'Développement durable, recyclage, environnement',
    'Logistique',
    'Audiovisuel',
    'Autre',
];

export const ORIENTATION = ['Stage', 'Emploi', 'Travail associatif', 'Entrepreneuriat', 'Master', 'Doctorat'];
