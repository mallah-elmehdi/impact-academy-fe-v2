import { Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { Card } from '../../../components';
import { PROFILE_PERSONNEL } from '../../../constants/student';

const InfoPersonnel = () => {
    const profile = null;
    return (
        <Card>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography
                        sx={(theme) => ({
                            fontSize: theme.fontSize.lg,
                            color: theme.palette.common.black,
                            fontWeight: theme.fontWeight.semibold,
                        })}
                    >
                        Information personnelles
                    </Typography>
                </Grid>
                {PROFILE_PERSONNEL.map((item) => (
                    <Grid item key={item.obj} md={4} sm={6} xs={12}>
                        <Stack>
                            <Typography
                                sx={(theme) => ({
                                    fontSize: theme.fontSize.xs,
                                    color: theme.palette.common.black,
                                    fontWeight: theme.fontWeight.bold,
                                })}
                            >
                                {item.title}
                            </Typography>
                            <Typography
                                sx={(theme) => ({
                                    fontSize: theme.fontSize.md,
                                    color: theme.palette.common.black,
                                    fontWeight: theme.fontWeight.light,
                                    textTransform: 'uppercase',
                                })}
                            >
                                {profile ? (profile[item.obj] ? profile[item.obj] : '-') : '-'}
                            </Typography>
                        </Stack>
                    </Grid>
                ))}
            </Grid>
        </Card>
    );
};

export default InfoPersonnel;
