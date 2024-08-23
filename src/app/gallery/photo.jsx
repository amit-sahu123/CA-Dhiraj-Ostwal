// components/Photo.tsx
import React, { useState } from 'react';

const Photo = ({ src, alt, index }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(prev => !prev);
  };

  // Calculate the vertical offset based on the index
  const offset = (index % 2 === 0 ? -10 : 10); // Adjust as needed

  return (
    <div
      className={`photo ${clicked ? 'clicked' : ''}`}
      onClick={handleClick}
      style={{ transform: `translateY(${offset}px)` }}
    >
      <img src={src} alt={alt} />
      <style jsx>{`
        .photo {
          margin: 20px;
          position: relative;
          width: 150px;
          height: 200px;
          display: inline-block;
          border: 2px solid #f1f1f1;
          background: #ffffff; 
          background: #FEFBB3;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .photo::before {
          content: '';
          position: absolute;
          top: -20px;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 20px;
          background: #000;
        }
        .photo:hover,
        .photo.clicked {
          transform: scale(2.15);
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.2); /* Slightly increased shadow on hover */
        }
        @media (max-width: 768px) {
          .photo {
            width: 120px;
            height: 160px;
          }
        }
        @media (max-width: 480px) {
          .photo {
            width: 230px;
            height: 130px;
          }
        }
      `}</style>
    </div>
  );
};

export default Photo;
