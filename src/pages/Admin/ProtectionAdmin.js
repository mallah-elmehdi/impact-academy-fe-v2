import React from 'react';
import { Navigate } from 'react-router-dom';
import { PAGES } from '../../constants/pages';
import { ROLES } from '../../constants/programme';
import { useLocation } from 'react-router-dom';

const ProtectionAdmin = ({ auth, children }) => {
    const location = useLocation();

    // if (!auth || auth.role !== ROLES.ADMIN) {
    //     return <Navigate to={PAGES.logIn.url} replace />;
    // }
    if (location.pathname === PAGES.admin.url) {
        return <Navigate to={PAGES.adminHome.url} replace />;
    }
    return children;
};

export default ProtectionAdmin;
