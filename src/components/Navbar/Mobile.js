import { Box, IconButton, Stack } from '@mui/material';
import React from 'react';
import { BlurredButton, Dialog, Link, Logo } from '../../components';
import { BsList, BsX } from 'react-icons/bs';
import LogOutButton from './LogOutButton';

// ========== MENU TRANSITION
const Mobile = ({ sticky, selected, navbarItems }) => {
    // ========== DIALOG OPEN/CLOSE
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Logo white square />
            <Box ml="auto" gap={3} display="flex" alignItems="center" justifyContent="center">
                <IconButton sx={(theme) => ({ color: theme.palette.common.white })} onClick={handleClickOpen}>
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
                            alignItems: 'flex-start',
                        }}
                    >
                        {navbarItems.map((page) => (
                            <Link to={page.url} key={page.id}>
                                <BlurredButton
                                    onClick={handleClose}
                                    sx={{
                                        color: (theme) => theme.palette.primary.main,
                                        fontSize: (theme) => theme.fontSize['xl'],
                                    }}
                                >
                                    {page.title}
                                </BlurredButton>
                            </Link>
                        ))}
                    </Box>
                    <Stack>
                        <LogOutButton />
                    </Stack>
                </Box>
            </Dialog>
        </>
    );
};

export default Mobile;
