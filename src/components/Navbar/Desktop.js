import { Box } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BlurredButton, Logo } from '../../components';
import LogOutButton from './LogOutButton';
import Menu from './Menu';

const Desktop = ({ navbarItems }) => {
    const navigate = useNavigate();

    return (
        <>
            <Logo white />
            <Box sx={{ display: 'flex', gap: 1, mr: 'auto', ml: 3, alignItems: 'center' }}>
                {navbarItems.map((page) =>
                    page.menu ? (
                        <Menu key={page.id} {...page} />
                    ) : (
                        <BlurredButton key={page.id} startIcon={page.icon} onClick={() => navigate(page.url)}>
                            {page.title}
                        </BlurredButton>
                    )
                )}
            </Box>
            <LogOutButton />
        </>
    );
};

export default Desktop;
