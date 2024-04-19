import React from "react";
import { Box, Typography, IconButton, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Contact = () => {
  return (
    <Box sx={{ textAlign: "center", p: 10 }}>
      <Typography
        variant="h4"
        component="h2"
        sx={{ fontWeight: "bold", mb: 4, fontSize: "60px" }}
      >
        Contact Us
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, fontSize: "30px" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </Typography>
      <Stack direction="row" spacing={2} justifyContent="center">
        <IconButton aria-label="Facebook" sx={{ color: "#1c44f1" }}>
          <FacebookIcon sx={{ fontSize: "50px" }} />
        </IconButton>
        <IconButton aria-label="LinkedIn" sx={{ color: "#1c44f1" }}>
          <LinkedInIcon sx={{ fontSize: "50px" }} />
        </IconButton>
        <IconButton aria-label="Email" sx={{ color: "#1c44f1" }}>
          <EmailIcon sx={{ fontSize: "50px" }} />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default Contact;
