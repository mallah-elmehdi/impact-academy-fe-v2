import { Box, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { DashboardTitle, LinedTitle } from '../../../../components';
import { MENTOR_NAVBAR } from '../../../../constants/mentor';
import { COACHING, INSERTION_PROFESSIONNELLE, WORKSHOPS } from '../../../../constants/programme';
import { evaluationsByParticipant } from '../../../../contexts/evaluation/apis';
import Workshop from './Workshop';
import Coaching from './Coaching';

const ParticipantEvaluation = () => {
    const dispatch = useDispatch();
    const { evaluationByParticipant } = useSelector((store) => store.evaluation);

    const [expanded, setExpanded] = React.useState(null);
    const handleChange = (panel) => (event, newExpanded) => setExpanded(newExpanded ? panel : false);

    const { participantId } = useParams();

    useEffect(() => {
        dispatch(evaluationsByParticipant(participantId));
    }, [participantId]);

    return (
        <Box>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <DashboardTitle>{`${MENTOR_NAVBAR[1].title} | El Mehdi Mallah`}</DashboardTitle>
                </Grid>
                <Grid item xs={12}>
                    <LinedTitle color="secondary">workshops</LinedTitle>
                </Grid>

                {WORKSHOPS.map((item) => (
                    <Grid item xs={12} key={item.workshop}>
                        <Workshop
                            workshop={item.workshop}
                            title={item.title}
                            evaluations={evaluationByParticipant}
                            participantId={participantId}
                            handleChange={handleChange}
                            expanded={expanded}
                        />
                    </Grid>
                ))}

                <Grid item xs={12}>
                    <LinedTitle color="secondary">Coaching</LinedTitle>
                </Grid>

                {COACHING.map((item) => (
                    <Grid item xs={12} key={item.coaching}>
                        <Coaching
                            coaching={item.coaching}
                            title={item.title}
                            evaluations={
                                evaluationByParticipant
                                    ? evaluationByParticipant.find((evaluation) => evaluation.workshop === item.coaching)
                                    : []
                            }
                            participantId={participantId}
                            handleChange={handleChange}
                            expanded={expanded}
                        />
                    </Grid>
                ))}

                <Grid item xs={12}>
                    <LinedTitle color="secondary">Insertion professionnelle</LinedTitle>
                </Grid>

                {INSERTION_PROFESSIONNELLE.map((item) => (
                    <Grid item xs={12} key={item.insertionProfessionnelle}>
                        <Coaching
                            coaching={item.insertionProfessionnelle}
                            title={item.title}
                            evaluations={
                                evaluationByParticipant
                                    ? evaluationByParticipant.find((evaluation) => evaluation.workshop === item.insertionProfessionnelle)
                                    : []
                            }
                            participantId={participantId}
                            handleChange={handleChange}
                            expanded={expanded}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ParticipantEvaluation;
