import { Table, TableBody, TableContainer, TableHead } from '@mui/material';
import React from 'react';
import { BorderedCard, ButtonDialog, FilledIconButton, Tag } from '../../../components';
import { TableCell, TableRow } from '../../../components/Table';
import { BsEye } from 'react-icons/bs';

const ListOfPresence = () => {
    return (
        <ButtonDialog
            title="Liste de présence"
            buttonTitle="Voir la liste"
            button={(props) => (
                <FilledIconButton {...props} white>
                    <BsEye />
                </FilledIconButton>
            )}
        >
            <TableContainer component={BorderedCard}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nom et prénom</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {[1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => (
                            <TableRow>
                                <TableCell>El Mehdi Mallah</TableCell>
                                <TableCell>
                                    {index % 5 ? (
                                        <Tag color="success" label="Présent (e)" lowercase />
                                    ) : (
                                        <Tag lowercase color="error" label="Absent (e)" />
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </ButtonDialog>
    );
};

export default ListOfPresence;
