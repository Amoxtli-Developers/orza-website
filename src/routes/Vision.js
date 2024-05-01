import React, { useState, useEffect } from "react";
import { Box, CircularProgress } from "@mui/material";
import { motion } from "framer-motion";
import Menu from "../components/Menu/Menu";
import Footer from "../components/Footer/Footer";
import Header3 from "../components/Header3/Header3";
import A1 from "../assets/vision/A1.webp";
import A2 from "../assets/vision/A2.webp";
import A3 from "../assets/vision/A3.webp";
import A4 from "../assets/vision/A4.webp";
import A5 from "../assets/vision/A5.webp";
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
      thumbnail: A2,
    },
    {
      id: 2,
      className: "md:col-span-1",
      thumbnail: A3,
    },
    {
      id: 3,
      className: "md:col-span-1",
      thumbnail: A4,
    },
    {
      id: 4,
      className: "md:col-span-2",
      thumbnail: A5,
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
          description="Embodies ORZA's mission & vision to transform industries through advanced automation technologies. We develop innovative solutions that enhance efficiency and unlock new growth possibilities, shaping the future of automation today."
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
          src={A1}
          alt="A11"
          style={{
            width: "100%",
            height: "auto",
            maxWidth: "100%",
            display: "block",
            maxHeight: "600px",
            borderRadius: "20px",
            objectFit: "cover",
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
          title2=""
          title3="mission & vision"
          text1="Our <strong style='color: #1c44f1;'>mission</strong> at ORZA is to revolutionize industrial automation by pioneering advanced technological solutions. We are dedicated to empowering businesses globally through the smart integration of cutting-edge algorithms and systems, driving sustainable growth and transformative progress in every sector we touch. We commit to continuously evolving our approach to meet and exceed the changing needs of industries worldwide."
          text2="Our <strong style='color: #1c44f1;'>vision</strong> is to set the global standard for industrial automation, striving towards a future where our technology seamlessly integrates into every facet of human endeavor, enhancing efficiency and enabling unlimited potential. At ORZA, we envision a world where our innovations perpetually push the boundaries of what is possible, guiding us towards an ever-expanding horizon of discovery and excellence in automation."
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
