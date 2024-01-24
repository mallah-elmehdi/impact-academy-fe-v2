import { Fade } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';
import React from 'react';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Fade ref={ref} {...props} />;
});

export const StyledDialog = styled((props) => <Dialog fullWidth maxWidth="sm" TransitionComponent={Transition} {...props} />)(
    ({ theme }) => ({
        '& .MuiDialogContent-root': {
            padding: theme.spacing(2),
        },
        '& .MuiDialogActions-root': {
            padding: theme.spacing(1),
        },
        '.MuiDialog-paper': {
            borderRadius: 'none',
        },
    })
);

export default StyledDialog;
