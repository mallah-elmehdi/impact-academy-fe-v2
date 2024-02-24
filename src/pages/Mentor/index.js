import { Container } from '@mui/material';
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { DashboardWrap, Footer, Navbar } from '../../components';
import { MENTOR_NAVBAR } from '../../constants/mentor';
import ProtectionMentor from './ProtectionMentor';
import { mentorProfile } from '../../contexts/mentor/apis';
import { useDispatch, useSelector } from 'react-redux';
import { participantByMentor } from '../../contexts/participant/apis';

const Mentor = () => {
    const dispatch = useDispatch();
    const { profile } = useSelector((store) => store.mentor);
    const { participants } = useSelector((store) => store.participant);

    useEffect(() => {
        if (!profile) {
            dispatch(mentorProfile());
        }
        if (participants.length === 0) {
            dispatch(participantByMentor());
        }
    }, []);

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
