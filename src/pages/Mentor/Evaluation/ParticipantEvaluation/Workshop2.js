import { Grid, Typography } from '@mui/material';
import React from 'react';
import { DividerLine, Slider } from '../../../../components';
import { Accordion, AccordionDetails, AccordionSummary } from '../../../../components/Accordion';

const Workshop1 = ({ expanded, handleChange }) => {
    return (
        <Accordion expanded={expanded === 'workshop2'} onChange={handleChange('workshop2')}>
            <AccordionSummary aria-controls="workshop2d-content" id="workshop2d-header">
                <Typography
                    sx={(theme) => ({
                        fontSize: theme.fontSize.lg,
                        color: theme.palette.common.black,
                        textTransform: 'capitalize',
                    })}
                >
                    Workshop 2
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
