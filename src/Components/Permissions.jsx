import {
  Box,
  Table,
  TableBody,
  TableContainer,
  TableRow,
  TableCell,
  TableHead,
  Paper,
} from '@material-ui/core';
import departments from '../Database/db';

const Permissions = () => {
  const data = departments;
  console.log(data);
  return (
    <Box
      component="main"
      sx={{ flexGrow: 0, bgcolor: 'red', p: 6, height: '100vh' }}
    >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Department/Role Name</TableCell>
              <TableCell>Access Level</TableCell>
              <TableCell>No of members</TableCell>
              <TableCell>Last Updated</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {data.map((item) => (
              <TableRow key={item['id']}>
                <TableCell>{item['Department']}</TableCell>
                <TableCell>{item['Access Level']}</TableCell>
                <TableCell>{item['No of members']}</TableCell>
                <TableCell>{item['Last Updated']}</TableCell>
              </TableRow>
            ))} */}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
export default Permissions;
