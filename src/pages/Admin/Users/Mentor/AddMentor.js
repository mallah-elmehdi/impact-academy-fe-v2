import { Autocomplete, Grid, InputAdornment } from '@mui/material';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { BsCollection, BsPerson } from 'react-icons/bs';
import { Button, ButtonDialog, Input } from '../../../../components';
import { ORIENTATION } from '../../../../constants/participant';

const AddMentor = () => {
    const {
        formState: { errors },
        handleSubmit,
        control,
        reset,
        setValue,
        setError,
    } = useForm({
        defaultValues: {
            groupId: '',
            firstname: '',
            lastname: '',
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
                            name="groupId"
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
                                                error={errors.groupId ? true : false}
                                                helperText={errors.groupId ? errors.groupId.message : ''}
                                                label="Nom de group"
                                                placeholder="Nom de group"
                                                InputProps={{
                                                    ...params.InputProps,
                                                    disableUnderline: true,
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <BsCollection />
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

                    <Grid item xs={12}>
                        <Controller
                            control={control}
                            name="firstname"
                            rules={{
                                required: { value: true, message: 'Champ est obligatoire' },
                            }}
                            render={({ field }) => (
                                <Input
                                    error={errors.firstname ? true : false}
                                    {...field}
                                    helperText={errors.firstname ? errors.firstname.message : ''}
                                    type="text"
                                    label="Prénom de mentor"
                                    placeholder="Prénom de mentor"
                                    iconStart={<BsPerson />}
                                />
                            )}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Controller
                            control={control}
                            name="lastname"
                            rules={{
                                required: { value: true, message: 'Champ est obligatoire' },
                            }}
                            render={({ field }) => (
                                <Input
                                    error={errors.lastname ? true : false}
                                    {...field}
                                    helperText={errors.lastname ? errors.lastname.message : ''}
                                    type="text"
                                    label="Nom de mentor"
                                    placeholder="Nom de mentor"
                                    iconStart={<BsPerson />}
                                />
                            )}
                        />
                    </Grid>
                </Grid>
            </form>
        </ButtonDialog>
    );
};

export default AddMentor;
