import React, { useState, useEffect } from "react";
import Menu from "../components/Menu/Menu";
import Header from "../components/Header/Header";
import Header2 from "../components/Header2/Header2";
import { Box, CircularProgress } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import A11 from "../assets/images/A11.webp";
import { TeamCarousel } from "../components/TeamCarousel/TeamCarousel";
import Title from "../components/Title/Title";
import Footer from "../components/Footer/Footer";
import { Technologies } from "../components/Technologies/Technolgies";
import SolutionSlider from "../components/SolutionSlider/SolutionSlider";
import ClientCard from "../components/ClientCard/ClientCard";
import { CtaTex } from "../components/Cta/CtaTex.js";

const theme = createTheme({
  typography: {
    fontFamily: ["Raleway", "sans-serif"].join(","),
  },
});

// Animation variants for framer-motion
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { ref: refHeader, inView: inViewHeader } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: refImage, inView: inViewImage } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: refHeader2, inView: inViewHeader2 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: refTeamCarousel, inView: inViewTeamCarousel } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: refVision, inView: inViewVision } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // simulate a loading time of 3 seconds
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
        ref={refHeader}
        initial="hidden"
        animate={inViewHeader ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <Header />
      </motion.div>
      <motion.div
        ref={refImage}
        initial="hidden"
        animate={inViewImage ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <img
          src={A11}
          alt="A11"
          style={{ width: "100%", height: "auto"}}
        />
      </motion.div>
      <motion.div
        ref={refHeader2}
        initial="hidden"
        animate={inViewHeader2 ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <Header2
          title="Revolutionizing"
          text1="We embark on this mission with a singular focus: to redefine the landscape of industrial automation. By blending the power of intelligent algorithms with state-of-the-art technologies in vision, mapping, localization, LiDAR, and object detection,"
          text2="we're setting new benchmarks for productivity, efficiency, and safety. Our robots are more than machines—they are harbingers of an industrial renaissance."
          underlineColor="#1c44f1"
        />
      </motion.div>
      <motion.div>
        <ClientCard />
      </motion.div>
      <motion.div>
        <SolutionSlider />
      </motion.div>
      <Title name={"Services"} />
      <motion.div
        ref={refTeamCarousel}
        initial="hidden"
        animate={inViewTeamCarousel ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <TeamCarousel />
      </motion.div>
      <Title name={"ORZA Tech"} />
      <motion.div
        ref={refVision}
        initial="hidden"
        animate={inViewVision ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <Technologies />
      </motion.div>
      <CtaTex />
      <Footer visionText="Vision" visionHref="/vision" />
    </ThemeProvider>
  );
}

export default Home;
