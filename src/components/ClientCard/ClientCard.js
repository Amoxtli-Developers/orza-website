import React from "react";
import { HoverEffect } from "../HoverEffect/HoverEffect"; // Import HoverEffect correctly
import terniumLogo from "../../assets/home/ternium.png";
import harscoLogo from "../../assets/home/harsco.png";
import limserLogo from "../../assets/home/limser.png";

function ClientCard() {
  return (
    <div className="max-w-5xl mx-auto px-3">
      <HoverEffect items={projects} />
    </div>
  );
}

const projects = [
  {
    titleImage: terniumLogo,
    description: "A technology company that builds economic infrastructure for the internet.",
    link: "https://mx.ternium.com/es",
  },
  {
    titleImage: harscoLogo,
    description: "A global leader in environmental services and products, particularly for the steel and metals industries.",
    link: "https://www.harsco-environmental.com",
  },
  {
    titleImage: limserLogo,
    description: "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://www.limsercranes.com/",
  },
];
export default ClientCard; // Export ClientCard as default
export { projects }; // Also export projects if needed
