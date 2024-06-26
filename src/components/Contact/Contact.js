import React from "react";
import { Box, Typography, IconButton, Stack } from "@mui/material";
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
      Got questions? We're here to help. Contact us to learn more about how ORZA Tech can support your goals.
      </Typography>
      <Stack direction="row" spacing={2} justifyContent="center">
        <IconButton href="mailto:contact@orzatech.com" target="_blank" aria-label="Email" sx={{ color: "#1c44f1" }}>
          <EmailIcon sx={{ fontSize: "50px" }} />
        </IconButton>
        <a
          href="https://www.linkedin.com/company/orza-tech/"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton aria-label="LinkedIn" sx={{ color: "#1c44f1" }}>
            <LinkedInIcon sx={{ fontSize: "50px" }} />
          </IconButton>
        </a>
      </Stack>
    </Box>
  );
};

export default Contact;
