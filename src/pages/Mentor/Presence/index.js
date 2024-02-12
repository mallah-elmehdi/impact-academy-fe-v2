import { Box, Grid } from '@mui/material';
import React from 'react';
import { DashboardTitle } from '../../../components';
import { MENTOR_NAVBAR } from '../../../constants/mentor';

const Presence = () => {
    return (
        <Box>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <DashboardTitle>{MENTOR_NAVBAR[1].title}</DashboardTitle>
                </Grid>
                <Grid item xs={12}>
                    
                </Grid>
            </Grid>
        </Box>
    );
};

export default Presence;
