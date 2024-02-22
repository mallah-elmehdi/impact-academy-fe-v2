export { default as Base } from './Base';

// ========== PUBLIC PAGES
export { default as LogIn } from './LogIn';

// ========== PARTICIPANT PAGES
export { default as Participant } from './Participant';
export { default as ParticipantHome } from './Participant/Home';
export { default as ParticipantProfile } from './Participant/Profile';
export { default as ParticipantEvaluation } from './Participant/Evaluation';
export { default as ParticipantQuiz } from './Participant/Quiz';
export { default as ParticipantQuizDetails } from './Participant/Quiz/QuizDetails';
export { default as ParticipantQuizAnswers } from './Participant/Quiz/QuizAnswers';

// ========== MENTOR PAGES
export { default as Mentor } from './Mentor';
export { default as MentorHome } from './Mentor/Home';
export { default as MentorPresence } from './Mentor/Presence';
export { default as MentorEvaluation } from './Mentor/Evaluation';
export { default as MentorEvaluationParticipantEvaluation } from './Mentor/Evaluation/ParticipantEvaluation';

// ========== ADMIN PAGES
export { default as Admin } from './Admin';
export { default as AdminHome } from './Admin/Home';
export { default as AdminGroup } from './Admin/Group';
export { default as AdminUserParticipant } from './Admin/Users/Participant';
// export { default as adminUserMentor } from './Admin/Group';
