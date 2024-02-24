import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { BsCheck, BsListCheck, BsQuestion } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { ButtonLink, DashboardCard, DashboardTitle, IconAvatar, Score } from '../../../components';
import { PresenceChart, QuizChart } from '../../../components/Charts';
import EvaluationChart from '../../../components/Charts/EvaluationChart';
import { PAGES } from '../../../constants/pages';
import { PARTICIPANT_NAVBAR } from '../../../constants/participant';

const Home = () => {
    const { profile } = useSelector((store) => store.participant);

    return (
        <Box>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <DashboardTitle>{PARTICIPANT_NAVBAR[0].title}</DashboardTitle>
                </Grid>
                <Grid item xs={12}>
                    <DashboardCard
                        height={500}
                        icon={
                            <IconAvatar>
                                <BsCheck />
                            </IconAvatar>
                        }
                        title="Score d'évaluation"
                        action={<ButtonLink to={PAGES.participant.url + '/' + PAGES.participantEvaluation.url}>voir plus</ButtonLink>}
                    >
                        <EvaluationChart evaluations={profile ? profile.evaluations : []} />
                    </DashboardCard>
                </Grid>

                <Grid item md={6} xs={12}>
                    <DashboardCard
                        height={500}
                        icon={
                            <IconAvatar>
                                <BsQuestion />
                            </IconAvatar>
                        }
                        title="Score du quiz"
                        action={<ButtonLink to={PAGES.participant.url + '/' + PAGES.participantQuiz.url}>voir plus</ButtonLink>}
                    >
                        <Box display="flex" gap={1} alignItems="center">
                            <Typography component="span">Score:</Typography>
                            <Score>4.5</Score>
                        </Box>
                        <QuizChart score={4.5} />
                    </DashboardCard>
                </Grid>

                <Grid item md={6} xs={12}>
                    <DashboardCard
                        height={500}
                        icon={
                            <IconAvatar>
                                <BsListCheck />
                            </IconAvatar>
                        }
                        title="Taux de présence"
                    >
                        <PresenceChart presence={profile ? profile.presence : []} />
                    </DashboardCard>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Home;
