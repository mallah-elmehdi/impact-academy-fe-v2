import { Menu, alpha, styled } from '@mui/material';

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: theme.borderRadius.md,
        padding: theme.spacing(2),
        marginTop: theme.spacing(1),
        color: theme.palette.common.black,
        boxShadow: theme.shadows.default,
        minWidth: '15rem',
        '& .MuiMenu-list': {
            padding: 0,
        },
        '& .MuiMenuItem-root': {
            padding: theme.spacing(1.5),
            fontSize: theme.fontSize.sm,
        borderRadius: theme.borderRadius.md,
        '&:active': {
                backgroundColor: alpha(theme.palette.muted.main, 0.25),
            },
            '&.Mui-selected': {
                backgroundColor: alpha(theme.palette.muted.main, 0.25),
            },
        },
    },
}));

export default StyledMenu;
