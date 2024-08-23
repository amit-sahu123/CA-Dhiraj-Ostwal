"use client"
import React from 'react'
import Services from '../Services'
import styles from '../main.module.css'

const Auditservices = () => {

  return (
    <div>
        <Services title={"Audit Services"} />
        <div className={styles.datacontainer}>
            <div className={styles.data} >
            <h3>Statutory audit</h3>
            <p>Ensuring compliance with all statutory requirements for businesses.</p>
            </div>

            <div className={styles.data} >
            <h3>Tax Audit</h3>
            <p>Thorough tax audit services to ensure compliance and identify opportunities.</p>
            </div>

            <div className={styles.data} >
            <h3>Complience Audit</h3>
            <p>Comprehensive assistance in meeting all regulatory compliance requirements.</p>
            </div>

            <div className={styles.data} >
            <h3>Internal Audit</h3>
            <p>Detailed internal audit services to improve operational efficiency and control.</p>
            </div>

        </div>
    </div>
  )
}

export default Auditservices
