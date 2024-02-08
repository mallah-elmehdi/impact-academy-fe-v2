import { Divider, useMediaQuery } from '@mui/material';
import React from 'react';

const DividerVertical = () => {
    const md = useMediaQuery((theme) => theme.breakpoints.up('md'));

    return (
        <Divider orientation={md ? 'vertical' : 'horizontal'} sx={(theme) => ({ height: '100%', borderColor: theme.palette.muted.main })} />
    );
};

export default DividerVertical;
