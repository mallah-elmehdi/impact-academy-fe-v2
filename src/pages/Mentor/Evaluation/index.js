import { Box, Grid, Table, TableBody, TableContainer, TableHead } from '@mui/material';
import React, { useEffect } from 'react';
import { BorderedCard, DashboardTitle, Link, SmallButton } from '../../../components';
import { TableCell, TableRow } from '../../../components/Table';
import { MENTOR_NAVBAR } from '../../../constants/mentor';
import { useSelector, useDispatch } from 'react-redux';
import { participantByMentor } from '../../../contexts/participant/apis';
import { totalScore } from '../../../utils/functions';

const Evaluation = () => {
    const dispatch = useDispatch();
    const { participants } = useSelector((store) => store.participant);

    useEffect(() => {
        dispatch(participantByMentor());
    }, []);

    return (
        <Box>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <DashboardTitle>{MENTOR_NAVBAR[1].title}</DashboardTitle>
                </Grid>
                <Grid item xs={12}>
                    <TableContainer component={BorderedCard}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Nom et prénom</TableCell>
                                    <TableCell>Moyenne</TableCell>
                                    <TableCell>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {participants &&
                                    participants.map((item) => (
                                        <TableRow key={item.id}>
                                            <TableCell>
                                                {item.firstname} {item.lastname}
                                            </TableCell>
                                            <TableCell>{totalScore(item.evaluations)}/5</TableCell>
                                            <TableCell>
                                                <Link to={item.id + ''}>
                                                    <SmallButton>Évaluer</SmallButton>
                                                </Link>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Evaluation;
