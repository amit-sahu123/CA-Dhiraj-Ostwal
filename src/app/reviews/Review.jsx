import styles from './Review.module.css'
import React from 'react'

const Review = () => {
  return (
    <div className={styles.containersec}>
        <h2 style={{color:'orangered',margin:'20px'}}>Follow Us</h2>
        <iframe className="google-reviews" src="https://widgets.sociablekit.com/google-reviews/iframe/25364642" frameborder="0" width="100%" height="650" ></iframe>
    </div>
  )
}

export default Review
