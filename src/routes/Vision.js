import React, { useState, useEffect } from "react";
import Menu from "../components/Menu/Menu";
import { Box, CircularProgress } from "@mui/material";
import Footer from "../components/Footer/Footer";
import Header3 from "../components/Header3/Header3";
import A11 from "../assets/images/A11.webp";
import Quote from "../components/Quote/Quote";
import Header2 from "../components/Header2/Header2";
import Video from "../components/Video/Video";
import VisionText from "../components/VisionText/VisionText";
import ImageGrid from "../components/ImageGrid/ImageGrid";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

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
    <>
      <Menu />
      <Header3 />
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
      <Quote />
      <Header2
        title="Revolutionizing"
        text1="We embark on this mission with a singular focus: to redefine the landscape of industrial automation. By blending the power of intelligent algorithms with state-of-the-art technologies in vision, mapping, localization, LiDAR, and object detection,"
        text2="we're setting new benchmarks for productivity, efficiency, and safety. Our robots are more than machines—they are harbingers of an industrial renaissance."
        underlineColor="#1c44f1"
      />
      <Video />
      <VisionText />
      <ImageGrid />

      <Footer visionText="Journey" visionHref="/journey" />

    </>
  );
}

export default Home;
