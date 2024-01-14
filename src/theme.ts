import { Montserrat } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const montserrat = Montserrat({
  weight: ['200', '300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: {
      main: '#23A6F0',
    },
    secondary: {
      main: '#23856D',
    },
    error: {
      main: red.A400,
    },
    success: {
      main: '#2DC071',
    },
    text: {
      primary: '#252B42',
      secondary: '#737373',
      disabled: '#BDBDBD',
    },
    common: {
      white: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: montserrat.style.fontFamily,
  },
});

theme.typography = {
  ...theme.typography,
  h1: {
    fontFamily: montserrat.style.fontFamily,
    fontWeight: 700,
    fontSize: '2rem',
  },
  h2: {
    fontWeight: 700,
    fontSize: '1.75rem',
  },
  h3: {
    fontWeight: 700,
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    h1: {
      fontSize: '2.5rem',
    },
    h2: {
      fontSize: '2rem',
    },
  },
  [theme.breakpoints.up('lg')]: {
    h1: {
      fontSize: '2.5rem',
    },
    h2: {
      fontSize: '2rem',
    },
  },
};

theme.components = {
  MuiLink: {
    defaultProps: {
      underline: 'none',
    },
    styleOverrides: {
      root: {
        color: theme.palette.text.secondary,
        '&:hover': {
          color: theme.palette.text.primary,
        },
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: 'none',
        fontFamily: montserrat.style.fontFamily,
        fontWeight: 700,
        padding: '10px 20px',
      },
    },
  },
};

export default theme;
