import { Stack, Table, TableBody, TableContainer, TableHead } from '@mui/material';
import React from 'react';
import { BorderedCard, ButtonDialog } from '../../../components';
import { TableCell, TableRow } from '../../../components/Table';

const EvaluationDetails = ({ workshop, data }) => {
    return (
        <ButtonDialog smallButton title={workshop} buttonTitle="Détails">
            <Stack spacing={3}>
                <TableContainer component={BorderedCard}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {Object.keys(data).map((item) => (
                                    <TableCell key={workshop + item}>{item}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                {Object.values(data).map((item) => (
                                    <TableCell key={workshop + item}>{item}</TableCell>
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
