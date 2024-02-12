import { IconButton, Alert as MuiAlert, Snackbar } from '@mui/material';
import React from 'react';
import { BsCheck, BsExclamation, BsX } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { closeAlert } from '../../contexts/alert/slice';

const Alert = () => {
    const dispatch = useDispatch();
    const { isOpen, severity, message } = useSelector((store) => store.alert);

    return (
        <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} open={isOpen} onClose={() => dispatch(closeAlert())}>
            <MuiAlert
                variant="filled"
                severity={severity}
                sx={(theme) => ({
                    borderRadius: theme.borderRadius.md,
                    width: '100%',
                    alignItems: 'center',
                    maxWidth: '30rem',
                })}
                action={
                    <IconButton
                        sx={(theme) => ({
                            color: theme.palette.common.white,
                        })}
                        onClick={() => dispatch(closeAlert())}
                    >
                        <BsX />
                    </IconButton>
                }
                iconMapping={{
                    success: <BsCheck />,
                    error: <BsExclamation />,
                }}
            >
                {message}
            </MuiAlert>
        </Snackbar>
    );
};

export default Alert;
