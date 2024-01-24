import { Autocomplete, Box, IconButton, InputAdornment } from '@mui/material';
import React, { useState } from 'react';
import { BsMortarboard, BsX } from 'react-icons/bs';
import { Input } from '../../../../components';
import { JOB_DOMAIN } from '../../../../constants/student';

const Other = ({ field, errors, setValue }) => {
    const [autre, setAutre] = useState();

    return (
        <>
            {!autre ? (
                <Autocomplete
                    noOptionsText="Aucune option"
                    autoHighlight
                    isOptionEqualToValue={(option, value) => option === value}
                    options={JOB_DOMAIN.map((option) => option)}
                    getOptionLabel={(option) => option}
                    sx={{ width: '100%' }}
                    // defaultValue={profile?.job_domain}
                    onChange={(event, values) => {
                        if (values === 'Autre') setAutre(true);
                        else {
                            setAutre(false);
                            setValue('job_domain', values);
                        }
                    }}
                    renderInput={(params) => {
                        return (
                            <Input
                                {...field}
                                {...params}
                                error={errors.job_domain ? true : false}
                                helperText={errors.job_domain ? errors.job_domain.message : ''}
                                label="Quel est votre secteur d'activité?"
                                placeholder="Quel est votre secteur d'activité?"
                                InputProps={{
                                    ...params.InputProps,
                                    disableUnderline: true,
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <BsMortarboard />
                                        </InputAdornment>
                                    ),
                                }}
                                sx={{
                                    '& .MuiInputAdornment-root': {
                                        marginTop: '0 !important',
                                    },
                                }}
                            />
                        );
                    }}
                />
            ) : (
                <Box display="flex" alignItems="center" gap={1}>
                    <Input
                        {...field}
                        error={errors.job_domain ? true : false}
                        helperText={errors.job_domain ? errors.job_domain.message : ''}
                        label="Quel est votre secteur d'activité?"
                        placeholder="Quel est votre secteur d'activité?"
                        iconStart={<BsMortarboard />}
                    />
                    <IconButton
                        aria-label="open drawer"
                        onClick={() => setAutre(false)}
                        sx={(theme) => ({ color: theme.palette.common.black })}
                    >
                        <BsX />
                    </IconButton>
                </Box>
            )}
        </>
    );
};

export default Other;
