import { Autocomplete, Grid, InputAdornment } from '@mui/material';
import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { BsCollection, BsPerson } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { createMentor } from '../../../../apis/mentor';
import { Button, ButtonDialog, Input } from '../../../../components';
import { groupAll } from '../../../../contexts/group/apis';

const AddMentor = () => {
    const dispatch = useDispatch();
    const { groups } = useSelector((store) => store.group);

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
            provinceId: '',
            firstname: '',
            lastname: '',
        },
    });

    useEffect(() => {
        if (groups.length === 0) {
            dispatch(groupAll());
        }
    }, []);

    // ===== submit
    const onSubmit = (data, event) => {
        event.preventDefault();
        dispatch(createMentor(data));
        reset();
    };

    return (
        <ButtonDialog
            title="Ajouter un mentor"
            buttonTitle="Ajouter"
            width="sm"
            action={(close) => (
                <Button type="submit" onClick={close} form="add-mentor">
                    Ajouter
                </Button>
            )}
        >
            <form onSubmit={handleSubmit(onSubmit)} id="add-mentor">
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
                                    options={groups.map((option) => option)}
                                    // defaultValue={profile?.orientation}
                                    getOptionLabel={(option) => option.name}
                                    sx={{ width: '100%' }}
                                    onChange={(event, values) => {
                                        setValue('groupId', values?.id);
                                        setValue('provinceId', values?.provinceId);
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
