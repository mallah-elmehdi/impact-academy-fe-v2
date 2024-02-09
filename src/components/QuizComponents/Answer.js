import { FormControlLabel, Grow, Radio, Alert, Stack } from '@mui/material';
import React from 'react';
import { DashboardCard, NumberIcon } from '..';
import Choice from './Choice';
import { BsCheckAll, BsCheckCircle, BsXCircle } from 'react-icons/bs';
// sx={(theme) => ({
//     '&.MuiFormControlLabel-root': {
//         borderRadius: theme.borderRadius.md,
//         background: correct
//             ? theme.palette.success.main
//             : answer === index
//             ? theme.palette.error.main
//             : 'transparent',
//     },
// })}
// value={choice}
// label={<Choice>{choice}</Choice>}
// />

const Answer = ({ question, choses, index, correctAnswer, answer }) => {
    return (
        <DashboardCard
            title={question}
            icon={
                <NumberIcon color={correctAnswer === answer ? 'success' : 'error'} white>
                    {index + 1}
                </NumberIcon>
            }
        >
            <Stack spacing={1}>
                {choses.map((choice, index) => (
                    <Grow in={true} {...{ timeout: 500 + index * 100 }}>
                        {correctAnswer === index || answer === index ? (
                            <Alert
                                icon={correctAnswer === index ? <BsCheckCircle /> : <BsXCircle />}
                                sx={(theme) => ({
                                    borderRadius: theme.borderRadius.md,
                                })}
                                color={correctAnswer === index ? 'success' : 'error'}
                                variant="filled"
                            >
                                {choice}
                            </Alert>
                        ) : (
                            <Alert
                                icon={false}
                                sx={(theme) => ({
                                    borderRadius: theme.borderRadius.md,
                                    background: 'transparent',
                                    color: theme.palette.common.black,
                                })}
                                variant="filled"
                            >
                                {choice}
                            </Alert>
                        )}
                    </Grow>
                ))}
            </Stack>
        </DashboardCard>
    );
};

export default Answer;
