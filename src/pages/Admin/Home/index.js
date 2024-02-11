import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { DashboardTitle } from '../../../components';
import { ADMIN_NAVBAR } from '../../../constants/admin';

const Home = () => {
    return (
        <Box>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <DashboardTitle>{ADMIN_NAVBAR[0].title}</DashboardTitle>
                </Grid>
                <Grid item xs={12}>
                    <Typography
                        sx={(theme) => ({
                            fontSize: theme.fontSize['3xl'],
                            fontWeight: theme.fontWeight.bold,
                            color: theme.palette.common.black,
                        })}
                    >
                        Bienvenue sur la page administration
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Home;
