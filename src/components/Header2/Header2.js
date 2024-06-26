import React from "react";
import { Typography, Grid, Box } from "@mui/material";

const Header2 = ({ title, title2, title3, text1, text2, underlineColor }) => {
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
              },
            }}
          >
            <Box
              component="span"
              sx={{
                borderBottom: `10px solid ${underlineColor}`,
                pb: { xs: 1, sm: 2 },
                display: "inline-block",
              }}
            >
              {title + " "}
            </Box>
            {" "} {title2} <br />
            {title3}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant="body1"
            sx={{ fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" } }}
            dangerouslySetInnerHTML={{ __html: text1 }} // Allow HTML to render styled text
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant="body1"
            sx={{ fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" } }}
            dangerouslySetInnerHTML={{ __html: text2 }} // Allow HTML to render styled text
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header2;
