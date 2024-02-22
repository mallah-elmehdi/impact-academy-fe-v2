import { Box, Grid, Stack, Table, TableBody, TableContainer, TableHead } from '@mui/material';
import React from 'react';
import { BorderedCard, DashboardTitle } from '../../../components';
import { MENTOR_NAVBAR } from '../../../constants/mentor';
import { TableCell, TableRow } from '../../../components/Table';
import AddEvaluate from './AddEvaluate';

const Evaluation = () => {
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
                                <TableRow>
                                    <TableCell>Date</TableCell>
                                    <TableCell>4.5/5</TableCell>
                                    <TableCell>
                                        <Stack direction="row" spacing={1}>
                                            {/* <ListOfPresence />
                                            <EditListOfPresence /> */}
                                            <AddEvaluate />
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

export default Evaluation;
