import React from 'react';
import { Navigate } from 'react-router-dom';
import { PAGES } from '../../constants/pages';
import { ROLES } from '../../constants/programme';

const ProtectionParticipant = ({ auth, children }) => {
    if (!auth || auth.role !== ROLES.PARTICIPANT) {
        return <Navigate to={PAGES.logIn.url} replace />;
    }
    return children;
};

export default ProtectionParticipant;
