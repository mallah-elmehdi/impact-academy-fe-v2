import React, { useState } from 'react';
import { ScoreCard, Slider } from '../../../components';

const EvaluationSlider = ({ title }) => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <ScoreCard title={title} value={Math.ceil((value / 5) * 100)}>
            <Slider value={value} onChange={handleChange} valueLabelDisplay="auto" step={0.25} marks min={0} max={5} />
        </ScoreCard>
    );
};

export default EvaluationSlider;
