import { useTheme } from '@mui/material';
import { PiePlot } from '@mui/x-charts/PieChart';
import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';
import React from 'react';
import { scoreLevel } from '../../utils/functions';

const QuizChart = ({ score }) => {
    const theme = useTheme();

    return (
        <ResponsiveChartContainer
            series={[
                {
                    type: 'pie',
                    data: [
                        { id: 0, value: scoreLevel(score) },
                        { id: 1, value: scoreLevel(5 - score) },
                    ],
                },
            ]}
            colors={[theme.palette.primary.light_main, theme.palette.primary.main]}
        >
            <PiePlot />
        </ResponsiveChartContainer>
    );
};

export default QuizChart;
