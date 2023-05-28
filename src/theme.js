import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: "'Open Sans', 'Roboto', 'Helvetica', 'Arial', sans-serif",
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#89c74a',
    },
    secondary: {
      main: '#ff6600',
    },
    lightGreen: {
      main: '#e0ffc0',
    },
    grey20: {
      main: '#ccc',
    },
    grey40: {
      main: '#999',
    },
    grey60: {
      main: '#666',
    },
    grey80: {
      main: '#333',
    },
  },
});
