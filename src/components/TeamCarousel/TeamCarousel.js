import React from "react";
import Slider from "react-slick";
import { ThreeDCardDemo } from "../ThreeDCardDemo/ThreeDCardDemo";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TeamCarousel.css";
import { styled } from "@mui/system";
import { Grid } from "@mui/material";

import A7 from "../../assets/images/A7.jpeg";
import A8 from "../../assets/images/A8.jpeg";
import A9 from "../../assets/images/A9.jpeg";
import A10 from "../../assets/images/A10.png";

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
        "Creation of detailed, real-time maps for dynamic environments, enabling precise localization and path planning for automated systems.",
      imageUrl: A7,
    },
    {
      image: A8,
      title: "Autonomous Industrial Vehicles ",
      description:
        "Creation of detailed, real-time maps for dynamic environments, enabling precise localization and path planning for automated systems.",
      imageUrl: A8,
    },
    {
      image: A9,
      title: "Autonomous Head Cranes",
      description:
        "Creation of detailed, real-time maps for dynamic environments, enabling precise localization and path planning for automated systems.",
      imageUrl: A9,
    },
    {
      image: A10,
      title: "Anti Sway for Outside environments",
      description:
        "Creation of detailed, real-time maps for dynamic environments, enabling precise localization and path planning for automated systems.",
      imageUrl: A10,
    },
    {
      image: A10,
      title: "Personalized Control Systems Design",
      description:
        "Creation of detailed, real-time maps for dynamic environments, enabling precise localization and path planning for automated systems.",
      imageUrl: A10,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
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
