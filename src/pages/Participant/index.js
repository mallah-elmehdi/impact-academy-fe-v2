import { Container, Stack } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { DashboardTitle, DashboardWrap, Footer, Navbar } from '../../components';
import { PARTICIPANT_NAVBAR } from '../../constants/participant';
import ProtectionParticipant from './ProtectionParticipant';

const Participant = () => {
    return (
        <ProtectionParticipant>
            <DashboardWrap>
                <Navbar navbarItems={PARTICIPANT_NAVBAR} />
                <Container sx={{ py: 3 }}>
                    <Stack spacing={3}>
                        <DashboardTitle navbarItems={PARTICIPANT_NAVBAR} />
                        <Outlet />
                    </Stack>
                </Container>
                <Footer />
            </DashboardWrap>
        </ProtectionParticipant>
    );
};

export default Participant;
