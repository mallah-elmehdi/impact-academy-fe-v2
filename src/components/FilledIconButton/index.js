import React from 'react';
import { Alert, Box, IconButton } from '@mui/material';

const FilledIconButton = ({ white, color, children, ...props }) => {
    return (
        <IconButton
            {...props}
            sx={(theme) => ({
                fontSize: theme.fontSize.md,
                backgroundColor: theme.palette[color ? color : 'primary'].light_main,
                color: theme.palette.common[white ? 'white' : 'black'],
                lineHeight: 1,
                '&:hover': {
                    backgroundColor: theme.palette[color ? color : 'primary'].light_main,
                    color: theme.palette.common[white ? 'white' : 'black'],
                },
            })}
        >
            {children}
        </IconButton>
    );
};

export default FilledIconButton;
