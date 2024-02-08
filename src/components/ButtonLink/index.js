import { Link } from '..';
import { styled } from '@mui/material/styles';

const getColor = (color) => (color ? color : 'primary');

const StyledLink = styled(Link)(({ theme, color }) => ({
    fontWeight: theme.fontWeight.light,
    fontSize: theme.fontSize.sm,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette[getColor(color)].main,
    cursor: 'pointer',
}));

export default StyledLink;
