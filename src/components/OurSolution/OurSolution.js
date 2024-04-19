import React from "react";
import { Box, Typography, Grid, Card, CardMedia } from "@mui/material";

const OurSolution = ({ sections, imageUrl }) => {
  return (
    <Box
      sx={{
        paddingRight: { xs: 5, sm: 15, md: 5 },
        paddingLeft: { xs: 5, sm: 15, md: 5 },
        paddingTop: { xs: 2, sm: 5, md: 5 },
        paddingBottom: { xs: 2, sm: 5, md: 5 },
      }}
    >
      <Typography
        variant="h3"
        component="h2"
        gutterBottom
        sx={{ fontWeight: "bold", textAlign: "center", mb: 4 }}
      >
        Our Solution
      </Typography>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={8}>
          {sections.map((section, index) => (
            <Box key={index} mb={3}>
              <Typography
                variant="h5"
                component="h3"
                gutterBottom
                sx={{ fontWeight: "bold" }}
              >
                {section.title}
              </Typography>
              <Typography variant="body1">{section.description}</Typography>
            </Box>
          ))}
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            sx={{ maxWidth: 345, bgcolor: "transparent", boxShadow: "none" }}
          >
            <CardMedia
              component="img"
              image={imageUrl}
              alt="Solution placeholder"
              sx={{ width: "100%", height: "auto", borderRadius: "20px"}}
            />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OurSolution;
