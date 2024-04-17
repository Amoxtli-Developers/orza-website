import React from "react";
import { CardBody, CardContainer, CardItem } from "../ServiceCard/ServiceCard";

export function ThreeDCardDemo({ title, description, imageUrl }) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card  w-auto sm:w-[30rem] h-96 rounded-xl p-6  flex flex-col items-center justify-center">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-customBlue dark:text-customBlue text-center"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-black-500 text-sm max-w-sm mt-2 dark:text-black-300 text-center"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={imageUrl}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
