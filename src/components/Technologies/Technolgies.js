"use client";
import React from "react";
import StickyScroll from "../../components/StickyScroll/StickyScroll.js";
import A1 from "../../assets/technologies/A1.png";
import A2 from "../../assets/technologies/A2.png";
import A4 from "../../assets/technologies/A4.png";
import A5 from "../../assets/technologies/A5.png";
import A6 from "../../assets/technologies/A6.png";
import A7 from "../../assets/technologies/A7.png";

const content = [
  {
    title: "SDV Vehículo autónomo",
    description:
      "Our engineers have embarked on a journey of innovation, forging collaborations with prestigious academic institutions such as Tecnológico de Monterrey. Alongside industry powerhouse ZF, we've undertaken the challenge of implementing cutting-edge algorithms within the realm of autonomous technology. This endeavor transcends mere functionality; it's about redefining the future of transportation.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <img
          src={A1}
          alt="SDV Vehículo autónomo 1"
          className="w-full h-auto"
          style={{ maxWidth: "80%" }}
        />
      </div>
    ),
  },
  {
    title: "Hook - Vehículo autónomo",
    description:
      "This design utilizes the Autoware framework as a foundational base for autonomous algorithms, testing how vehicles with high torque and medium velocity respond to control inputs. It features bi-directional movement, allowing either the front or the back wheels to drive the vehicle. This innovation necessitates new motion matrices, for instance, enabling diagonal displacement.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <img
          src={A2}
          alt="Collaborative Editing 2"
          className="w-full h-auto"
          style={{ maxWidth: "80%" }}
        />
      </div>
    ),
  },

  {
    title: "F1:10 Hook - Vehículo autónomo ",
    description:
      "In line with the MIT challenge for autonomous F1:10 racing cars, our engineers have developed this vehicle to push the boundaries of autonomous driving algorithms. This includes enhancing the speed of reaction and the complexity of control models.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <img
          src={A4}
          alt="Collaborative Editing 4"
          className="w-full h-auto"
          style={{ maxWidth: "80%" }}
        />
      </div>
    ),
  },
  {
    title: "UUV - Submarino",
    description:
      "Inspired by the challenge of RoboSub, organized by Robonation, our Unmanned Underwater Vehicle (UUV) project dives into the depths of innovation. Collaborating with esteemed institutions like Southwest Research Institute and partnering with industry leader Blue Robotics, our UUV boasts a sleek design optimized for maneuverability and efficiency. Powered by cutting-edge autonomy algorithms, our submarine navigates through complex underwater tasks with precision and agility, pushing the boundaries of underwater robotics.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <img
          src={A5}
          alt="Collaborative Editing 4"
          className="w-full h-auto"
          style={{ maxWidth: "80%" }}
        />
      </div>
    ),
  },
  {
    title: "USV - Barco",
    description:
      "Embarking on the RoboBoat challenge, hosted by Robonation, our Unmanned Surface Vehicle (USV) project sets sail towards excellence. Our USV showcases a robust hull equipped with state-of-the-art sensors and communication systems. From autonomous navigation to obstacle avoidance, our unmanned vessel demonstrates remarkable capabilities in maritime autonomy, revolutionizing tasks traditionally performed by manned ships.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <img
          src={A6}
          alt="Collaborative Editing 4"
          className="w-full h-auto"
          style={{ maxWidth: "80%" }}
        />
      </div>
    ),
  },
  {
    title: "UAV - Dron",
    description:
      "Taking on the dual challenges of Drone Delivery and Drone Swarm, our Unmanned Aerial Vehicle (UAV) project soars to new heights. Our UAVs showcase exceptional versatility and reliability. Whether it's delivering packages with precision or orchestrating intricate aerial formations, our drones redefine the possibilities of autonomous flight, shaping the future of aerial robotics.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <img
          src={A7}
          alt="Collaborative Editing 4"
          className="w-full h-auto"
          style={{ maxWidth: "80%" }}
        />
      </div>
    ),
  },
];

export function Technologies() {
  return (
    <div className="p-5">
      <StickyScroll content={content} />
    </div>
  );
}
