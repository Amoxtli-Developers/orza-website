import React from "react";
import Slider from "react-slick";
import { ThreeDCardDemo } from "../ThreeDCardDemo/ThreeDCardDemo";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TeamCarousel.css";
import { styled } from "@mui/system";
import { Grid } from "@mui/material";

import A7 from "../../assets/images/A7.png";
import A8 from "../../assets/images/A8.png";
import A9 from "../../assets/images/A9.png";
import A12 from "../../assets/images/A12.webp";
import A13 from "../../assets/images/A13.webp";

export const TeamCarousel = () => {
  const StyledBox = styled("div")({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });
  const teamMembers = [
    {
      image: A7,
      title: "Detailed maps for industry",
      description:
        "We create detailed, real-time maps for dynamic environments, enabling precise localization and path planning for automated systems.",
      imageUrl: A7,
    },
    {
      image: A8,
      title: "Autonomous Industrial Vehicles ",
      description:
        "We design, build, and implement autonomous industrial vehicles, ranging from small automated mobile robots (AMRs) to metallurgical transfer cars.",
      imageUrl: A8,
    },
    {
      image: A9,
      title: "Autonomous Head Cranes",
      description:
        "By implementing SLAM technologies, we ensure precise movements and decisions in load handling for efficient and secure operations.",
      imageUrl: A9,
    },
    {
      image: A12,
      title: "Anti Sway for Outside environments",
      description:
        "Our redundant control algorithms blend the power and precision of Back EMF systems with the versatility of Lidar Control Systems, guaranteeing excellent performance in rough environments that port cranes may encounter.",
      imageUrl: A12,
    },
    {
      image: A13,
      title: "Personalized Control Systems Design",
      description:
        "We cater to specific needs, from migrating algorithms into new electronic components to modeling client- specific needs and algorithm designs into the client's existing cranes and components.",
      imageUrl: A13,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1350,  // This breakpoint will apply to screens smaller than 1300px
        settings: {
          slidesToShow: 2, // Number of slides to show in screens smaller than 1300px
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  

  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      sx={{ overflow: "hidden" }}
      id="service"
    >
      <Slider {...settings}>
        {teamMembers.map((member, index) => (
          <div className="slide-container" key={index}>
            <StyledBox>
              <ThreeDCardDemo
                title={member.title}
                description={member.description}
                imageUrl={member.imageUrl}
              />
            </StyledBox>
          </div>
        ))}
      </Slider>
    </Grid>
  );
};
