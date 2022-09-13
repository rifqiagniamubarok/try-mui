import { Box, Container } from '@mui/material';
import React, { useEffect } from 'react';
import Axios from 'axios';

const CobaAutoComplete = () => {
  useEffect(() => {
    Axios.get(`https://swapi.dev/api/people/`).then((result) => {
      const responAPI = result.data.results;
    });
  }, []);
  return (
    <Box>
      <Container maxWidth="xl" sx={{ marginTop: '30px' }}>
        cc
      </Container>
    </Box>
  );
};

export default CobaAutoComplete;
