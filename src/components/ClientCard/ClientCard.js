import React from "react";
import { HoverEffect } from "../HoverEffect/HoverEffect"; // Import HoverEffect correctly
import terniumLogo from "../../assets/home/ternium.png";
import harscoLogo from "../../assets/home/harsco.png";
import limserLogo from "../../assets/home/limser.png";
import { Typography } from "@mui/material";

function ClientCard() {
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
        Our Clients
      </Typography>
      <HoverEffect items={projects} />
    </div>
  );
}

const projects = [
  {
    titleImage: terniumLogo,
    description:
      "Ternium is a major steel producer in the Americas, serving the manufacturing and construction sectors.",
    link: "https://mx.ternium.com/es",
  },
  {
    titleImage: harscoLogo,
    description:
      "A global leader in environmental services and products, particularly for the steel and metals industries.",
    link: "https://www.harsco-environmental.com",
  },
  {
    titleImage: limserLogo,
    description:
      "Limser Cranes provides robust crane systems and services, focusing on safety and operational efficiency in various industrial applications.",
    link: "https://www.limsercranes.com/",
  },
];
export default ClientCard; // Export ClientCard as default
export { projects }; // Also export projects if needed
