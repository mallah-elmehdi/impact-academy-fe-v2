import React from 'react';
import { Button, Menu, SmallButton } from '..';
import { BsFilter } from 'react-icons/bs';
import { MenuItem } from '@mui/material';

const Filter = ({ title, children }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <SmallButton
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                startIcon={<BsFilter />}
                color="secondary"
            >
                {title ? title : 'Filter'}
            </SmallButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {children && children(handleClose)}
            </Menu>
        </div>
    );
};

export default Filter;
