import { Box, Typography } from '@mui/material';
import * as React from 'react';
import { Progress } from '..';

const ProgressLevel = ({ white, value, color }) => {
    return (
        <Box sx={{ position: 'relative', height: '100%', weight: '100%' }}>
            <Progress color={color ? color : 'primary'} variant="determinate" value={value} />
            <Typography
                sx={(theme) => ({
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: white ? theme.palette.common.white : theme.palette.common.black,
                })}
            >
                {value}%
            </Typography>
        </Box>
    );
};

export default ProgressLevel;
