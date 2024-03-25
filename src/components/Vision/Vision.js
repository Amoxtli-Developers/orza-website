import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

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
    <Box sx={{
      display: 'flex', 
      flexDirection: { xs: 'column', md: 'row' }, 
      justifyContent: 'center', 
      alignItems: 'center', 
      mt: 4, 
      p: 3
    }}>
      <Box sx={{ 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: { xs: 'center', md: 'flex-start' },
        p: 3 
      }}>
        <Typography
          variant="h1"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "2.5rem", sm: "4rem", md: "6rem", lg: "100px" },
            textAlign: { xs: "center", md: "left" },
            position: 'relative', 
            '&:after': { 
                content: '""',
                position: 'absolute',
                bottom: -10, 
                left: '0px',
                width: '110%', 
                borderBottom: `10px solid ${underlineColor}`,
                transition: 'width .3s',
            },
            ml: { md: 6 }
          }}
        > 
          Vision
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem", lg: "1.75rem" },
            paddingTop: 4,
            textAlign: { xs: "center", md: "left" }, 
            maxWidth: '490px', 
            mx: { xs: 'auto', md: 6 }, 
            width: { xs: '90%', md: 'auto' } 
          }}
        >
          At our core, we're all about empowering businesses technology. By leading the way with our groundbreaking solutions and smartly integrating advanced algorithms, we're on a mission to completely transform the world of industrial automation. We aim to fuel sustainable growth and progress across the globe.
        </Typography>
      </Box>
      <Box sx={{ 
        flex: 1, 
        height: { xs: 'auto', md: '100vh' }, 
        width: '100%',
        mt: { xs:4, md: 32 }, 
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <Box sx={{ 
            height: '35%', 
            width: '100%',
            bgcolor: '#4061F2',
            display: 'flex',
            borderTopLeftRadius: '20px',
            borderTopRightRadius: '20px',
            alignItems: 'flex-end', 
            justifyContent: 'flex-start', 
            }}>

          <Card sx={{ 
            width: '70%',
            maxWidth: '420px',
            height: '80%',
            marginLeft:'75px',
            maxHeight: '325px',
            boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
            borderRadius: '4px',
            overflow: 'hidden',
            '&:hover': {
              boxShadow: '0 16px 32px 0 rgba(0,0,0,0.2)',
            },
          }}>
            <CardMedia
              component="img"
              image={images[imageIndex]}
              alt={`Image ${imageIndex + 1}`}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.5s ease, box-shadow 0.5s ease',
              }}
            />
          </Card>
        </Box>
        <Box sx={{ 
            height: '35%', 
            width: '100%',
            bgcolor: '#EDE8E6',
            display: 'flex',
            borderBottomLeftRadius: '20px',
            borderBottomRightRadius: '20px',
            alignItems: 'flex-start', 
            justifyContent: 'flex-end', 
            }}>

          <Card sx={{ 
            width: '70%',
            maxWidth: '420px',
            height: '80%',
            maxHeight: '325px',
            marginRight:'75px',
            boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
            borderRadius: '4px',
            overflow: 'hidden',
            '&:hover': {
              boxShadow: '0 16px 32px 0 rgba(0,0,0,0.2)',
            },
          }}>
            <CardMedia
              component="img"
              image={images[(imageIndex + 1) % images.length]}
              alt={`Image ${(imageIndex + 1) % images.length + 1}`}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.5s ease, box-shadow 0.5s ease',
              }}
            />
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Vision;


