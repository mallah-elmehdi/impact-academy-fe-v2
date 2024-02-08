import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { ButtonLink, Card, DividerLine, IconAvatar } from '..';

const DashboardCard = ({ children, title, icon, url, noAction }) => {
    return (
        <Card sx={{ p: 0 }}>
            <Stack alignItems="stretch">
                <Box p={3} display="flex" alignItems="center" gap={1}>
                    <IconAvatar>{icon}</IconAvatar>
                    <Typography
                        sx={(theme) => ({
                            fontSize: theme.fontSize.md,
                            // fontWeight: theme.fontWeight.bold,
                            color: theme.palette.common.black,
                        })}
                    >
                        {title}
                    </Typography>
                    {!noAction && (
                        <ButtonLink sx={{ ml: 'auto' }} to={url}>
                            voir plus
                        </ButtonLink>
                    )}
                </Box>
                <DividerLine color="muted" />
                <Box p={3} height={500}>
                    {children}
                </Box>
            </Stack>
        </Card>
    );
};

export default DashboardCard;
