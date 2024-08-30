"use client";

import React from 'react';
import styles from './Gallery11.module.css';

const photos = [
  { src: '/assets/1.png', alt: 'Event 1' },
  { src: '/assets/2.png', alt: 'Event 2' },
  { src: '/assets/3.png', alt: 'Event 3' },
  { src: '/assets/4.png', alt: 'Event 4' },
  { src: '/assets/5.png', alt: 'Event 5' },
];

const EventsGallery = () => {
  const handleClick = (photo) => {
  };

  return (
    <div className={styles.galleryContainer}>
      <h2 className={styles.galleryTitle}><span className={styles.highlight}>Events</span> gallery</h2>
      <div className={styles.galleryRow}>
        {photos.map((photo, index) => (
          <div
            key={index}
            className={styles.galleryItem}
            onClick={() => handleClick(photo)}
          >
            <img src={photo.src} alt={photo.alt} className={styles.galleryImage} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsGallery;
