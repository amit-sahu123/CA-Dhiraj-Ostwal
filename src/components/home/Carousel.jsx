"use client";
import React from 'react';
import Image from 'next/image';


const bannerData = [
  {
    url: '/assets/hero1.jpg',
    header: 'Team Building Workshop',
    text: '"Enhance teamwork and collaboration with fun activities".',
  },
  {
    url: '/assets/hero2.jpg',
    header: 'Leadership Conference',
    text: '"Empower leaders with insights and strategies for success".',
  },
  {
    url: '/assets/hero3.jpg',
    header: 'Office Retreat',
    text: '"Relax and recharge with your colleagues in a serene environment".',
  },
  {
    url: '/assets/hero4.jpg',
    header: 'Employee Recognition Ceremony',
    text: '"Celebrate the achievements and contributions of our team".',
  },
  {
    url: '/assets/hero5.jpg',
    header: 'Team Building Activity',
    text: '"Participate in engaging exercises to strengthen team bonds".',
  },
  {
    url: '/assets/hero6.jpg',
    header: 'Leadership Training',
    text: '"Develop essential leadership skills for personal and professional growth".',
  },
];

export default function Carousel() {

  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
      
        <div className="carousel-indicators " >
        {bannerData?.map((_, index) => (
          <button style={{backgroundColor:'orangered'}}
            key={index}
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : undefined}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div> 

      
       <div className="carousel-inner">
        {bannerData?.map((banner, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <div style={{ position: 'relative', height: '86vh', width: '100vw' }}>
              <Image
                src={banner.url}
                className="d-block w-100"
                alt="pics"
                layout="fill"
                objectFit="cover"
               
              />
            </div>
            <div className="carousel-caption d-block" style={{ color: 'white', bottom: '20px' }}>
              <h1 >{banner.header}</h1>
              <h4 style={{marginBottom:'50px'}}>{banner.text} </h4>
               
            </div>
          </div>
        ))}
      </div> 



      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" style={{backgroundColor:'orangered' }}></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next" >
        <span className="carousel-control-next-icon" aria-hidden="true"   style={{backgroundColor:'orangered' }}></span>
        <span className="visually-hidden" >Next</span>
       
      </button>
    </div>
  );
}

