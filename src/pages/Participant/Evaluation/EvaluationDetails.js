import { Stack, Table, TableBody, TableContainer, TableHead } from '@mui/material';
import React from 'react';
import { BsBoxArrowInUp, BsEasel, BsMortarboard } from 'react-icons/bs';
import { BorderedCard, ButtonDialog, IconText } from '../../../components';
import { TableCell, TableRow } from '../../../components/Table';

const EvaluationDetails = ({ workshop, data, action }) => {
    return (
        <ButtonDialog title={workshop} buttonTitle="Détails">
            <Stack spacing={3}>
                <Stack spacing={3}>
                    <IconText icon={<BsEasel />} text="Formation" />
                    <TableContainer component={BorderedCard}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    {Object.keys(data.formation).map((item) => (
                                        <TableCell key={workshop + item}>{item}</TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    {Object.values(data.formation).map((item) => (
                                        <TableCell key={workshop + item}>{item}</TableCell>
                                    ))}
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Stack>
                <Stack spacing={3}>
                    <IconText icon={<BsMortarboard />} text="Coaching" />
                    <TableContainer component={BorderedCard}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    {Object.keys(data.coaching).map((item) => (
                                        <TableCell key={workshop + item}>{item}</TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    {Object.values(data.coaching).map((item) => (
                                        <TableCell key={workshop + item}>{item}</TableCell>
                                    ))}
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Stack>
                <Stack spacing={3}>
                    <IconText icon={<BsBoxArrowInUp />} text="Insertion" />
                    <TableContainer component={BorderedCard}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    {Object.keys(data.insertion).map((item) => (
                                        <TableCell key={workshop + item}>{item}</TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    {Object.values(data.insertion).map((item) => (
                                        <TableCell key={workshop + item}>{item}</TableCell>
                                    ))}
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Stack>
            </Stack>
        </ButtonDialog>
    );
};

export default EvaluationDetails;
