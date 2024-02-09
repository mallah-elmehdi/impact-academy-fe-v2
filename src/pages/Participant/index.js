import { Container } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { DashboardWrap, Footer, Navbar } from '../../components';
import { PARTICIPANT_NAVBAR } from '../../constants/participant';
import ProtectionParticipant from './ProtectionParticipant';

const Participant = () => {
    return (
        <ProtectionParticipant>
            <DashboardWrap>
                <Navbar navbarItems={PARTICIPANT_NAVBAR} />
                <Container sx={{ p: 3, flexGrow: 1 }}>
                    <Outlet />
                </Container>
                <Footer />
            </DashboardWrap>
        </ProtectionParticipant>
    );
};

export default Participant;
