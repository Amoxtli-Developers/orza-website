import React from "react";
import { Typography, Grid, IconButton, Box, Button } from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  ArrowForward,
} from "@mui/icons-material"; // Import MUI icons

const VisionText = () => {
  return (
    <Box
      sx={{
        paddingRight: { xs: 5, sm: 15, md: 25 },
        paddingLeft: { xs: 5, sm: 15, md: 25 },
        paddingTop: { xs: 5, sm: 5, md: 15 },
        paddingBottom: { xs: 5, sm: 5, md: 10 },
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          textAlign: "center",
          fontSize: { xs: "40px", sm: "60px", md: "80px" },
          color: "#1B44F1",
          fontWeight: "bold",
        }}
      >
        Does your vision match with ORZA Tech?
      </Typography>
      <Grid container spacing={2} sx={{ paddingTop: 3 }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ justifyContent: "center", display: "flex", paddingBottom: 2 }}
        >
          <div>
            <IconButton
              variant="outlined"
              href="https://www.facebook.com/example"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook
                sx={{ color: "#1B44F1", fontSize: { xs: "40px", sm: "50px" } }}
              />
            </IconButton>
          </div>
          <div>
            <IconButton
              variant="outlined"
              href="https://twitter.com/example"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter
                sx={{ color: "#1B44F1", fontSize: { xs: "40px", sm: "50px" } }}
              />
            </IconButton>
          </div>
          <div>
            <IconButton
              variant="outlined"
              href="https://www.instagram.com/example"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram
                sx={{ color: "#1B44F1", fontSize: { xs: "40px", sm: "50px" } }}
              />
            </IconButton>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            paddingBottom: { xs: 2, sm: 0 },
          }}
        >
          <a href="/joinus">
            <Button
              sx={{
                fontSize: { xs: "15px", sm: "20px", md: "20px" },
                padding: { xs: "5px 20px", sm: "10px 25px" },
                backgroundColor: "#1B44F1",
                color: "#fff",
                borderRadius: "50px",
                textTransform: "none",
                fontWeight: "bold",
                "&:hover": {
                  boxShadow: "0 0 20px 5px rgba(0, 0, 0, 0.2)", // Add glow effect on hover
                  backgroundColor: "#1B44F1",
                },
              }}
            >
              Join us
              <ArrowForward
                sx={{
                  fontSize: { xs: "20px", sm: "30px", md: "40px" },
                  marginLeft: "10px",
                }}
              />
            </Button>
          </a>
        </Grid>
      </Grid>
    </Box>
  );
};

export default VisionText;
