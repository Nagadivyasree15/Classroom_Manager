import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@material-ui/core';
import SideBar from './Components/SideBar';

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
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
