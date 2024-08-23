"use client"
import React from 'react'
import Services from '../Services'
import styles from '../main.module.css'


const OtherServices = () => {
    

  return (
    <div>
        <Services title={"Other Services"} />
        <div className={styles.datacontainer}>
            <div className={styles.data} onClick={()=>setSelectedService('IncomeTax')}>
            <h3>Co-operative trust</h3>
            <p>Specialized guidance in forming and managing co-operative trusts.</p>

            </div>
           
        </div>
    </div>
  )
}

export default OtherServices
