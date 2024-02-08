import React from 'react';
import { Divider } from '@mui/material';

const DividerLine = ({ color }) => {
    return <Divider sx={(theme) => ({ height: '100%', borderColor: theme.palette[color ? color : 'primary'].main })} />;
};

export default DividerLine;
