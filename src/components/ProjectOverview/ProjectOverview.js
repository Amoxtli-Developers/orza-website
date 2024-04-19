import React from "react";
import { Typography, Button, Box, Grid } from "@mui/material";

const ProjectOverview = ({ title, body, tags }) => {
  return (
    <Box
      sx={{
        paddingRight: { xs: 5, sm: 15, md: 10 },
        paddingLeft: { xs: 5, sm: 15, md: 10 },
        paddingTop: { xs: 2, sm: 5, md: 5 },
        paddingBottom: { xs: 2, sm: 5, md: 5 },
      }}
    >
      <Grid container spacing={2} alignItems="center" pr={2} pl={2} >
        <Grid item xs={12} md={10} pt={0}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
            {title}
          </Typography>
          <Typography variant="body1">{body}</Typography>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {tags &&
              tags.map((tag, index) => (
                <Button
                  key={index}
                  variant="contained"
                  sx={{
                    bgcolor: "#1c44f1",
                    borderRadius: "20px",
                    fontWeight: "bold",
                    textTransform: "lowercase", // Ensuring text is in lowercase
                    "&:hover": {
                      boxShadow: "0 0 20px 5px rgba(0, 0, 0, 0.2)",
                      backgroundColor: "#1c44f1",
                    },
                  }}
                >
                  {tag}
                </Button>
              ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

// Default props in case they are not provided
ProjectOverview.defaultProps = {
  title: "Project Overview",
  body: "Description of the project will be here...",
  tags: ["Tag One", "Tag Two", "Tag Three"],
};

export default ProjectOverview;
