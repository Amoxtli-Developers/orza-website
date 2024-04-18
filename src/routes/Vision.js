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
        <Header3 />
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
          title="Revolutionizing"
          text1="We embark on this mission with a singular focus: to redefine the landscape of industrial automation..."
          text2="Our robots are more than machines—they are harbingers of an industrial renaissance."
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
        <ImageGrid />
      </motion.div>
      <Footer visionText="Journey" visionHref="/journey" />
    </ThemeProvider>
  );
}

export default Vision;
