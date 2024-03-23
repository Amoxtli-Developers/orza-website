import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TeamCard from "../TeamCard/TeamCard";
import "./TeamCarousel.css"; // Make sure to import the CSS file

const teamMembers = [
  {
    id: 1,
    title: "Member 1",
    description: "Description for member 1",
    image: "/static/images/cards/member1.jpg",
  },
  {
    id: 2,
    title: "Member 2",
    description: "Description for member 2",
    image: "/static/images/cards/member2.jpg",
  },
  {
    id: 3,
    title: "Member 3",
    description: "Description for member 3",
    image: "/static/images/cards/member2.jpg",
  },
  {
    id: 4,
    title: "Member 4",
    description: "Description for member 4",
    image: "/static/images/cards/member2.jpg",
  },
  {
    id: 5,
    title: "Member 5",
    description: "Description for member 5",
    image: "/static/images/cards/member2.jpg",
  },
];
export default function TeamCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true, // this is crucial for the focus effect
    centerPadding: "60px", // adjust this as needed for your design
    focusOnSelect: true, // this allows clicking a slide to focus it
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true, // ensure center mode is active for all breakpoints
          centerPadding: "0", // adjust the padding for smaller screens
        },
      },
    ],
  };

  return (
    <div style={{ padding: "0 60px" }}>
      <Slider {...settings}>
        {teamMembers.map((member, index) => (
          <div key={index}>
            <TeamCard
              image={member.image}
              title={member.title}
              description={member.description}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
