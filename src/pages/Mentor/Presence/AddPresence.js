import { Autocomplete, Grid, InputAdornment } from '@mui/material';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { BsEasel } from 'react-icons/bs';
import { Button, ButtonDialog, Input } from '../../../components';
import { WORKSHOPS } from '../../../constants/programme';

const AddPresence = () => {
    const {
        formState: { errors },
        handleSubmit,
        control,
        reset,
        setValue,
    } = useForm({
        defaultValues: {
            workshop: '',
        },
    });

    // ===== submit
    const onSubmit = (data, event) => {
        event.preventDefault();
    };

    return (
        <ButtonDialog
            title="Ajouter une liste de présence"
            buttonTitle="Ajouter"
            width="sm"
            action={
                <Button type="submit" form="add-presence-list">
                    Ajouter
                </Button>
            }
        >
            <form onSubmit={handleSubmit(onSubmit)} id="add-presence-list">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Controller
                            control={control}
                            name="workshop"
                            rules={{
                                required: { value: true, message: 'Champ est obligatoire' },
                            }}
                            render={({ field }) => (
                                <Autocomplete
                                    noOptionsText="Aucune option"
                                    autoHighlight
                                    isOptionEqualToValue={(option, value) => option === value}
                                    options={WORKSHOPS.map((option) => option.title)}
                                    // defaultValue={profile?.orientation}
                                    getOptionLabel={(option) => option}
                                    sx={{ width: '100%' }}
                                    onChange={(event, values) => {
                                        setValue('workshop', values);
                                    }}
                                    renderInput={(params) => {
                                        return (
                                            <Input
                                                {...field}
                                                {...params}
                                                error={errors.provinceId ? true : false}
                                                helperText={errors.provinceId ? errors.provinceId.message : ''}
                                                label="Workshop"
                                                placeholder="Workshop"
                                                InputProps={{
                                                    ...params.InputProps,
                                                    disableUnderline: true,
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <BsEasel />
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

export default AddPresence;
