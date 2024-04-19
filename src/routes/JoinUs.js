import React, { useState, useEffect } from "react";
import Menu from "../components/Menu/Menu";
import { Box, CircularProgress } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "../components/Footer/Footer";
import Header3 from "../components/Header3/Header3";
import { motion } from "framer-motion";
import A11 from "../assets/images/A11.webp";
import OrzaTeamForm from "../components/OrzaTeamForm/OrzaTeamForm";
import OrzaPartnerForm from "../components/OrzaPartnerForm/OrzaPartnerForm";
import OrzaClientForm from "../components/OrzaClientForm/OrzaClientForm";
import Contact from "../components/Contact/Contact";

const theme = createTheme({
  typography: {
    fontFamily: ["Raleway", "sans-serif"].join(","),
  },
});

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const slideUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const slideLeftVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const slideRightVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

function JoinUs() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simulate a loading time of 3 seconds
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
          mainTitle="Revolutionizing"
          subTitle="Industrial"
          bodyText="Robotics"
          description="Step into the future with ORZA where advanced sensors and intelligent algorithms reclaim billions of hours for humanity. We're not just automating tasks; we're enhancing lives, making the inconceivable today an intuitive reality tomorrow."
        />
      </motion.div>
      <motion.div
        variants={slideUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
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
      </motion.div>
      <motion.div
        variants={slideLeftVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <OrzaTeamForm />
      </motion.div>
      <motion.div
        variants={slideRightVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <OrzaPartnerForm />
      </motion.div>
      <motion.div
        variants={slideUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <OrzaClientForm />
      </motion.div>
      <motion.div
        variants={slideLeftVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Contact />
      </motion.div>
      <Footer visionText="Home" visionHref="/" />
    </ThemeProvider>
  );
}

export default JoinUs;
