// Header.js
import React from "react";
import { Typography, Box, Grid } from "@mui/material";

const Header3 = () => {
  const underlineColor = "#1c44f1";

  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      sx={{ padding: { xs: 2, sm: 5, md: 5 }, paddingTop: 0 }}
    >
      <Grid item xs={12} md={6}>
        <Typography
          id="home"
          variant="h1"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "2.5rem", sm: "4rem", md: "6rem", lg: "100px" }, // Adjusted for various breakpoints
            textAlign: { xs: "center", md: "left" }, // Center text on small screens
          }}
        >
          Revolutionizing <br />
          Industrial <br />
          <Box
            component="span"
            sx={{
              borderBottom: `10px solid ${underlineColor}`,
              display: "inline-block",
            }}
          >
            Robotics
          </Box>
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem", lg: "25px" }, // Adjusted for various breakpoints
            paddingTop: { xs: 2, md: 20 }, // Adjusted padding top for xs devices
            textAlign: { xs: "center", md: "left" }, // Center text on small screens
          }}
        >
          Step into the future with ORZA where advanced sensors and intelligent
          algorithms reclaim billions of hours for humanity. We're not just
          automating tasks; we're enhancing lives, making the inconceivable
          today an intuitive reality tomorrow.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Header3;
