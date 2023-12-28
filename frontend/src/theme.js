import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFA500',
      contrastText: '#FFFFFF', // Orange in hex format
    },
    // ... any other customizations
  },
});

export default theme;
