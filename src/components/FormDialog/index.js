import { Box, DialogActions, DialogContent, DialogTitle, IconButton, Stack } from '@mui/material';
import React from 'react';
import { Dialog } from '..';
import { BsX } from 'react-icons/bs';

const FormDialog = ({ title, onClose, open, children, action, onSubmit, id, maxWidth }) => {
    return (
        <Dialog maxWidth={maxWidth} open={open} onClose={onClose}>
            <DialogTitle
                sx={(theme) => ({
                    borderBottom: '1px solid',
                    borderColor: theme.palette.muted.main,
                })}
            >
                <Box display="flex" justifyContent="space-between" gap={3}>
                    {title}
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={onClose}
                        sx={(theme) => ({ color: theme.palette.common.black })}
                    >
                        <BsX />
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent sx={{ '&.MuiDialogContent-root': { p: 3, overflow: 'auto', width: '100%' } }}>
                <form id={id} onSubmit={onSubmit ? onSubmit : null}>
                    <Stack spacing={3}>
                        <Box>{children}</Box>
                    </Stack>
                </form>
            </DialogContent>
            <DialogActions
                sx={(theme) => ({
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderTop: '1px solid',
                    borderColor: theme.palette.muted.main,
                    '&.MuiDialogActions-root': { p: theme.spacing(3) },
                })}
            >
                {action}
            </DialogActions>
        </Dialog>
    );
};

export default FormDialog;
