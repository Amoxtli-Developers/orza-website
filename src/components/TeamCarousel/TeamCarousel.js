import React from "react";
import Slider from "react-slick";
import TeamCard from "../TeamCard/TeamCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TeamCarousel.css";
import { styled } from "@mui/system";
import { Grid } from "@mui/material";

export const TeamCarousel = () => {
  const StyledBox = styled("div")({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });
  const teamMembers = [
    {
      image: "https://media.istockphoto.com/id/931643150/vector/picture-icon.jpg?s=612x612&w=0&k=20&c=St-gpRn58eIa8EDAHpn_yO4CZZAnGD6wKpln9l3Z3Ok=",
      title: "Member 1",
      description: "This is a description for member 1.",
    },
    {
      image: "https://media.istockphoto.com/id/931643150/vector/picture-icon.jpg?s=612x612&w=0&k=20&c=St-gpRn58eIa8EDAHpn_yO4CZZAnGD6wKpln9l3Z3Ok=",
      title: "Member 2",
      description: "This is a description for member 2.",
    },
    {
      image: "https://media.istockphoto.com/id/931643150/vector/picture-icon.jpg?s=612x612&w=0&k=20&c=St-gpRn58eIa8EDAHpn_yO4CZZAnGD6wKpln9l3Z3Ok=",
      title: "Member 2",
      description: "This is a description for member 2.",
    },
    {
      image: "https://media.istockphoto.com/id/931643150/vector/picture-icon.jpg?s=612x612&w=0&k=20&c=St-gpRn58eIa8EDAHpn_yO4CZZAnGD6wKpln9l3Z3Ok=",
      title: "Member 2",
      description: "This is a description for member 2.",
    },
    {
      image: "https://media.istockphoto.com/id/931643150/vector/picture-icon.jpg?s=612x612&w=0&k=20&c=St-gpRn58eIa8EDAHpn_yO4CZZAnGD6wKpln9l3Z3Ok=",
      title: "Member 2",
      description: "This is a description for member 2.",
    },
    {
      image: "https://media.istockphoto.com/id/931643150/vector/picture-icon.jpg?s=612x612&w=0&k=20&c=St-gpRn58eIa8EDAHpn_yO4CZZAnGD6wKpln9l3Z3Ok=",
      title: "Member 2",
      description: "This is a description for member 2.",
    },
  ];
  
  // Añadir estado para identificar el índice del slide central
  const [centerSlide, setCenterSlide] = React.useState(0);

  // Configuraciones para react-slick
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
    beforeChange: (current, next) => {
      // Si 'slidesToShow' es 3, entonces el slide del centro es 'next + 1'
      const centerIndex = next + 1; // Ajusta esto según cómo 'react-slick' calcula tu índice actual
      setCenterSlide(centerIndex);
    },
  };

  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      sx={{ padding: { xs: 2, sm: 5, md: 10 } }}
    >
      <Slider {...settings}>
        {teamMembers.map((member, index) => (
          <div className="slide-container" key={index}>
            {/* Aplicar estilos condicionalmente para la tarjeta central */}
            <StyledBox
              style={{
                transform: centerSlide === index ? 'scale(1.1)' : 'scale(1)',
                transition: 'transform 0.3s',
              }}
            >
              <TeamCard
                image={member.image}
                title={member.title}
                description={member.description}
              />
            </StyledBox>
          </div>
        ))}
      </Slider>
    </Grid>
  );
};