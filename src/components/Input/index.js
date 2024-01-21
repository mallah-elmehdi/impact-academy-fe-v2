import { InputAdornment, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

const Input = styled((props) => (
    <TextField
        InputProps={
            props.InputProps
                ? props.InputProps
                : {
                      //   disableUnderline: true,
                      startAdornment: props.iconStart ? <InputAdornment position="start">{props.iconStart}</InputAdornment> : null,
                      endAdornment: props.iconEnd ? <InputAdornment position="start">{props.iconEnd}</InputAdornment> : null,
                  }
        }
        variant="outlined"
        {...props}
    />
))(({ theme }) => ({
    width: '100%',
    '& .MuiFilledInput-root, & .MuiOutlinedInput-root': {
        color: theme.palette.primary.main,
        borderRadius: theme.borderRadius.xl,
        overflow: 'hidden',
        backgroundColor: theme.palette.common.white,
        backdropFilter: theme.blur.primary,
        transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow']),
        '&.Mui-focused, &:hover': {
            // boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
            borderColor: theme.palette.primary.main,
            backgroundColor: theme.palette.common.white,
            backdropFilter: theme.blur.primary,
        },
        '& .MuiInputAdornment-root, & .MuiFormLabel-root': {
            color: theme.palette.primary.main,
        },
        '&.Mui-error': {
            '& .MuiInputAdornment-root, & .MuiFormLabel-root': {
                color: theme.palette.error.main,
            },
        },
    },
    '& .MuiInputAdornment-root, & .MuiFormLabel-root': {
        fontSize: theme.fontSize.md,
        color: theme.palette.primary.main,
    },
    '& .MuiFilledInput-input::placeholder': {
        fontSize: theme.fontSize.sm,
        color: theme.palette.primary.main,
    },
}));

export default Input;
