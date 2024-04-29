import React, { useState, useEffect } from "react";
import { Box, CircularProgress } from "@mui/material";
import { motion } from "framer-motion";
import Menu from "../components/Menu/Menu";
import Footer from "../components/Footer/Footer";
import Header3 from "../components/Header3/Header3";
import A11 from "../assets/images/A11.webp";
import Quote from "../components/Quote/Quote";
import Header2 from "../components/Header2/Header2";
import Video from "../components/Video/Video";
import VisionText from "../components/VisionText/VisionText";
import ImageGrid from "../components/ImageGrid/ImageGrid";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Raleway", "sans-serif"].join(","),
  },
});

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Vision() {
  const [isLoading, setIsLoading] = useState(true);

  const images = [
    {
      id: 1,
      className: "md:col-span-2",
      thumbnail:
        "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      className: "md:col-span-1",
      thumbnail:
        "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      className: "md:col-span-1",
      thumbnail:
        "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      className: "md:col-span-2",
      thumbnail:
        "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

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
    <ThemeProvider theme={theme}>
      <Menu />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        <Header3
          mainTitle="Automate"
          subTitle="the"
          bodyText="Future"
          description="Step into the future with ORZA where advanced sensors and intelligent algorithms reclaim billions of hours for humanity. We're not just automating tasks; we're enhancing lives, making the inconceivable today an intuitive reality tomorrow."
        />
      </motion.div>
      <Box
        sx={{
          p: { xs: 2, sm: 5, md: 5 },
          width: "100%",
          overflow: "hidden",
          boxSizing: "border-box",
          borderRadius: "20px",
        }}
      >
        <img
          src={A11}
          alt="A11"
          style={{
            width: "100%",
            height: "auto",
            maxWidth: "100%",
            display: "block",
            maxHeight: "600px",
            borderRadius: "20px",
          }}
        />
      </Box>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        <Quote />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        <Header2
          title="ORZA's"
          title3="mission & vision"
          text1="ORZA is dedicated to revolutionizing industrial automation by pioneering advanced technological solutions. Our mission is to empower businesses globally through smart integration of cutting-edge algorithms and systems, driving sustainable growth and transformative progress in every sector we touch. We commit to continuously evolving our approach to meet and exceed the changing needs of industries worldwide."
          text2="Our vision is to set the global standard for industrial automation, striving towards a future where our technology seamlessly integrates into every facet of human endeavor, enhancing efficiency and enabling unlimited potential. At ORZA, we envision a world where our innovations perpetually push the boundaries of what is possible, guiding us towards an ever-expanding horizon of discovery and excellence in automation."
          underlineColor="#1c44f1"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        <Video />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        <VisionText />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        <ImageGrid images={images} />
      </motion.div>
      <Footer visionText="Journey" visionHref="/journey" />
    </ThemeProvider>
  );
}

export default Vision;
