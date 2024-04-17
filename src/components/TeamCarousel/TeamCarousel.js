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
      title: "Human Machine interaction security systems",
      description: "Description for Human Machine interaction security systems",
      imageUrl: A7,
    },
    {
      image: A8,
      title: "Integral Service: HMI Designs",
      description: "Description for Integral Service: HMI Designs",
      imageUrl: A8,
    },
    {
      image: A9,
      title: "Visual Control systems",
      description: "Description for Visual Control systems",
      imageUrl: A9,
    },
    {
      image: A10,
      title: "Local Positioning System",
      description: "Description for Local Positioning System",
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
      sx={{ overflow: "hidden", paddingBottom: { xs: 2, sm: 5, md: 7 } }}
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
