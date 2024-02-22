import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { DashboardTitle, DividerLine, LinedTitle, Slider } from '../../../../components';
import { MENTOR_NAVBAR } from '../../../../constants/mentor';
import { Accordion, AccordionDetails, AccordionSummary } from '../../../../components/Accordion';

const ParticipantEvaluation = () => {
    const [expanded, setExpanded] = React.useState('workshop1');
    const handleChange = (panel) => (event, newExpanded) => setExpanded(newExpanded ? panel : false);

    return (
        <Box>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <DashboardTitle>{`${MENTOR_NAVBAR[1].title} | El Mehdi Mallah`}</DashboardTitle>
                </Grid>
                <Grid item xs={12}>
                    <Accordion expanded={expanded === 'workshop1'} onChange={handleChange('workshop1')}>
                        <AccordionSummary aria-controls="workshop1d-content" id="workshop1d-header">
                            <Typography
                                sx={(theme) => ({
                                    fontSize: theme.fontSize.lg,
                                    color: theme.palette.common.black,
                                    textTransform: 'capitalize',
                                })}
                            >
                                Workshop 1
                            </Typography>
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
                                    <Slider valueLabelDisplay="auto" step={0.25} marks min={0} max={5} />
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
                                        CRT 1
                                    </Typography>
                                </Grid>
                                <Grid item md={6}>
                                    <Slider valueLabelDisplay="auto" step={0.25} marks min={0} max={5} />
                                </Grid>
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ParticipantEvaluation;
