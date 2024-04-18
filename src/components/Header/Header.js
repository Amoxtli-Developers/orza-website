// Header.js
import React from "react";
import { Typography, Box, Grid, Button } from "@mui/material";

const Header = () => {
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
            component="p"
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
            paddingTop: { xs: 2, md: 10 }, // Adjusted padding top for xs devices
            textAlign: { xs: "center", md: "left" }, // Center text on small screens
          }}
        >
          Step into the future with ORZA where advanced sensors and intelligent
          algorithms reclaim billions of hours for humanity. We're not just
          automating tasks; we're enhancing lives, making the inconceivable
          today an intuitive reality tomorrow.
        </Typography>
        <Grid container pt={3}>
          <Grid item xs={12} md={6} justifyContent={"center"} display={"flex"}>
            <a href="/contact">
              <Button
                variant="contained"
                sx={{
                  mt: 2,
                  borderRadius: 50,
                  backgroundColor: underlineColor,
                  fontWeight: "bold",
                  textTransform: "none",
                  padding: "10px 80px",
                  transition: "box-shadow 0.3s", // Add transition for box-shadow
                  "&:hover": {
                    boxShadow: "0 0 20px 5px rgba(0, 0, 0, 0.2)", // Add glow effect on hover
                    backgroundColor: underlineColor,
                  },
                }}
              >
                Book a Call
              </Button>
            </a>
          </Grid>
          <Grid item xs={12} md={6} justifyContent={"center"} display={"flex"}>
            <a href="/joinus">
              <Button
                variant="outlined"
                sx={{
                  mt: 2,
                  borderRadius: 50,
                  color: underlineColor,
                  border: `2px solid ${underlineColor}`,
                  fontWeight: "bold",
                  textTransform: "none",
                  padding: "10px 80px",
                  "&:hover": {
                    backgroundColor: underlineColor,
                    color: "white",
                  },
                }}
              >
                Join us
              </Button>
            </a>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
