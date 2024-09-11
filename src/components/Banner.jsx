import React from 'react'
import styles from './Banner.module.css'
import Image from 'next/image'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Banner = ({imageUrl,breadcrumb,headline}) => {
  return (
    <div className={styles.first}>
      <div className={styles.img}>
        <Image className={styles.image} src={imageUrl} alt="career image"   fill style={{objectFit:'cover'}}  />

        
        <nav className={styles.nav11}
            style={{ '--bs-breadcrumb-divider': '>' }}
            aria-label="breadcrumb"
            >
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a  style={{textDecoration:'none',color:'white'}} href="/">Home <ArrowForwardIosIcon fontSize='19px'/> </a>
            </li>
             
            <li className="breadcrumb-item active" aria-current="page" style={{color:'white'}}>
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
