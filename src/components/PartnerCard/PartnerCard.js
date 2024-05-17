import React from "react";
import { HoverEffect } from "../HoverEffect/HoverEffect"; // Import HoverEffect correctly
import nvidiaLogo from "../../assets/home/nvidia.png";
import danfossLogo from "../../assets/home/danfoss.png";
import limserLogo from "../../assets/home/limser.png";
import { Typography } from "@mui/material";

function PartnerCard() {
  return (
    <div
      className="max-w-5xl mx-auto px-3"
      style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          textAlign: "center",
          fontSize: { xs: "20px", sm: "20px", md: "30px" },
          color: "#1B44F1",
          fontWeight: "bold",
          padding: 0,
        }}
      >
        Our Partners
      </Typography>

      <HoverEffect items={projects} />
    </div>
  );
}

const projects = [
  {
    titleImage: nvidiaLogo,
    description:
      "NVIDIA leads in AI and computing, advancing robotics with innovative GPU technology that enhances capabilities and transforms the industry.",
    link: "https://www.nvidia.com/en-us/industries/robotics/",
  },
  {
    titleImage: danfossLogo,
    description:
      "Danfoss engineers solutions for climate and energy efficiency, specializing in refrigeration, air conditioning, and more, promoting sustainable technologies.",
    link: "https://www.danfoss.com/es-mx/ ",
  },
  {
    titleImage: limserLogo,
    description:
      "Limser Cranes provides robust crane systems and services, focusing on safety and operational efficiency in various industrial applications.",
    link: "https://www.limsercranes.com/",
  },
];
export default PartnerCard; // Export PartnerCard as default
export { projects }; // Also export projects if needed
