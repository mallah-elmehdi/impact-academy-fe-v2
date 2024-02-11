import { Box, Grid, Table, TableBody, TableContainer, TableHead } from '@mui/material';
import React from 'react';
import { BorderedCard, Button, DashboardTitle } from '../../../components';
import { ADMIN_NAVBAR } from '../../../constants/admin';
import { TableCell, TableRow } from '../../../components/Table';
import AddGroup from './AddGroup';
import EditGroup from './EditGroup';

const Group = () => {
    return (
        <Box>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <DashboardTitle>{ADMIN_NAVBAR[1].title}</DashboardTitle>
                </Grid>
                <Grid item xs={12}>
                    <AddGroup />
                </Grid>
                <Grid item xs={12}>
                    <TableContainer component={BorderedCard}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Nom</TableCell>
                                    <TableCell>Province</TableCell>
                                    <TableCell>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>BG-G1</TableCell>
                                    <TableCell>BENGUERIR</TableCell>
                                    <TableCell>
                                        <EditGroup />
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

export default Group;
