"use client";
import { images } from "./Constants";
import {  useState } from "react";
import Image from "next/image";
import Description from "./Awarddes";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Award = () => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const clickPrev = () => {
    setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     clickNext();
  //   }, 5000);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [activeImage]);

  return (
    <main className="relative grid place-items-center w-full mx-auto max-w-5xl shadow-2xl rounded-2xl my-10 " >
      <h1 className="text-2xl  mb-6">
        <span style={{color:'orangered'}}>Awa</span>
        <span className="black">rd</span>
      </h1>
      
      <div className="relative w-full flex justify-center items-center transition-transform ease-in-out duration-500 rounded-2xl p-6 md:p-0" style={{ height: '50vh' }}>
        {images.map((pic, idx) => (
          <div
            key={pic.id}
            className={`${
              idx === activeImage
                ? "block w-full h-full transition-all duration-500 ease-in-out"
                : "hidden"
            }`}
          >
            <Image
              src={pic.src}
              alt={pic.desc}
              layout="fill"
              objectFit="contain"
              className="w-full h-full object-cover rounded-2xl font-bold"
            />
          </div>
        ))}
        <button onClick={clickPrev} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full">
          <FaArrowLeft />
        </button>
        <button onClick={clickNext} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full">
          <FaArrowRight />
        </button>
      </div>
      <Description 
        activeImgIndex={activeImage}
        clickNext={clickNext}
        clickPrev={clickPrev}  
      />
      <style jsx>{`
       
        .black {
          color: black;
        }
        h1 {
          font-size: 45px;
          font-weight: bold;
        }
          @media (max-width:425px)
          {
          h1{
          font-size:35px;
          font-weight:600;
          margin-bottom:0px
          }
          }
      `}</style>
    </main>
  );
};

export default Award;

