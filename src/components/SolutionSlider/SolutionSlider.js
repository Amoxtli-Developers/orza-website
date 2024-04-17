import React from "react";
import Slider from "react-slick";
import Solutions from "../Solutions/Solutions";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTheme } from "@mui/material/styles"; // Import useTheme hook
import "./SolutionSlider.css"; // Make sure to import the CSS file

const SolutionsSlider = () => {
  const theme = useTheme(); // Get the theme object

  // Dummy solutions data
  const solutions = [
    {
      imageUrl: "https://via.placeholder.com/300",
      title: "Solution 1",
      description: "Description for Solution 1",
    },
    {
      imageUrl: "https://via.placeholder.com/300",
      title: "Solution 2",
      description: "Description for Solution 2",
    },
    {
      imageUrl: "https://via.placeholder.com/300",
      title: "Solution 3",
      description: "Description for Solution 3",
    },
    // Add more solutions as needed
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.sm, // Use theme breakpoint values
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: theme.breakpoints.values.md, // Use theme breakpoint values
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className="slider-container"
      style={{ padding: `0 ${theme.spacing(2)}px ${theme.spacing(5)}px` }}
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
