import { Grid, Stack } from '@mui/material';
import React from 'react';
import { BsCheckCircle, BsQuestionCircle } from 'react-icons/bs';
import { Button, IconText, Score, ScoreCard } from '../../../components';

const QuizCard = ({ title, score }) => {
    return (
        <ScoreCard title={title} value={score} action={<Button>Détails</Button>}>
            <Grid container spacing={2} alignItems="stretch" alignSelf="stretch" height="100%">
                <Grid item md={6} sm={6} xs={12}>
                    <Stack spacing={2} alignItems="center" sx={{ height: '100%' }}>
                        <IconText icon={<BsQuestionCircle />} text="Nombre de questions" />
                        <Score center isNumber>
                            7
                        </Score>
                    </Stack>
                </Grid>
                <Grid item md={6} sm={6} xs={12}>
                    <Stack spacing={2} alignItems="center" sx={{ height: '100%' }}>
                        <IconText icon={<BsCheckCircle />} text="Réponses correctes" />
                        <Score center isNumber>
                            7
                        </Score>
                    </Stack>
                </Grid>
            </Grid>
        </ScoreCard>
    );
};

export default QuizCard;
