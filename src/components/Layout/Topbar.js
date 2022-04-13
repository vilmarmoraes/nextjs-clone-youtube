import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Box, IconButton, InputBase, Paper } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

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
            <Toolbar className={classes.toolbar}>
                <Box display='flex' alignItems='center'>
                    <MenuIcon />
                    <img 
                        src='/new-youtube-logo.svg' 
                        alt='logo' 
                        className={classes.logo}
                    />
                </Box>
                <Box>
                    <Paper component="form" className={classes.search}>
                        <InputBase
                            className={classes.input}
                            placeholder="Pesquisar"
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />
                        <IconButton type="submit" arial-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </Box>
                <Box>teste3</Box>
            </Toolbar>
        </AppBar>
    )
}