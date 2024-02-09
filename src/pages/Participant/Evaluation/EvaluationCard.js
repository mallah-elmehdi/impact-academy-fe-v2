import { Grid, Stack } from '@mui/material';
import React from 'react';
import { BsBoxArrowInUp, BsEasel, BsMortarboard } from 'react-icons/bs';
import { EvaluationDetails, IconText, Score, ScoreCard } from '../../../components';

const EvaluationCard = ({ title, value, scoreFormation, scoreCoaching, scoreInsertion, evaluation, bootcamp }) => {
    return (
        <ScoreCard title={title} value={value} action={<EvaluationDetails bootcamp={bootcamp} data={evaluation} />}>
            <Grid container spacing={2} alignItems="stretch" alignSelf="stretch" height="100%">
                <Grid item md={4} sm={4} xs={12}>
                    <Stack spacing={2} justifyContent="space-between" sx={{ height: '100%' }}>
                        <IconText icon={<BsEasel />} text="Formation" />
                        <Score>{scoreFormation}</Score>
                    </Stack>
                </Grid>
                <Grid item md={4} sm={4} xs={12}>
                    <Stack spacing={2} justifyContent="space-between" sx={{ height: '100%' }}>
                        <IconText icon={<BsMortarboard />} text="Coaching" />
                        <Score>{scoreCoaching}</Score>
                    </Stack>
                </Grid>
                <Grid item md={4} sm={4} xs={12}>
                    <Stack spacing={2} justifyContent="space-between" sx={{ height: '100%' }}>
                        <IconText icon={<BsBoxArrowInUp />} text="Insertion" />
                        <Score>{scoreInsertion}</Score>
                    </Stack>
                </Grid>
            </Grid>
        </ScoreCard>
    );
};

export default EvaluationCard;
