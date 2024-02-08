import { useTheme } from '@mui/material';
import { BarPlot } from '@mui/x-charts/BarChart';
import { ChartsTooltip } from '@mui/x-charts/ChartsTooltip';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';
import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';
import React from 'react';

const PresenceChart = ({ data }) => {
    const theme = useTheme();

    return (
        <ResponsiveChartContainer
            series={[
                {
                    type: 'bar',
                    data: [10],
                    label: 'Présent',
                },
                {
                    type: 'bar',
                    data: [4],
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
    );
};

export default PresenceChart;
