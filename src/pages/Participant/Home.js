import { Box, Grid, Typography, useTheme } from '@mui/material';
import React from 'react';
import { BsCheck, BsListCheck, BsQuestion } from 'react-icons/bs';
import { DashboardCard, Score } from '../../components';
import { PresenceChart, QuizChart } from '../../components/Charts';
import EvaluationChart from '../../components/Charts/EvaluationChart';
import { PAGES } from '../../constants/pages';

const Home = () => {
    const theme = useTheme();

    return (
        <Box>
            <Grid container spacing={5}>
                <Grid item xs={12}>
                    <DashboardCard
                        icon={<BsCheck />}
                        title="Score d'évaluation"
                        url={PAGES.participant.url + '/' + PAGES.participantEvaluation.url}
                    >
                        <EvaluationChart />
                    </DashboardCard>
                </Grid>

                <Grid item md={6} xs={12}>
                    <DashboardCard
                        icon={<BsQuestion />}
                        title="Score du quiz"
                        url={PAGES.participant.url + '/' + PAGES.participantQuiz.url}
                    >
                        <Box display="flex" gap={1} alignItems="center">
                            <Typography component="span">Score:</Typography>
                            <Score>4.5</Score>
                        </Box>
                        <QuizChart score={4.5} />
                    </DashboardCard>
                </Grid>

                <Grid item md={6} xs={12}>
                    <DashboardCard icon={<BsListCheck />} title="Taux de présence" noAction>
                        <Box display="flex" gap={1} alignItems="center">
                            <Typography component="span">Taux:</Typography>
                            <Score isRate>90</Score>
                        </Box>
                        <PresenceChart rate={90} />
                    </DashboardCard>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Home;
