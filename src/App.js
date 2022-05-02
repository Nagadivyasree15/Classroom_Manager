import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, Grid, makeStyles } from '@material-ui/core';
import SideBar from './Components/SideBar';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
const useStyle = makeStyles({
  box: {
    backgroundColor: 'blue',
    height: '8vh',
  },
  grid: {
    backgroundColor: 'pink',
    fontWeight: 'bold',
    fontSize: '20px',
  },
  icon: {
    fontSize: 50,
  },
});
function App() {
  const classes = useStyle();
  return (
    <Box>
      <Box className={classes.box}>
        <Grid container>
          <Grid item container display="flex" xs="2">
            <Grid item xs="1">
              <FiberManualRecordIcon className={classes.icon} />
            </Grid>
            <Grid item xs="1">
              Classroom manager
            </Grid>
          </Grid>
          <Grid item xs="6" style={{ backgroundColor: 'red' }}></Grid>
          <Grid item xs="2" style={{ backgroundColor: 'pink' }}>
            <FiberManualRecordIcon fontSize="large" /> Divya
          </Grid>
          <Grid item xs="1" style={{ backgroundColor: 'yellow' }}>
            <NotificationsNoneIcon />
          </Grid>
          <Grid item xs="1" style={{ backgroundColor: 'pink' }}>
            <HelpOutlineIcon />
          </Grid>
        </Grid>
      </Box>
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route path="/" element={<SideBar />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
