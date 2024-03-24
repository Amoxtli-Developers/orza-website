import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import './Vision.css';


const Vision = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mt: 4 }}>
      <Box sx={{ flex: 1 }}>
        <Typography variant="h3" gutterBottom component="div">
          Vision
        </Typography>
        <Box sx={{ mb: 2, bgcolor: '#1C44F1', height: '8px' }}></Box>
        <Typography variant="body1" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
        </Typography>
      </Box>
      <Box sx={{ flex: 1, position: 'relative' }}>
        <Paper elevation={3} className="photo-box" sx={{ bgcolor: '#1C44F1' }} />
        <Paper elevation={3} className="photo-box" sx={{ bgcolor: 'white', position: 'absolute', top: '50%' }} />
      </Box>
    </Box>
  );
};

export default Vision;