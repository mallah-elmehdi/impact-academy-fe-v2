import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { DashboardTitle } from '../../../components';
import { MENTOR_NAVBAR } from '../../../constants/mentor';

const Home = () => {
    const { profile } = useSelector((store) => store.mentor);

    return (
        <Box>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <DashboardTitle>{MENTOR_NAVBAR[0].title}</DashboardTitle>
                </Grid>
                <Grid item xs={12}>
                    <Typography
                        sx={(theme) => ({
                            fontSize: theme.fontSize['3xl'],
                            fontWeight: theme.fontWeight.bold,
                            color: theme.palette.common.black,
                            textTransform: 'capitalize',
                        })}
                    >
                        Bienvenue {profile?.firstname} {profile?.lastname}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Home;
