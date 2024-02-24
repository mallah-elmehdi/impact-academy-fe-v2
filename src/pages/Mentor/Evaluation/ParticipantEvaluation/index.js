import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { DashboardTitle } from '../../../../components';
import { MENTOR_NAVBAR } from '../../../../constants/mentor';
import { WORKSHOPS } from '../../../../constants/programme';
import { evaluationsByParticipant } from '../../../../contexts/evaluation/apis';
import { getEvaluationsByWorkshop } from '../../../../utils/functions';
import Workshop1 from './Workshop1';

const ParticipantEvaluation = () => {
    const dispatch = useDispatch();
    const { evaluationByParticipant } = useSelector((store) => store.evaluation);

    const [expanded, setExpanded] = React.useState(null);
    const handleChange = (panel) => (event, newExpanded) => setExpanded(newExpanded ? panel : false);

    const [evaluations, setEvaluations] = useState([]);

    const { participantId } = useParams();

    useEffect(() => {
        dispatch(evaluationsByParticipant(participantId));
    }, [participantId]);

    useEffect(() => {
        setEvaluations(getEvaluationsByWorkshop(evaluationByParticipant, WORKSHOPS[0].workshop));
    }, [evaluationByParticipant]);

    return (
        <Box>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <DashboardTitle>{`${MENTOR_NAVBAR[1].title} | El Mehdi Mallah`}</DashboardTitle>
                </Grid>
                <Grid item xs={12}>
                    <Workshop1 evaluations={evaluations} participantId={participantId} handleChange={handleChange} expanded={expanded} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default ParticipantEvaluation;
