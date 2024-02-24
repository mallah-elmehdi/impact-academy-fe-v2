import { Grid, Typography } from '@mui/material';
import React from 'react';
import { DividerLine, Slider } from '../../../../components';
import { Accordion, AccordionDetails, AccordionSummary } from '../../../../components/Accordion';

const Workshop1 = ({ expanded, handleChange }) => {
    return (
        <Accordion expanded={expanded === 'workshop4'} onChange={handleChange('workshop4')}>
            <AccordionSummary aria-controls="workshop4d-content" id="workshop4d-header">
                <Typography
                    sx={(theme) => ({
                        fontSize: theme.fontSize.lg,
                        color: theme.palette.common.black,
                        textTransform: 'capitalize',
                    })}
                >
                    Workshop 4
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
    );
};

export default Workshop1;
