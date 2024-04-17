import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { useTheme } from "@mui/material/styles";

export const TextGenerateEffect = ({ words, className }) => {
  const theme = useTheme();
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderWords = () => {
    return (
      <motion.div ref={scope} style={{ textAlign: "justify" }}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white text-black opacity-0"
              style={{
                fontSize: theme.breakpoints.values.md > 600 ? "2rem" : "1.5rem",
              }}
              // Set font size to 2rem for md and above, and 1.5rem for xs to sm
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={`font-bold ${className}`}>
      <div className="mt-4">
        <div className="dark:text-white text-black text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
