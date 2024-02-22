import React from 'react';
import { Button, ButtonDialog, FilledIconButton } from '../../../../components';
import { BsPencil } from 'react-icons/bs';
import { useForm, Controller } from 'react-hook-form';
import { Grid } from '@mui/material';

const EditParticipant = () => {
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
            file: '',
        },
    });

    // ===== submit
    const onSubmit = (data, event) => {
        event.preventDefault();
    };

    return (
        <ButtonDialog
            title="Modifier"
            button={(props) => (
                <FilledIconButton {...props} white>
                    <BsPencil />
                </FilledIconButton>
            )}
            width="sm"
            action={
                <Button type="submit" form="add-group">
                    Modifier
                </Button>
            }
        >
            <form onSubmit={handleSubmit(onSubmit)} id="add-group">
                <Grid container spacing={3}></Grid>
            </form>
        </ButtonDialog>
    );
};

export default EditParticipant;
