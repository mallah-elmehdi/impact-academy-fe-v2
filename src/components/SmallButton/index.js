import { styled } from '@mui/material/styles';
import { Button } from '..';

const SmallButton = styled(Button)(({ theme }) => ({
    padding: theme.spacing(0.5, 1.5),
}));

export default SmallButton;
