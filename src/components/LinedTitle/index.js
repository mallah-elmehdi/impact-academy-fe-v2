import React from 'react';
import { Stack, Typography } from '@mui/material';
import DividerLine from '../DividerLine';

const LinedTitle = ({ color, children, ...props }) => {
    return (
        <Stack direction="row" alignItems="center" spacing={1} {...props}>
            <Typography
                sx={(theme) => ({
                    fontSize: theme.fontSize.lg,
                    color: theme.palette.common.black,
                    textTransform: 'capitalize',
                })}
            >
                {children}
            </Typography>

            <DividerLine color={color} sx={{ flexGrow: 1 }} />
        </Stack>
    );
};

export default LinedTitle;
