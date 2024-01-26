import { Alert, Box, IconButton } from '@mui/material';
import React from 'react';
import { BsArrowDown, BsEye, BsFileEarmark } from 'react-icons/bs';
import FilledIconButton from '../FilledIconButton';

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
            <FilledIconButton color="primary" white onClick={handleOpenFile}>
                <BsEye />
            </FilledIconButton>
            <FilledIconButton color="primary" white onClick={handleOpenFile}>
                <BsArrowDown />
            </FilledIconButton>
        </Box>
    );
};

export default File;
