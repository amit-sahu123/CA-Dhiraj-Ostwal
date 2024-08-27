import React from 'react'
import styles from './Banner.module.css'
import Image from 'next/image'

const Banner = ({imageUrl,breadcrumb,headline}) => {
  return (
    <div className={styles.first}>
      <div className={styles.img}>
        <Image className={styles.image} src={imageUrl} alt="career image"   layout='fill' objectFit='cover'  />

        
        <nav className={styles.nav11}
            style={{ '--bs-breadcrumb-divider': '>' }}
            aria-label="breadcrumb"
            >
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {breadcrumb}
            </li>
          </ol>
          <h3>{headline}</h3>
        </nav>

      </div>
       
    </div>
  )
}

export default Banner
