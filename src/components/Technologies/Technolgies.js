"use client";
import React from "react";
import StickyScroll from "../../components/StickyScroll/StickyScroll.js";

const content = [
  {
    title: "SDV Vehículo autónomo",
    description: "Description Tech 1",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <img
          src="https://via.placeholder.com/400x200?text=Collaborative+Editing"
          alt="SDV Vehículo autónomo 1"
          className="w-full h-auto"
        />
      </div>
    ),
  },
  {
    title: "Hook - Vehículo autónomo",
    description: "Description Tech 2",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <img
          src="https://via.placeholder.com/400x200?text=Collaborative+Editing"
          alt="Collaborative Editing 2"
          className="w-full h-auto"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description: "Description Tech 3",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <img
          src="https://via.placeholder.com/400x200?text=Collaborative+Editing+4"
          alt="Collaborative Editing 3"
          className="w-full h-auto"
        />
      </div>
    ),
  },
  {
    title: "F1:10 Hook - Vehículo autónomo ",
    description: "Description Tech 4",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <img
          src="https://via.placeholder.com/400x200?text=Collaborative+Editing"
          alt="Collaborative Editing 4"
          className="w-full h-auto"
        />
      </div>
    ),
  },
  {
    title: "UUV - Submarino",
    description: "Description Tech 5",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <img
          src="https://via.placeholder.com/400x200?text=Collaborative+Editing"
          alt="Collaborative Editing 4"
          className="w-full h-auto"
        />
      </div>
    ),
  },
  {
    title: "USV - Barco",
    description: "Description Tech 6",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <img
          src="https://via.placeholder.com/400x200?text=Collaborative+Editing"
          alt="Collaborative Editing 4"
          className="w-full h-auto"
        />
      </div>
    ),
  },
  {
    title: "UAV - Dron",
    description: "Description Tech 7",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <img
          src="https://via.placeholder.com/400x200?text=Collaborative+Editing"
          alt="Collaborative Editing 4"
          className="w-full h-auto"
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
