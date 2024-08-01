import React from 'react';
import { Box, CircularProgress } from '@mui/material';

export default function loading() {
  return (
    <Box
      display="flex"
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <CircularProgress sx={{ color: '#000000' }} />
    </Box>
  );
}
