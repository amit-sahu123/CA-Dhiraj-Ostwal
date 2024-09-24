"use client"
import React from 'react'
import Link from 'next/link'
import Services from '../Services'
import styles from '../main.module.css'


const Appeals_litigations = () => {

  return (
    <div>
        <Services title={"Appeals litigations"} />
        <div className={styles.datacontainer}>
            <Link href="/blogs/Appeals" className={styles.data} >
            <h3>Appeals</h3>
            <p>Expert assistance in filing and managing tax and legal appeals across various forums.</p>
            </Link>
            
            <Link href="/blogs/Litigation" className={styles.data} >
            <h3>Litigations</h3>
            <p>Comprehensive support for legal proceedings related to tax and business matters.</p>
            </Link>
            
            <Link href="/blogs/Busdis" className={styles.data} >
            <h3>Business Dispute Resolution</h3>
            <p>Efficient mediation and resolution services for various business conflicts.</p>
            </Link>
        </div>
        
    </div>
  )
}

export default Appeals_litigations
