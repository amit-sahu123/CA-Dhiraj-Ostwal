import React from 'react'
import styles from './About.module.css'
import Image from 'next/image';

export default function About() { 

    return (
  <>
  <div className={styles.container} >
    <div className={styles.about}>
        <h2 className={styles.h11}> <span className={styles.orange}>Ab</span> out</h2>
    </div>
    <div className={styles.info}>
        <div className={styles.textcontainer}>
        <div className={styles.text}>
         <h1 className={styles.h11}> <span className={styles.orange}>WHO</span> WE ARE</h1>
         <h4 className={styles.h33} style={{fontFamily: 'Poppins', fontWeight:600}}>  B.COM,CA,CMA and SET </h4>
         <p style={{fontFamily: 'sans-serif',fontSize:'17px'}} >   <strong>CA Dhiraj Ostwal</strong>  is an experienced and professional CA
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
  
  </>
)
}
