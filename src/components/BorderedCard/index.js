import React from 'react';
import { Card } from '..';
import { styled } from '@mui/material/styles';

const BorderedCard = styled(Card)(({ theme }) => ({
    padding: theme.spacing(0),
    border: '1px solid',
    borderColor: theme.palette.primary.main,
}));

export default BorderedCard;
