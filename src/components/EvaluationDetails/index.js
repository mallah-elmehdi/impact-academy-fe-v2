import {
    Box,
    DialogContent,
    DialogTitle,
    IconButton,
    Stack,
    Table,
    TableBody,
    TableContainer,
    TableHead
} from '@mui/material';
import React from 'react';
import { BsBoxArrowInUp, BsEasel, BsMortarboard, BsX } from 'react-icons/bs';
import { BorderedCard, Button, Dialog, IconText } from '..';
import { TableCell, TableRow } from '../Table';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const EvaluationDetails = ({ bootcamp, data }) => {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Button onClick={handleClickOpen}>Détails</Button>
            <Dialog maxWidth="md" onClose={handleClose} open={open}>
                <DialogTitle
                    sx={(theme) => ({
                        borderBottom: '1px solid',
                        borderColor: theme.palette.primary.main,
                    })}
                >
                    <Box display="flex" justifyContent="space-between" gap={3}>
                        {bootcamp}
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleClose}
                            sx={(theme) => ({ color: theme.palette.common.black })}
                        >
                            <BsX />
                        </IconButton>
                    </Box>
                </DialogTitle>
                <DialogContent sx={{ '&.MuiDialogContent-root': { p: 3, overflow: 'auto', width: '100%' } }}>
                    <Stack spacing={3}>
                        <Stack spacing={3}>
                            <IconText icon={<BsEasel />} text="Formation" />
                            <TableContainer component={BorderedCard}>
                                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                    <TableHead>
                                        <TableRow>
                                            {Object.keys(data.formation).map((item) => (
                                                <TableCell key={bootcamp + item}>{item}</TableCell>
                                            ))}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            {Object.values(data.formation).map((item) => (
                                                <TableCell key={bootcamp + item}>{item}</TableCell>
                                            ))}
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Stack>
                        <Stack spacing={3}>
                            <IconText icon={<BsMortarboard />} text="Coaching" />
                            <TableContainer component={BorderedCard}>
                                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                    <TableHead>
                                        <TableRow>
                                            {Object.keys(data.coaching).map((item) => (
                                                <TableCell key={bootcamp + item}>{item}</TableCell>
                                            ))}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            {Object.values(data.coaching).map((item) => (
                                                <TableCell key={bootcamp + item}>{item}</TableCell>
                                            ))}
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Stack>
                        <Stack spacing={3}>
                            <IconText icon={<BsBoxArrowInUp />} text="Insertion" />
                            <TableContainer component={BorderedCard}>
                                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                    <TableHead>
                                        <TableRow>
                                            {Object.keys(data.insertion).map((item) => (
                                                <TableCell key={bootcamp + item}>{item}</TableCell>
                                            ))}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            {Object.values(data.insertion).map((item) => (
                                                <TableCell key={bootcamp + item}>{item}</TableCell>
                                            ))}
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Stack>
                    </Stack>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default EvaluationDetails;
