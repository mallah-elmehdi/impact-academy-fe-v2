import { Box, Grid, Table, TableBody, TableContainer, TableHead, Stack } from '@mui/material';
import React, { useEffect } from 'react';
import { BorderedCard, DashboardTitle, NoData } from '../../../components';
import { TableCell, TableRow } from '../../../components/Table';
import { MENTOR_NAVBAR } from '../../../constants/mentor';
import { dateFormattingNumber } from '../../../utils/functions';
import AddPresence from './AddPresence';
import ListOfPresence from './ListOfPresence';
import EditListOfPresence from './EditListOfPresence';
import { useSelector, useDispatch } from 'react-redux';
import { presencesByMentor } from '../../../contexts/presence/apis';
import { WORKSHOPS } from '../../../constants/programme';

const Presence = () => {
    const dispatch = useDispatch();
    const { presences } = useSelector((store) => store.presence);

    useEffect(() => {
        if (presences.length === 0) {
            dispatch(presencesByMentor());
        }
    }, []);

    return (
        <Box>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <DashboardTitle>{MENTOR_NAVBAR[2].title}</DashboardTitle>
                </Grid>
                <Grid item xs={12}>
                    <AddPresence />
                </Grid>
                <Grid item xs={12}>
                    {presences && presences.length === 0 ? (
                        <NoData />
                    ) : (
                        <TableContainer component={BorderedCard}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Workshop</TableCell>
                                        <TableCell>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {presences &&
                                        presences.map((item) => (
                                            <TableRow key={item.id}>
                                                <TableCell>{dateFormattingNumber(item.createdAt)}</TableCell>
                                                <TableCell>
                                                    {WORKSHOPS.find((w_item) => w_item.workshop === item.workshop)?.title}
                                                </TableCell>
                                                <TableCell>
                                                    <Stack direction="row" spacing={1}>
                                                        <ListOfPresence presenceList={item.participants} />
                                                        <EditListOfPresence presenceList={item.participants} presenceId={item.id} />
                                                    </Stack>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    )}
                </Grid>
            </Grid>
        </Box>
    );
};

export default Presence;
