import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={classNames(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item?.link}
          target="_blank"
          rel="noreferrer"
          key={item?.link}
          className="relative group block p-2 group-hover:bg-customBlue dark:group-hover:bg-customBlue/[0.8] "
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-customBlue dark:bg-customBlue/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
          <CardTitle src={item.titleImage} />
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={classNames(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-white  border-transparent shadow-lg dark:border-transparent/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, src }) => {
  return (
    <img
      src={src}
      alt="Company Logo"
      className={classNames("h-12 w-auto mx-auto my-4", className)} // Customize size and margins as needed
    />
  );
};


export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={classNames(
        "mt-8 text-black dark:text-black tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
