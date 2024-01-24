import { Box, Grid, Stack, Typography, Divider } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Card, Files } from '../../../components';
import { PROFILE_PERSONNEL, PROFILE_PROFESSIONAL } from '../../../constants/student';
import Header from './Header';
import InfoPersonnel from './InfoPersonnel';
import InfoProfessional from './InfoProfessional';

const Profile = () => {
    // ========== DIALOG OPEN/CLOSE
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const profile = null;

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

    // ======= download cv
    const [filename, setFilename] = useState(null);
    const [file, setFile] = useState(null);
    const handleFileSelected = (e) => {
        if (e.target.files) {
            const data = new FormData();
            data.append('CV', e.target.files[0]);
            setFile(data);
            setFilename(e.target.files[0].name);
        }
    };
    const handleRemoveFile = () => {
        setFilename(null);
        setFile(null);
    };
    // ========= cv upload
    const handleSaveCV = () => {};

    return (
        <Box>
            <Grid container spacing={3}>
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
                    <Divider sx={(theme) => ({ height: '100%', borderColor: theme.palette.secondary.main })} />
                </Grid>
                <Grid item xs={12}>
                    <Files />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Profile;
