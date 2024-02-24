import {
    Autocomplete,
    FormControl,
    FormControlLabel,
    FormHelperText,
    FormLabel,
    Grid,
    InputAdornment,
    Radio,
    RadioGroup,
} from '@mui/material';
import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { BsEnvelope, BsGeoAlt, BsMortarboard, BsPerson, BsPhone } from 'react-icons/bs';
import { Button, ButtonDialog, Input } from '../../../../components';
import { EDUCATION_LEVEL, ORIENTATION, ZONE } from '../../../../constants/participant';
import Other from './Other';
import { useSelector, useDispatch } from 'react-redux';
import { updateParticipantProfile } from '../../../../apis/participant';

const UpdateProfile = () => {
    const { profile } = useSelector((store) => store.participant);
    const dispatch = useDispatch();

    const {
        formState: { errors },
        handleSubmit,
        control,
        reset,
        setValue,
    } = useForm({
        defaultValues: {
            firstname: '',
            lastname: '',
            zone: '',
            city: '',
            phone: '',
            email: '',
            educationLevel: '',
            speciality: '',
            isWorking: false,
            jobDomain: '',
            yearsOfExperience: '',
            orientation: '',
        },
    });

    // ===== submit
    const onSubmit = (data, event) => {
        event.preventDefault();
        dispatch(updateParticipantProfile({ ...data, isWorking: Boolean(data.isWorking) }));
    };

    useEffect(() => {
        if (profile) {
            setValue('firstname', profile.firstname);
            setValue('lastname', profile.lastname);
            setValue('zone', profile.zone);
            setValue('city', profile.city);
            setValue('phone', profile.phone);
            setValue('email', profile.email);
            setValue('educationLevel', profile.educationLevel);
            setValue('speciality', profile.speciality);
            setValue('isWorking', profile.isWorking);
            setValue('jobDomain', profile.jobDomain);
            setValue('yearsOfExperience', profile.yearsOfExperience);
            setValue('orientation', profile.orientation);
        }
    }, [profile]);

    return (
        <ButtonDialog
            title="Modifier le profil"
            buttonTitle="Modifier"
            action={(close) => (
                <Button type="submit" form="edit-profile-student">
                    Modifier
                </Button>
            )}
        >
            <form onSubmit={handleSubmit(onSubmit)} id="edit-profile-student">
                <Grid container spacing={3}>
                    <Grid item md={6} xs={12}>
                        <Controller
                            control={control}
                            name="firstname"
                            rules={{
                                required: { value: true, message: 'Nom est obligatoire' },
                            }}
                            render={({ field }) => (
                                <Input
                                    error={errors.firstname ? true : false}
                                    {...field}
                                    helperText={errors.firstname ? errors.firstname.message : ''}
                                    type="text"
                                    label="Nom"
                                    placeholder="Nom"
                                    iconStart={<BsPerson />}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Controller
                            control={control}
                            name="lastname"
                            rules={{
                                required: { value: true, message: 'Prénom est obligatoire' },
                            }}
                            render={({ field }) => (
                                <Input
                                    error={errors.lastname ? true : false}
                                    {...field}
                                    helperText={errors.lastname ? errors.lastname.message : ''}
                                    type="text"
                                    label="Prénom"
                                    placeholder="Prénom"
                                    iconStart={<BsPerson />}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Controller
                            control={control}
                            name="zone"
                            rules={{
                                required: { value: true, message: 'Milieu est obligatoire' },
                            }}
                            render={({ field }) => (
                                <Autocomplete
                                    noOptionsText="Aucune option"
                                    autoHighlight
                                    isOptionEqualToValue={(option, value) => option === value}
                                    options={ZONE.map((option) => option)}
                                    getOptionLabel={(option) => option}
                                    defaultValue={profile?.zone}
                                    sx={{ width: '100%' }}
                                    onChange={(event, values) => {
                                        setValue('zone', values);
                                    }}
                                    renderInput={(params) => {
                                        return (
                                            <Input
                                                {...field}
                                                {...params}
                                                error={errors.zone ? true : false}
                                                helperText={errors.zone ? errors.zone.message : ''}
                                                label="Milieu"
                                                placeholder="Choisissez le milieu"
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

                    <Grid item md={6} xs={12}>
                        <Controller
                            control={control}
                            name="city"
                            rules={{
                                required: { value: true, message: 'Ville est obligatoire' },
                            }}
                            render={({ field }) => (
                                <Input
                                    error={errors.city ? true : false}
                                    {...field}
                                    helperText={errors.city ? errors.city.message : ''}
                                    type="text"
                                    label="Ville"
                                    placeholder="Ville"
                                    iconStart={<BsGeoAlt />}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Controller
                            control={control}
                            name="phone"
                            rules={{
                                required: { value: true, message: 'Le téléphone est obligatoire' },
                            }}
                            render={({ field }) => (
                                <Input
                                    error={errors.phone ? true : false}
                                    {...field}
                                    helperText={errors.phone ? errors.phone.message : ''}
                                    type="number"
                                    label="Téléphone"
                                    placeholder="Téléphone"
                                    iconStart={<BsPhone />}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Controller
                            control={control}
                            name="email"
                            rules={{
                                required: { value: true, message: 'Adresse Email est obligatoire' },
                            }}
                            render={({ field }) => (
                                <Input
                                    error={errors.email ? true : false}
                                    {...field}
                                    helperText={errors.email ? errors.email.message : ''}
                                    type="text"
                                    label="Adresse Email"
                                    placeholder="Adresse Email"
                                    iconStart={<BsEnvelope />}
                                />
                            )}
                        />
                    </Grid>

                    <Grid item md={6} xs={12}>
                        <Controller
                            control={control}
                            name="educationLevel"
                            rules={{
                                required: { value: true, message: 'Champ est obligatoire' },
                            }}
                            render={({ field }) => (
                                <Autocomplete
                                    noOptionsText="Aucune option"
                                    autoHighlight
                                    isOptionEqualToValue={(option, value) => option === value}
                                    options={EDUCATION_LEVEL.map((option) => option)}
                                    getOptionLabel={(option) => option}
                                    defaultValue={profile?.educationLevel}
                                    sx={{ width: '100%' }}
                                    onChange={(event, values) => {
                                        setValue('educationLevel', values);
                                    }}
                                    renderInput={(params) => {
                                        return (
                                            <Input
                                                {...field}
                                                {...params}
                                                error={errors.educationLevel ? true : false}
                                                helperText={errors.educationLevel ? errors.educationLevel.message : ''}
                                                label="Quel est votre niveau d'etude?"
                                                placeholder="Quel est votre niveau d'etude?"
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
                            )}
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Controller
                            control={control}
                            name="speciality"
                            rules={{
                                required: { value: true, message: 'Champ est obligatoire' },
                            }}
                            render={({ field }) => (
                                <Input
                                    error={errors.speciality ? true : false}
                                    {...field}
                                    helperText={errors.speciality ? errors.speciality.message : ''}
                                    type="text"
                                    label="Quelle est votre spécialité?"
                                    placeholder="Quelle est votre spécialité?"
                                    iconStart={<BsMortarboard />}
                                />
                            )}
                        />
                    </Grid>

                    <Grid item md={6} xs={12}>
                        <Controller
                            control={control}
                            name="isWorking"
                            rules={{
                                required: { value: true, message: 'Champ est obligatoire' },
                            }}
                            render={({ field }) => (
                                <FormControl error={errors.isWorking ? true : false}>
                                    <FormLabel
                                        sx={(theme) => ({
                                            fontSize: theme.fontSize.xs,
                                            color: theme.palette.common.grey,
                                        })}
                                        id="isWorking"
                                    >
                                        Est-ce que vous occupez un poste actuellement?
                                    </FormLabel>
                                    <RadioGroup {...field} aria-labelledby="isWorking" defaultValue={true}>
                                        <FormControlLabel value={true} control={<Radio />} label="Oui" />
                                        <FormControlLabel value={false} control={<Radio />} label="Non" />
                                    </RadioGroup>
                                    {errors.isWorking && <FormHelperText>{errors.isWorking.message}</FormHelperText>}
                                </FormControl>
                            )}
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Controller
                            control={control}
                            name="yearsOfExperience"
                            rules={{
                                required: { value: true, message: 'Champ est obligatoire' },
                            }}
                            render={({ field }) => (
                                <FormControl error={errors.yearsOfExperience ? true : false}>
                                    <FormLabel
                                        sx={(theme) => ({
                                            fontSize: theme.fontSize.xs,
                                            color: theme.palette.common.grey,
                                        })}
                                        id="yearsOfExperience"
                                    >
                                        Nombre d'Année d'expérience
                                    </FormLabel>
                                    <RadioGroup {...field} aria-labelledby="yearsOfExperience" defaultValue={true}>
                                        <FormControlLabel value="LT_1" control={<Radio />} label="< 1 an" />
                                        <FormControlLabel value="BW_1_3" control={<Radio />} label="1 an - 3 ans" />
                                        <FormControlLabel value="BW_3_5" control={<Radio />} label="3 ans - 5 ans" />
                                        <FormControlLabel value="GT_5" control={<Radio />} label="> 5 ans" />
                                    </RadioGroup>
                                    {errors.yearsOfExperience && <FormHelperText>{errors.yearsOfExperience.message}</FormHelperText>}
                                </FormControl>
                            )}
                        />
                    </Grid>

                    <Grid item md={6} xs={12}>
                        <Controller
                            control={control}
                            name="jobDomain"
                            rules={{
                                required: { value: true, message: 'Champ est obligatoire' },
                            }}
                            render={({ field }) => <Other profile={profile} errors={errors} field={field} setValue={setValue} />}
                        />
                    </Grid>

                    <Grid item md={6} xs={12}>
                        <Controller
                            control={control}
                            name="orientation"
                            rules={{
                                required: { value: true, message: 'Champ est obligatoire' },
                            }}
                            render={({ field }) => (
                                <Autocomplete
                                    noOptionsText="Aucune option"
                                    autoHighlight
                                    isOptionEqualToValue={(option, value) => option === value}
                                    options={ORIENTATION.map((option) => option)}
                                    defaultValue={profile?.orientation}
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
                                                error={errors.orientation ? true : false}
                                                helperText={errors.orientation ? errors.orientation.message : ''}
                                                label="Quelle est  votre orientation recherchée?"
                                                placeholder="Quelle est  votre orientation recherchée?"
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
                            )}
                        />
                    </Grid>
                </Grid>
            </form>
        </ButtonDialog>
    );
};

export default UpdateProfile;
