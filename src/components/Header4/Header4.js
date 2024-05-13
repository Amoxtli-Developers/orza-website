import React from "react";
import { Card, CardMedia, Typography, Box, Grid } from "@mui/material";
import A1 from "../../assets/journey/A1.webp"; // Replace with your image path

const Header4 = () => {
  return (
    <Box sx={{ m: { xs: 2, sm: 3, md: 4, lg: 5 } }}>
      <Grid
        container
        spacing={2}
        sx={{
          justifyContent: "center",
          padding: { xs: 1, sm: 2, md: 3, lg: 4 },
        }}
      >
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
              image={A1} // Replace with your image path
              alt="orza journey"
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
          <Box
            sx={{
              padding: {
                xs: 1, // small devices
                sm: 2, // medium devices
                md: 3, // larger devices
                lg: 10, // largest screens
              },
            }}
          >
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: "bold",
                fontSize: {
                  xs: "1.5rem", // small devices
                  sm: "2rem", // medium devices
                  lg: "5rem", // large devices
                },
                color: "#1B44F1",
              }}
            >
              Celebrating Innovation and Excellence at Orza Tech
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: {
                  xs: "0.8rem", // small devices
                  sm: "1rem", // medium devices
                  lg: "1.2rem", // large devices
                },
              }}
            >
              From its humble beginnings with the formation of VantTec in 2017,
              Orza Tech has pioneered advancements in the autonomous vehicle
              sector. Our journey through technological innovation led us to win
              prestigious competitions and awards, solidifying our position as
              leaders in the field of robotics and automation.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header4;
