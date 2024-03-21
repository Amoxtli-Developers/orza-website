import React from 'react';
import { AppBar, Toolbar, Typography, Button, useTheme } from '@mui/material';

const Nav = () => {
  const theme = useTheme();

  return (
    <AppBar 
      position="static" 
      color="transparent" 
      elevation={0} 
      sx={{ 
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Toolbar>
        {/* Assuming OZ is styled differently, we'll split it */}
        <Typography variant="h6" color="inherit" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <span style={{ fontWeight: 600 }}>OZ</span><br /><p>RA</p>
        </Typography>
        <Button 
          color="inherit" 
          variant="outlined" 
          sx={{ borderRadius: 20 }}
        >
          Home
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
