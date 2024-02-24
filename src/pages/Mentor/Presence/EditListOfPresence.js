import { Table, TableBody, TableContainer, TableHead } from '@mui/material';
import React, { useEffect } from 'react';
import { BsPencil } from 'react-icons/bs';
import { BorderedCard, Button, ButtonDialog, Checkbox, FilledIconButton } from '../../../components';
import { useSelector, useDispatch } from 'react-redux';
import { TableCell, TableRow } from '../../../components/Table';
import { isPresent } from '../../../utils/functions';
import { createPresence, updatePresence } from '../../../apis/presence';

const getCheckedList = (presenceList, participants) => {
    return participants.map((item) => ({
        id: item.id,
        isPresent: !!isPresent(item.id, presenceList),
    }));
};

const EditListOfPresence = ({ presenceList, presenceId }) => {
    const dispatch = useDispatch();
    const { participants } = useSelector((store) => store.participant);

    const [list, setList] = React.useState([]);
    const handleCheckChange = (id) => (event) => {
        setList(list.map((item) => (item.id === id ? { ...item, isPresent: event.target.checked } : item)));
    };

    const handleSubmit = () => {
        const participants = list.filter((item) => item.isPresent).map((item) => parseInt(item.id));

        dispatch(
            updatePresence({
                participants,
                presenceId,
            })
        );
    };

    useEffect(() => {
        setList(getCheckedList(presenceList, participants));
    }, []);

    return (
        <ButtonDialog
            title="Liste de présence"
            buttonTitle="Voir la liste"
            button={(props) => (
                <FilledIconButton {...props} white>
                    <BsPencil />
                </FilledIconButton>
            )}
            action={(close) => (
                <Button
                    onClick={() => {
                        handleSubmit();
                        close();
                    }}
                >
                    Soumettre
                </Button>
            )}
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
                        {participants &&
                            participants.map((item, index) => (
                                <TableRow key={item.id}>
                                    <TableCell sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                                        <Checkbox
                                            checked={list.find((p) => p.id === item.id)?.isPresent}
                                            onChange={handleCheckChange(item.id)}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        {item.firstname} {item.lastname}
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </ButtonDialog>
    );
};

export default EditListOfPresence;
