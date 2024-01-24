import { Box, Typography } from '@mui/material';
import CircularProgress, { circularProgressClasses } from '@mui/material/CircularProgress';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import * as React from 'react';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: '100%',
    minHeight: 50,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.muted.main,
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.secondary.main,
    },
}));

const ProgressLevel = ({ value }) => {
    return (
        <Box sx={{ position: 'relative', height: '100%', weight: '100%' }}>
            <BorderLinearProgress variant="determinate" value={value} />
            <Typography
                sx={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
            >
                {value}%
            </Typography>
        </Box>
    );
};

export default ProgressLevel;
