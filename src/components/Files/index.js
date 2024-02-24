import { Stack, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Card, NoData } from '..';
import File from './File';

const Files = () => {
    const { profile } = useSelector((store) => store.participant);

    return <Stack spacing={3}>{!profile || profile.files.length === 0 ? <NoData /> : profile.files.map((item) => <File />)}</Stack>;
};

export default Files;
