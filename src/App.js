import { Autocomplete, Box } from '@mui/material';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CobaAutoComplete from './pages/CobaAutoComplete';
import Home from './pages/Home';
import Navbar from './views/Navbar';

const App = () => {
  return (
    <Box>
      <Navbar pages={['Home', 'Auto']} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auto" element={<CobaAutoComplete />} />
      </Routes>
    </Box>
  );
};

export default App;
