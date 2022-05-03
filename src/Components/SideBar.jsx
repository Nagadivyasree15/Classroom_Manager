import {
  Drawer,
  CssBaseline,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  makeStyles,
  Box,
  Tab,
  Divider,
  Grid,
} from '@material-ui/core';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import { useNavigate, useLocation } from 'react-router-dom';
import Permissions from '../Components/Permissions';
import AccessControl from '../Components/AccessControl';
import { useState } from 'react';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import SecurityIcon from '@material-ui/icons/Security';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import GridOnIcon from '@material-ui/icons/GridOn';

const drawerWidth = 240;
const useStyle = makeStyles({
  tabs: {
    fontSize: 15,
    color: '#000000',
    marginRight: 20,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: drawerWidth,
      boxSizing: 'border-box',
      marginTop: '8vh',
      backgroundColor: 'rgb(240,240,240)',
    },
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    position: 'fixed',
    backgroundColor: '#ffffff',
  },
  box: {
    display: 'flex',
  },
  active: {
    backgroundColor: 'rgba(255,0,0,0.2)',
    color: 'red',
  },
  icon: {
    marginRight: '5px',
  },
});

const SideBar = () => {
  const classes = useStyle();
  const navigate = useNavigate();
  const location = useLocation();
  const [tabValue, setTabValue] = useState('1');

  const sideBarItems = [
    {
      text: 'Projects',
      path: '/projects',
      icon: <GridOnIcon />,
    },
    {
      text: 'Classrooms',
      path: '/classrooms',
      icon: <BusinessCenterIcon />,
    },
    {
      text: 'Permissions',
      path: '/',
      icon: <SecurityIcon />,
    },
  ];
  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };
  return (
    <Box>
      <Box className={classes.box}>
        <CssBaseline />
        <Box className={classes.appBar}>
          <TabContext value={tabValue}>
            <TabList onChange={handleChange}>
              <Tab
                label={
                  <Grid container>
                    <RssFeedIcon className={classes.icon} />
                    Permissions
                  </Grid>
                }
                className={classes.tabs}
                value="1"
              />
              <Tab
                label={
                  <Grid container>
                    <GridOnIcon className={classes.icon} />
                    Approval Matrix
                  </Grid>
                }
                className={classes.tabs}
                value="2"
              />
            </TabList>
            <Divider />
            <TabPanel value="1">
              <Permissions />
            </TabPanel>
            <TabPanel value="2">
              <AccessControl />
            </TabPanel>
          </TabContext>
        </Box>
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
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>
    </Box>
  );
};

export default SideBar;
