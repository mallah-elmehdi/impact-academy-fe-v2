import { FormControlLabel, Radio, RadioGroup, Stack, Fade, Grow } from '@mui/material';
import React from 'react';
import { DashboardCard, NumberIcon } from '..';
import Choice from './Choice';

const Question = ({ question, choses, index, answer }) => {
    const [value, setValue] = React.useState(answer);
    const handleRadioChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <DashboardCard title={question} icon={<NumberIcon white>{index + 1}</NumberIcon>}>
            <RadioGroup aria-labelledby="demo-error-radios" name="quiz" value={value} onChange={handleRadioChange}>
                <Stack spacing={1}>
                    {choses.map((choice, index) => (
                        <Grow in={true} {...{ timeout: 500 + index * 100 }}>
                            <FormControlLabel value={choice} control={<Radio color="secondary" />} label={<Choice>{choice}</Choice>} />
                        </Grow>
                    ))}
                </Stack>
            </RadioGroup>
        </DashboardCard>
    );
};

export default Question;
