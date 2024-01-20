import { Box, Fade } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Base = () => {
    return (
        <Box
            sx={(theme) => ({
                backgroundColor: theme.palette.common.white,
                minHeight: '100vh',
                minWidth: '100vw',
                height: '100%',
                width: '100%',
                position: 'relative',
            })}
        >
            <Fade in={true} timeout={500}>
                <Box>
                    <Outlet />
                </Box>
            </Fade>
        </Box>
    );
};

export default Base;
