import { Avatar } from '@mui/material';
import React from 'react';

const IconAvatar = ({ children }) => {
    return (
        <Avatar
            variant="square"
            sx={(theme) => ({
                color: theme.palette.primary.light_main,
                background: 'transparent',
                width: 22,
                height: 22,
            })}
        >
            {children}
        </Avatar>
    );
};

export default IconAvatar;
