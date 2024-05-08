"use client";
import React from "react";

const LayoutGrid = ({ cards }) => {
  return (
    <div
      className=" grid grid-cols-1 md:grid-cols-3 mx-auto gap-4 relative"
      style={{
        height: "100vh",
        paddingRight: "50px",
        paddingLeft: "50px",
        paddingTop: "30px",
        paddingBottom: "50px",
      }}
    >
      {cards.map((card, i) => (
        <div key={i} className={card.className}>
          <div
            className={
              "relative overflow-hidden bg-white rounded-[20px] h-full w-full"
            }
            style={{ objectFit: "cover" }}
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
      height="1000"
      width="500"
      onLoad={() => setLoaded(true)}
      className={
        "absolute h-full w-full transition duration-200 " +
        (loaded ? "blur-none" : "blur-md")
      }
      alt="thumbnail"
    />
  );
};

export default LayoutGrid;
