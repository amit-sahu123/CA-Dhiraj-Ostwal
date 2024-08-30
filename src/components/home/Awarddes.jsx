"use client";
import { images } from "./Constants";
import styles from './Awarddes.module.css'; 

const Description = ({ activeImgIndex, clickNext, clickPrev }) => {
  const { desc } = images[activeImgIndex];

  return (
    <div className={styles.container}>
      <h5>{desc}</h5>
    </div>
  );
};

export default Description;

