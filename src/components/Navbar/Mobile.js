import { Box, IconButton, Stack } from '@mui/material';
import React from 'react';
import { BlurredButton, Dialog, Logo } from '../../components';
import { BsList, BsX } from 'react-icons/bs';

// ========== MENU TRANSITION
const Mobile = ({ sticky, selected, navbarItems }) => {
    // ========== DIALOG OPEN/CLOSE
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Logo md={!sticky} white={!sticky} square />
            <Box ml="auto" gap={3} display="flex" alignItems="center" justifyContent="center">
                <IconButton
                    sx={(theme) => ({ color: !sticky ? theme.palette.common.white : theme.palette.primary.main })}
                    onClick={handleClickOpen}
                >
                    <BsList />
                </IconButton>
            </Box>
            <Dialog sx={{ '.MuiDialog-paper': { borderRadius: 0 } }} open={open} onClose={handleClose} fullScreen>
                <Box
                    sx={(theme) => ({
                        height: '100%',
                        p: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 5,
                    })}
                >
                    <Stack
                        direction="row"
                        alignItems="center"
                        sx={(theme) => ({
                            pb: 3,
                        })}
                    >
                        <Logo square />
                        <IconButton color="primary" onClick={handleClose} sx={{ ml: 'auto' }}>
                            <BsX />
                        </IconButton>
                    </Stack>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: 'flex',
                            gap: 3,
                            flexDirection: 'column',
                        }}
                    >
                        {navbarItems.map((page, index) => (
                            <BlurredButton
                                key={page.id}
                                sx={(theme) => ({
                                    color: theme.palette.primary.main,
                                    fontSize: theme.fontSize['3xl'],
                                })}
                            >
                                {page.title}
                            </BlurredButton>
                        ))}
                    </Box>
                </Box>
            </Dialog>
        </>
    );
};

export default Mobile;
