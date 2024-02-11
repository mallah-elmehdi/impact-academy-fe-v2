import MuiTableCell, { tableCellClasses } from '@mui/material/TableCell';
import MuiTableRow from '@mui/material/TableRow';
import { styled, alpha } from '@mui/material';

export const TableCell = styled(MuiTableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: theme.fontSize.sm,
    },
    borderRight: '1px solid',
    borderColor: theme.palette.muted.main,
    '&:last-child': {
        borderRight: 0,
    },
}));

export const TableRow = styled(MuiTableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.common.white,
    },
    '&:last-child td': {
        borderBottom: 0,
    },
}));
