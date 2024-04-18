import React from "react";
import { Box, Typography } from "@mui/material";

const Title = ({name}) => {
  return (
    <Box
      sx={{
        gap: "8px",
        textAlign: "center",
        padding: { xs: 2, sm: 5, md: 5 }, // Responsive padding
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
            xl: "60px",
          },
        }}
      >
        {name}
      </Typography>
    </Box>
  );
};

export default Title;
