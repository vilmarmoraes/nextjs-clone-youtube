import { createTheme } from '@mui/material/styles';
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
});

export default theme;