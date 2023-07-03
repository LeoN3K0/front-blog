import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#333', // Dark Grey
    },
    secondary: {
      main: '#61C0BF', // Bluish Green
    },
    background: {
      default: '#f7f7f7', // Very Light Gray
    },
  },
});

export default theme;
