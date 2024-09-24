"use client"
import React from 'react'
import Link from 'next/link'
import Services from '../Services'
import styles from '../main.module.css'


const DraftingAgreements = () => {

  return (
    <div>
        <Services title={"Drafting Agreements"} />
        <div className={styles.datacontainer}>
            <div className={styles.data} >
            <h3>Drafting</h3>
            <p>Professional drafting services for various legal and business documents.</p>
            </div>
            <div className={styles.data} >
            <h3>Partnership Deed</h3>
            <p>Expert drafting of partnership deeds tailored to your business needs.</p>  
            </div>
            <div className={styles.data} >
            <h3>Article of Association</h3>
            <p>Precise drafting of Articles of Association for company incorporation.</p>   
            </div>
            <div className={styles.data} >
            <h3>Memorandum of Association</h3>
            <p>Memorandum of Association is a legal document that explains why the organization was founded.</p>   
            </div>
            <Link href="/blogs/Shareholder" className={styles.data} >
            <h3>Shareholders Agreement</h3>
            <p>Crafting comprehensive shareholder agreements to protect all parties' interests.</p>   
            </Link>
            <div className={styles.data} >
            <h3>Debentures Agreement</h3>
            <p>Specialized drafting of debenture agreements for debt instruments.</p>  
            </div>
            <div className={styles.data} >
            <h3>Hire Purchase</h3>
            <p>Expert drafting of hire purchase agreements for asset acquisition.</p> 
            </div>
            <div className={styles.data} >
            <h3>Lease Deed</h3>
            <p>Professional preparation of lease deeds for property transactions.</p>   
            </div>
            <div className={styles.data} >
            <h3>Contract and Agreement</h3>
            <p>Comprehensive drafting services for various business contracts and agreements.</p> 
            </div>

        </div>
    </div>
  )
}

export default DraftingAgreements
