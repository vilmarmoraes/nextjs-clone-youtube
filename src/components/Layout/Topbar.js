import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import theme from '../../theme';

const useStyles = makeStyles((theme) => ({
    root: {
        boxShadow: 'none',
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: theme.palette.background.default,
    },
    toolbar: {
      minHeight: 56,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    logo: {
      cursor: 'pointer',
      height: 18,
      marginLeft: theme.spacing(3),
    },
    search: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      height: 35,
      width: 700,
    },
    input: {
      flex: 1,
    },
  }));
  
export default function TopBar() {
    const classes = useStyles();

    return(
        <AppBar className={classes.root} color="default">
            <Toolbar>
                AppBar
            </Toolbar>
        </AppBar>
    )
}