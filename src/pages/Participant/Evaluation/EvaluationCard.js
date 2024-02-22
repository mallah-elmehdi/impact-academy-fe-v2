import { Grid, Stack } from '@mui/material';
import React from 'react';
import { Score, ScoreCard } from '../../../components';

const EvaluationCard = ({ title, value, score, action }) => {
    return (
        <ScoreCard title={title} value={value} action={action}>
            <Grid container spacing={2} alignItems="stretch" alignSelf="stretch" height="100%">
                <Grid item md={4} sm={4} xs={12}>
                    <Stack spacing={2} justifyContent="space-between" sx={{ height: '100%' }}>
                        <Score>{score}</Score>
                    </Stack>
                </Grid>
            </Grid>
        </ScoreCard>
    );
};

export default EvaluationCard;
