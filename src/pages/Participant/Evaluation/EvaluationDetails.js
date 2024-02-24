import { Stack, Table, TableBody, TableContainer, TableHead } from '@mui/material';
import React from 'react';
import { BorderedCard, ButtonDialog } from '../../../components';
import { TableCell, TableRow } from '../../../components/Table';

const EvaluationDetails = ({ workshop, evaluations }) => {
    return (
        <ButtonDialog smallButton title={workshop} buttonTitle="Détails">
            <Stack spacing={3}>
                <TableContainer component={BorderedCard}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {evaluations.map((item) => (
                                    <TableCell key={item.id}>{item.criteria}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                {evaluations.map((item) => (
                                    <TableCell key={item.id}>{item.score}</TableCell>
                                ))}
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Stack>
        </ButtonDialog>
    );
};

export default EvaluationDetails;
