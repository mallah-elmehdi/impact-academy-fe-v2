import { Box, Grid, MenuItem, Pagination, Table, TableBody, TableContainer, TableHead } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { BorderedCard, DashboardTitle, Filter, NoData } from '../../../components';
import { TableCell, TableRow } from '../../../components/Table';
import { ADMIN_NAVBAR } from '../../../constants/admin';
import { groupAll } from '../../../contexts/group/apis';
import { pagination } from '../../../utils/functions';
import AddGroup from './AddGroup';

const Group = () => {
    const dispatch = useDispatch();
    const { groups } = useSelector((store) => store.group);
    const { provinces } = useSelector((store) => store.province);

    // filtering
    const [groupsFiltered, setGroupsFiltered] = useState(groups);
    const handleFilter = (id) => {
        if (id === null) {
            setGroupsFiltered(groups);
        } else {
            setGroupsFiltered(groups.filter((item) => item.provinceId === id));
        }
    };

    // pagination
    const [searchParams, setSearchParams] = useSearchParams();
    const pageQuery = searchParams.get('page') || 1;
    const [page, setPage] = React.useState(parseInt(pageQuery));
    const handleChange = (event, value) => {
        setSearchParams({ page: value });
        setPage(value);
    };

    const { start, end, count } = pagination(page, groupsFiltered.length);

    useEffect(() => {
        setGroupsFiltered(groups);
    }, [groups]);

    useEffect(() => {
        if (groups.length === 0) {
            dispatch(groupAll());
        }
    }, []);

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
                    <Filter title="Province">
                        {(close) => (
                            <>
                                <MenuItem
                                    onClick={() => {
                                        handleFilter(null);
                                        close();
                                    }}
                                >
                                    Toutes les provinces
                                </MenuItem>

                                {provinces.map((item) => (
                                    <MenuItem
                                        key={item.id}
                                        onClick={() => {
                                            handleFilter(item.id);
                                            close();
                                        }}
                                    >
                                        {item.name}
                                    </MenuItem>
                                ))}
                            </>
                        )}
                    </Filter>
                </Grid>
                <Grid item xs={12}>
                    {groupsFiltered && groupsFiltered.length === 0 ? (
                        <NoData />
                    ) : (
                        <TableContainer component={BorderedCard}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Nom</TableCell>
                                        <TableCell>Province</TableCell>
                                        {/* <TableCell>Action</TableCell> */}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {groupsFiltered &&
                                        groupsFiltered.slice(start, end).map((item) => (
                                            <TableRow key={item.id}>
                                                <TableCell>{item.name}</TableCell>
                                                <TableCell>{item.province.name}</TableCell>
                                                {/* <TableCell>
                                                <EditGroup />
                                            </TableCell> */}
                                            </TableRow>
                                        ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    )}
                </Grid>
                <Grid item xs={12}>
                    <Pagination count={count} page={page} onChange={handleChange} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Group;
