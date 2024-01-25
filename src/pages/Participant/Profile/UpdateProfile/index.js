import {
    Autocomplete,
    Box,
    FormControl,
    FormControlLabel,
    FormHelperText,
    FormLabel,
    Grid,
    IconButton,
    InputAdornment,
    Radio,
    RadioGroup,
} from '@mui/material';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, FormDialog, Input } from '../../../../components';
import { EDUCATION_LEVEL, JOB_DOMAIN, ORIENTATION, ZONE } from '../../../../constants/participant';
import { BsEnvelope, BsGeoAlt, BsMortarboard, BsPerson, BsPhone } from 'react-icons/bs';
import Other from './Other';

const UpdateProfile = () => {
    // ========== DIALOG OPEN/CLOSE
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const {
        formState: { errors },
        handleSubmit,
        control,
        reset,
        setValue,
    } = useForm({
        defaultValues: {
            first_name: '',
            last_name: '',
            zone: '',
            city: '',
            phone: '',
            email: '',
            education_level: '',
            speciality: '',
            is_working: '',
            job_domain: '',
            years_of_experience: '',
            orientation: '',
        },
    });

    // ===== submit
    const onSubmit = (data, event) => {
        event.preventDefault();
    };

    return (
        <>
            <Button onClick={handleClickOpen}>Modifier le profil</Button>
            <FormDialog
                title="Modifier le profil"
                id="edit-profile-student"
                open={open}
                onClose={handleClose}
                action={
                    <Button type="submit" form="edit-profile-student">
                        Modifier
                    </Button>
                }
                onSubmit={handleSubmit(onSubmit)}
                maxWidth="md"
            >
                <Grid container spacing={3}>
                    <Grid item md={6} xs={12}>
                        <Controller
                            control={control}
                            name="first_name"
                            rules={{
                                required: { value: true, message: 'Nom est obligatoire' },
                            }}
                            render={({ field }) => (
                                <Input
                                    error={errors.first_name ? true : false}
                                    {...field}
                                    helperText={errors.first_name ? errors.first_name.message : ''}
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
                            name="last_name"
                            rules={{
                                required: { value: true, message: 'Prénom est obligatoire' },
                            }}
                            render={({ field }) => (
                                <Input
                                    error={errors.last_name ? true : false}
                                    {...field}
                                    helperText={errors.last_name ? errors.last_name.message : ''}
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
                                    // defaultValue={profile?.zone}
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
                                    helperText={errors.phone ? errors.name.message : ''}
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

                    {/* ----------------- */}
                    <Grid item md={6} xs={12}>
                        <Controller
                            control={control}
                            name="education_level"
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
                                    // defaultValue={profile?.education_level}
                                    sx={{ width: '100%' }}
                                    onChange={(event, values) => {
                                        setValue('education_level', values);
                                    }}
                                    renderInput={(params) => {
                                        return (
                                            <Input
                                                {...field}
                                                {...params}
                                                error={errors.education_level ? true : false}
                                                helperText={errors.education_level ? errors.education_level.message : ''}
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
                            name="is_working"
                            rules={{
                                required: { value: true, message: 'Champ est obligatoire' },
                            }}
                            render={({ field }) => (
                                <FormControl error={errors.is_working ? true : false}>
                                    <FormLabel
                                        sx={(theme) => ({
                                            fontSize: theme.fontSize.xs,
                                            color: theme.palette.common.grey,
                                        })}
                                        id="is_working"
                                    >
                                        Est-ce que vous occupez un poste actuellement?
                                    </FormLabel>
                                    <RadioGroup {...field} aria-labelledby="is_working" defaultValue={true}>
                                        <FormControlLabel value={true} control={<Radio />} label="Oui" />
                                        <FormControlLabel value={false} control={<Radio />} label="Non" />
                                    </RadioGroup>
                                    {errors.is_working && <FormHelperText>{errors.is_working.message}</FormHelperText>}
                                </FormControl>
                            )}
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Controller
                            control={control}
                            name="years_of_experience"
                            rules={{
                                required: { value: true, message: 'Champ est obligatoire' },
                            }}
                            render={({ field }) => (
                                <FormControl error={errors.years_of_experience ? true : false}>
                                    <FormLabel
                                        sx={(theme) => ({
                                            fontSize: theme.fontSize.xs,
                                            color: theme.palette.common.grey,
                                        })}
                                        id="years_of_experience"
                                    >
                                        Nombre d'Année d'expérience
                                    </FormLabel>
                                    <RadioGroup {...field} aria-labelledby="years_of_experience" defaultValue={true}>
                                        <FormControlLabel value="LT_1" control={<Radio />} label="< 1 an" />
                                        <FormControlLabel value="BW_1_3" control={<Radio />} label="1 an - 3 ans" />
                                        <FormControlLabel value="BW_3_5" control={<Radio />} label="3 ans - 5 ans" />
                                        <FormControlLabel value="GT_5" control={<Radio />} label="> 5 ans" />
                                    </RadioGroup>
                                    {errors.years_of_experience && <FormHelperText>{errors.years_of_experience.message}</FormHelperText>}
                                </FormControl>
                            )}
                        />
                    </Grid>

                    <Grid item md={6} xs={12}>
                        <Controller
                            control={control}
                            name="job_domain"
                            rules={{
                                required: { value: true, message: 'Champ est obligatoire' },
                            }}
                            render={({ field }) => <Other errors={errors} field={field} setValue={setValue} />}
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
            </FormDialog>
        </>
    );
};

export default UpdateProfile;
