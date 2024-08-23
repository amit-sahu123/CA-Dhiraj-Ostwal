"use client"
import  React from 'react'
import styles from './Services.module.css';
import Image from 'next/image';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Modal from './Modal'
// import { Padding } from '@mui/icons-material';

export default function Services({ title }) {
    const handleClick =() =>{
        window.open('https://wa.me/917020045454', '_blank')
    }

  return (
    <>
        <div className={styles.first}>
        <div className={styles.img}>
        <Image className={styles.image} src="/assets/career3.jpg" alt="career image"   layout='fill' objectFit='cover'  />

        
        <nav className={styles.nav11}
            style={{ '--bs-breadcrumb-divider': '>' }}
            aria-label="breadcrumb"
            >
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {title}
            </li>
          </ol>
          <h3>{title}</h3>
        </nav>

        </div>
       
      </div>
      {/* ----------------- */}

       <div className={styles.seccontainer}>
        <h2>{title}</h2>
        <div className={styles.buttongroup}>
            <button className={styles.whatsappbtn} onClick={handleClick}> <WhatsAppIcon style={{marginRight:'12px'}}/> Connect with WhataApp </button>
            <button  className={styles.calendarbtn} type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <CalendarMonthIcon style={{marginRight:'12px'}}/>  Book an Appointment            </button>
            <Modal/>
        </div>


      </div> 
      </>
      
  )
}
