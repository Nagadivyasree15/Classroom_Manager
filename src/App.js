import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, Grid, makeStyles } from '@material-ui/core';
import SideBar from './Components/SideBar';
import Permissions from './Components/Permissions';
import AccessControl from './Components/AccessControl';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
const useStyle = makeStyles({
  box: {
    height: '8vh',
    backgroundColor: '#ffffff',
  },
  grid: {
    fontWeight: 'bold',
    fontSize: '20px',
    marginLeft: '25px',
  },
  icon: {
    fontSize: 50,
  },
  name: {
    fontSize: '15px',
    marginLeft: '20px',
    marginTop: '10px',
  },
  nameIcon: {
    marginTop: '9px',
    marginLeft: '170px',
  },
  notf: {
    marginTop: '9px',
  },
});
function App() {
  const classes = useStyle();
  return (
    <Box>
      <Box className={classes.box}>
        <Grid container>
          <Grid item container display="flex" xs={2}>
            <Grid item xs={1}>
              <FiberManualRecordIcon className={classes.icon} />
            </Grid>
            <Grid item xs={1} className={classes.grid}>
              Classroom Manager
            </Grid>
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={2} container direction="row" alignItems="center">
            <Grid item xs={1} className={classes.nameIcon}>
              <FiberManualRecordIcon fontSize="large" />
            </Grid>
            <Grid item xs={1} className={classes.name}>
              Divya
            </Grid>
          </Grid>
          <Grid
            item
            xs={1}
            container
            direction="column"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <NotificationsNoneIcon fontSize="large" className={classes.notf} />
          </Grid>
          <Grid
            item
            xs={1}
            container
            direction="column"
            display="flex"
            justifyContent="center"
          >
            <HelpOutlineIcon fontSize="large" className={classes.notf} />
          </Grid>
        </Grid>
      </Box>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SideBar />} />
          <Route path="/access_control" element={<AccessControl />} />
          <Route path="/permissions" element={<Permissions />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
