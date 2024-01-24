import { Box, Grid, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Card } from '../../../components';
import { PROFILE_PERSONNEL, PROFILE_PROFESSIONAL } from '../../../constants/student';
import Header from './Header';

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
                    <Card>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography
                                    sx={(theme) => ({
                                        fontSize: theme.fontSize.lg,
                                        color: theme.palette.common.black,
                                        fontWeight: theme.fontWeight.semibold,
                                    })}
                                >
                                    Information personnelles
                                </Typography>
                            </Grid>
                            {PROFILE_PERSONNEL.map((item) => (
                                <Grid item key={item.obj} md={4} sm={6} xs={12}>
                                    <Stack>
                                        <Typography
                                            sx={(theme) => ({
                                                fontSize: theme.fontSize.xs,
                                                color: theme.palette.common.black,
                                                fontWeight: theme.fontWeight.bold,
                                            })}
                                        >
                                            {item.title}
                                        </Typography>
                                        <Typography
                                            sx={(theme) => ({
                                                fontSize: theme.fontSize.md,
                                                color: theme.palette.common.black,
                                                fontWeight: theme.fontWeight.light,
                                                textTransform: 'uppercase',
                                            })}
                                        >
                                            {profile ? (profile[item.obj] ? profile[item.obj] : '-') : '-'}
                                        </Typography>
                                    </Stack>
                                </Grid>
                            ))}
                        </Grid>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Card>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography
                                    sx={(theme) => ({
                                        fontSize: theme.fontSize.lg,
                                        color: theme.palette.common.black,
                                        fontWeight: theme.fontWeight.semibold,
                                    })}
                                >
                                    Information professionnelle
                                </Typography>
                            </Grid>
                            {PROFILE_PROFESSIONAL.map((item) => (
                                <Grid key={item.obj} item md={6} xs={12}>
                                    <Stack>
                                        <Typography
                                            sx={(theme) => ({
                                                fontSize: theme.fontSize.xs,
                                                color: theme.palette.common.black,
                                                fontWeight: theme.fontWeight.bold,
                                            })}
                                        >
                                            {item.title}
                                        </Typography>
                                        {item.bool ? (
                                            <Typography
                                                sx={(theme) => ({
                                                    fontSize: theme.fontSize.md,
                                                    color: theme.palette.common.black,
                                                    fontWeight: theme.fontWeight.light,
                                                    textTransform: 'uppercase',
                                                })}
                                            >
                                                {profile ? (profile[item.obj] ? 'non' : 'oui') : '-'}
                                            </Typography>
                                        ) : item.enum ? (
                                            <Typography
                                                sx={(theme) => ({
                                                    fontSize: theme.fontSize.md,
                                                    color: theme.palette.common.black,
                                                    fontWeight: theme.fontWeight.light,
                                                    textTransform: 'uppercase',
                                                })}
                                            >
                                                {profile
                                                    ? profile[item.obj]
                                                        ? item.enum.filter((i) => {
                                                              return i.title === profile[item.obj];
                                                          })[0]?.value
                                                        : '-'
                                                    : '-'}
                                            </Typography>
                                        ) : (
                                            <Typography
                                                sx={(theme) => ({
                                                    fontSize: theme.fontSize.md,
                                                    color: theme.palette.common.black,
                                                    fontWeight: theme.fontWeight.light,
                                                    textTransform: 'uppercase',
                                                })}
                                            >
                                                {profile ? (profile[item.obj] ? profile[item.obj] : '-') : '-'}
                                            </Typography>
                                        )}
                                    </Stack>
                                </Grid>
                            ))}
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Profile;
