import { Typography } from '@mui/material';
import React from 'react';

const DashboardTitle = ({ children }) => {
    return (
        <Typography
            sx={(theme) => ({
                fontSize: theme.fontSize.lg,
                fontWeight: theme.fontWeight.bold,
                color: theme.palette.common.black,
                textTransform: 'uppercase',
            })}
        >
            {children}
        </Typography>
    );
};

export default DashboardTitle;
