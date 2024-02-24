import { Grid, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createEvaluation } from '../../../../apis/evaluation';
import { Button, DividerLine, Score, Slider } from '../../../../components';
import { Accordion, AccordionDetails, AccordionSummary } from '../../../../components/Accordion';
import { getEvaluationsByWorkshop, getEvaluationsIdByWorkshopAndCriteria, getScoreByCriteria } from '../../../../utils/functions';

const Workshop1 = ({ title, workshop, expanded, handleChange, participantId, evaluations }) => {
    const dispatch = useDispatch();

    const [criteria1, setCriteria1] = useState(0);
    const [criteria2, setCriteria2] = useState(0);
    const [criteria3, setCriteria3] = useState(0);

    const handleChange1 = (event, newValue) => setCriteria1(newValue);
    const handleChange2 = (event, newValue) => setCriteria2(newValue);
    const handleChange3 = (event, newValue) => setCriteria3(newValue);

    const handleSubmit = () => {
        dispatch(
            createEvaluation({
                id: getEvaluationsIdByWorkshopAndCriteria(evaluations, 'CRT 1', workshop),
                participantId: parseInt(participantId),
                criteria: 'CRT 1',
                workshop: workshop,
                score: criteria1,
            })
        );
        dispatch(
            createEvaluation({
                id: getEvaluationsIdByWorkshopAndCriteria(evaluations, 'CRT 2', workshop),
                participantId: parseInt(participantId),
                criteria: 'CRT 2',
                workshop: workshop,
                score: criteria2,
            })
        );
        dispatch(
            createEvaluation({
                id: getEvaluationsIdByWorkshopAndCriteria(evaluations, 'CRT 3', workshop),
                participantId: parseInt(participantId),
                criteria: 'CRT 3',
                workshop: workshop,
                score: criteria3,
            })
        );
    };

    useEffect(() => {
        setCriteria1(getScoreByCriteria(getEvaluationsByWorkshop(evaluations, workshop), 'CRT 1'));
        setCriteria2(getScoreByCriteria(getEvaluationsByWorkshop(evaluations, workshop), 'CRT 2'));
        setCriteria3(getScoreByCriteria(getEvaluationsByWorkshop(evaluations, workshop), 'CRT 3'));
    }, [evaluations, workshop]);

    return (
        <Accordion expanded={expanded === workshop} onChange={handleChange(workshop)}>
            <AccordionSummary aria-controls="workshop1d-content" id="workshop1d-header">
                <Stack width="100%" direction="row" alignItems="center" spacing={3} justifyContent="space-between">
                    <Typography
                        sx={(theme) => ({
                            fontSize: theme.fontSize.lg,
                            color: theme.palette.common.black,
                            textTransform: 'capitalize',
                        })}
                    >
                        {title}
                    </Typography>

                    <Score color="primary">{((criteria1 + criteria2 + criteria3) / 3).toFixed(2)}</Score>
                </Stack>
            </AccordionSummary>

            <AccordionDetails>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={6}>
                        <Typography
                            sx={(theme) => ({
                                fontSize: theme.fontSize.lg,
                                color: theme.palette.common.black,
                                textTransform: 'capitalize',
                            })}
                        >
                            CRT 1
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Slider valueLabelDisplay="auto" value={criteria1} onChange={handleChange1} step={0.25} marks min={0} max={5} />
                    </Grid>
                </Grid>
                <DividerLine sx={{ my: 3 }} color="muted" />
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={6}>
                        <Typography
                            sx={(theme) => ({
                                fontSize: theme.fontSize.lg,
                                color: theme.palette.common.black,
                                textTransform: 'capitalize',
                            })}
                        >
                            CRT 2
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Slider valueLabelDisplay="auto" value={criteria2} onChange={handleChange2} step={0.25} marks min={0} max={5} />
                    </Grid>
                </Grid>

                <DividerLine sx={{ my: 3 }} color="muted" />
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={6}>
                        <Typography
                            sx={(theme) => ({
                                fontSize: theme.fontSize.lg,
                                color: theme.palette.common.black,
                                textTransform: 'capitalize',
                            })}
                        >
                            CRT 3
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Slider valueLabelDisplay="auto" value={criteria3} onChange={handleChange3} step={0.25} marks min={0} max={5} />
                    </Grid>
                </Grid>
                <DividerLine sx={{ my: 3 }} color="muted" />
                <Button onClick={handleSubmit}>Soumettre</Button>
            </AccordionDetails>
        </Accordion>
    );
};

export default Workshop1;
