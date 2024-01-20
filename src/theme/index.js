import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#264653',
            light_main: '#2a9d8f',
        },
        secondary: {
            main: '#f4a261',
            light_main: '#e9c46a',
        },
        muted: {
            main: '#e9ecef',
        },
    },
    typography: {
        fontFamily: "'Barlow', sans-serif",
    },
    fontFamily: {
        arabic: {
            fontFamily: "'El Messiri', sans-serif",
        },
    },
    fontSize: {
        micro: '0.35rem',
        xs: '0.75rem',
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
    },
    borderRadius: {
        none: '0',
        sm: '0.125rem',
        base: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        full: '9999px',
    },
    fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
    },
    blur: {
        primary: 'blur(10px)',
    },
});

// ============== gradient

theme.gradient = {
    primary: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
    secondary: `linear-gradient(210deg, ${theme.palette.primary.main} 40%, ${theme.palette.secondary.main} 100%)`,
};
theme.palette.common.black = '#2C3E50';

// =============== css override
theme.components = {
    ...theme.components,
    MuiCssBaseline: {
        styleOverrides: `          
  		`,
    },
};

export default theme;
