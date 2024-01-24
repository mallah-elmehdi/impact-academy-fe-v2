import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';

const IconText = ({ icon, text }) => {
    return (
        <Box display="flex" alignItems="center" gap={0.5}>
            <Avatar
                sx={(theme) => ({
                    color: theme.palette.primary.light_main,
                    background: 'transparent',
                    width: 22,
                    height: 22,
                })}
            >
                {icon}
            </Avatar>
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
