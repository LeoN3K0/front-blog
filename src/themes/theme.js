import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#333', // Dark Gray
    },
    secondary: {
      main: '#61C0BF', // Teal
    },
    background: {
      default: '#f7f7f7', // Light Gray
    },
    error: {
      main: '#FF4C4C', // Error Red
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      lineHeight: 1.2,
    },
    // Add more typography styles as needed
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
        outlined: {
          borderWidth: '2px',
        },
        // Add more style overrides as needed
      },
    },
    // Add more component styles as needed
  },
});

export default theme;
