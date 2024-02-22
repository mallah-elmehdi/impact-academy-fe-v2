import { Box, Grid, Table, TableBody, TableContainer, TableHead } from '@mui/material';
import React from 'react';
import { BorderedCard, DashboardTitle, SmallButton } from '../../../components';
import { TableCell, TableRow } from '../../../components/Table';
import { MENTOR_NAVBAR } from '../../../constants/mentor';

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
                                    <TableCell>El Mehdi Mallah</TableCell>
                                    <TableCell>4.5/5</TableCell>
                                    <TableCell>
                                        <SmallButton>Évaluer</SmallButton>
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
