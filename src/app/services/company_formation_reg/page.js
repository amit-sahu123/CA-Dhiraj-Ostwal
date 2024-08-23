"use client"
import React from 'react'
import Services from '../Services'
import styles from '../main.module.css'


const CompanyFormation = () => {
    

  return (
    <div>
        <Services title={" Company Formation"} />
        <div className={styles.datacontainer}>
            <div className={styles.data} >
            <h3>Company Formation</h3>
              <p>End-to-end support in incorporating and setting up new companies.</p>
            
            </div>
            <div className={styles.data} >
            <h3>Bussiness Registration</h3>
            <p>Streamlined services for registering various forms of businesses.</p>
            
            </div>
            <div className={styles.data} >
            <h3>Shop act</h3>
              <p>Assistance in obtaining and maintaining Shop Act licenses.</p>
            
            </div>
            <div className={styles.data} >
            <h3>Ministry of Micro, Small & Medium Enterprises</h3>
            <p>Guidance on MSME registration and accessing related benefits.</p>
            
            </div>
            <div className={styles.data} >
            <h3>Partnership Registration</h3>
            <p>Efficient services for registering and formalizing business partnerships.</p>
            
            </div>
            <div className={styles.data} >
            <h3>Limited Liability Partnership</h3>
            <p>Specialized support in forming and managing Limited Liability Partnerships.</p>
            
            </div>
            <div className={styles.data} >
            <h3>Non-Profit Company</h3>
              <p>Expert assistance in establishing and managing non-profit organizations.</p>
            
            </div>
            <div className={styles.data} >
            <h3>Charitable Trust</h3>
            <p>Comprehensive services for setting up and managing charitable trusts.</p>
            
            </div>
            <div className={styles.data} >
            <h3>Association</h3>
              <p>Support in forming and registering various types of associations.</p>
            
            </div>
            



        </div>
    </div>
  )
}

export default CompanyFormation
