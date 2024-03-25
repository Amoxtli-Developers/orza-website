// Footer.js
import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import logoSrc from "../../assets/images/logo/orza-logo-white.png"; // Make sure the path is correct

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 3, sm: 5 },
        px: 3,
        backgroundColor: "#1c44f1",
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid
            item
            xs={12}
            sm={4}
            md={3}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", sm: "flex-start" },
            }}
          >
            <Box
              component="img"
              src={logoSrc}
              alt="OZ___RA Logo"
              sx={{
                width: { xs: 150, sm: "auto" },
                height: { xs: "auto", sm: 100 },
                maxWidth: "100%",
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
            md={9}
            sx={{ textAlign: { xs: "center", sm: "end" } }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: { xs: "center", sm: "center" },
                justifyContent: "flex-end",
                mt: { xs: 2, sm: 0 },
              }}
            >
              {[
                "Home",
                "Vision",
                "Contacto",
                "Services",
                "Journey",
                "Privacy & Terms",
              ].map((text) => (
                <Link
                  key={text}
                  href={`#${text.toLowerCase()}`}
                  color="inherit"
                  sx={{
                    p: 2,
                    textDecoration: "none",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  {text}
                </Link>
              ))}
            </Box>
          </Grid>
        </Grid>
        <Typography variant="body2" align="center" sx={{ pt: 8, pb: 2 }}>
          ORZA Copyright © {new Date().getFullYear()} by{" "}
          <Link
            href="https://amoxtli.tech/"
            target="_blank"
            color="inherit"
            sx={{ textDecoration: "none" }}
          >
            Amoxtli Web Developers
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
