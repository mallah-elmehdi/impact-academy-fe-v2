import { Box, Grid, Table, TableBody, TableContainer, TableHead, Pagination, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import { BorderedCard, DashboardTitle, Filter, Menu } from '../../../../components';
import { TableCell, TableRow } from '../../../../components/Table';
import { ADMIN_NAVBAR } from '../../../../constants/admin';
import AddParticipant from './AddParticipant';
import { useSearchParams } from 'react-router-dom';
import { pagination } from '../../../../utils/functions';

const fake = () => {
    let data = [];
    for (let i = 0; i < 812; i++) {
        data.push({
            firstname: 'firstname-' + i,
            lastname: 'lastname-' + i,
            group: 'group-' + i,
        });
    }

    return data;
};
const Participant = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const pageQuery = searchParams.get('page') || 1;

    const [page, setPage] = React.useState(parseInt(pageQuery));
    const handleChange = (event, value) => {
        setSearchParams({ page: value });
        setPage(value);
    };

    const [data, setData] = useState(() => fake());

    const { start, end, count } = pagination(page, data.length);

    const handleFilter = (group) => {
        setData(fake().filter((item) => item.group === group));
    };

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
                    <Filter title="Groupe">
                        {(close) =>
                            data.map((item) => (
                                <MenuItem
                                    onClick={() => {
                                        handleFilter(item.group);
                                        close();
                                    }}
                                >
                                    {item.group}
                                </MenuItem>
                            ))
                        }
                    </Filter>
                </Grid>

                <Grid item xs={12}>
                    <TableContainer component={BorderedCard}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Nom & Prénom</TableCell>
                                    <TableCell>Group</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.slice(start, end).map((item) => (
                                    <TableRow>
                                        <TableCell>{item.firstname + ' ' + item.lastname}</TableCell>
                                        <TableCell>{item.group}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={12}>
                    <Pagination count={count} page={page} onChange={handleChange} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Participant;
