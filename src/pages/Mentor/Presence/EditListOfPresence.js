import { Table, TableBody, TableContainer, TableHead } from '@mui/material';
import React from 'react';
import { BorderedCard, Button, ButtonDialog, Checkbox, FilledIconButton, Tag } from '../../../components';
import { TableCell, TableRow } from '../../../components/Table';
import { BsEye, BsPencil } from 'react-icons/bs';

const EditListOfPresence = () => {
    const [list, setList] = React.useState([]);
    const handleCheckChange = (index) => (event) => {
        list[index].isChecked = event.target.checked;
        setList([...list]);
    };

    return (
        <ButtonDialog
            title="Liste de présence"
            buttonTitle="Voir la liste"
            button={(props) => (
                <FilledIconButton {...props} white>
                    <BsPencil />
                </FilledIconButton>
            )}
            action={<Button>Soumettre</Button>}
        >
            <TableContainer component={BorderedCard}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ width: '10px' }}></TableCell>
                            <TableCell>Nom et prénom</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {[1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => (
                            <TableRow>
                                <TableCell sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                                    <Checkbox checked={list[index]?.isChecked} onChange={handleCheckChange} />
                                </TableCell>
                                <TableCell>El Mehdi Mallah</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </ButtonDialog>
    );
};

export default EditListOfPresence;
