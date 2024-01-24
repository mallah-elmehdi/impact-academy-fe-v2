import { Alert, Box, IconButton } from '@mui/material';
import React from 'react';
import { BsArrowDown, BsEye, BsFileEarmark } from 'react-icons/bs';

const File = () => {
    // ----
    const handleOpenFile = () => {
        window.open('https://www.educative.io/', '_blank');
    };

    // ----
    return (
        <Box display="flex" alignItems="center" gap={1}>
            <Alert
                color="primary"
                icon={<BsFileEarmark />}
                sx={(theme) => ({
                    width: '100%',
                    textTransform: 'uppercase',
                })}
            >
                Cv.pdf
            </Alert>
            <IconButton
                onClick={handleOpenFile}
                sx={(theme) => ({
                    fontSize: theme.fontSize.md,
                    backgroundColor: theme.palette.primary.light_main,
                    color: theme.palette.common.white,
                    '&:hover': {
                        backgroundColor: theme.palette.primary.light_main,
                        color: theme.palette.common.white,
                    },
                })}
            >
                <BsEye />
            </IconButton>
            <IconButton
                onClick={handleOpenFile}
                sx={(theme) => ({
                    fontSize: theme.fontSize.md,
                    backgroundColor: theme.palette.primary.light_main,
                    color: theme.palette.common.white,
                    '&:hover': {
                        backgroundColor: theme.palette.primary.light_main,
                        color: theme.palette.common.white,
                    },
                })}
            >
                <BsArrowDown />
            </IconButton>
        </Box>
    );
};

export default File;
