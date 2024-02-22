import { Stack } from '@mui/material';
import React from 'react';
import { DashboardTitle } from '../../../components';
import { PARTICIPANT_NAVBAR } from '../../../constants/participant';
import { calculateTheScoreEvaluation, scoreLevel } from '../../../utils/functions';
import EvaluationCard from './EvaluationCard';

const LevelColor = (value) => {
    if (value > 60) {
        return 'success';
    } else if (value > 40) {
        return 'secondary';
    }
    return 'error';
};

const LevelTextColor = (value) => {
    if (value > 60) {
        return true;
    }
    return false;
};

const data = [
    {
        workshop: 'Workshop 1',
        evaluation: {
            insertion: {
                f1: 2,
                f2: 3.75,
                f3: 0.75,
                f4: 4.25,
                f5: 3,
            },
            formation: {
                f1: 2,
                f2: 3.75,
                f3: 4,
                f4: 3.25,
                f5: 3.5,
            },
            coaching: {
                f1: 2.75,
                f2: 3.25,
                f3: 5,
                f4: 1.25,
                f5: 5,
            },
        },
    },
    {
        workshop: 'Workshop 2',
        evaluation: {
            insertion: {
                f1: 2.5,
                f2: 4.75,
                f3: 3,
                f4: 1.25,
                f5: 0.5,
            },
            formation: {
                f1: 1.75,
                f2: 3,
                f3: 2.25,
                f4: 4,
                f5: 3.5,
            },
            coaching: {
                f1: 0.25,
                f2: 1.5,
                f3: 2.75,
                f4: 4.25,
                f5: 5,
            },
        },
    },
    {
        workshop: 'Workshop 3',
        evaluation: {
            insertion: {
                f1: 4,
                f2: 3.25,
                f3: 2.5,
                f4: 3.75,
                f5: 4,
            },
            formation: {
                f1: 3.5,
                f2: 4,
                f3: 3,
                f4: 4.25,
                f5: 2.75,
            },
            coaching: {
                f1: 3,
                f2: 2.5,
                f3: 3.75,
                f4: 2.25,
                f5: 3.5,
            },
        },
    },
    {
        workshop: 'Workshop 4',
        evaluation: {
            insertion: {
                f1: 1.5,
                f2: 2,
                f3: 2.25,
                f4: 1.75,
                f5: 3,
            },
            formation: {
                f1: 2.5,
                f2: 3.25,
                f3: 3.5,
                f4: 2.75,
                f5: 2,
            },
            coaching: {
                f1: 4,
                f2: 4.25,
                f3: 3.75,
                f4: 4,
                f5: 3.5,
            },
        },
    },
    {
        workshop: 'Workshop 5',
        evaluation: {
            insertion: {
                f1: 0.5,
                f2: 1.75,
                f3: 1,
                f4: 1.25,
                f5: 0.75,
            },
            formation: {
                f1: 0.25,
                f2: 0.5,
                f3: 0.75,
                f4: 1,
                f5: 1.25,
            },
            coaching: {
                f1: 2.25,
                f2: 2.5,
                f3: 2.75,
                f4: 2,
                f5: 1.75,
            },
        },
    },
];

const Evaluation = () => {
    return (
        <Stack spacing={3}>
            <DashboardTitle>{PARTICIPANT_NAVBAR[3].title}</DashboardTitle>
            {data.map((item) => {
                const valueInsertion = calculateTheScoreEvaluation(item.evaluation.insertion);
                const valueFormation = calculateTheScoreEvaluation(item.evaluation.formation);
                const valueCoaching = calculateTheScoreEvaluation(item.evaluation.coaching);
                const globalValue = scoreLevel((valueInsertion + valueFormation + valueCoaching) / 3);

                return (
                    <EvaluationCard
                        title={item.workshop}
                        evaluation={item.evaluation}
                        workshop={item.workshop}
                        value={globalValue}
                        scoreCoaching={valueCoaching}
                        scoreFormation={valueFormation}
                        scoreInsertion={valueInsertion}
                    />
                );
            })}
        </Stack>
    );
};

export default Evaluation;
