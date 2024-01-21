import React from 'react';
import { Navigate } from 'react-router-dom';
import { PAGES } from '../../constants/pages';
import { ROLES } from '../../constants/programme';

const ProtectionMentor = ({ auth, children }) => {
    if (!auth || auth.role !== ROLES.MENTOR) {
        return <Navigate to={PAGES.logIn.url} replace />;
    }
    return children;
};

export default ProtectionMentor;
