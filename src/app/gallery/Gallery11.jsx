'use client'; 
import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './Gallery11.module.css';

const Gallery11 = () => {
  const router = useRouter();

  const handleViewMoreClick = () => {
    router.push('/gallerydetail#Gallery'); 
  };

  return (
    <div className={styles.container}>
     <div className={styles.photoGrid}>
      <h2 className={styles.title}>
        <span className={styles.eventsText}>Eve</span>nts Gallery
      </h2>
        <div className={styles.ph1}>
          <img src="/assets/1.jpg" alt="Photo1" className={styles.photo} />
          <img src="/assets/2.jpg" alt="Photo2" className={styles.photo} />
          <img src="/assets/5.jpg" alt="Photo5" className={styles.photo} />
        </div>
        <div className={styles.ph2}>
          <img src="/assets/3.jpg" alt="Photo3" className={styles.photo} />
          <img src="/assets/4.jpg" alt="Photo4" className={styles.photo} />
        </div>
        <button className={styles.viewMoreButton} onClick={handleViewMoreClick}>
          View More
        </button>
      </div>
    </div>
  );
};

export default Gallery11;

