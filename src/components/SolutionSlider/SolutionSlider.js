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

const PrevArrow = ({ onClick }) => (
  <div
    className="slick-prev"
    onClick={onClick}
    style={{
      position: "absolute",
      top: "50%",
      left: "100px",
      zIndex: 1,
      transform: "translate(0, -50%)",
    }}
  >

  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    className="slick-next"
    onClick={onClick}
    style={{
      position: "absolute",
      top: "50%",
      right: "100px",
      zIndex: 1,
      transform: "translate(0, -50%)",
      color: "#1c44f1", // Set the color of the icon
    }}
  >
  </div>
);


const SolutionsSlider = () => {
  const theme = useTheme(); // Get the theme object

  const solutions = [
    {
      imageUrl: uma,
      title: "Unitary Manufacturing Automation",
      description:
        "Unitary Automation (UA) is designed for selective automation of individual elements within a plant. By utilizing advanced AI and robotics algorithms, it minimizes disruption and investment risk, thereby making automation scalable for businesses of all sizes. What distinguishes our implementation of UA is its precision and adaptability, with cutting-edge AI ensuring our robotic systems can operate in complex environments. The benefits of UA are significant, including reduced upfront costs, accelerated return on investment, and a customizable blueprint for gradual automation. With Orza Tech's UA, a fully automated future is within reach.",
    },
    {
      imageUrl: la,
      title: "Logistics Automation",
      description:
        "Logistics Automation is an intelligent solution catering to a diverse group. It integrates various elements ranging from cranes moving raw material to containers storing objects. With the help of our Automatic Mobile Robots (AMRs), factories can achieve smart and coordinated product distribution. Additionally, our solution offers element classification, an intelligent detection system for substandard items, AMR integration into existing operations, and visual control systems for accident prevention. All these features contribute to a more efficient and safe logistic process.",
    },
    {
      imageUrl: id,
      title: "Industrial Domotics",
      description:
        "Industrial Domotics is a comprehensive solution for industrial control. It offers Lighting and Temperature Regulation, adjusting these parameters based on equipment needs and personnel density. The solution also includes Security and Access Control, integrating facial recognition, smart cards, biometrics, alarm systems, and video surveillance. Remote Monitoring and Telemetry allow real-time tracking of industrial processes, enabling remote management and data-driven decisions. Lastly, the solution integrates various systems into a unified platform, enhancing communication between equipment via the Industrial Internet of Things (IoT). It's a complete package for efficient industrial operation.",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, // Optionally hide arrows on smaller screens
          dots: true, // Show navigation dots on smaller screens
        },
      },
      {
        breakpoint: theme.breakpoints.values.md,
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
