import { Box, Typography } from '@mui/material';
import React from 'react';

const NumberIcon = ({ children, white, color }) => {
    return (
        <Box
            variant="square"
            sx={(theme) => ({
                background: theme.palette[color ? color : 'primary'].main,
                borderRadius: theme.borderRadius.full,
                position: 'relative',
                p: 2,
            })}
        >
            <Box
                sx={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
            >
                <Typography
                    sx={(theme) => ({
                        fontSize: theme.fontSize.md,
                        color: theme.palette.common[white ? 'white' : 'black'],
                    })}
                >
                    {children}
                </Typography>
            </Box>
        </Box>
    );
};

export default NumberIcon;
