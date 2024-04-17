"use client";
import React from "react";

const LayoutGrid = ({ cards }) => {
  return (
    <div
      className=" grid grid-cols-1 md:grid-cols-3 mx-auto gap-4 relative"
      style={{
        height: "90vh",
        paddingRight: "50px",
        paddingLeft: "50px",
        paddingTop: "30px",
      }}
    >
      {cards.map((card, i) => (
        <div key={i} className={card.className}>
          <div
            className={
              "relative overflow-hidden bg-white rounded-[20px] h-full w-full"
            }
          >
            <BlurImage card={card} />
          </div>
        </div>
      ))}
    </div>
  );
};

const BlurImage = ({ card }) => {
  const [loaded, setLoaded] = React.useState(false);
  return (
    <img
      src={card.thumbnail}
      height="500"
      width="500"
      onLoad={() => setLoaded(true)}
      className={
        "object-cover object-top absolute inset-0 h-full w-full transition duration-200 " +
        (loaded ? "blur-none" : "blur-md")
      }
      alt="thumbnail"
    />
  );
};

export default LayoutGrid;
