import React, { useState, useEffect } from "react";
import { Box, CircularProgress, useTheme, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import Menu from "../components/Menu/Menu";
import Footer from "../components/Footer/Footer";
import TimeCard from "../components/TimeCard/TimeCard";
import Header4 from "../components/Header4/Header4";
import { TracingBeam } from "../components/TracingBeam/TracingBeam";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme2 = createTheme({
  typography: {
    fontFamily: ["Raleway", "sans-serif"].join(","),
  },
});

function Journey() {
  const [isLoading, setIsLoading] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const timeCardData = [
    {
      year: "2020",
      title: "First Event",
      description: "Description for the first event.",
      images: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
      ],
    },
    {
      year: "2020",
      title: "First Event",
      description: "Description for the first event.",
      images: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
      ],
    },
    {
      year: "2020",
      title: "First Event",
      description: "Description for the first event.",
      images: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
      ],
    },
    {
      year: "2020",
      title: "First Event",
      description: "Description for the first event.",
      images: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
      ],
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simulate a loading time of 3 seconds
    return () => clearTimeout(timer);
  }, []);

  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress sx={{ color: "#1c44f1" }} />
      </Box>
    );
  }

  return (
    <ThemeProvider theme={theme2}>
      <Menu />
      <motion.div
        initial="offscreen"
        animate="onscreen"
        variants={cardVariants}
      >
        <Header4 />
      </motion.div>
      <div>
        {!isMobile ? (
          <TracingBeam>
            {timeCardData.map((card, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
              >
                <TimeCard {...card} />
              </motion.div>
            ))}
          </TracingBeam>
        ) : (
          timeCardData.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
            >
              <TimeCard {...card} />
            </motion.div>
          ))
        )}
      </div>
      <Footer visionText="Join Us" visionHref="/joinus" />
    </ThemeProvider>
  );
}

export default Journey;
