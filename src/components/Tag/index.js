import React from 'react';
import { Chip, alpha } from '@mui/material';

const Tag = ({ label, white, lowercase, color, sm, filled }) => {
    const alphaLevel = filled ? 1 : 0.125;

    return (
        <Chip
            size="small"
            sx={(theme) => ({
                '&.MuiChip-root': {
                    borderRadius: theme.borderRadius.sm,
                },
                backgroundColor: alpha(white ? theme.palette.common.white : theme.palette[color ? color : 'primary'].main, alphaLevel),
                color: white || filled ? theme.palette.common.white : theme.palette[color ? color : 'primary'].main,
                fontWeight: theme.fontWeight.medium,
                fontSize: sm ? '0.5rem' : '0.65rem',
                textTransform: lowercase ? 'lowercase' : 'uppercase',
                padding: theme.spacing(0.125, 0.25),
                height: sm ? 12 : '100%',
            })}
            label={label}
        />
    );
};

export default Tag;
