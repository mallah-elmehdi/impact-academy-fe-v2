import { Stack, Grow } from '@mui/material';
import React from 'react';
import Question from '../../../../components/QuizComponents/Question';
import { Button } from '../../../../components';

const ANSWERS = [1, 2, 3, 2, 3];

const Summary = ({ questions }) => {
    return (
        <form>
            <Stack spacing={3}>
                {questions.map((item, index) => (
                    <Grow in={true} {...{ timeout: 500 + index * 100 }}>
                        <div>
                            <Question answer={questions[index].choses[ANSWERS[index]]} {...item} key={item.question} index={index} />
                        </div>
                    </Grow>
                ))}
                <Button sx={{ alignSelf: 'flex-start' }}>Submit</Button>
            </Stack>
        </form>
    );
};

export default Summary;
