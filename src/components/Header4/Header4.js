import React from "react";
import { Card, CardMedia, Typography, Box, Grid } from "@mui/material";

const Header4 = () => {
  return (
    <Box sx={{ p: { xs: 5, sm: 5, md: 5 } }}>
      <Grid container spacing={2} sx={{ justifyContent: "center" }}>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Card sx={{ borderRadius: "20px" }}>
            <CardMedia
              component="img"
              image="path_to_your_image.jpg" // Replace with your image path
              alt="Image description"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "20px",
              }}
            />
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={8}
          lg={9}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Box>
            <Typography variant="h3" component="h1" gutterBottom sx={{fontWeight: "bold"}}>
              Lorem ipsum dolor sit amet consecte
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header4;
