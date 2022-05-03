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
import ToggleOffIcon from '@material-ui/icons/ToggleOff';
import ToggleOnIcon from '@material-ui/icons/ToggleOn';
//import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import React, { useState } from 'react';
import roleData from '../Database/database';
import { useNavigate } from 'react-router-dom';

const useStyle = makeStyles({
  list: {
    display: 'inline-flex',
  },
  listIcon: {
    marginLeft: '50px',
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
  form: {
    fontWeight: 'bold',
    color: '#000000',
  },
});
const AccessControl = () => {
  const navigate = useNavigate();
  const classes = useStyle();
  const [tabValue, setTabValue] = useState('1');
  const [expanded, setExpanded] = useState(false);
  const [accessValue, setAccessValue] = useState('allaccess');
  const [accessControl, setAccessControl] = useState('primary');
  const [iconId, setIconId] = useState(0);
  const [checked, setChecked] = useState({
    view: true,
    edit: false,
    create: false,
    remove: false,
  });
  const { view, edit, create, remove } = checked;
  const data = roleData;
  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };
  const handleAccess = (e) => {
    setAccessValue(e.target.value);
    if (accessValue === 'allaccess') {
      setAccessControl('primary');
    } else if (accessValue === 'restrictedaccess') {
      setAccessControl('secondary');
    }
  };
  const handlePermissions = (e) => {
    setChecked({ ...checked, [e.target.name]: e.target.checked });
  };
  const handleRole = (e) => {
    if (e.target) {
      if (e.target.parentNode) {
        let cellId = Number(e.target.parentNode.id);
        for (let i = 0; i < data.length; i++) {
          if (data[i].id === cellId) {
            setIconId(cellId);
            setExpanded(!expanded);
          }
        }
      }
    }
  };
  const goToPermissions = () => {
    navigate('/');
  };
  return (
    <Box sx={{ flexGrow: 1, p: 2, height: '100vh' }}>
      <Grid item xs={12}>
        <List>
          <ListItem className={classes.list}>
            <ListItemIcon onClick={goToPermissions}>
              <ArrowBackIcon />
            </ListItemIcon>
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
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((item) => (
                    <React.Fragment>
                      <TableRow key={item.id} id={item.id}>
                        <TableCell id={item.id}>
                          <IconButton
                            id={item.id}
                            aria-label="expand row"
                            size="small"
                            onClick={handleRole}
                          >
                            {iconId === item.id && expanded ? (
                              <RemoveCircleOutlineIcon id={item.id} />
                            ) : (
                              <AddCircleOutlineIcon id={item.id} />
                            )}
                          </IconButton>
                        </TableCell>
                        <TableCell id={item.id}>{item.role}</TableCell>
                        <TableCell>
                          <Button variant="contained" color={accessControl}>
                            {item.accesslevel}
                          </Button>
                        </TableCell>
                        <TableCell>
                          {item.summary}
                          <Divider orientation="vertical" />
                        </TableCell>
                        <TableCell>{item.lastupdated}</TableCell>
                        <TableCell>
                          <VisibilityIcon />
                        </TableCell>
                        <TableCell>
                          {String(accessValue) === 'allaccess' ||
                          'restrictedaccess' ? (
                            <ToggleOnIcon />
                          ) : (
                            <ToggleOffIcon />
                          )}
                        </TableCell>
                      </TableRow>
                      <TableRow key={`collapse_${item.id}`}>
                        <TableCell
                          style={{ paddingBottom: 0, paddingTop: 0 }}
                          colSpan={7}
                        >
                          <Collapse
                            in={iconId === item.id ? expanded : null}
                            timeout="auto"
                            component="tr"
                            unmountOnExit
                          >
                            <Box sx={{ margin: 1 }}>
                              <Typography gutterBottom component="div">
                                {`All aspects in the ${item.role} module`}
                              </Typography>
                              <Grid sx={{ flexGrow: 1 }} container>
                                <Grid item>
                                  <Grid>
                                    <FormControl fullWidth>
                                      <FormLabel className={classes.form}>
                                        Access Control
                                      </FormLabel>
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
                                <Grid item>
                                  <Grid>
                                    <FormControl fullWidth>
                                      <FormLabel className={classes.form}>
                                        Permissions
                                      </FormLabel>
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
