import React from "react";
import { Box, Typography } from "@mui/material";

const Title = () => {
  const underlineColor = "#1c44f1";
  return (
    <Box
      sx={{
        gap: "8px",
        textAlign: "center",
        padding: { xs: 2, sm: 5, md: 10 }, // Responsive padding
        paddingBottom: { xs: 2.5, sm: 5 }, // Adjust paddingBottom for smaller devices
      }}
    >
      <Typography
        variant="h3"
        component="h3"
        sx={{
          fontWeight: "bold",
          fontSize: {
            xs: "2.5rem",
            sm: "4rem",
            md: "5rem",
            lg: "6rem",
            xl: "100px",
          }, // Responsive font sizes
          borderBottom: `15px solid ${underlineColor}`,
          display: "inline-block", // Ensure underline scales with text
          paddingBottom: "4px", // Adjust based on your design needs
        }}
      >
        Our Services
      </Typography>
      <Typography
        variant="subtitle1"
        color="text.secondary"
        sx={{
          fontSize: {
            xs: "1rem",
            sm: "1.25rem",
            md: "1.5rem",
            lg: "2rem",
            xl: "25px",
          }, // Responsive font sizes for subtitle
          mt: 2, // Adds a margin top for space between the title and subtitle
        }}
      >
        Unitary Automation
      </Typography>
    </Box>
  );
};

export default Title;
