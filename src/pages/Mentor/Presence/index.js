import { Box, Grid, Table, TableBody, TableContainer, TableHead, Stack } from '@mui/material';
import React from 'react';
import { BorderedCard, DashboardTitle } from '../../../components';
import { TableCell, TableRow } from '../../../components/Table';
import { MENTOR_NAVBAR } from '../../../constants/mentor';
import { dateFormattingNumber } from '../../../utils/functions';
import AddPresence from './AddPresence';
import ListOfPresence from './ListOfPresence';
import EditListOfPresence from './EditListOfPresence';

const Presence = () => {
    return (
        <Box>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <DashboardTitle>{MENTOR_NAVBAR[1].title}</DashboardTitle>
                </Grid>
                <Grid item xs={12}>
                    <AddPresence />
                </Grid>
                <Grid item xs={12}>
                    <TableContainer component={BorderedCard}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Date</TableCell>
                                    <TableCell>Group</TableCell>
                                    <TableCell>Workshop</TableCell>
                                    <TableCell>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>{dateFormattingNumber(new Date())}</TableCell>
                                    <TableCell>BENGUERIR</TableCell>
                                    <TableCell>BENGUERIR</TableCell>
                                    <TableCell>
                                        <Stack direction="row" spacing={1}>
                                            <ListOfPresence />
                                            <EditListOfPresence />
                                        </Stack>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Presence;
