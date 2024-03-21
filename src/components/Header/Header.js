// Header.js
import React from "react";
import { Typography, Box, Grid } from "@mui/material";

const Header = () => {
  return (
    <Grid container spacing={2} alignItems="center" sx={{ padding: 10 }}>
      <Grid item xs={12} md={6}>
        <Box>
          <Typography variant="h3" component="h1" gutterBottom>
            Lorem ipsum dolor sit amet
            <span
              style={{ color: "text.secondary", textDecoration: "underline", marginLeft: 15 }}
            >
              consecte
            </span>
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Header;
