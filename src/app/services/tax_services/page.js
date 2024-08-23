"use client"
import React from 'react'
import Services from '../Services'
import styles from '../main.module.css'


const Tax_Services = () => {
    



  return (
    <div>
        <Services title={"Tax Services"} />
        <div className={styles.datacontainer}>
            <div className={styles.data} >
                 <h3>Income Tax</h3>
                 <p>Professional assistance in income tax planning, filing, and compliance.</p>
            </div>
            <div className={styles.data} >
                 <h3>Goods and Services Tax</h3>
                 <p>Comprehensive GST services including registration, filing, and advisory.</p>
            </div>
            <div className={styles.data} >
                 <h3>Tax Deducted at Source</h3>
                 <p>Expert handling of TDS calculations, deductions, and returns.</p>
            </div>
        </div>
    </div>
  )
}

export default Tax_Services
