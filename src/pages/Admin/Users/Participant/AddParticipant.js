import { Autocomplete, Grid, InputAdornment } from '@mui/material';
import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { BsCollection } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { createParticipant } from '../../../../apis/participant';
import { Button, ButtonDialog, FileInput, Input } from '../../../../components';
import { groupAll } from '../../../../contexts/group/apis';

const AddParticipant = () => {
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
            file: '',
        },
    });

    const { FileInputComponent, file } = FileInput({ setError, setValue });

    useEffect(() => {
        if (groups.length === 0) {
            dispatch(groupAll());
        }
    }, []);

    // ===== submit
    const onSubmit = (data, event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('provinceId', data.provinceId);
        formData.append('groupId', data.groupId);
        dispatch(createParticipant(formData));
        reset();
    };

    return (
        <ButtonDialog
            title="Ajouter un groupe"
            buttonTitle="Ajouter"
            width="sm"
            action={(close) => (
                <Button type="submit" onClick={close} form="add-group">
                    Ajouter
                </Button>
            )}
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
                            name="file"
                            rules={{
                                required: { value: true, message: 'Champ est obligatoire' },
                            }}
                            render={({ field }) => <FileInputComponent field={field} errors={errors} />}
                        />
                    </Grid>
                </Grid>
            </form>
        </ButtonDialog>
    );
};

export default AddParticipant;
