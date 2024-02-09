export const PAGES = {
    landing: {
        title: 'Bienvenu',
        url: '/',
    },
    logIn: {
        title: 'Impact Academy | Se connecter',
        url: '/se-connecter',
    },

    // participant
    participant: {
        url: '/participant',
    },
    participantHome: {
        url: 'accueil',
    },
    participantProfile: {
        url: 'profile',
    },
    participantQuiz: {
        url: 'quiz',
    },
    participantQuizDetails: {
        url: 'quiz/:quizId',
    },
    participantEvaluation: {
        url: 'evaluation',
    },


    // mentor
    mentor: {
        url: '/mentor',
    },

    // admin
    admin: {
        url: '/admin',
    },

    notFound: {
        title: 'Oops!',
        url: '*',
    },
};
