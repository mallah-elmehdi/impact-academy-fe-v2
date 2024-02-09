import { Avatar } from '@mui/material';
import React from 'react';

const IconAvatar = ({ children, lg, color, white }) => {
    return (
        <Avatar
            variant="square"
            sx={(theme) => ({
                background: 'transparent',
                color: white ? theme.palette.common.white : theme.palette[color ? color : 'primary'].light_main,

                ...(lg
                    ? {
                          width: 35,
                          height: 35,
                          fontSize: theme.fontSize['3xl'],
                      }
                    : {
                          width: 22,
                          height: 22,
                          fontSize: theme.fontSize.xl,
                      }),
            })}
        >
            {children}
        </Avatar>
    );
};

export default IconAvatar;
