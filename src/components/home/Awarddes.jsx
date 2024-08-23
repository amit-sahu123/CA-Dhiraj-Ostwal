"use client";
import { images } from "./Constants";

// Description component
const Description = ({ activeImgIndex, clickNext, clickPrev }) => {
  const { desc } = images[activeImgIndex];

  return (
    <div className="p-6 flex flex-col justify-center items-center bg-white rounded-b-2xl w-full">
      <p className="mb-4">{desc}</p>
    </div>
  );
};

export default Description;
