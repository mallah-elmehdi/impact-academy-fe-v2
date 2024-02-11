import { Container } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { DashboardWrap, Footer, Navbar } from '../../components';
import { ADMIN_NAVBAR } from '../../constants/admin';
import ProtectionAdmin from './ProtectionAdmin';

const Admin = () => {
    return (
        <ProtectionAdmin>
            <DashboardWrap>
                <Navbar navbarItems={ADMIN_NAVBAR} />
                <Container sx={{ p: 3, flexGrow: 1 }}>
                    <Outlet />
                </Container>
                <Footer />
            </DashboardWrap>
        </ProtectionAdmin>
    );
};

export default Admin;
