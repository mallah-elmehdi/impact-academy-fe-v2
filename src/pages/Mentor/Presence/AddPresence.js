import { Autocomplete, Grid, InputAdornment } from '@mui/material';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { BsCollection, BsEasel } from 'react-icons/bs';
import { Button, ButtonDialog, Input } from '../../../components';
import { WORKSHOPS } from '../../../constants/programme';
import { useDispatch, useSelector } from 'react-redux';
import { createPresence } from '../../../apis/presence';

const AddPresence = () => {
    const dispatch = useDispatch();
    const { groups } = useSelector((store) => store.group);
    const { profile } = useSelector((store) => store.mentor);

    const {
        formState: { errors },
        handleSubmit,
        control,
        reset,
        setValue,
    } = useForm({
        defaultValues: {
            workshop: '',
            groupId: '',
        },
    });

    // ===== submit
    const onSubmit = (data, event) => {
        event.preventDefault();
        reset();
        dispatch(createPresence(data));
    };

    return (
        <ButtonDialog
            title="Ajouter une liste de présence"
            buttonTitle="Ajouter"
            width="sm"
            action={(close) => (
                <Button type="submit" onClick={close} form="add-presence-list">
                    Ajouter
                </Button>
            )}
        >
            <form onSubmit={handleSubmit(onSubmit)} id="add-presence-list">
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
                                    options={profile ? profile.groups.map((option) => option) : []}
                                    // defaultValue={profile?.orientation}
                                    getOptionLabel={(option) => option.name}
                                    sx={{ width: '100%' }}
                                    onChange={(event, values) => {
                                        setValue('groupId', values?.id);
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
                            name="workshop"
                            rules={{
                                required: { value: true, message: 'Champ est obligatoire' },
                            }}
                            render={({ field }) => (
                                <Autocomplete
                                    noOptionsText="Aucune option"
                                    autoHighlight
                                    // isOptionEqualToValue={(option, value) => option === value}
                                    options={WORKSHOPS.map((option) => option)}
                                    // defaultValue={profile?.orientation}
                                    getOptionLabel={(option) => option.title}
                                    sx={{ width: '100%' }}
                                    onChange={(event, values) => {
                                        setValue('workshop', values?.workshop);
                                    }}
                                    renderInput={(params) => {
                                        return (
                                            <Input
                                                {...field}
                                                {...params}
                                                error={errors.workshop ? true : false}
                                                helperText={errors.workshop ? errors.workshop.message : ''}
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
