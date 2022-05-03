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
} from '@material-ui/core';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import { useNavigate, useLocation } from 'react-router-dom';
import Permissions from '../Components/Permissions';
//import AccessControl from '../Components/AccessControl';
import { useState, useEffect } from 'react';
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
    flexFlow: 'nowrap',
  },
});

const SideBar = () => {
  const classes = useStyle();
  const navigate = useNavigate();
  const location = useLocation();
  const [tabValue, setTabValue] = useState('1');
  const [state, setState] = useState('/');
  useEffect(() => {
    console.log(location.pathname);
    if (location.pathname === 'permissions' || location.pathname === '/') {
      setState(<Permissions />);
    }
  }, [location.pathname]);
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
      path: '/permissions',
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
                label="Permissions"
                icon={<RssFeedIcon />}
                className={classes.tabs}
                value="1"
              />
              <Tab
                label="Approval Matrix"
                icon={<GridOnIcon />}
                className={classes.tabs}
                value="2"
              />
            </TabList>
            <Divider />
            <TabPanel value="1">{state}</TabPanel>
            <TabPanel value="2">Approval matrix</TabPanel>
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
