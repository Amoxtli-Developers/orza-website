// Header2.js
import React from "react";
import { Typography, Grid, Box } from "@mui/material";

const Header2 = () => {
  const underlineColor = "#1c44f1";
  return (
    <Box
      sx={{ maxWidth: "lg", margin: "auto", padding: { xs: 1, sm: 4, md: 6 } }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} textAlign="center">
        <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: "bold",
              fontSize: {
                xs: "2.5rem",
                sm: "3.5rem",
                md: "4.5rem",
                lg: "80px",
              }, // Adjusted for various breakpoints
            }}
          >
            <Box
              component="span"
              sx={{
                borderBottom: `10px solid ${underlineColor}`,
                pb: { xs: 1, sm: 2 },
                display: "inline-block",
              }} // Adjusted underline and padding for breakpoints
            >
              Revolutionizing
            </Box>{" "}
            the <br />
            Fabric of Industry
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" }, // Adjusted for various breakpoints
            }}
          >
            We embark on this mission with a singular focus: to redefine the
            landscape of industrial automation. By blending the power of
            intelligent algorithms with state-of-the-art technologies in vision,
            mapping, localization, LiDAR, and object detection,
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" }, // Adjusted for various breakpoints
            }}
          >
            we're setting new benchmarks for productivity, efficiency, and
            safety. Our robots are more than machines—they are harbingers of an
            industrial renaissance.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header2;
