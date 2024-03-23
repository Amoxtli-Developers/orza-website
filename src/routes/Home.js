import React from "react";
import Menu from "../components/Menu/Menu";
import Header from "../components/Header/Header";
import Header2 from "../components/Header2/Header2";
import { Box } from "@mui/material";

import placeholderA11 from "../assets/images/placeholder-a11.jpeg";
import { TeamCarousel } from '../components/TeamCarousel/TeamCarousel';

import Title from "../components/Title/Title";
import Footer from "../components/Footer/Footer";

function Home() {

  return (
    <>
      <Menu />
      <Header />
      <Box
        sx={{
          p: { xs: 2, sm: 5, md: 10 }, // Responsive padding
          width: "100%",
          overflow: "hidden",
          boxSizing: "border-box",
          borderRadius: "20px",
        }}
      >
        <img
          src={placeholderA11}
          alt="a11"
          style={{
            width: "100%",
            height: "auto",
            maxWidth: "100%", // ensure it's not larger than the container
            display: "block", // remove any extra space below the image
            maxHeight: "490px",
            borderRadius: "20px",
          }}
        />
      </Box>

      <Header2 />
      <Title />
      <TeamCarousel  />
      <Footer />
    </>
  );
}

export default Home;
