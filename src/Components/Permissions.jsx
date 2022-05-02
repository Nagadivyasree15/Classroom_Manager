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
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
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
}));
const Permissions = () => {
  const classes = useStyle();
  const data = departments;
  console.log(data);
  return (
    <Box
      component="main"
      sx={{ flexGrow: 0, bgcolor: 'red', p: 3, height: '100vh' }}
    >
      <Grid
        container
        style={{ backgroundColor: '#ffffff', marginBottom: '20px' }}
      >
        <Grid item xs={8}>
          <List>
            <ListItem className={classes.list}>
              <Button variant="contained">Add Role</Button>
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
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item['id']}>
                <TableCell>{item['Department']}</TableCell>
                <TableCell>{item['Access Level']}</TableCell>
                <TableCell>{item['No of members']}</TableCell>
                <TableCell>{item['Last Updated']}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
export default Permissions;
