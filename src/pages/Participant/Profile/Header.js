import { Box, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { BsGeoAlt, BsPerson } from 'react-icons/bs';
import { Card, DividerVertical, IconText, ProgressLevel } from '../../../components';
import UpdateProfile from './UpdateProfile';

const Header = () => {
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
                        <ProgressLevel color="secondary" value={40} />
                    </Stack>
                </Grid>
                <Grid item md={0.25} xs={12}>
                    <DividerVertical />
                </Grid>
                <Grid item md={7.5} sm={8} xs={12}>
                    <Stack spacing={1}>
                        <Box display="flex" alignItems="center" gap={2}>
                            <IconText icon={<BsGeoAlt />} text="Ben Guerir" />
                            <IconText icon={<BsPerson />} text="elmehdimallah" />
                        </Box>
                        <Typography
                            sx={(theme) => ({
                                fontSize: theme.fontSize['3xl'],
                                color: theme.palette.common.black,
                                fontWeight: theme.fontWeight.bold,
                                textTransform: 'capitalize',
                            })}
                        >
                            el mehdi mallah
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
