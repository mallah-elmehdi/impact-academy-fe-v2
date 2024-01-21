import { IconButton } from '@mui/material';
import React from 'react';
import { BsEye, BsEyeSlash, BsLock } from 'react-icons/bs';
import { Input } from '../../components';

const PasswordInput = ({ errors, ...props }) => {
    // show password
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => event.preventDefault();

    return (
        <Input
            error={errors.password ? true : false}
            {...props}
            type={showPassword ? 'text' : 'password'}
            label="Mot de passe"
            placeholder="Entrez votre mot de passe"
            helperText={errors.password ? errors.password.message : ''}
            iconStart={<BsLock />}
            iconEnd={
                <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    sx={(theme) => ({
                        color: theme.palette.primary.main,
                        fontSize: theme.fontSize.md,
                    })}
                >
                    {showPassword ? <BsEyeSlash /> : <BsEye />}
                </IconButton>
            }
        />
    );
};

export default PasswordInput;
