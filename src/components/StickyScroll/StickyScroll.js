import React, { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);

        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }

        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <motion.div
      className="h-[20rem] w-full overflow-y-auto flex justify-center rounded-md p-5"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-5xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                  fontSize: activeCard === index ? "40px" : "30px",
                }}
                className="text-customBlue font-bold"
              >
                {item.title}
              </motion.h2>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="max-w-sm mt-4"
              ></motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                  fontSize: activeCard === index ? "20px" : "16px",
                }}
                className="text-black-500 mt-4 text-justify"
              >
                {item.description}
              </motion.p>
              <Link to={`/tech-description/${index}`}>
                <Button
                  sx={{
                    width: 160, // w-40 -> 40 x 4 = 160px
                    height: 40, // h-10 -> 10 x 4 = 40px
                    borderRadius: "50px", // rounded-[50px]
                    backgroundColor: "#1c44f1", // bg-customBlue -> Define customBlue in your theme
                    border: 1,
                    borderColor: "transparent", // border-transparent
                    color: "white", // text-white
                    fontSize: "0.875rem", // text-sm -> Tailwind's sm corresponds to ~14px
                    fontWeight: "bold", // font-bold
                    textTransform: "none", // uppercase
                    marginTop: 3,
                    "&:hover": {
                      boxShadow: "0 0 20px 5px rgba(0, 0, 0, 0.2)", // Add glow effect on hover
                      backgroundColor: "#1c44f1", // Hover background color
                    },
                  }}
                >
                  Read more
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <motion.div
        className={
          "hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden " +
          contentClassName
        }
      >
        {content[activeCard].content ?? null}
      </motion.div>
    </motion.div>
  );
};

export default StickyScroll;
