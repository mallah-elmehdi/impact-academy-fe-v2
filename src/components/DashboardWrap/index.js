import { Box } from '@mui/material';
import React from 'react';
import WavesBg from '../../assets/backgrounds/waves.png';

const DashboardWrap = ({ children }) => {
    return (
        <Box
            sx={(theme) => ({
                backgroundColor: theme.palette.muted.main,
                minHeight: '100vh',
            })}
        >
            <Box sx={(theme) => ({})}>{children}</Box>
        </Box>
    );
};

export default DashboardWrap;
