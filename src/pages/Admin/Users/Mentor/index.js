import { Box, Grid, Table, TableBody, TableContainer, TableHead, Pagination, MenuItem, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BorderedCard, DashboardTitle, Filter, NoData } from '../../../../components';
import { TableCell, TableRow } from '../../../../components/Table';
import { ADMIN_NAVBAR } from '../../../../constants/admin';
import { mentorAll } from '../../../../contexts/mentor/apis';
import AddMentor from './AddMentor';
import { useSearchParams } from 'react-router-dom';
import { pagination } from '../../../../utils/functions';
import { groupAll } from '../../../../contexts/group/apis';
import { provinceAll } from '../../../../contexts/province/apis';

const Mentor = () => {
    const dispatch = useDispatch();
    const { mentors } = useSelector((store) => store.mentor);
    const { provinces } = useSelector((store) => store.province);
    const { groups } = useSelector((store) => store.group);

    // filtering
    const [mentorsFiltered, setMentorsFiltered] = useState(mentors);
    const handleFilterProvince = (id) => {
        if (id === null) {
            setMentorsFiltered(mentors);
        } else {
            setMentorsFiltered(mentors.filter((item) => item.provinceId === id));
        }
    };
    const handleFilterGroup = (id) => {
        if (id === null) {
            setMentorsFiltered(mentors);
        } else {
            setMentorsFiltered(mentors.filter((item) => item.groups.filter((g) => g.id === id).length !== 0));
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

    const { start, end, count } = pagination(page, mentorsFiltered.length);

    useEffect(() => {
        setMentorsFiltered(mentors);
    }, [mentors]);

    useEffect(() => {
        if (mentors.length === 0) {
            dispatch(mentorAll());
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
                    <DashboardTitle>{ADMIN_NAVBAR[2].title + ' | ' + ADMIN_NAVBAR[2].menu[1].title}</DashboardTitle>
                </Grid>
                <Grid item xs={12}>
                    <AddMentor />
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
                    {mentorsFiltered.length === 0 ? (
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
                                    {mentorsFiltered &&
                                        mentorsFiltered.slice(start, end).map((item) => (
                                            <TableRow key={item.id}>
                                                <TableCell>{item.firstname + ' ' + item.lastname}</TableCell>
                                                <TableCell>{item.province.name}</TableCell>
                                                <TableCell>
                                                    {item.groups.map((group) => (
                                                        <>{group.name}</>
                                                    ))}
                                                </TableCell>
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

export default Mentor;
