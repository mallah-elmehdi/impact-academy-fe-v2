import { Box, Grid } from '@mui/material';
import React from 'react';
import { DashboardTitle } from '../../../components';
import { MENTOR_NAVBAR } from '../../../constants/mentor';

const Home = () => {
    return (
        <Box>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <DashboardTitle>{MENTOR_NAVBAR[0].title}</DashboardTitle>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Home;
