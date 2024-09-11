import React from 'react';
import Image from 'next/image';
import styles from './Gallerydetail.module.css';
import Banner from '../../components/Banner';

const Gallerydetail = () => {
  return (
    <div>
        <Banner  
      imageUrl="/assets/carrer.jpg"
      breadcrumb="GAllery"
      headline="Gallery"
      />

      <div className={styles.gallery} id="Gallery">
        <div className={styles.imageWrapper}>
          <Image src='/assets/gallary1.jpg' alt="Gallery Image 1" fill={true} sizes='100%'  />
        </div>
        <div className={styles.imageWrapper}>
          <Image src='/assets/gallary2.jpg' alt="Gallery Image 2" fill={true} sizes='100%'   />
        </div>
        <div className={styles.imageWrapper}>
          <Image src='/assets/gallary3.jpg' alt="Gallery Image 3" fill={true} sizes='100%'  />
        </div>
        <div className={styles.imageWrapper}>
          <Image src='/assets/gallary4.jpg' alt="Gallery Image 4" fill={true} sizes='100%'  />
        </div>
        <div className={styles.imageWrapper}>
          <Image src='/assets/gallary5 (2).jpg' alt="Gallery Image 5"  fill={true} sizes='100%' />
        </div>
        <div className={styles.imageWrapper}>
          <Image src='/assets/gallary6.jpg' alt="Gallery Image 6" fill={true} sizes='100%' />
        </div>
        <div className={styles.imageWrapper}>
          <Image src='/assets/gallary7.jpg' alt="Gallery Image 7" fill={true} sizes='100%' />
        </div>
        <div className={styles.imageWrapper}>
          <Image src='/assets/gallary8.jpg' alt="Gallery Image 8" fill={true} sizes='100%'  />
        </div>
        
      </div>

      </div>
      
  )
}

export default Gallerydetail;
