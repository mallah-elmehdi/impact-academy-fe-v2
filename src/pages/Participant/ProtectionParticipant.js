import React from 'react';
import { Navigate } from 'react-router-dom';
import { PAGES } from '../../constants/pages';
import { ROLES } from '../../constants/programme';
import { useLocation } from 'react-router-dom';

const ProtectionParticipant = ({ auth, children }) => {
    const location = useLocation();

    // if (!auth || auth.role !== ROLES.PARTICIPANT) {
    //     return <Navigate to={PAGES.logIn.url} replace />;
    // }
    if (location.pathname === PAGES.participant.url) {
        return <Navigate to={PAGES.participantHome.url} replace />;
    }
    return children;
};

export default ProtectionParticipant;
