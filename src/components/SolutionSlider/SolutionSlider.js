import React from "react";
import Slider from "react-slick";
import Solutions from "../Solutions/Solutions";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTheme } from "@mui/material/styles";
import "./SolutionSlider.css";
import uma from "../../assets/solutions/uma.jpeg";
import la from "../../assets/solutions/la.webp";
import id from "../../assets/solutions/id.jpeg";

const SolutionsSlider = () => {
  const theme = useTheme(); // Get the theme object

  const solutions = [
    {
      imageUrl: uma,
      title: "Unitary Manufacturing Automation",
      description: "Description for Solution 1",
    },
    {
      imageUrl: la,
      title: "Logistics Automation",
      description: "Description for Solution 2",
    },
    {
      imageUrl: id,
      title: "Industrial Domotics",
      description: "Description for Solution 3",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.sm, // Adjusts when screen size is below 600px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, // Optionally hide arrows on smaller screens
          dots: true, // Show navigation dots on smaller screens
        },
      },
      {
        breakpoint: theme.breakpoints.values.md, // Adjusts when screen size is below 960px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true, // Show navigation dots for medium screens
        },
      },
    ],
  };

  return (
    <div
      className="slider-container"
      style={{
        padding: `${theme.spacing(2)}px ${theme.spacing(2)}px ${theme.spacing(
          5
        )}px`,
        maxWidth: "100vw", // Prevent horizontal scrolling
        overflow: "hidden", // Hide anything that goes out of the box
      }}
    >
      <Slider {...settings}>
        {solutions.map((solution, index) => (
          <div className="slide" key={index}>
            <Solutions {...solution} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SolutionsSlider;
