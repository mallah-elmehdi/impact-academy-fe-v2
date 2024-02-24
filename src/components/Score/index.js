import { Box, Typography } from '@mui/material';
import React from 'react';

const Score = ({ color, children, isRate, isNumber }) => {
    return (
        <Box display="flex" alignItems="flex-end">
            <Typography
                sx={(theme) => ({
                    color: color ? theme.palette[color].light_main : theme.palette.common.black,
                    fontWeight: theme.fontWeight.bold,
                    fontSize: theme.fontSize['3xl'],
                    lineHeight: 1,
                })}
            >
                {children}
            </Typography>
            {!isNumber && (
                <Typography
                    component="span"
                    sx={(theme) => ({
                        color: color ? theme.palette[color].light_main : theme.palette.common.black,
                        fontWeight: theme.fontWeight.light,
                        fontSize: theme.fontSize['lg'],
                        lineHeight: 1,
                    })}
                >
                    {isRate ? '%' : '/5'}
                </Typography>
            )}
        </Box>
    );
};

export default Score;
