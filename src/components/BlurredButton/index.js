import React from 'react';
import { Button } from '..';
import { alpha } from '@mui/material';
import { PAGES } from '../../constants/pages';

const BlurredButton = ({ children, sx, ...props }) => {
    return (
        <Button
            sx={(theme) => ({
                backdropFilter: theme.blur.primary,
                background: alpha(theme.palette.common.white, 0.25),
                p: theme.spacing(0.5, 1.5),
                '&:hover': {
                    background: alpha(theme.palette.common.white, 0.25),
                },
                ...sx,
            })}
            {...props}
        >
            {children}
        </Button>
    );
};

export default BlurredButton;
