import React, { useState, useEffect } from "react";
import Menu from "../components/Menu/Menu";
import Header from "../components/Header/Header";
import Header2 from "../components/Header2/Header2";
import { Box, Slide, Fade, CircularProgress } from "@mui/material";
import A11 from "../assets/images/A11.webp";
import { TeamCarousel } from "../components/TeamCarousel/TeamCarousel";
import Title from "../components/Title/Title";
import Footer from "../components/Footer/Footer";
import { useInView } from "react-intersection-observer";
import Vision from "../components/Vision/Vision";
import Journey from "../components/Journey/Journey";

function Home() {
  const { ref: refHeader, inView: inViewHeader } = useInView({
    triggerOnce: true,
    threshold: 1,
  });
  const { ref: refImage, inView: inViewImage } = useInView({
    triggerOnce: true,
    threshold: 1,
  });
  const { ref: refHeader2, inView: inViewHeader2 } = useInView({
    triggerOnce: true,
    threshold: 1,
  });
  const { ref: refTitle, inView: inViewTitle } = useInView({
    triggerOnce: true,
    threshold: 1,
  });
  const { ref: refTeamCarousel, inView: inViewTeamCarousel } = useInView({
    triggerOnce: true,
    threshold: 1,
  });
  const { ref: refVision, inView: inViewVision } = useInView({
    triggerOnce: true,
    threshold: 1, // Adjust this threshold as needed
  });
  const { ref: refJourney, inView: inViewJourney } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust this threshold as needed
  });

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
      <div ref={refHeader} style={{ transition: "all 1s ease-in-out" }}>
        <Slide
          direction="down"
          in={inViewHeader}
          mountOnEnter
          unmountOnExit
          timeout={2000}
        >
          <div>
            <Header />
          </div>
        </Slide>
      </div>
      <div ref={refImage} style={{ transition: "all 1s ease-in-out" }}>
        <Fade in={inViewImage} timeout={3000}>
          <div>
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
          </div>
        </Fade>
      </div>
      <div ref={refHeader2} style={{ transition: "all 1s ease-in-out" }}>
        <Slide
          direction="left"
          mountOnEnter
          unmountOnExit
          in={inViewHeader2}
          timeout={3000}
        >
          <div>
            <Header2 />
          </div>
        </Slide>
      </div>
      <div ref={refTitle} style={{ transition: "all 1s ease-in-out" }}>
        <Slide
          direction="right"
          in={inViewTitle}
          timeout={3000}
          mountOnEnter
          unmountOnExit
        >
          <div>
            <Title />
          </div>
        </Slide>
      </div>
      <div ref={refTeamCarousel} style={{ transition: "all 1s ease-in-out" }}>
        <Slide
          direction="left"
          in={inViewTeamCarousel}
          mountOnEnter
          unmountOnExit
          timeout={3000}
        >
          <div>
            <TeamCarousel />
          </div>
        </Slide>
      </div>
      <div ref={refVision} style={{ transition: "all 1s ease-in-out" }}>
        <Fade in={inViewVision} timeout={2000}>
          <div>
            <Vision />
          </div>
        </Fade>
      </div>
      <div ref={refJourney} style={{ transition: "all 1s ease-in-out" }}>
        <Fade in={inViewJourney} timeout={1000}>
          <div>
            <Journey />
          </div>
        </Fade>
      </div>
      <Footer />
    </>
  );
}

export default Home;
