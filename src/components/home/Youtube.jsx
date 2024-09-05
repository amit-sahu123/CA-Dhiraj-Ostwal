"use client";
import React, { useState, useEffect } from "react";
import styles from './Youtube.module.css';
import Image from "next/image";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Youtube = () => {
  const data = [
    {
      image: "/assets/youtube1.png",
      Description: "How to start your own business",
      url:"https://www.youtube.com/watch?v=ypZi5GH6YHY"
    },
    {
      image: "/assets/youtube2.png",
      Description: "Leadership",
      url:"https://www.youtube.com/watch?v=BGKH1FJ2YkQ"
    },
    {
      image: "/assets/youtube3.png",
      Description: "How to fund your Business",
      url:"https://www.youtube.com/watch?v=GpenZ8C3bq8"
    },
    {
      image: "/assets/youtube4.png",
      Description: "How to grow your Business",
      url:"https://www.youtube.com/watch?v=EIQOLf5KpYc"
    },
    {
      image: "/assets/youtube5.png",
      Description: "How to take right Decisions",
      url:"https://www.youtube.com/watch?v=NNC5ULk_3KA"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
    }, 4000); // Change image every 4 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <div className={styles.container}>
      <div className={styles.textcontainer}>
        <h2>YouTube</h2>
      </div>
      <div className={styles.imageWrapper}>
        <div className={styles.imageContainer}>
          <a href={data[currentIndex].url} target="_blank" rel="noopener noreferrer">
            <Image
              src={data[currentIndex].image}
              alt={data[currentIndex].Description}
              layout="fill"
              objectFit="cover"
            />
          </a>
        </div>
      </div>
      <p className={styles.description}>
        <strong> {data[currentIndex].Description}</strong>
      </p>
      <div className={styles.controls}>
        <button className={styles.controlButton} onClick={handlePrev}>
          <ArrowBackIosIcon />
        </button>
        <button className={styles.controlButton} onClick={handleNext}>
          <ArrowForwardIosIcon />
        </button>
      </div>
    </div>
  );
};

export default Youtube;



