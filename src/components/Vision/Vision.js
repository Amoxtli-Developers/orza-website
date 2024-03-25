import React, { useState, useEffect } from "react";
import { Grid, Typography, Card, CardMedia, Box } from "@mui/material";

const Vision = () => {
  const underlineColor = "#1c44f1";

  const [imageIndex, setImageIndex] = useState(0);
  const images = ["/A1.jpg", "/A4.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Grid
      container
      spacing={4}
      sx={{
        justifyContent: "center",
        alignItems: "center",
        padding: { xs: 2, sm: 5, md: 5 },
      }}
    >
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
          <Typography
            variant="h4"
            component="h4"
            gutterBottom
            sx={{
              fontWeight: "bold",
              fontSize: {
                xs: "2.5rem",
                sm: "3.5rem",
                md: "4.5rem",
                lg: "100px",
              },

              borderBottom: `10px solid ${underlineColor}`,
              pb: { xs: 1, sm: 2 },
              display: "inline-block",
            }}
          >
            Vision
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{
            fontSize: {
              xs: "1rem",
              sm: "1.25rem",
              md: "1.5rem",
              lg: "1.75rem",
            },
            paddingTop: 4,
            textAlign: "center",
            maxWidth: "490px",
            width: "90%",
          }}
        >
          At our core, we're all about empowering businesses with technology. By
          leading the way with our groundbreaking solutions and smartly
          integrating advanced algorithms, we're on a mission to completely
          transform the world of industrial automation. We aim to fuel
          sustainable growth and progress across the globe.
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid container spacing={2} justifyContent="center">
          <Grid
            item
            xs={12}
            sm={8}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
            }}
          >
            <Card
              sx={{
                width: "100%",
                maxWidth: "420px",
                height: "325px",
                boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
                borderRadius: "4px",
                "&:hover": { boxShadow: "0 16px 32px 0 rgba(0,0,0,0.2)" },
              }}
            >
              <CardMedia
                component="img"
                image={images[imageIndex]}
                alt={`Image ${imageIndex + 1}`}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.5s ease",
                }}
              />
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              borderBottomLeftRadius: "20px",
              borderBottomRightRadius: "20px",
            }}
          >
            <Card
              sx={{
                width: "100%",
                maxWidth: "420px",
                height: "325px",
                boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
                borderRadius: "4px",
                "&:hover": { boxShadow: "0 16px 32px 0 rgba(0,0,0,0.2)" },
              }}
            >
              <CardMedia
                component="img"
                image={images[(imageIndex + 1) % images.length]}
                alt={`Image ${((imageIndex + 1) % images.length) + 1}`}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.5s ease",
                }}
              />
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Vision;
