import React from 'react';
import { Grid, Box } from '@mui/material';
import { DashboardTitle } from '../../../components';
import Answer from '../../../components/QuizComponents/Answer';
const ANSWERS = [1, 2, 3, 2, 3];
const CORRECT_ANSWERS = [3, 2, 0, 2, 3];
const QUESTIONS = [
    {
        question: 'What is the capital of France?',
        choses: ['London', 'Paris', 'Berlin', 'Madrid'],
    },
    {
        question: 'Who wrote "To Kill a Mockingbird"?',
        choses: ['Ernest Hemingway', 'Harper Lee', 'J.K. Rowling', 'Mark Twain'],
    },
    {
        question: 'What is the chemical symbol for water?',
        choses: ['H2O', 'CO2', 'NaCl', 'O2'],
    },
    {
        question: 'Which planet is known as the "Red Planet"?',
        choses: ['Jupiter', 'Mars', 'Saturn', 'Venus'],
    },
    {
        question: 'Who painted the Mona Lisa?',
        choses: ['Michelangelo', 'Leonardo da Vinci', 'Vincent van Gogh', 'Pablo Picasso'],
    },
];

const QuizAnswers = () => {
    return (
        <Box height="100%">
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <DashboardTitle>Quiz 1</DashboardTitle>
                </Grid>
                {QUESTIONS.map((item, index) => (
                    <Grid item xs={12}>
                        <Answer
                            {...item}
                            key={item.question}
                            index={index}
                            answer={ANSWERS[index]}
                            correctAnswer={CORRECT_ANSWERS[index]}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default QuizAnswers;
