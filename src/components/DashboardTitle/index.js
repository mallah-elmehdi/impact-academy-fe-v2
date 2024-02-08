import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const DashboardTitle = ({ navbarItems }) => {
    const location = useLocation();
    const [title, setTitle] = useState(null);

    useEffect(() => {
        if (location.pathname) {
            const list = location.pathname.split('/');
            const page = list[list.length - 1];

            if (page) {
                setTitle(navbarItems.filter((item) => item.url === page)[0]);
            }
        }
    }, [location.pathname]);

    return (
        <>
            {title ? (
                <Typography
                    sx={(theme) => ({
                        fontSize: theme.fontSize.lg,
                        fontWeight: theme.fontWeight.bold,
                        color: theme.palette.common.black,
                        textTransform: 'uppercase',
                    })}
                >
                    {title.title}
                </Typography>
            ) : (
                <></>
            )}
        </>
    );
};

export default DashboardTitle;
