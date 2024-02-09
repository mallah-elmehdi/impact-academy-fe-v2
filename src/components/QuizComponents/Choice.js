import React from 'react';
import { Box, Typography } from '@mui/material';

const Choice = ({ children }) => {
    return (
        <Box display="flex" alignItems="center" gap={0.5}>
            <Typography
                sx={(theme) => ({
                    fontSize: theme.fontSize.md,
                    color: theme.palette.common.black,
                })}
            >
                {children}
            </Typography>
        </Box>
    );
};

export default Choice;
