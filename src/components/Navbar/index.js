import { AppBar, Container, Toolbar, useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Desktop from './Desktop';
import Mobile from './Mobile';
import { useScrollPosition } from '../../hooks';

const Navbar = ({ navbarItems }) => {
    const md = useMediaQuery((theme) => theme.breakpoints.up('md'));

    const scrollPosition = useScrollPosition();
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        setSticky(scrollPosition >= 30);
    }, [scrollPosition]);

    return (
        <AppBar
            position="sticky"
            sx={(theme) => ({
                backgroundColor: theme.palette.primary.main,
                boxShadow: sticky ? theme.shadows.default : 'none',
                transition: 'all .3s ease',
            })}
        >
            <Container sx={{ px: 0 }}>
                <Toolbar sx={{ py: 3 }}>
                    {md ? <Desktop sticky={sticky} navbarItems={navbarItems} /> : <Mobile sticky={sticky} navbarItems={navbarItems} />}
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
