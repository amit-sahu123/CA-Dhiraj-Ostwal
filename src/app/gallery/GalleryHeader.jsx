// components/GalleryHeader.jsx
import React from 'react';

const GalleryHeader = () => {
  return (
    <div className="gallery-header">
      <h1>
        <span style={{color:"orangered"}}>Even</span>
        <span className="black">ts gallery</span>
      </h1>
      <style jsx>{`
        .gallery-header {
          margin-bottom: 30px;
        }
        h1 {
          font-size: 50px;
          font-weight: bold;
        }
        .red {
          color: oranged;
        }
        .black {
          color: black;
        }
        @media (max-width: 768px) {
          h1 {
            font-size: 40px;
          }
        }
        @media (max-width: 480px) {
          h1 {
            font-size: 30px;
          }
        }
      `}</style>
    </div>
  );
};

export default GalleryHeader;
