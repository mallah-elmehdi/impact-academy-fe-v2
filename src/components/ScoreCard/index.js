import { Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { Card, DividerVertical, ProgressLevel } from '..';

const LevelColor = (value) => {
    if (value > 60) {
        return 'success';
    } else if (value > 40) {
        return 'secondary';
    }
    return 'error';
};

const LevelTextColor = (value) => {
    if (value > 60) {
        return true;
    }
    return false;
};

const ScoreCard = ({ title, value, children, action }) => {
    return (
        <Card>
            <Grid container spacing={2}>
                <Grid item sm={4}  xs={12}>
                    <Stack sx={{ height: '100%' }} spacing={2}>
                        <Typography
                            sx={(theme) => ({
                                fontSize: theme.fontSize.lg,
                                color: theme.palette.common.black,
                                fontWeight: theme.fontWeight.semibold,
                                textTransform: 'capitalize',
                            })}
                        >
                            {title}
                        </Typography>
                        <ProgressLevel white={LevelTextColor(value)} color={LevelColor(value)} value={value} />
                    </Stack>
                </Grid>
                <Grid item sm={0.5}  xs={12}>
                    <DividerVertical />
                </Grid>
                <Grid item sm={4.5}  xs={12} sx={{ alignSelf: 'center' }}>
                    {children}
                </Grid>
                {action && (
                    <Grid item sm={3} xs={12}>
                        <Stack sx={{ height: '100%' }} justifyContent="center">
                            {action}
                        </Stack>
                    </Grid>
                )}
            </Grid>
        </Card>
    );
};

export default ScoreCard;
