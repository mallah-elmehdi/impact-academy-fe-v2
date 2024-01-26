import { Box, Typography } from '@mui/material';
import CircularProgress, { circularProgressClasses } from '@mui/material/CircularProgress';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import * as React from 'react';

const BorderLinearProgress = styled((props) => <LinearProgress variant="determinate" {...props} />)(({ theme, color }) => ({
    height: '100%',
    minHeight: 50,
    borderRadius: theme.borderRadius.md,
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: theme.borderRadius.md,
    },
}));

export default BorderLinearProgress;
