import React from "react";
import { Typography, Box, Grid } from "@mui/material";

const Header3 = ({ mainTitle, subTitle, bodyText, underlineColor = "#1c44f1", description}) => {
  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      sx={{ padding: { xs: 2, sm: 5, md: 5 }, paddingTop: 0 }}
    >
      <Grid item xs={12} md={6}>
        <Typography
          variant="h1"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "2.5rem", sm: "4rem", md: "6rem", lg: "100px" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {mainTitle} <br />
          {subTitle} <br />
          <Box
            component="span"
            sx={{
              borderBottom: `10px solid ${underlineColor}`,
              pb: '0.1em', // Adjust the space between text and underline
              display: "inline-block",
            }}
          >
            {bodyText}
          </Box>
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem", lg: "25px" },
            paddingTop: { xs: 2, md: 20 },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {description}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Header3;
