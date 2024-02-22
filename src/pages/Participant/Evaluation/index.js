import { Stack, Box, Grid } from '@mui/material';
import React from 'react';
import { DashboardTitle, LinedTitle } from '../../../components';
import { PARTICIPANT_NAVBAR } from '../../../constants/participant';
import { calculateTheScoreEvaluation, scoreLevel } from '../../../utils/functions';
import EvaluationCard from './EvaluationCard';
import EvaluationDetails from './EvaluationDetails';

const data = [
    {
        workshop: 'Workshop 1',
        evaluation: {
            f1: 2.75,
            f2: 3.25,
            f3: 5,
            f4: 1.25,
            f5: 5,
        },
    },
    {
        workshop: 'Workshop 2',
        evaluation: {
            f1: 0.25,
            f2: 1.5,
            f3: 2.75,
            f4: 4.25,
            f5: 5,
        },
    },
    {
        workshop: 'Workshop 3',
        evaluation: {
            f1: 3,
            f2: 2.5,
            f3: 3.75,
            f4: 2.25,
            f5: 3.5,
        },
    },
    {
        workshop: 'Workshop 4',
        evaluation: {
            f1: 4,
            f2: 4.25,
            f3: 3.75,
            f4: 4,
            f5: 3.5,
        },
    },
];

const dataCoaching = [
    {
        coaching: 'Coaching 1',
        score: 4.75,
    },
    {
        coaching: 'Coaching 2',
        score: 3.5,
    },
];

const Evaluation = () => {
    return (
        <Stack spacing={3}>
            <DashboardTitle>{PARTICIPANT_NAVBAR[3].title}</DashboardTitle>
            <LinedTitle color="secondary">workshops</LinedTitle>
            <Box>
                <Grid container spacing={3}>
                    {data.map((item) => {
                        const score = calculateTheScoreEvaluation(item.evaluation);
                        const globalValue = scoreLevel(score);

                        return (
                            <Grid item md={6} xs={12} key={item.workshop}>
                                <EvaluationCard
                                    title={item.workshop}
                                    value={globalValue}
                                    score={score}
                                    action={<EvaluationDetails workshop={item.workshop} data={item.evaluation} />}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
            <LinedTitle color="secondary">Coaching</LinedTitle>
            <Box>
                <Grid container spacing={3}>
                    {dataCoaching.map((item) => {
                        const globalValue = scoreLevel(item.score);

                        return (
                            <Grid item md={6} xs={12} key={item.coaching}>
                                <EvaluationCard title={item.coaching} value={globalValue} score={item.score} />
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
            <LinedTitle color="secondary">Insertion professionnelle</LinedTitle>
            <Box>
                <Grid container spacing={3}>
                    <Grid item md={6} xs={12}>
                        <EvaluationCard title="Insertion professionnelle" value={scoreLevel(5)} score={5} />
                    </Grid>
                </Grid>
            </Box>
        </Stack>
    );
};

export default Evaluation;
