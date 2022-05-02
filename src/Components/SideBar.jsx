import {
  Drawer,
  CssBaseline,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Box,
  Tab,
  Divider,
} from '@material-ui/core';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import { useNavigate, useLocation } from 'react-router-dom';
import Permissions from '../Components/Permissions';
import { useState } from 'react';

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
  const handleChange = (event, newValue) => {
    console.log(newValue, event);
    setTabValue(newValue);
  };
  return (
    <Box className={classes.box}>
      <CssBaseline />
      <Box className={classes.appBar}>
        <TabContext value={tabValue}>
          <TabList onChange={handleChange}>
            <Tab label="Permissions" className={classes.tabs} value="1" />
            <Tab label="Approval Matrix" className={classes.tabs} value="2" />
          </TabList>
          <Divider />
          <TabPanel value={tabValue}>
            <Permissions />
          </TabPanel>
          <TabPanel value={tabValue}>Approval matrix</TabPanel>
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
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default SideBar;
