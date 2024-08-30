import React from 'react'
import Image from 'next/image'
import styles from './Profile.module.css'
import Banner from '../../components/Banner'

export default function Profile() {
  return (
    <div>
    <Banner
     imageUrl="/assets/carrer.jpg"
     breadcrumb="Profile"
     headline="Profile"
    />
      
      

{/* ===================== */}
<div className={styles.container} >
    
    <div className={styles.info}>
        <div className={styles.textcontainer}>
        <div className={styles.text}>
         <h3 className={styles.h33}>  B.COM,CA,CMA And SET </h3>
         <p style={{fontSize:'18px'}}>    <strong> CA Dhiraj Ostwal </strong>  is an experienced and professional CA
             with more than 25 years in Business Coaching, advisory and,
              strategy planning. He has worked on a global level in countries like 
              America, Australia, New Zealand, and Singapore. With his extraordinary rich core business experience, he has helped various business houses in India by guiding 
              and sharing his entrepreneurial skills.
        </p>
          <br/>
        <p style={{fontSize:'18px'}}>
        He has been a real backbone and helping hand to various emerging startups and MSME Companies in India with his knowledge and training skills in Business coaching and Business management. He has led the example by starting 3 firms of his own after his comeback to India from abroad in 2015. Being a successful mentor and business coach he has made many businesses successful and potentially earnable centres.
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
    <p style={{fontSize:'18px'}}>To become the most trusted, efficient and result-oriented companion to empower entrepreneurs, Start-ups and corporates for uninterrupted growth through world-class business strategies.</p>
          
    </div>
    <div >
    <h2>Mision</h2>
    <p style={{fontSize:'18px'}}> To reach out 1000+ businesses to boost their profitability through most sustainable business strategies which will have positive impact on taxes, human resources, finance, resources and overall key factors of organisation</p>


    </div>
  </div>
      
 </div>
  )
}
