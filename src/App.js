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
          <Grid item container display="flex" xs="2">
            <Grid item xs="1">
              <FiberManualRecordIcon className={classes.icon} />
            </Grid>
            <Grid item xs="1" className={classes.grid}>
              Classroom Manager
            </Grid>
          </Grid>
          <Grid item xs="6" style={{ backgroundColor: 'red' }}></Grid>
          <Grid
            item
            xs="2"
            style={{ backgroundColor: 'pink' }}
            container
            direction="row"
            alignItems="center"
          >
            <Grid item xs="1" className={classes.nameIcon}>
              <FiberManualRecordIcon fontSize="large" />
            </Grid>
            <Grid item xs="1" className={classes.name}>
              Divya
            </Grid>
          </Grid>
          <Grid
            item
            xs="1"
            style={{ backgroundColor: 'yellow' }}
            container
            direction="column"
            display="flex"
            justify="center"
            alignItems="center"
          >
            <NotificationsNoneIcon fontSize="large" className={classes.notf} />
          </Grid>
          <Grid
            item
            xs="1"
            container
            direction="column"
            display="flex"
            justify="center"
            style={{ backgroundColor: 'pink' }}
          >
            <HelpOutlineIcon fontSize="large" className={classes.notf} />
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
