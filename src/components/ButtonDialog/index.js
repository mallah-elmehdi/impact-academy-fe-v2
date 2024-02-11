import { Box, DialogContent, DialogTitle, IconButton, DialogActions } from '@mui/material';
import React from 'react';
import { BsX } from 'react-icons/bs';
import { Button, Dialog, SmallButton } from '..';

const ButtonDialog = ({ children, buttonTitle, title, action, width, smallButton }) => {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            {smallButton ? (
                <SmallButton onClick={handleClickOpen}>{buttonTitle}</SmallButton>
            ) : (
                <Button onClick={handleClickOpen}>{buttonTitle}</Button>
            )}
            <Dialog maxWidth={width ? width : 'md'} onClose={handleClose} open={open}>
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
                            onClick={handleClose}
                            sx={(theme) => ({ color: theme.palette.common.black })}
                        >
                            <BsX />
                        </IconButton>
                    </Box>
                </DialogTitle>
                <DialogContent sx={{ '&.MuiDialogContent-root': { p: 3, overflow: 'auto', width: '100%' } }}>{children}</DialogContent>
                {action && (
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
                )}
            </Dialog>
        </>
    );
};

export default ButtonDialog;
