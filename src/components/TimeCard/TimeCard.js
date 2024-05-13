import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  CardMedia,
} from "@mui/material";

const TimeCard = ({ year, title, description, images }) => {
  return (
    <Box sx={{ p: { xs: 2, sm: 5, md: 5 } }}>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            position: "absolute",
            top: -50,
            left: 0,
            right: 0,
            opacity: 0.2,
            color: "#1B44F1",
            fontWeight: "bold",
            fontSize: { xs: "8rem", sm: "15rem", md: "20rem" },
            paddingTop: { xs: "40px" },
            paddingLeft: { xs: "10px", sm: "40px", md: "80px" },
          }}
        >
          {year}
        </Typography>
        <CardContent sx={{ pt: { xs: 10, sm: 15, md: 20 } }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "3rem", sm: "4rem", md: "6rem" },
              fontWeight: "bold",
              textAlign: "left",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              mt: 2,
              fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
              textAlign: "left",
            }}
            color="text.secondary"
          >
            {description}
          </Typography>
          <Grid container spacing={2} justifyContent="center" mt={4}>
            {images.map((image, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card variant="outlined" sx={{ borderRadius: "20px" }}>
                  <CardMedia
                    component="img"
                    image={image}
                    alt="Placeholder Image"
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Box>
    </Box>
  );
};

export default TimeCard;
