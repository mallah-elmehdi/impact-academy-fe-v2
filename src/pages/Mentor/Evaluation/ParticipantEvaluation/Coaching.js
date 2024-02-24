import { Grid, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createEvaluation } from '../../../../apis/evaluation';
import { Button, DividerLine, Score, Slider } from '../../../../components';
import { Accordion, AccordionDetails, AccordionSummary } from '../../../../components/Accordion';

const Coaching = ({ title, coaching, expanded, handleChange, participantId, evaluations }) => {
    console.log('evaluations ===>', evaluations);
    const dispatch = useDispatch();

    const [score, setScore] = useState(0);
    const handleChangeScore = (event, newValue) => setScore(newValue);

    const handleSubmit = () => {
        dispatch(
            createEvaluation({
                id: evaluations ? evaluations.id : null,
                participantId: parseInt(participantId),
                workshop: coaching,
                score,
            })
        );
    };

    useEffect(() => {
        setScore(evaluations ? evaluations.score : 0);
    }, [evaluations]);

    return (
        <Accordion expanded={expanded === coaching} onChange={handleChange(coaching)}>
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

                    <Score color="primary">{score.toFixed(2)}</Score>
                </Stack>
            </AccordionSummary>

            <AccordionDetails>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={4}>
                        <Typography
                            sx={(theme) => ({
                                fontSize: theme.fontSize.lg,
                                color: theme.palette.common.black,
                                textTransform: 'capitalize',
                            })}
                        >
                            Score
                        </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Slider valueLabelDisplay="auto" value={score} onChange={handleChangeScore} step={0.25} marks min={0} max={5} />
                    </Grid>
                </Grid>
                <DividerLine sx={{ my: 3 }} color="muted" />
                <Button onClick={handleSubmit}>Soumettre</Button>
            </AccordionDetails>
        </Accordion>
    );
};

export default Coaching;
