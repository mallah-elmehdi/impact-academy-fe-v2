import React from 'react';
import { IconButton } from '@mui/material';
import { BsDoorOpen, BsOutlet } from 'react-icons/bs';
import { Button } from '..';

const LogOutButton = () => {
    return (
        <Button
            sx={(theme) => ({
                borderRadius: theme.borderRadius.md,
                p: theme.spacing(0.5, 1.5),
                '&:hover': {
                    borderRadius: theme.borderRadius.md,
                    p: theme.spacing(0.5, 1.5),
                },
            })}
            color="secondary"
        >
            Déconnexion
        </Button>
    );
};

export default LogOutButton;
