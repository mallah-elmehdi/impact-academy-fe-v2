import React from 'react';
import { Navigate } from 'react-router-dom';
import { PAGES } from '../../constants/pages';
import { ROLES } from '../../constants/programme';
import { useLocation } from 'react-router-dom';

const ProtectionMentor = ({ auth, children }) => {
    const location = useLocation();
    // if (!auth || auth.role !== ROLES.MENTOR) {
    //     return <Navigate to={PAGES.logIn.url} replace />;
    // }

    if (location.pathname === PAGES.mentor.url) {
        return <Navigate to={PAGES.mentorHome.url} replace />;
    }
    return children;
};

export default ProtectionMentor;
