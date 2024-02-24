import { Table, TableBody, TableContainer, TableHead } from '@mui/material';
import React from 'react';
import { BsEye } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { BorderedCard, ButtonDialog, FilledIconButton, Tag } from '../../../components';
import { TableCell, TableRow } from '../../../components/Table';
import { isPresent } from '../../../utils/functions';

const ListOfPresence = ({ presenceList }) => {
    const { participants } = useSelector((store) => store.participant);

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
                        {participants &&
                            participants.map((item, index) => (
                                <TableRow key={item.id}>
                                    <TableCell>
                                        {item.firstname} {item.lastname}
                                    </TableCell>
                                    <TableCell>
                                        {isPresent(item.id, presenceList) ? (
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
