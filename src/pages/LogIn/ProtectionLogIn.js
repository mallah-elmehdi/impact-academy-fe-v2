import React from 'react';
import { ROLES } from '../../constants/programme';
import { PAGES } from '../../constants/pages';
import { Navigate } from 'react-router-dom';

const ProtectionLogIn = ({ auth, children }) => {
    if (auth) {
        if (auth.role === ROLES.PARTICIPANT) {
            return <Navigate to={PAGES.participant.url} replace />;
        } else if (auth.role === ROLES.MENTOR) {
            return <Navigate to={PAGES.mentor.url} replace />;
        } else if (auth.role === ROLES.ADMIN) {
            return <Navigate to={PAGES.admin.url} replace />;
        } else {
            // logout
        }
    }
    return children;
};

export default ProtectionLogIn;
