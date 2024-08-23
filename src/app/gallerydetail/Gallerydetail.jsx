import React from 'react';
import Image from 'next/image';
import styles from './Gallerydetail.module.css';

const Gallerydetail = () => {
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
              Gallery
            </li>
          </ol>
          <h3>Gallery</h3>
        </nav>

        </div>
        </div>

      <div className={styles.gallery} id="Gallery">
        <div className={styles.imageWrapper}>
          <Image src='/assets/gallary1.jpg' alt="Gallery Image 1" layout='fill' objectFit='cover' />
        </div>
        <div className={styles.imageWrapper}>
          <Image src='/assets/gallary2.jpg' alt="Gallery Image 2" layout='fill' objectFit='cover' />
        </div>
        <div className={styles.imageWrapper}>
          <Image src='/assets/gallary3.jpg' alt="Gallery Image 3" layout='fill' objectFit='cover' />
        </div>
        <div className={styles.imageWrapper}>
          <Image src='/assets/gallary4.jpg' alt="Gallery Image 4" layout='fill' objectFit='fill' />
        </div>
        <div className={styles.imageWrapper}>
          <Image src='/assets/gallary5 (2).jpg' alt="Gallery Image 5" layout='fill' objectFit='fill' />
        </div>
        <div className={styles.imageWrapper}>
          <Image src='/assets/gallary6.jpg' alt="Gallery Image 6" layout='fill' objectFit='fill' />
        </div>
        <div className={styles.imageWrapper}>
          <Image src='/assets/gallary7.jpg' alt="Gallery Image 7" layout='fill' objectFit='fill' />
        </div>
        <div className={styles.imageWrapper}>
          <Image src='/assets/gallary8.jpg' alt="Gallery Image 8" layout='fill' objectFit='fill' />
        </div>
        
      </div>

      </div>
      
  )
}

export default Gallerydetail;
