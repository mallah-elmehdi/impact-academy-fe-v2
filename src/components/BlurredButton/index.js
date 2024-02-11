import { alpha, styled } from '@mui/material/styles';
import { Button } from '..';

const BlurredButton = styled(Button)(({ theme }) => ({
    padding: theme.spacing(0.5, 1.5),
    backdropFilter: theme.blur.primary,
    background: alpha(theme.palette.common.white, 0.25),
    '&:hover': {
        background: alpha(theme.palette.common.white, 0.25),
    },
}));

export default BlurredButton;
