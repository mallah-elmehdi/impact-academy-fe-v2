import { Box, Grid } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { DashboardTitle, DividerLine, Files } from '../../../components';
import { PARTICIPANT_NAVBAR } from '../../../constants/participant';
import Header from './Header';
import InfoPersonnel from './InfoPersonnel';
import InfoProfessional from './InfoProfessional';

const Profile = () => {
    const {
        formState: { errors },
        handleSubmit,
        control,
        reset,
        setValue,
    } = useForm({
        defaultValues: {
            first_name: '',
            last_name: '',
            zone: '',
            city: '',
            phone: '',
            email: '',
            education_level: '',
            speciality: '',
            is_working: '',
            job_domain: '',
            years_of_experience: '',
            orientation: '',
        },
    });

    // ===== submit
    const onSubmit = (data, event) => {
        event.preventDefault();
    };

    return (
        <Box>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <DashboardTitle>{PARTICIPANT_NAVBAR[1].title}</DashboardTitle>
                </Grid>
                <Grid item xs={12}>
                    <Header />
                </Grid>
                <Grid item xs={12}>
                    <InfoPersonnel />
                </Grid>
                <Grid item xs={12}>
                    <InfoProfessional />
                </Grid>
                <Grid item xs={12}>
                    <DividerLine color="secondary" />
                </Grid>
                <Grid item xs={12}>
                    <Files />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Profile;
