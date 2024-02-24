import { useTheme } from '@mui/material';
import React from 'react';
import { BarPlot } from '@mui/x-charts/BarChart';
import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsTooltip } from '@mui/x-charts/ChartsTooltip';
import { getEvaluationsByWorkshop, totalScore } from '../../utils/functions';
import { COACHING, INSERTION_PROFESSIONNELLE, WORKSHOPS } from '../../constants/programme';

const EvaluationChart = ({ evaluations }) => {
    const theme = useTheme();

    return (
        <ResponsiveChartContainer
            series={[
                {
                    type: 'bar',
                    data: [
                        totalScore(getEvaluationsByWorkshop(evaluations, WORKSHOPS[0].workshop)),
                        totalScore(getEvaluationsByWorkshop(evaluations, WORKSHOPS[1].workshop)),
                        totalScore(getEvaluationsByWorkshop(evaluations, COACHING[0].coaching)),
                        totalScore(getEvaluationsByWorkshop(evaluations, WORKSHOPS[2].workshop)),
                        totalScore(getEvaluationsByWorkshop(evaluations, WORKSHOPS[3].workshop)),
                        totalScore(getEvaluationsByWorkshop(evaluations, COACHING[1].coaching)),
                        totalScore(getEvaluationsByWorkshop(evaluations, INSERTION_PROFESSIONNELLE[0].insertionProfessionnelle)),
                    ],
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
