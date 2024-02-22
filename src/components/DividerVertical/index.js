import { Divider, useMediaQuery } from '@mui/material';
import React from 'react';

const DividerVertical = () => {
    const sm = useMediaQuery((theme) => theme.breakpoints.up('sm'));

    return (
        <Divider orientation={sm ? 'vertical' : 'horizontal'} sx={(theme) => ({ height: '100%', borderColor: theme.palette.muted.main })} />
    );
};

export default DividerVertical;
