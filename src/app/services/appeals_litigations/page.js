"use client"
import React from 'react'
import Services from '../Services'
import styles from '../main.module.css'


const Appeals_litigations = () => {

  return (
    <div>
        <Services title={"Appeals litigations"} />
        <div className={styles.datacontainer}>
            <div className={styles.data} >
            <h3>Appeals</h3>
            <p>Expert assistance in filing and managing tax and legal appeals across various forums.</p>
            </div>
            
            <div className={styles.data} >
            <h3>Litigations</h3>
            <p>Comprehensive support for legal proceedings related to tax and business matters.</p>
            </div>
            
            <div className={styles.data} >
            <h3>Business Dispute Resolution</h3>
            <p>Efficient mediation and resolution services for various business conflicts.</p>
            </div>
        </div>
        
    </div>
  )
}

export default Appeals_litigations
