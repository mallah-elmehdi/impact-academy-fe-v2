import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
    padding: theme.spacing(3),
    boxShadow: 'none',
    borderRadius: theme.borderRadius.xl,
    width: '100%',
    height: '100%',
}));

export default StyledCard;
