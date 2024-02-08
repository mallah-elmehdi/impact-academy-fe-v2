import { useTheme } from '@mui/material';
import React from 'react';
import { BarPlot } from '@mui/x-charts/BarChart';
import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsTooltip } from '@mui/x-charts/ChartsTooltip';

const EvaluationChart = ({ data }) => {
    const theme = useTheme();

    return (
        <ResponsiveChartContainer
            series={[
                {
                    type: 'bar',
                    data: [2, 5, 3, 4, 5, 2.75, 2],
                    label: 'score sur 5',
                },
            ]}
            colors={[theme.palette.secondary.main]}
            xAxis={[
                {
                    data: ['Workshop 1', 'Workshop 2', 'Coaching 1', 'Workshop 3', 'Workshop 4', 'Coaching 2', 'Insertion Professionnelle'],
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

export default EvaluationChart;
