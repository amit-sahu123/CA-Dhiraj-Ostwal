"use client";
import React, { useState } from 'react';
import styles from './Services.module.css';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Banner from '../../components/Banner';
import Modal from './Enquery';

export default function Services({ title }) {
  const handleClick = () => {
    window.open('https://wa.me/917020045454', '_blank');
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Banner
        imageUrl="/assets/carrer.jpg"
        breadcrumb={title}
        headline={title}
      />

      <div className={styles.seccontainer}>
        <h2>{title}</h2>
        <div className={styles.buttongroup}>
          <button className={styles.whatsappbtn} onClick={handleClick}>
            <WhatsAppIcon style={{ marginRight: '12px' }} /> Connect with WhatsApp
          </button>
          <button
            className={styles.calendarbtn}
            onClick={() => setIsModalOpen(true)}
          >
            <CalendarMonthIcon style={{ marginRight: '12px' }} /> Book an Appointment
          </button>
        </div>
      </div>

      {isModalOpen && <Modal closeModal={() => setIsModalOpen(false)} />}
    </>
  );
}

