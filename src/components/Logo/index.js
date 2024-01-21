import { Avatar } from '@mui/material';
import React from 'react';
// import Image from '../../assets/brand/logo-square.png';
import Image from '../../assets/brand/logo.png';
import ImageWhite from '../../assets/brand/logo-white.png';
import { Link } from '../../components';
import { PAGES } from '../../constants/pages';

const Logo = ({ white, lg, ...props }) => {
    return (
        <Link to={PAGES.logIn.url} sx={{ ...props }}>
            <Avatar
                variant="square"
                src={white ? ImageWhite : Image}
                sx={(theme) => ({ backgroundColor: 'transparent', width: '100%', height: lg ? 50 : 25 })}
            />
        </Link>
    );
};

export default Logo;
