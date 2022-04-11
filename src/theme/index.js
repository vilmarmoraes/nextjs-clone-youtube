import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { colors } from '@mui/material';


// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
          main: '#f44336',
        },
        secondary: {
          main: '#3EA6FF',
        },
        text:{
            primary: colors.blueGrey[900],
            secondary: colors.blueGrey[600],
        },
      },
/*   palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  }, */
});

export default theme;