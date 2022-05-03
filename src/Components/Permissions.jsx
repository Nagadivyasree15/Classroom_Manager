import {
  Box,
  Table,
  TableBody,
  TableContainer,
  TableRow,
  TableCell,
  TableHead,
  Paper,
  Grid,
  makeStyles,
  Button,
  List,
  ListItem,
  ListItemIcon,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import AddIcon from '@material-ui/icons/Add';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { useState } from 'react';
import departments from '../Database/db';

const useStyle = makeStyles((theme) => ({
  tableHead: {
    backgroundColor: 'rgb(240,240,210)',
  },
  list: {
    display: 'inline-flex',
  },
  listIcon: {
    marginLeft: '20px',
  },
  addIcon: {
    marginRight: '5px',
  },
}));
const Permissions = () => {
  const classes = useStyle();
  const [department, setDepartment] = useState('');
  const data = departments;
  const handleChange = (e) => {
    setDepartment(e.target.value);
  };
  return (
    <Box component="main" sx={{ flexGrow: 0, p: 3, height: '100vh' }}>
      <Grid
        container
        style={{ backgroundColor: '#ffffff', marginBottom: '20px' }}
      >
        <Grid item xs={8}>
          <List>
            <ListItem className={classes.list}>
              <Button variant="contained" color="secondary">
                <AddIcon className={classes.addIcon} />
                Add Role
              </Button>
              <ListItemIcon className={classes.listIcon}>
                <EditIcon />
              </ListItemIcon>
              <ListItemIcon>
                <DeleteOutlineIcon />
              </ListItemIcon>
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow className={classes.tableHead}>
              <TableCell>Department/Role Name</TableCell>
              <TableCell>Access Level</TableCell>
              <TableCell>No of members</TableCell>
              <TableCell>Last Updated</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item['id']}>
                <TableCell>
                  <RadioGroup onChange={handleChange} value={department}>
                    <FormControlLabel
                      value={item['Department']}
                      label={item['Department']}
                      control={<Radio />}
                    ></FormControlLabel>
                  </RadioGroup>
                </TableCell>
                <TableCell>
                  <Button variant="contained">{item['Access Level']}</Button>
                </TableCell>
                <TableCell align="center">{item['No of members']}</TableCell>
                <TableCell>{item['Last Updated']}</TableCell>
                <TableCell>
                  <VisibilityIcon />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
export default Permissions;
