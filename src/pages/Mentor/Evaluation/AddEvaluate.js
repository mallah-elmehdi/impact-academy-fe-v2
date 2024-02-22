import { Table, TableBody, TableContainer, TableHead, Typography } from '@mui/material';
import React from 'react';
import { BsPencil } from 'react-icons/bs';
import { BorderedCard, Button, ButtonDialog, Checkbox, FilledIconButton, Slider } from '../../../components';
import { TableCell, TableRow } from '../../../components/Table';
import { Stack } from '@mui/material';
import { WORKSHOPS } from '../../../constants/programme';
import EvaluationSlider from './EvaluationSlider';

const AddEvaluate = () => {
    return (
        <ButtonDialog
            title="Liste de présence"
            button={(props) => (
                <FilledIconButton {...props} white>
                    <BsPencil />
                </FilledIconButton>
            )}
            action={(close) => (
                <Button type="submit" onClick={close} form="add-group">
                    Soumettre
                </Button>
            )}
            width="lg"
        >
            <Stack spacing={3}>
                <EvaluationSlider title="Workshop 1"></EvaluationSlider>
                <EvaluationSlider title="Workshop 2"></EvaluationSlider>
                <EvaluationSlider title="Coaching 1"></EvaluationSlider>
                <EvaluationSlider title="Workshop 3"></EvaluationSlider>
                <EvaluationSlider title="Workshop 4"></EvaluationSlider>
                <EvaluationSlider title="Coaching 2"></EvaluationSlider>
                <EvaluationSlider title="Insertion Professionnelle"></EvaluationSlider>
            </Stack>
        </ButtonDialog>
    );
};

//
//
//
//
//
//
//

export default AddEvaluate;
