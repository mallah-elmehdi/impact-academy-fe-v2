import { Grid, Autocomplete, InputAdornment } from '@mui/material';
import React from 'react';
import { Button, ButtonDialog, Input } from '../../../components';
import { Controller, useForm } from 'react-hook-form';
import { BsCollection, BsGeoAlt } from 'react-icons/bs';
import { ORIENTATION } from '../../../constants/participant';

const AddGroup = () => {
    const {
        formState: { errors },
        handleSubmit,
        control,
        reset,
        setValue,
    } = useForm({
        defaultValues: {
            name: '',
            provinceId: '',
        },
    });

    // ===== submit
    const onSubmit = (data, event) => {
        event.preventDefault();
    };

    return (
        <ButtonDialog
            title="Ajouter un groupe"
            buttonTitle="Ajouter"
            width="sm"
            action={
                <Button type="submit" form="add-group">
                    Ajouter
                </Button>
            }
        >
            <form onSubmit={handleSubmit(onSubmit)} id="add-group">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Controller
                            control={control}
                            name="name"
                            rules={{
                                required: { value: true, message: 'Champ est obligatoire' },
                            }}
                            render={({ field }) => (
                                <Input
                                    error={errors.name ? true : false}
                                    {...field}
                                    helperText={errors.name ? errors.name.message : ''}
                                    type="text"
                                    label="Nom de group"
                                    placeholder="Nom de group"
                                    iconStart={<BsCollection />}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Controller
                            control={control}
                            name="provinceId"
                            rules={{
                                required: { value: true, message: 'Champ est obligatoire' },
                            }}
                            render={({ field }) => (
                                <Autocomplete
                                    noOptionsText="Aucune option"
                                    autoHighlight
                                    isOptionEqualToValue={(option, value) => option === value}
                                    options={ORIENTATION.map((option) => option)}
                                    // defaultValue={profile?.orientation}
                                    getOptionLabel={(option) => option}
                                    sx={{ width: '100%' }}
                                    onChange={(event, values) => {
                                        setValue('orientation', values);
                                    }}
                                    renderInput={(params) => {
                                        return (
                                            <Input
                                                {...field}
                                                {...params}
                                                error={errors.provinceId ? true : false}
                                                helperText={errors.provinceId ? errors.provinceId.message : ''}
                                                label="Province"
                                                placeholder="Province"
                                                InputProps={{
                                                    ...params.InputProps,
                                                    disableUnderline: true,
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <BsGeoAlt />
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
                            )}
                        />
                    </Grid>
                </Grid>
            </form>
        </ButtonDialog>
    );
};

export default AddGroup;
