import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { Card, DividerLine, IconAvatar } from '..';

const DashboardCard = ({ icon, children, title, action, height }) => {
    return (
        <Card sx={{ p: 0 }}>
            <Stack alignItems="stretch">
                <Box p={3} display="flex" alignItems="center" gap={1}>
                    {icon}
                    <Typography
                        sx={(theme) => ({
                            fontSize: theme.fontSize.md,
                            color: theme.palette.common.black,
                        })}
                    >
                        {title}
                    </Typography>
                    {action && <Box sx={{ ml: 'auto' }}>{action}</Box>}
                </Box>
                <DividerLine color="muted" />
                <Box p={3} height={height ? height : '100%'}>
                    {children}
                </Box>
            </Stack>
        </Card>
    );
};

export default DashboardCard;
