import { useRouter } from 'next/router';
import { Hidden, Drawer, Box, List, ListItem,
    ListItemIcon, ListItemText, ListSubheader,
    Avatar, Divider, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { History, Subscriptions, VideoLibrary, Whatshot } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';

const useStyles = makeStyles((theme) => ({
    mobileDrawer: {
      width: 240,
    },
    desktopDrawer: {
      width: 240,
      top: 56,
      height: 'calc(100% - 64px)',
      borderRight: 'none',
    },
    avatar: {
      cursor: 'pointer',
      width: 24,
      height: 24,
    },
    listItem: {
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: theme.spacing(3),
    },
    listItemText: {
      fontSize: 14,
    },
  }));

  const primaryMenu = [
    { id: 1, label: 'Início', path: '/', icon: HomeIcon },
    { id: 2, label: 'Em alta', path: '/trendding', icon: Whatshot },
    {
      id: 3,
      label: 'Inscrições',
      path: 'subscriptions',
      icon: Subscriptions,
    },
  ];
  
  const secondaryManu = [
    { id: 1, label: 'Biblioteca', icon: VideoLibrary },
    { id: 2, label: 'Histórico', icon: History },
  ];

export default function NavBar(){
    const classes = useStyles();
    const router = useRouter();

    const isSelected = (item) => router.pathname === item.path;

    const content = (
        <Box height="100%" display="flex" flexDirection="column">
            <List>          
                {primaryMenu.map((item) => {
                const Icon = item.icon;
                return (
                    <ListItem
                    key={item.id}
                    button
                    classes={{ root: classes.listItem }}
                    selected={isSelected(item)}
                    >
                    <ListItemIcon>
                        <Icon style={{ color: isSelected(item) && '#f44336' }} />
                    </ListItemIcon>
                    <ListItemText
                        classes={{
                        primary: classes.listItemText,
                        }}
                        primary={item.label}
                    />
                    </ListItem>
                );
                })}
            </List>
            <Divider />
            <List>
                {secondaryManu.map((item) => {
                const Icon = item.icon;
                return (
                    <ListItem
                    key={item.id}
                    button
                    classes={{ root: classes.listItem }}
                    selected={isSelected(item)}
                    >
                    <ListItemIcon>
                        <Icon style={{ color: isSelected(item) && '#f44336' }} />
                    </ListItemIcon>
                    <ListItemText
                        classes={{
                        primary: classes.listItemText,
                        }}
                        primary={item.label}
                    />
                    </ListItem>
                );
                })}
            </List>
        </Box>
    )

    return(
        <Hidden mdDown>
            <Drawer
                anchor="left"
                classes={{ paper: classes.desktopDrawer }}
                open
                variant="persistent"
            >
                {content}
            </Drawer>
        </Hidden>
    )
}