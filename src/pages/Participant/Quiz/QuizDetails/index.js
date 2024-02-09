import { Fade, Box, Grid, Stack, FormControlLabel, RadioGroup, Radio } from '@mui/material';
import React, { useState } from 'react';
import { Button, DashboardCard, DashboardTitle, NumberIcon } from '../../../../components';
import Choice from '../../../../components/QuizComponents/Choice';
import Question from '../../../../components/QuizComponents/Question';
import Note from './Note';
import Summary from './Summary';

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

const QuizDetails = () => {
    const [note, setNote] = useState(true);
    const handleNoteOff = () => setNote(false);

    const [questionIndex, setQuestionIndex] = useState(0);
    const handleNext = () => setQuestionIndex(questionIndex + 1);
    const handlePrev = () => setQuestionIndex(questionIndex - 1);

    return (
        <Box height="100%">
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <DashboardTitle>Quiz 1</DashboardTitle>
                </Grid>

                {note ? (
                    <Grid item xs={12}>
                        <Stack height="100%" spacing={3} justifyContent="center">
                            <Note />
                            <Button color="secondary" onClick={handleNoteOff} sx={{ alignSelf: 'center' }}>
                                Start
                            </Button>
                        </Stack>
                    </Grid>
                ) : (
                    <>
                        {questionIndex !== QUESTIONS.length - 1 ? (
                            <Grid item xs={12}>
                                <Fade in={true} {...{ timeout: 1000 }}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12}>
                                            {QUESTIONS.map((item, index) =>
                                                index === questionIndex ? <Question {...item} key={item.question} index={index} /> : null
                                            )}
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Stack direction="row" spacing={2}>
                                                <Button color="secondary" variant="outlined" onClick={handlePrev}>
                                                    Previous
                                                </Button>
                                                <Button color="secondary" onClick={handleNext}>
                                                    Next
                                                </Button>
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                </Fade>
                            </Grid>
                        ) : (
                            <Grid item xs={12}>
                                <Fade in={true} {...{ timeout: 1000 }}>
                                    <Summary questions={QUESTIONS} />
                                </Fade>
                            </Grid>
                        )}
                    </>
                )}

                {/* <Grid item xs={12}>
                    <Alert icon={false} color="secondary">
                        Veuillez noter que vous ne pouvez répondre au quiz qu'une seule fois
                    </Alert>
                </Grid> */}
            </Grid>
        </Box>
    );
};

export default QuizDetails;
