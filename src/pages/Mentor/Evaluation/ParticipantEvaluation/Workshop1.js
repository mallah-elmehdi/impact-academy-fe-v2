import { Grid, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createEvaluation } from '../../../../apis/evaluation';
import { Button, DividerLine, Score, Slider } from '../../../../components';
import { Accordion, AccordionDetails, AccordionSummary } from '../../../../components/Accordion';
import { WORKSHOPS } from '../../../../constants/programme';
import { getEvaluationsIdByWorkshopAndCriteria, getScoreByCriteria } from '../../../../utils/functions';

const Workshop1 = ({ expanded, handleChange, participantId, evaluations }) => {
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
                id: getEvaluationsIdByWorkshopAndCriteria(evaluations, 'CRT 1', WORKSHOPS[0].workshop),
                participantId: parseInt(participantId),
                criteria: 'CRT 1',
                workshop: WORKSHOPS[0].workshop,
                score: criteria1,
            })
        );
        dispatch(
            createEvaluation({
                id: getEvaluationsIdByWorkshopAndCriteria(evaluations, 'CRT 2', WORKSHOPS[0].workshop),
                participantId: parseInt(participantId),
                criteria: 'CRT 2',
                workshop: WORKSHOPS[0].workshop,
                score: criteria2,
            })
        );
        dispatch(
            createEvaluation({
                id: getEvaluationsIdByWorkshopAndCriteria(evaluations, 'CRT 3', WORKSHOPS[0].workshop),
                participantId: parseInt(participantId),
                criteria: 'CRT 3',
                workshop: WORKSHOPS[0].workshop,
                score: criteria3,
            })
        );
    };

    useEffect(() => {
        setCriteria1(getScoreByCriteria(evaluations, 'CRT 1'));
        setCriteria2(getScoreByCriteria(evaluations, 'CRT 2'));
        setCriteria3(getScoreByCriteria(evaluations, 'CRT 3'));
    }, [evaluations]);

    return (
        <Accordion expanded={expanded === 'workshop1'} onChange={handleChange('workshop1')}>
            <AccordionSummary aria-controls="workshop1d-content" id="workshop1d-header">
                <Stack width="100%" direction="row" alignItems="center" spacing={3} justifyContent="space-between">
                    <Typography
                        sx={(theme) => ({
                            fontSize: theme.fontSize.lg,
                            color: theme.palette.common.black,
                            textTransform: 'capitalize',
                        })}
                    >
                        Workshop 1
                    </Typography>

                    <Score color="primary">{((criteria1 + criteria2 + criteria3) / 3).toFixed(2)}</Score>
                </Stack>
            </AccordionSummary>

            <AccordionDetails>
                <Grid container spacing={2} alignItems="center">
                    <Grid item md={6}>
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
                    <Grid item md={6}>
                        <Slider valueLabelDisplay="auto" value={criteria1} onChange={handleChange1} step={0.25} marks min={0} max={5} />
                    </Grid>
                </Grid>
                <DividerLine sx={{ my: 3 }} color="muted" />
                <Grid container spacing={2} alignItems="center">
                    <Grid item md={6}>
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
                    <Grid item md={6}>
                        <Slider valueLabelDisplay="auto" value={criteria2} onChange={handleChange2} step={0.25} marks min={0} max={5} />
                    </Grid>
                </Grid>

                <DividerLine sx={{ my: 3 }} color="muted" />
                <Grid container spacing={2} alignItems="center">
                    <Grid item md={6}>
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
                    <Grid item md={6}>
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
