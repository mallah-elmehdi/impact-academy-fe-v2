import { Box, Typography } from '@mui/material';
import React from 'react';
import { IconAvatar } from '..';

const IconText = ({ icon, text }) => {
    return (
        <Box display="flex" alignItems="center" gap={0.5}>
            <IconAvatar>{icon}</IconAvatar>
            <Typography
                sx={(theme) => ({
                    fontSize: theme.fontSize.md,
                    color: theme.palette.muted.black,
                    fontWeight: theme.fontWeight.light,
                })}
            >
                {text}
            </Typography>
        </Box>
    );
};

export default IconText;
