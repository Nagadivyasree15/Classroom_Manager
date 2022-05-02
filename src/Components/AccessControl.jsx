import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  makeStyles,
  Tab,
  Divider,
} from '@material-ui/core';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import EditIcon from '@material-ui/icons/Edit';
import { useState } from 'react';

const useStyle = makeStyles({
  list: {
    display: 'inline-flex',
  },
  listIcon: {
    marginLeft: '20px',
  },
  tabs: {
    fontSize: 15,
    color: '#000000',
    marginRight: 20,
  },
});
const AccessControl = () => {
  const classes = useStyle();
  const [tabValue, setTabValue] = useState('1');
  const handleChange = (event, newValue) => {
    console.log(newValue, event);
    setTabValue(newValue);
  };
  return (
    <Box
      component="main"
      sx={{ flexGrow: 0, bgcolor: 'yellow', p: 3, height: '100vh' }}
    >
      <Grid item xs={8}>
        <List>
          <ListItem className={classes.list}>
            Teachers
            <ListItemIcon className={classes.listIcon}>
              <EditIcon />
            </ListItemIcon>
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={8}>
        <TabContext value={tabValue}>
          <TabList onChange={handleChange}>
            <Tab label="Access Control" className={classes.tabs} value="1" />
            <Tab label="Assigned Members" className={classes.tabs} value="2" />
          </TabList>
          <Divider />
          <TabPanel value="1">Access control</TabPanel>
          <TabPanel value="2">Assigned Members</TabPanel>
        </TabContext>
      </Grid>
    </Box>
  );
};

export default AccessControl;
