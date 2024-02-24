import { Container } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { DashboardWrap, Footer, Navbar } from '../../components';
import { MENTOR_NAVBAR } from '../../constants/mentor';
import ProtectionMentor from './ProtectionMentor';

const Mentor = () => {
    return (
        <ProtectionMentor>
            <DashboardWrap>
                <Navbar navbarItems={MENTOR_NAVBAR} />
                <Container sx={{ p: 3, flexGrow: 1 }}>
                    <Outlet />
                </Container>
                <Footer />
            </DashboardWrap>
        </ProtectionMentor>
    );
};

export default Mentor;
