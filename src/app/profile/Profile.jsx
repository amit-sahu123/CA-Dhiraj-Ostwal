import React from 'react'
import Image from 'next/image'
import styles from './Profile.module.css'

export default function Profile() {
  return (
    <div>
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
              Profile
            </li>
          </ol>
          <h3>Profile</h3>
        </nav>

        </div>
       
      </div>

{/* ===================== */}
<div className={styles.container} >
    
    <div className={styles.info}>
        <div className={styles.textcontainer}>
        <div className={styles.text}>
         <h3 className={styles.h33}>  B.COM,CA,CMA And SET </h3>
         <p>     CA Dhiraj Ostwal is an experienced and professional CA
             with more than 25 years in Business Coaching, advisory and,
              strategy planning. He has worked on a global level in countries like 
              America, Australia, New Zealand, and Singapore. With his extraordinary rich core business experience, he has helped various business houses in India by guiding 
              and sharing his entrepreneurial skills.
        </p>

        </div>
        </div>
        
        <div className={styles.imgcontainer}>
            <div className={styles.image}>
                <Image className={styles.abtpic}src="/assets/rajesh-pande.png" alt='admin profile' width={246} height={317}/> 
            </div>
        </div>
        
    </div>
  </div>

  {/* =========================== */}
  <div className={styles.purpose}>
    <div >
    <h2>Vision</h2>
    <p>To become the most trusted, efficient and result-oriented companion to empower entrepreneurs, Start-ups and corporates for uninterrupted growth through world-class business strategies.</p>
          
    </div>
    <div >
    <h2>Mision</h2>
    <p> To reach out 1000+ businesses to boost their profitability through most sustainable business strategies which will have positive impact on taxes, human resources, finance, resources and overall key factors of organisation</p>


    </div>
  </div>
      
 </div>
  )
}
