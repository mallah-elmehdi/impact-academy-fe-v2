import React from 'react';
import { Divider } from '@mui/material';

const DividerLine = ({ color, sx }) => {
    return <Divider sx={(theme) => ({ height: '100%', borderColor: theme.palette[color ? color : 'primary'].main, ...sx })} />;
};

export default DividerLine;
