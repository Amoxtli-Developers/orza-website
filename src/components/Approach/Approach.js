import React from "react";
import { Typography, Card, CardContent, Box, Grid } from "@mui/material";

const ApproachStep = ({ title, description }) => {
  return (
    <Card sx={{ width: 300, height: 300, boxShadow: 3, borderRadius: "20px" }}>
      <CardContent sx={{ p: 3 }}>
        <Typography
          sx={{
            fontSize: 30,
            textAlign: "center",
            fontWeight: "bold",
            color: "#1c44f1",
          }}
          gutterBottom
        >
          {title}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: 20, pr: 2, pl: 2, pt: 1 }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

const Approach = ({ steps }) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
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
        textAlign={"center"}
        sx={{ fontWeight: "bold", pb: 3 }}
      >
        Our Approach
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {steps.map((step, index) => (
          <Grid
            item
            key={index}
            xs={12}
            sm={6}
            md={3}
            sx={{ justifyContent: "center", display: "flex" }}
          >
            <ApproachStep title={step.title} description={step.description} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Approach;
