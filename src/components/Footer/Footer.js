// Footer.js
import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import logoSrc from '../../assets/images/logo/orza-logo-white.png'; // Asegúrate de que la ruta es correcta

const Footer = () => {
  // Función para manejar el desplazamiento a la sección
  const scrollToSection = (sectionId) => {
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        const yOffset = -100; // Ajusta este valor según sea necesario, por ejemplo, basado en la altura de tu cabecera.
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100);
  };

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
              alt="ORZA Logo"
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
                "Service",
                "Vision",
                "Journey",
                // "Privacy & Terms" es probable que sea un enlace a un documento o página diferente
              ].map((text) => (
                <Typography
                  key={text}
                  onClick={() => scrollToSection(text.toLowerCase())}
                  sx={{
                    cursor: 'pointer',
                    p: 2,
                    textDecoration: "none",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    color: 'inherit', // Asegura que el color del texto sea el mismo que antes
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  {text}
                </Typography>
              ))}
            </Box>
          </Grid>
        </Grid>
        <Typography variant="body2" align="center" sx={{ pt: 8, pb: 2 }}>
          ORZA Copyright © {new Date().getFullYear()} by{" "}
          <Typography
            color="inherit"
            sx={{
              cursor: 'pointer',
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
            onClick={() => scrollToSection("privacy-terms")}
          >
            Privacy & Terms
          </Typography>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;

