import { Avatar, Box, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { BsConeStriped, BsDoorOpen, BsSdCard } from 'react-icons/bs';
import { Card, IconAvatar } from '../../components';

const NotFound = () => {
    return (
        <Box
            sx={(theme) => ({
                backgroundColor: theme.palette.primary.main,
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                py: 5,
            })}
        >
            <Stack direction="row" spacing={1} alignItems="center">
                <IconAvatar lg color="secondary">
                    <BsConeStriped />
                </IconAvatar>
                <Typography
                    sx={(theme) => ({
                        fontSize: theme.fontSize['3xl'],
                        textAlign: 'center',
                        fontWeight: theme.fontWeight.bold,
                        color: theme.palette.common.white,
                    })}
                >
                    Page non trouvée
                </Typography>
            </Stack>
        </Box>
    );
};

export default NotFound;
