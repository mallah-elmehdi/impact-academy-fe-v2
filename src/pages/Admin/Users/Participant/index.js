import { Box, Grid, Table, TableBody, TableContainer, TableHead } from '@mui/material';
import React from 'react';
import { BorderedCard, Button, DashboardTitle, SmallButton } from '../../../../components';
import { TableCell, TableRow } from '../../../../components/Table';
import { ADMIN_NAVBAR } from '../../../../constants/admin';
import AddParticipant from './AddParticipant';

const Participant = () => {
    return (
        <Box>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <DashboardTitle>{ADMIN_NAVBAR[2].title + ' | ' + ADMIN_NAVBAR[2].menu[0].title}</DashboardTitle>
                </Grid>
                <Grid item xs={12}>
                    <AddParticipant />
                </Grid>

                <Grid item xs={12}>
                    <TableContainer component={BorderedCard}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Nom & Prénom</TableCell>
                                    <TableCell>Province</TableCell>
                                    <TableCell>Group</TableCell>
                                    <TableCell>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>El Mehdi Mallah</TableCell>
                                    <TableCell>BENGUERIR</TableCell>
                                    <TableCell>G1-A</TableCell>
                                    <TableCell>
                                        <SmallButton>action</SmallButton>
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

export default Participant;
