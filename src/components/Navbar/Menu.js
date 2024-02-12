import React from 'react';
import BlurredButton from '../BlurredButton';
import { MenuItem, Menu as MuiMenu } from '@mui/material';
import { ButtonLink, Link } from '..';

const Menu = ({ menu, icon, title, mobile }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    return (
        <>
            {mobile ? (
                <BlurredButton
                    onClick={handleClick}
                    sx={{
                        color: (theme) => theme.palette.primary.main,
                        fontSize: (theme) => theme.fontSize['xl'],
                    }}
                >
                    {title}
                </BlurredButton>
            ) : (
                <BlurredButton startIcon={icon} onClick={handleClick}>
                    {title}
                </BlurredButton>
            )}
            <MuiMenu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {menu.map((item) => (
                    <ButtonLink to={item.url} key={item.title}>
                        <MenuItem onClick={handleClose} disableRipple>
                            {item.title}
                        </MenuItem>
                    </ButtonLink>
                ))}
            </MuiMenu>
        </>
    );
};

export default Menu;
