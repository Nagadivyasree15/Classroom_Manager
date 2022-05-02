import {
  AppBar,
  Drawer,
  Toolbar,
  CssBaseline,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Box,
} from '@material-ui/core';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';

const drawerWidth = 240;
const useStyle = makeStyles({
  tabs: {
    fontSize: 20,
    color: '#000000',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: drawerWidth,
      boxSizing: 'border-box',
    },
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    backgroundColor: '#ffffff',
    marginLeft: `${drawerWidth}px`,
  },
  box: {
    display: 'flex',
  },
  active: {
    backgroundColor: 'rgba(255,0,0,0.2)',
    color: 'red',
  },
});
const SideBar = () => {
  const classes = useStyle();
  const navigate = useNavigate();
  const location = useLocation();
  const sideBarItems = [
    {
      text: 'Projects',
      path: '/projects',
    },
    {
      text: 'Classrooms',
      path: '/classrooms',
    },
    {
      text: 'Permissions',
      path: '/permissions',
    },
  ];
  return (
    <Box className={classes.box}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <NavLink to="./" className={classes.tabs}>
            Permissions
          </NavLink>
          <NavLink to="/approval_matrix" className={classes.tabs}>
            Approval Matrix
          </NavLink>
        </Toolbar>
      </AppBar>
      <Drawer className={classes.drawer} variant="permanent" anchor="left">
        <List>
          {sideBarItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => navigate(item.path)}
              className={
                location.pathname === item.path ? classes.active : null
              }
            >
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default SideBar;
