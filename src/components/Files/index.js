import { Alert, Stack, Typography } from '@mui/material';
import React from 'react';
import { Card } from '..';
import File from './File';

const Files = () => {
    return (
        <Card>
            <Typography
                sx={(theme) => ({
                    fontSize: theme.fontSize.lg,
                    color: theme.palette.common.black,
                    fontWeight: theme.fontWeight.semibold,
                })}
            >
                mes fichiers
            </Typography>
            <Stack mt={3} spacing={3}>
                {[1, 1, 1].map((item) => (
                    <File />
                ))}
            </Stack>
        </Card>
    );
};

export default Files;
