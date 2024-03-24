import React from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import Box from '@mui/material/Box';

import './Journey.css';

const Journey = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = 6; 

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className="journey-container">
      <div className="journey-header">
        <Box sx={{ flex: 1 }}>
          <Typography variant="h3" gutterBottom component="div" align="left">
              Journey 
          </Typography>
          <Box sx={{ mb: 2, bgcolor: '#1C44F1', height: '8px', width: '50%' }}></Box>
        </Box>
      </div>
      <div className="journey-img-container">
        <img className="journey-img" src={`/img/step${activeStep}.jpg`} alt={`Journey step ${activeStep}`} />
      </div>
      <MobileStepper
        variant="dots"
        steps={maxSteps}
        position="bottom"
        activeStep={activeStep}
        sx={{ 
          flexGrow: 1,
          '& .MuiMobileStepper-dots': {
            flexGrow: 1,
            justifyContent: 'center', 
          },
          '& .MuiButtonBase-root': {
            position: 'absolute', 
          },
          justifyContent: 'space-between', 
        }}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1} sx={{ right: 0 }}>
        
            {theme.direction === 'rtl' ? <ArrowBackIosNewOutlinedIcon /> : <ArrowForwardIosOutlinedIcon />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0} sx={{ left: 0 }}>
            {theme.direction === 'rtl' ? <ArrowForwardIosOutlinedIcon /> : <ArrowBackIosNewOutlinedIcon />}
          </Button>
        }
      />
    </div>
  );
};

export default Journey;

