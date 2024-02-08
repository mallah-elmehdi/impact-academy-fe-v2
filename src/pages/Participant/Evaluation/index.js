import { Divider, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import { BsBoxArrowInUp, BsEasel, BsMortarboard } from 'react-icons/bs';
import { Button, Card, EvaluationDetails, IconText, ProgressLevel, Score } from '../../../components';
import { scoreLevel, calculateTheScoreEvaluation } from '../../../utils/functions';

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

const data = [
    {
        bootcamp: 'Bootcamp 1',
        evaluation: {
            insertion: {
                f1: 2,
                f2: 3.75,
                f3: 0.75,
                f4: 4.25,
                f5: 3,
            },
            formation: {
                f1: 2,
                f2: 3.75,
                f3: 4,
                f4: 3.25,
                f5: 3.5,
            },
            coaching: {
                f1: 2.75,
                f2: 3.25,
                f3: 5,
                f4: 1.25,
                f5: 5,
            },
        },
    },
    {
        bootcamp: 'Bootcamp 2',
        evaluation: {
            insertion: {
                f1: 2.5,
                f2: 4.75,
                f3: 3,
                f4: 1.25,
                f5: 0.5,
            },
            formation: {
                f1: 1.75,
                f2: 3,
                f3: 2.25,
                f4: 4,
                f5: 3.5,
            },
            coaching: {
                f1: 0.25,
                f2: 1.5,
                f3: 2.75,
                f4: 4.25,
                f5: 5,
            },
        },
    },
    {
        bootcamp: 'Bootcamp 3',
        evaluation: {
            insertion: {
                f1: 4,
                f2: 3.25,
                f3: 2.5,
                f4: 3.75,
                f5: 4,
            },
            formation: {
                f1: 3.5,
                f2: 4,
                f3: 3,
                f4: 4.25,
                f5: 2.75,
            },
            coaching: {
                f1: 3,
                f2: 2.5,
                f3: 3.75,
                f4: 2.25,
                f5: 3.5,
            },
        },
    },
    {
        bootcamp: 'Bootcamp 4',
        evaluation: {
            insertion: {
                f1: 1.5,
                f2: 2,
                f3: 2.25,
                f4: 1.75,
                f5: 3,
            },
            formation: {
                f1: 2.5,
                f2: 3.25,
                f3: 3.5,
                f4: 2.75,
                f5: 2,
            },
            coaching: {
                f1: 4,
                f2: 4.25,
                f3: 3.75,
                f4: 4,
                f5: 3.5,
            },
        },
    },
    {
        bootcamp: 'Bootcamp 5',
        evaluation: {
            insertion: {
                f1: 0.5,
                f2: 1.75,
                f3: 1,
                f4: 1.25,
                f5: 0.75,
            },
            formation: {
                f1: 0.25,
                f2: 0.5,
                f3: 0.75,
                f4: 1,
                f5: 1.25,
            },
            coaching: {
                f1: 2.25,
                f2: 2.5,
                f3: 2.75,
                f4: 2,
                f5: 1.75,
            },
        },
    },
];

const Evaluation = () => {
    const md = useMediaQuery((theme) => theme.breakpoints.up('md'));

    return (
        <Stack spacing={3}>
            {data.map((item) => {
                const valueInsertion = calculateTheScoreEvaluation(item.evaluation.insertion);
                const valueFormation = calculateTheScoreEvaluation(item.evaluation.formation);
                const valueCoaching = calculateTheScoreEvaluation(item.evaluation.coaching);
                const globalValue = scoreLevel((valueInsertion + valueFormation + valueCoaching) / 3);

                return (
                    <Card key={item.bootcamp}>
                        <Grid container spacing={2}>
                            <Grid item md={2} xs={12}>
                                <Stack sx={{ height: '100%' }} spacing={2}>
                                    <Typography
                                        sx={(theme) => ({
                                            fontSize: theme.fontSize.lg,
                                            color: theme.palette.common.black,
                                            fontWeight: theme.fontWeight.semibold,
                                        })}
                                    >
                                        {item.bootcamp}
                                    </Typography>
                                    <ProgressLevel
                                        white={LevelTextColor(globalValue)}
                                        color={LevelColor(globalValue)}
                                        value={globalValue}
                                    />
                                </Stack>
                            </Grid>
                            <Grid item md={0.25} xs={12}>
                                <Divider
                                    orientation={md ? 'vertical' : 'horizontal'}
                                    sx={(theme) => ({ height: '100%', borderColor: theme.palette.muted.main })}
                                />
                            </Grid>
                            <Grid item md={8.5} xs={12}>
                                <Grid container spacing={2} alignItems="stretch" alignSelf="stretch" height="100%">
                                    <Grid item md={4} sm={4} xs={12}>
                                        <Stack spacing={2} justifyContent="space-between" sx={{ height: '100%' }}>
                                            <IconText icon={<BsEasel />} text="Formation" />
                                            <Score>{valueFormation}</Score>
                                        </Stack>
                                    </Grid>
                                    <Grid item md={4} sm={4} xs={12}>
                                        <Stack spacing={2} justifyContent="space-between" sx={{ height: '100%' }}>
                                            <IconText icon={<BsMortarboard />} text="Coaching" />
                                            <Score>{valueCoaching}</Score>
                                        </Stack>
                                    </Grid>
                                    <Grid item md={4} sm={4} xs={12}>
                                        <Stack spacing={2} justifyContent="space-between" sx={{ height: '100%' }}>
                                            <IconText icon={<BsBoxArrowInUp />} text="Insertion" />
                                            <Score>{valueInsertion}</Score>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={1.25} sm={4} xs={12}>
                                <Stack sx={{ height: '100%' }} justifyContent="center">
                                    <EvaluationDetails bootcamp={item.bootcamp} data={item.evaluation} />
                                </Stack>
                            </Grid>
                        </Grid>
                    </Card>
                );
            })}
        </Stack>
    );
};

export default Evaluation;
