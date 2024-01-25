import React from 'react';
import { Box, Alert, Stack, Typography, Divider, IconButton, Container } from '@mui/material';
import Img from '../Img';
import ElMehdiMallahSignature from '../../assets/brand/elmehdimallah.png';

const Footer = () => {
    return (
        <Container>
            <Box display="flex" alignItems="center" gap={1} py={3}>
                <Typography
                    sx={(theme) => ({
                        fontSize: theme.fontSize.xs,
                        color: theme.palette.primary.light_main,
                    })}
                >
                    2024 &copy;{' '}
                    <Typography
                        component="span"
                        sx={(theme) => ({
                            fontSize: theme.fontSize.xs,
                            color: theme.palette.common.black,
                        })}
                    >
                        Made by{' '}
                    </Typography>
                    <Typography
                        component="span"
                        sx={(theme) => ({
                            fontSize: theme.fontSize.xs,
                            color: theme.palette.common.black,
                            fontWeight: theme.fontWeight.bold,
                        })}
                    >
                        Social Innovation Lab
                    </Typography>
                </Typography>
                <Divider orientation="vertical" flexItem />
                <Img src={ElMehdiMallahSignature} sx={{ width: 100 }} />
            </Box>
        </Container>
    );
};

export default Footer;
