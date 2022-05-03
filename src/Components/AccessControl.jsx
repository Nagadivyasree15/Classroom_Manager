import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  makeStyles,
  Tab,
  Divider,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Paper,
  IconButton,
  Collapse,
  Typography,
  TableBody,
  FormLabel,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  ListItemText,
  FormGroup,
  Checkbox,
} from '@material-ui/core';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import React, { useState } from 'react';
import roleData from '../Database/database';

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
  tableHead: {
    backgroundColor: 'rgb(240,240,210)',
  },
  tableContainer: {
    height: '55vh',
  },
  addIcon: {
    marginTop: '5px',
  },
  card: {
    width: 500,
    backgroundColor: 'yellow',
  },
});
const AccessControl = () => {
  const classes = useStyle();
  const [tabValue, setTabValue] = useState('1');
  const [expanded, setExpanded] = useState(false);
  const [accessValue, setAccessValue] = useState('allaccess');
  const [checked, setChecked] = useState({
    view: true,
    edit: false,
    create: false,
    remove: false,
  });
  const { view, edit, create, remove } = checked;
  const data = roleData;
  const handleChange = (event, newValue) => {
    console.log(newValue, event);
    setTabValue(newValue);
  };
  const handleAccess = (e) => {
    setAccessValue(e.target.value);
  };
  const handlePermissions = (e) => {
    setChecked({ ...checked, [e.target.name]: e.target.checked });
  };
  return (
    <Box sx={{ flexGrow: 1, p: 2, height: '100vh' }}>
      <Grid item xs={12} style={{ backgroundColor: 'blue' }}>
        <List>
          <ListItem className={classes.list}>
            Teachers
            <ListItemIcon className={classes.listIcon}>
              <EditIcon />
            </ListItemIcon>
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={12}>
        <TabContext value={tabValue}>
          <TabList onChange={handleChange}>
            <Tab label="Access Control" className={classes.tabs} value="1" />
            <Tab label="Assigned Members" className={classes.tabs} value="2" />
          </TabList>
          <Divider />
          <TabPanel value="1">
            <TableContainer
              component={Paper}
              className={classes.tableContainer}
            >
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow className={classes.tableHead}>
                    <TableCell></TableCell>
                    <TableCell>Department/Role Name</TableCell>
                    <TableCell>Access Level</TableCell>
                    <TableCell>Summary</TableCell>
                    <TableCell>Last Updated</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((item) => (
                    <React.Fragment>
                      <TableRow key={item.id} id={item.id}>
                        <TableCell>
                          <IconButton
                            aria-label="expand row"
                            size="small"
                            onClick={() => setExpanded(!expanded)}
                          >
                            {expanded ? (
                              <RemoveCircleOutlineIcon />
                            ) : (
                              <AddCircleOutlineIcon />
                            )}
                          </IconButton>
                        </TableCell>
                        <TableCell id={item.id}>{item.role}</TableCell>
                        <TableCell>
                          <Button variant="contained">
                            {item.accesslevel}
                          </Button>
                        </TableCell>
                        <TableCell>{item.summary}</TableCell>
                        <TableCell>{item.lastupdated}</TableCell>
                        <TableCell>
                          <VisibilityIcon />
                        </TableCell>
                      </TableRow>
                      <TableRow
                        key={`collapse_${item.id}`}
                        style={{ backgroundColor: 'yellow' }}
                      >
                        <TableCell
                          style={{ paddingBottom: 0, paddingTop: 0 }}
                          colSpan={6}
                        >
                          <Collapse
                            in={expanded}
                            timeout="auto"
                            component="tr"
                            unmountOnExit
                          >
                            <Box sx={{ margin: 1 }}>
                              <Typography gutterBottom component="div">
                                {`All aspects in the ${item.role} module`}
                              </Typography>
                              <Grid
                                sx={{ flexGrow: 1 }}
                                container
                                style={{
                                  backgroundColor: 'blue',
                                }}
                              >
                                <Grid
                                  item
                                  xs={6}
                                  style={{ backgroundColor: 'pink' }}
                                >
                                  <Grid>
                                    <FormControl
                                      fullWidth
                                      style={{
                                        backgroundColor: 'orange',
                                      }}
                                    >
                                      <FormLabel>Access Control</FormLabel>
                                      <RadioGroup
                                        value={accessValue}
                                        onChange={handleAccess}
                                      >
                                        <FormControlLabel
                                          value="allaccess"
                                          control={<Radio />}
                                          label={
                                            <List>
                                              <ListItem>
                                                <ListItemText
                                                  primary="All Access"
                                                  secondary="Can access all items"
                                                ></ListItemText>
                                              </ListItem>
                                            </List>
                                          }
                                        />
                                        <FormControlLabel
                                          value="restrictedaccess"
                                          control={<Radio />}
                                          label={
                                            <List>
                                              <ListItem>
                                                <ListItemText
                                                  primary="Restricted Access"
                                                  secondary="Can access only assigned or created items"
                                                ></ListItemText>
                                              </ListItem>
                                            </List>
                                          }
                                        />
                                      </RadioGroup>
                                    </FormControl>
                                  </Grid>
                                </Grid>
                                <Grid
                                  item
                                  xs={6}
                                  style={{ backgroundColor: 'pink' }}
                                >
                                  <Grid>
                                    <FormControl
                                      fullWidth
                                      style={{
                                        backgroundColor: 'green',
                                      }}
                                    >
                                      <FormLabel>Permissions</FormLabel>
                                      <FormGroup>
                                        <FormControlLabel
                                          control={
                                            <Checkbox
                                              checked={view}
                                              onChange={handlePermissions}
                                              name="view"
                                            />
                                          }
                                          label="View items in access"
                                        />
                                        <FormControlLabel
                                          control={
                                            <Checkbox
                                              checked={edit}
                                              onChange={handlePermissions}
                                              name="edit"
                                            />
                                          }
                                          label="Edit items in access"
                                        />
                                        <FormControlLabel
                                          control={
                                            <Checkbox
                                              checked={create}
                                              onChange={handlePermissions}
                                              name="create"
                                            />
                                          }
                                          label="Create items in access"
                                        />
                                        <FormControlLabel
                                          control={
                                            <Checkbox
                                              checked={remove}
                                              onChange={handlePermissions}
                                              name="remove"
                                            />
                                          }
                                          label="Deleted items in access"
                                        />
                                      </FormGroup>
                                    </FormControl>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Box>
                          </Collapse>
                        </TableCell>
                      </TableRow>
                    </React.Fragment>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>
          <TabPanel value="2">Assigned Members</TabPanel>
        </TabContext>
      </Grid>
    </Box>
  );
};

export default AccessControl;
