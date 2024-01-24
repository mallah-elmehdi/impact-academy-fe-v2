import { Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { Card } from '../../../components';
import { PROFILE_PROFESSIONAL } from '../../../constants/student';

const InfoProfessional = () => {
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
                        Information professionnelle
                    </Typography>
                </Grid>
                {PROFILE_PROFESSIONAL.map((item) => (
                    <Grid key={item.obj} item md={6} xs={12}>
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
                            {item.bool ? (
                                <Typography
                                    sx={(theme) => ({
                                        fontSize: theme.fontSize.md,
                                        color: theme.palette.common.black,
                                        fontWeight: theme.fontWeight.light,
                                        textTransform: 'uppercase',
                                    })}
                                >
                                    {profile ? (profile[item.obj] ? 'non' : 'oui') : '-'}
                                </Typography>
                            ) : item.enum ? (
                                <Typography
                                    sx={(theme) => ({
                                        fontSize: theme.fontSize.md,
                                        color: theme.palette.common.black,
                                        fontWeight: theme.fontWeight.light,
                                        textTransform: 'uppercase',
                                    })}
                                >
                                    {profile
                                        ? profile[item.obj]
                                            ? item.enum.filter((i) => {
                                                  return i.title === profile[item.obj];
                                              })[0]?.value
                                            : '-'
                                        : '-'}
                                </Typography>
                            ) : (
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
                            )}
                        </Stack>
                    </Grid>
                ))}
            </Grid>
        </Card>
    );
};

export default InfoProfessional;
