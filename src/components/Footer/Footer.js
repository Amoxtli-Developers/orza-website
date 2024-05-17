import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import logoSrc from "../../assets/images/logo/orza-logo-white.png"; // Make sure the path is correct
import { useNavigate } from "react-router-dom";

const Footer = ({ visionText, visionHref }) => {
  const navigate = useNavigate(); // Using useNavigate hook to get the navigate function

  return (
    <Box
      component="footer"
      sx={{
        px: { xs: 1, sm: 3 }, // Adjust padding for different screen sizes
        py: 5,
        backgroundColor: "#1c44f1",
        color: "white",
        minHeight: "100vh", // Set minimum height to 100% of viewport height
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Container maxWidth="xl">
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item xs={12} sm={6}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "1rem", sm: "2rem" }, // Adjust font size for different screen sizes
                textAlign: { xs: "center", sm: "left", lg: "left" },
              }}
            >
              Discover next
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "3rem", sm: "5rem", lg: "200px" }, // Adjust font size for different screen sizes
                cursor: "pointer",
                textAlign: { xs: "center", sm: "left", lg: "left" },
                paddingBottom: { xs: 2, sm: 0 },
                textDecoration: "underline",
                "&:hover": { cursor: "pointer" },
              }}
              onClick={() => navigate(visionHref)}
            >
              {visionText}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", sm: "flex-end" },
            }}
          >
            <IconButton
              href="https://www.linkedin.com/company/orza-tech/"
              target="_blank"
              rel="noreferrer"
              color="inherit"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              href="mailto:contact@orzatech.com"
              target="_blank"
              rel="noreferrer"
              color="inherit"
              aria-label="Email"
            >
              <EmailIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Container>

      <hr style={{ width: "100%", color: "white", opacity: 0.3 }} />

      <Container maxWidth="xl" sx={{ pb: 10, pt: 10 }}>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <Box
              component="img"
              src={logoSrc}
              alt="ORZA Logo"
              sx={{
                width: { xs: 150, sm: "auto" },
                height: { xs: "auto", sm: 200 },
                maxWidth: "100%",
              }}
            />
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{ textAlign: { xs: "center", md: "end" } }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
                justifyContent: "flex-end",
                mt: { xs: 2, sm: 0 },
              }}
            >
              {["Home", "Service", "Vision", "Journey", "Join Us"].map(
                (text) => (
                  <Typography
                    key={text}
                    onClick={() =>
                      navigate(`/${text.toLowerCase().replace(/\s+/g, "")}`)
                    }
                    sx={{
                      cursor: "pointer",
                      p: 2,
                      textDecoration: "none",
                      fontWeight: "bold",
                      fontSize: "1rem",
                      color: "inherit",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    {text}
                  </Typography>
                )
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
      <hr style={{ width: "100%", color: "white", opacity: 0.3 }} />
      <Container maxWidth="xl">
        <Typography
          variant="body2"
          align="center"
          sx={{ pt: 8, pb: 2, color: "white", opacity: 0.8 }}
        >
          ORZA Copyright © {new Date().getFullYear()} by{" "}
          <Typography
            color="inherit"
            sx={{
              cursor: "pointer",
              textDecoration: "none",
              opacity: 0.8,
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            <a
              href="https://amoxtli.tech"
              target="_blank"
              rel="noreferrer"
              style={{
                color: "inherit",
                textDecoration: "inherit",
                fontSize: "14px",
                opacity: 0.8,
              }}
            >
              Amoxtli Web Developers
            </a>
          </Typography>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
