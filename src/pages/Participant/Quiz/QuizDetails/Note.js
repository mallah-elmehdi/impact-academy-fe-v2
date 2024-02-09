import React from 'react';
import { Alert, Stack, AlertTitle } from '@mui/material';
import { IconAvatar } from '../../../../components';
import { BsLightbulb } from 'react-icons/bs';

const Note = () => {
    return (
        <Alert
            icon={<BsLightbulb />}
            color="success"
            sx={(theme) => ({
                borderRadius: theme.borderRadius.md,
            })}
        >
            <AlertTitle
                sx={(theme) => ({
                    fontSize: theme.fontSize['xl'],
                })}
            >
                Ce quiz est conçu uniquement dans le but de tester vos connaissances et est destiné à être un exercice amusant et éducatif.
                Il est tout à fait normal si vous ne répondez pas correctement à toutes les questions, détendez-vous, faites de votre mieux
                et profitez du défi !
            </AlertTitle>
        </Alert>
    );
};

export default Note;
