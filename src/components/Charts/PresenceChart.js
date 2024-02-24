import { useTheme, Box, Typography } from '@mui/material';
import { BarPlot } from '@mui/x-charts/BarChart';
import { ChartsTooltip } from '@mui/x-charts/ChartsTooltip';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';
import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';
import React from 'react';
import { WORKSHOPS } from '../../constants/programme';
import Score from '../Score';

const PresenceChart = ({ presence }) => {
    const theme = useTheme();

    return (
        <>
            <Box display="flex" gap={1} alignItems="center">
                <Typography component="span">Taux:</Typography>
                <Score isRate>{Math.ceil((presence.length / 4) * 100)}</Score>
            </Box>
            <ResponsiveChartContainer
                series={[
                    {
                        type: 'bar',
                        data: [presence.length],
                        label: 'Présent',
                    },
                    {
                        type: 'bar',
                        data: [4 - presence.length],
                        label: 'Absent',
                    },
                ]}
                colors={[theme.palette.success.main, theme.palette.error.main]}
                xAxis={[
                    {
                        data: [''],
                        scaleType: 'band',
                        id: 'x-axis-id',
                    },
                ]}
            >
                <BarPlot />
                <ChartsXAxis position="bottom" axisId="x-axis-id" />
                <ChartsYAxis />
                <ChartsTooltip />
            </ResponsiveChartContainer>
        </>
    );
};

export default PresenceChart;
