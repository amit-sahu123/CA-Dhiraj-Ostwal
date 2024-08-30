import React, { useState } from 'react';
import styles from './gallery.module.css'; // Import the CSS module

const Gallery = () => {
  const [clickedPhotoIndex, setClickedPhotoIndex] = useState(null);

  const photos = [
    { src: '/assets/1.png', alt: 'Event 1' },
    { src: '/assets/2.png', alt: 'Event 2' },
    { src: '/assets/3.png', alt: 'Event 3' },
    { src: '/assets/4.png', alt: 'Event 4' },
    { src: '/assets/5.png', alt: 'Event 5' },
  ];

  const handleClick = (index) => {
    setClickedPhotoIndex(prevIndex => prevIndex === index ? null : index);
  };

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.galleryHeader}>
        <h1>
          <span className={styles.red}>Even</span>
          <span className={styles.black}>ts gallery</span>
        </h1>
      </div>
      <div className={styles.photos}>
        {photos.map((photo, index) => {
          const isClicked = clickedPhotoIndex === index;
          const offset = (index % 2 === 0 ? -10 : 10);
          return (
            <div
              key={index}
              className={`${styles.photo} ${isClicked ? styles.clicked : ''}`}
              onClick={() => handleClick(index)}
              style={{ transform: `translateY(${offset}px)` }}
            >
              <img src={photo.src} alt={photo.alt} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
