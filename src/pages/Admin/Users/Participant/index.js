import { Box, Grid, Table, TableBody, TableContainer, TableHead, Pagination, MenuItem, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { BorderedCard, DashboardTitle, Filter, Menu, NoData } from '../../../../components';
import { TableCell, TableRow } from '../../../../components/Table';
import { ADMIN_NAVBAR } from '../../../../constants/admin';
import AddParticipant from './AddParticipant';
import { useSearchParams } from 'react-router-dom';
import { pagination } from '../../../../utils/functions';
import { useDispatch, useSelector } from 'react-redux';
import { participantAll } from '../../../../contexts/participant/apis';
import { groupAll } from '../../../../contexts/group/apis';
import { provinceAll } from '../../../../contexts/province/apis';

const Participant = () => {
    const dispatch = useDispatch();
    const { participants } = useSelector((store) => store.participant);
    const { provinces } = useSelector((store) => store.province);
    const { groups } = useSelector((store) => store.group);

    // filtering
    const [participantsFiltered, setParticipantsFiltered] = useState(participants);
    const handleFilterProvince = (id) => {
        if (id === null) {
            setParticipantsFiltered(participants);
        } else {
            setParticipantsFiltered(participants.filter((item) => item.provinceId === id));
        }
    };
    const handleFilterGroup = (id) => {
        if (id === null) {
            setParticipantsFiltered(participants);
        } else {
            setParticipantsFiltered(participants.filter((item) => item.groupId === id));
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

    const { start, end, count } = pagination(page, participantsFiltered.length);

    useEffect(() => {
        setParticipantsFiltered(participants);
    }, [participants]);

    useEffect(() => {
        if (participants.length === 0) {
            dispatch(participantAll());
        }
        if (groups.length === 0) {
            dispatch(groupAll());
        }
        if (provinces.length === 0) {
            dispatch(provinceAll());
        }
    }, []);

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
                    <Stack direction="row" spacing={1}>
                        <Filter title="Province">
                            {(close) => (
                                <>
                                    <MenuItem
                                        onClick={() => {
                                            handleFilterProvince(null);
                                            close();
                                        }}
                                    >
                                        Toutes les provinces
                                    </MenuItem>

                                    {provinces.map((item) => (
                                        <MenuItem
                                            key={item.id}
                                            onClick={() => {
                                                handleFilterProvince(item.id);
                                                close();
                                            }}
                                        >
                                            {item.name}
                                        </MenuItem>
                                    ))}
                                </>
                            )}
                        </Filter>
                        <Filter title="Groupe">
                            {(close) => (
                                <>
                                    <MenuItem
                                        onClick={() => {
                                            handleFilterGroup(null);
                                            close();
                                        }}
                                    >
                                        Toutes les provinces
                                    </MenuItem>

                                    {groups.map((item) => (
                                        <MenuItem
                                            key={item.id}
                                            onClick={() => {
                                                handleFilterGroup(item.id);
                                                close();
                                            }}
                                        >
                                            {item.name}
                                        </MenuItem>
                                    ))}
                                </>
                            )}
                        </Filter>
                    </Stack>
                </Grid>

                <Grid item xs={12}>
                    {participantsFiltered && participantsFiltered.length === 0 ? (
                        <NoData />
                    ) : (
                        <TableContainer component={BorderedCard}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Nom & Prénom</TableCell>
                                        <TableCell>Province</TableCell>
                                        <TableCell>Groupe</TableCell>
                                        <TableCell>Nom d'utilisateur</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {participantsFiltered &&
                                        participantsFiltered.slice(start, end).map((item) => (
                                            <TableRow key={item.id}>
                                                <TableCell>{item.firstname + ' ' + item.lastname}</TableCell>
                                                <TableCell>{item.province.name}</TableCell>
                                                <TableCell>{item.group.name}</TableCell>
                                                <TableCell>{item.user.username}</TableCell>
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

export default Participant;
