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
  ThemeProvider,
  createTheme,
} from '@material-ui/core';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import { useNavigate, useLocation } from 'react-router-dom';
import Permissions from '../Components/Permissions';
import { useState } from 'react';
import RssFeedIcon from '@material-ui/icons/RssFeed';

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
    paper: {
      backgroundColor: 'pink',
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
const theme = createTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: 'pink',
        },
      },
    },
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
    <Box style={{ backgroundColor: 'blue' }}>
      <Box className={classes.box}>
        <CssBaseline />
        <Box className={classes.appBar}>
          <TabContext value={tabValue}>
            <TabList onChange={handleChange}>
              <Tab
                label="Permissions"
                icon={<RssFeedIcon />}
                iconposition="start"
                className={classes.tabs}
                value="1"
              />
              <Tab label="Approval Matrix" className={classes.tabs} value="2" />
            </TabList>
            <Divider />
            <TabPanel value="1">
              <Permissions />
            </TabPanel>
            <TabPanel value="2">Approval matrix</TabPanel>
          </TabContext>
        </Box>
        <ThemeProvider theme={theme}>
          <Drawer
            className={classes.drawer}
            classes={{ paper: classes.paper }}
            variant="permanent"
            anchor="left"
          >
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
        </ThemeProvider>
      </Box>
    </Box>
  );
};

export default SideBar;
