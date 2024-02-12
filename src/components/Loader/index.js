import { Fade, Box } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

const Loader = () => {
    const { isLoading } = useSelector((store) => store.loader);

    return (
        <Fade in={isLoading} {...{ timeout: 300 }}>
            <Box
                position="fixed"
                sx={(theme) => ({
                    zIndex: theme.zIndex.modal + 2,
                    backdropFilter: theme.blur.primary,
                })}
                width="100vw"
                height="100vh"
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <div class="lds-grid">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </Box>
        </Fade>
    );
};

export default Loader;
