import { Box, Grid, Stack } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { DashboardTitle, LinedTitle } from '../../../components';
import { PARTICIPANT_NAVBAR } from '../../../constants/participant';
import { COACHING, INSERTION_PROFESSIONNELLE, WORKSHOPS } from '../../../constants/programme';
import {
    getEvaluationsByWorkshop,
    scoreLevel,
    totalScore
} from '../../../utils/functions';
import EvaluationCard from './EvaluationCard';
import EvaluationDetails from './EvaluationDetails';

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
    const { profile } = useSelector((store) => store.participant);

    return (
        <Stack spacing={3}>
            <DashboardTitle>{PARTICIPANT_NAVBAR[3].title}</DashboardTitle>
            <LinedTitle color="secondary">workshops</LinedTitle>
            <Box>
                <Grid container spacing={3}>
                    {WORKSHOPS.map((item) => {
                        const evaluations = profile ? getEvaluationsByWorkshop(profile.evaluations, item.workshop) : [];
                        const score = totalScore(evaluations);
                        const globalValue = scoreLevel(score);

                        return (
                            <Grid item md={6} xs={12} key={item.workshop}>
                                <EvaluationCard
                                    title={item.title}
                                    value={globalValue}
                                    score={score}
                                    action={
                                        evaluations.length !== 0 && <EvaluationDetails workshop={item.title} evaluations={evaluations} />
                                    }
                                />
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
            <LinedTitle color="secondary">Coaching</LinedTitle>
            <Box>
                <Grid container spacing={3}>
                    {COACHING.map((item) => {
                        const evaluations = profile ? getEvaluationsByWorkshop(profile.evaluations, item.coaching) : [];
                        const score = totalScore(evaluations);
                        const globalValue = scoreLevel(score);

                        return (
                            <Grid item md={6} xs={12} key={item.coaching}>
                                <EvaluationCard title={item.title} value={globalValue} score={score} />
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
            <LinedTitle color="secondary">Insertion professionnelle</LinedTitle>
            <Box>
                <Grid container spacing={3}>
                    {INSERTION_PROFESSIONNELLE.map((item) => {
                        const evaluations = profile ? getEvaluationsByWorkshop(profile.evaluations, item.insertionProfessionnelle) : [];
                        const score = totalScore(evaluations);
                        const globalValue = scoreLevel(score);

                        return (
                            <Grid item md={6} xs={12} key={item.coaching}>
                                <EvaluationCard title={item.title} value={globalValue} score={score} />
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
        </Stack>
    );
};

export default Evaluation;
