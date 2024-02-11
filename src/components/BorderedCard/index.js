import { styled } from '@mui/material';
import { Card } from '..';

const BorderedCard = styled(Card)(({ theme }) => ({
    padding: theme.spacing(0),
    border: '1px solid',
    borderColor: theme.palette.muted.main,
}));

export default BorderedCard;
