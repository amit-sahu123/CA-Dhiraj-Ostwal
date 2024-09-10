"use client"; 
import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import styles from './Employee.module.css'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Employee = () => {

  const staticEmployeeData = [
    {
      id: 1,
      FirstName: "Ms Gauri",
      Position: "Account Assistant",
      ImageUrl: "/assets/gauri.jpg"
    },
    {
      id: 2,
      FirstName: "Mr Ganesh",
      Position: "Manager",
      ImageUrl: "/assets/ganesh.jpg"
    },
    {
      id: 3,
      FirstName: "Mr Hemant",
      Position: "Senior Executive",
      ImageUrl: "/assets/hemant.jpg"
    },
    {
      id: 4,
      FirstName: "Ms Nagini",
      Position: "Account Assistant",
      ImageUrl: "/assets/nagini.jpg"
    },
    {
      id: 5,
      FirstName: "Ms Purva",
      Position: "Account Assistant",
      ImageUrl: "/assets/purva.jpg"
    }
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);
  const [teamMembers, setEmployees] = useState(staticEmployeeData);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    beforeChange: (current, next) => setActiveSlide(next),
    afterChange: (current) => setActiveSlide(current),
    responsive: [
      {
        breakpoint: 426, 
        settings: {
          slidesToShow: 2, 
          centerMode: false, 
        }
      },
      {
        breakpoint: 376, 
        settings: {
          slidesToShow: 1, 
          centerMode: false, 
        }
      }
    ]
  };

  return (
    <div className={styles.eventTeamSlider}>
      <h3> <span style={{color:'orangered'}}>Meet</span> Our Team</h3>
      <div className={styles.sliderContainer}>
        <Slider ref={sliderRef} {...sliderSettings}>
          {teamMembers.map((member, index) => (
            <div key={index} className={`${styles.teamMember} ${activeSlide === index ? styles.slickCenter : ''}`}>
              <div className={styles.memberInfo}>
                <img src={member.ImageUrl} alt={member.FirstName} />
                <p>{member.FirstName}</p>
                <p style={{fontSize:'20px'}}><b>{member.Position}</b></p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Employee;