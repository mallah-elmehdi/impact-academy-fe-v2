import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { useScrollToTop } from '../../hooks';

const Base = () => {
    // scroll to top when page changes
    useScrollToTop();

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
            <Outlet />
        </Box>
    );
};

export default Base;
