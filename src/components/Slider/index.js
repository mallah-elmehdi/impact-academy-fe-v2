import { Slider, alpha, styled } from '@mui/material';

const StyledSlider = styled(Slider)(({ theme }) => ({
    // color: theme.palette.secondary.main,
    color: alpha(theme.palette.primary.light_main, 0.75),
    height: 15,
    width: '100%',
    flexGrow: 1,
    '& .MuiSlider-track': {
        border: 'none',
    },
    '& .MuiSlider-thumb': {
        height: 30,
        width: 30,
        backgroundColor: theme.palette.common.white,
        border: '4px solid currentColor',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
        },
        '&:before': {
            display: 'none',
        },
    },
    '& .MuiSlider-valueLabel': {
        lineHeight: 1.2,
        fontSize: theme.fontSize.sm,
        background: 'unset',
        padding: 0,
        width: 32,
        height: 32,
        borderRadius: '50% 50% 50% 0',
        backgroundColor: alpha(theme.palette.primary.light_main, 0.75),
        // backgroundColor: theme.palette.secondary.main,
        transformOrigin: 'bottom left',
        transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
        '&:before': { display: 'none' },
        '&.MuiSlider-valueLabelOpen': {
            transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
        },
        '& > *': {
            transform: 'rotate(45deg)',
        },
    },
}));

export default StyledSlider;
