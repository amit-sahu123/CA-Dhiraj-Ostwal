import React from 'react'
import Image from 'next/image'
import styles from './Spinner.module.css'

const Spinner = () => {
  return (
    <div className={styles.container}>
       <div className={styles.imagecontainer}>
          <Image src='/assets/loading.gif' alt='loading' layout='fill' objectFit='cover'/>
       </div>
    </div>
    
      
  )
}

export default Spinner
