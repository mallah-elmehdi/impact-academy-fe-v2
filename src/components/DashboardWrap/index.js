import { Box, Stack } from '@mui/material';
import React from 'react';
import WavesBg from '../../assets/backgrounds/waves.png';

const DashboardWrap = ({ children }) => {
    return (
        <Box
            sx={(theme) => ({
                backgroundColor: theme.palette.muted.main,
            })}
        >
            <Stack
                sx={(theme) => ({
                    minHeight: '100vh',
                })}
            >
                {children}
            </Stack>
        </Box>
    );
};

export default DashboardWrap;
