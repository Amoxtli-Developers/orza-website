import React from "react";
import Slider from "react-slick";
import TeamCard from "../TeamCard/TeamCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TeamCarousel.css";
import { styled } from "@mui/system";

export const TeamCarousel = () => {
  const StyledBox = styled("div")({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });
  const teamMembers = [
    {
      image: "path/to/image1.jpg",
      title: "Member 1",
      description: "This is a description for member 1.",
    },
    {
      image: "path/to/image2.jpg",
      title: "Member 2",
      description: "This is a description for member 2.",
    },
    {
      image: "path/to/image2.jpg",
      title: "Member 2",
      description: "This is a description for member 2.",
    },
    {
      image: "path/to/image2.jpg",
      title: "Member 2",
      description: "This is a description for member 2.",
    },
    {
      image: "path/to/image2.jpg",
      title: "Member 2",
      description: "This is a description for member 2.",
    },
    {
      image: "path/to/image2.jpg",
      title: "Member 2",
      description: "This is a description for member 2.",
    },
  ];

  // Configuraciones para react-slick
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true, // Habilita el modo de centrado
    autoplay: true,
    focusOnSelect: true,
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
    <div className="slider-container">
      <Slider {...settings}>
        {teamMembers.map((member, index) => (
          <StyledBox key={index}>
            <TeamCard
              image={member.image}
              title={member.title}
              description={member.description}
            />
          </StyledBox>
        ))}
      </Slider>
    </div>
  );
};
