import { Box, Stack } from '@mui/material';
import React from 'react';
import { DashboardTitle } from '../../../components';
import { PARTICIPANT_NAVBAR } from '../../../constants/participant';
import QuizCard from './QuizCard';

const data = [
    {
        id: 0,
        title: 'quiz 1',
        score: 90,
    },
    {
        id: 1,
        title: 'quiz 1',
        score: 90,
    },
    {
        id: 2,
        title: 'quiz 1',
        score: 90,
    },
];

const Quiz = () => {
    return (
        <Box>
            <Stack spacing={3}>
                <DashboardTitle>{PARTICIPANT_NAVBAR[2].title}</DashboardTitle>
                {data.map((item) => (
                    <QuizCard {...item} key={item.id} />
                ))}
            </Stack>
        </Box>
    );
};

export default Quiz;
