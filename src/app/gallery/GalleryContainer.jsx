// components/GalleryContainer.tsx
"use client";
import React from 'react';
import Photo from './photo';
import GalleryHeader from './GalleryHeader';

const GalleryContainer = () => {
  const photos = [
    { src: '/assets/1.png', alt: 'Event 1' },
    { src: 'assets/2.png', alt: 'Event 2' },
    { src: 'assets/3.png', alt: 'Event 3' },
    { src: 'assets/4.png', alt: 'Event 4' },
    { src: 'assets/5.png', alt: 'Event 5' },
  ];

  return (
    <div className="gallery-container">
      <GalleryHeader />
      <div className="photos">
        {photos.map((photo, index) => (
          <Photo key={index} src={photo.src} alt={photo.alt} index={index} />
        ))}
      </div>
      <style jsx>{`
        .gallery-container {
          text-align: center;
          padding: 20px;
        }
        .photos {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
        }
        @media (max-width: 768px) {
          .photos {
            flex-direction: row;
            justify-content: space-around;
          }
        }
        @media (max-width: 480px) {
          .photos {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default GalleryContainer;
