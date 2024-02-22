import React from 'react';
import { Typography } from '@mui/material';
import BorderedCard from '../BorderedCard';

const NoData = () => {
    return (
        <BorderedCard sx={{ p: 3 }}>
            <Typography
                sx={(theme) => ({
                    fontSize: theme.fontSize.md,
                    color: theme.palette.grey[400],
                    fontWeight: theme.fontWeight.light,
                    textAlign: 'center',
                })}
            >
                Pas de données disponibles
            </Typography>
        </BorderedCard>
    );
};

export default NoData;
