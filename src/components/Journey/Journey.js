import React, { useState } from 'react';
import { Box, IconButton, styled, Typography } from '@mui/material';
import { ArrowBackIosNew as ArrowBackIosNewIcon, ArrowForwardIos as ArrowForwardIosIcon } from '@mui/icons-material';


const slides = [
  {
    label: 'First slide label',
    description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    imgPath: '/A3.JPG',
  },
  {
    label: 'Second slide label',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imgPath: '/A5.JPG',
  },
  {
    label: 'Third slide label',
    description: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    imgPath: '/A4.jpg',
  },
  {
    label: 'Fourth slide label',
    description: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    imgPath: '/A6.JPG',
  },
];

// ImageContainer con tamaño fijo
const ImageContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  width: '100%', 
  height: '600px', 
  position: 'relative',
  
});

const StyledImage = styled('img')({
  maxWidth: '100%',
  maxHeight: '100%',
  borderRadius: '20px',
  objectFit: 'cover',
  margin: 'auto',
  display: 'block',
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
});

const Indicator = styled(Box)(({ active }) => ({
  height: '6px',
  width: '40px',
  marginRight: '8px',
  marginBottom:'50px',
  backgroundColor: active ? '#1C44F1' : '#c0c0c0',
  transition: 'background-color 0.3s',
  
}));

export default function Journey() {
  const underlineColor = "#1c44f1";

  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = slides.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + maxSteps - 1) % maxSteps);
  };

  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      <Typography
        variant="h1"
        component="h1"
        gutterBottom
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "2.5rem", sm: "4rem", md: "6rem", lg: "100px" },
          textAlign: { xs: "center", md: "left" },
          marginLeft: { xs: 3, sm: 10 },
          position: 'relative', 
          '&:after': { 
              content: '""',
              position: 'absolute',
              bottom: -10, 
              left: '0px',
              width: '22%', 
              borderBottom: `10px solid ${underlineColor}`,
              transition: 'width .3s',
          }
        }}
      >
        Journey
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem", lg: "1.75rem" },
          paddingTop: 4,
          paddingBottom: 5,
          marginLeft: { xs: 3, sm: 10 },
          textAlign: { xs: "center", md: "left" }, 
        }}
      >
        From Mexico's finest robotics, we bring a legacy of autonomy and innovation to the global stage.
      </Typography>
      <Box sx={{ position: 'relative', width: '100%' }}>
        {slides.map((step, index) => (
          <Box key={step.label} sx={{ display: index === activeStep ? 'block' : 'none', transition: 'opacity 0.5s ease-in-out' }}>
            <ImageContainer>
              <StyledImage src={step.imgPath} alt={step.label} />
            </ImageContainer>
          </Box>
        ))}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          {slides.map((step, index) => (
            <Indicator key={step.label} active={index === activeStep} />
          ))}
        </Box>
        <IconButton onClick={handleBack} sx={{ position: 'absolute', top: '50%', left: 16, transform: 'translateY(-50%)', bgcolor: '#1C44F1', color: 'white', '&:hover': { bgcolor: '#1634a2' }, zIndex: 1 }}>
          <ArrowBackIosNewIcon />
        </IconButton>
        <IconButton onClick={handleNext} sx={{ position: 'absolute', top: '50%', right: 16, transform: 'translateY(-50%)', bgcolor: '#1C44F1', color: 'white', '&:hover': { bgcolor: '#1634a2' }, zIndex: 1 }}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

















