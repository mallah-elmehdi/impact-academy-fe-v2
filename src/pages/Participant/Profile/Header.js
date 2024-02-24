import { Box, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { BsGeoAlt, BsPerson } from 'react-icons/bs';
import { Card, DividerVertical, IconText, ProgressLevel } from '../../../components';
import UpdateProfile from './UpdateProfile';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileScore } from '../../../utils/functions';
import { LevelColor, LevelTextColor } from '../../../components/ScoreCard';

const Header = () => {
    const { profile } = useSelector((store) => store.participant);

    const value = getProfileScore(profile);

    return (
        <Card>
            <Grid container spacing={2}>
                <Grid item md={2} xs={12}>
                    <Stack sx={{ height: '100%' }} spacing={1}>
                        <Typography
                            sx={(theme) => ({
                                fontSize: theme.fontSize.sm,
                                color: theme.palette.common.black,
                            })}
                        >
                            Complétez votre profil
                        </Typography>

                        <ProgressLevel white={LevelTextColor(value)} color={LevelColor(value)} value={value} />
                    </Stack>
                </Grid>
                <Grid item md={0.25} xs={12}>
                    <DividerVertical />
                </Grid>
                <Grid item md={7.5} sm={8} xs={12}>
                    <Stack spacing={1}>
                        <Box display="flex" alignItems="center" gap={2}>
                            <IconText icon={<BsGeoAlt />} text={profile?.province?.name} />
                            <IconText icon={<BsPerson />} text={profile?.user?.username} />
                        </Box>
                        <Typography
                            sx={(theme) => ({
                                fontSize: theme.fontSize['3xl'],
                                color: theme.palette.common.black,
                                fontWeight: theme.fontWeight.bold,
                                textTransform: 'capitalize',
                            })}
                        >
                            {profile.firstname} {profile.lastname}
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item md={2.25} sm={4} xs={12}>
                    <Stack sx={{ height: '100%' }} justifyContent="center">
                        <UpdateProfile />
                    </Stack>
                </Grid>
            </Grid>
        </Card>
    );
};

export default Header;
