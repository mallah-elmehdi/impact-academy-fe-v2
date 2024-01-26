import MuiTableCell, { tableCellClasses } from '@mui/material/TableCell';
import MuiTableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';

export const TableCell = styled(MuiTableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: theme.fontSize.sm,
    },
}));

export const TableRow = styled(MuiTableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.common.white,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
