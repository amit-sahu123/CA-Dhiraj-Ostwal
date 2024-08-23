import styles from './Achievement.module.css'
import Image from 'next/image'
import React from 'react';
import Link from 'next/link';

function Achievements() {
    return (
       

        <div className={styles.Association} id="linkachieve">
        <h2><span>Ach</span>ievements</h2>
        <div className={styles.Achievements}>
            <div className={styles.NewsBox}>
                <Image className={styles.imgo} src="/assets/SPPU.png" alt='logo' width={100} height={100} /> 
                <h5 style={{marginBottom:'10px'}}> <b>1998</b></h5>
                <h5> Qualified as a CA CWA and SET examination in first attempt.</h5>
            </div>
            <div className={styles.NewsBox}>
            <Image className={styles.imgo} src="/assets/NYCS.png" alt='logo' width={100} height={100} /> 
               <h5 style={{marginBottom:'10px'}}> <b>1999</b> </h5>
                <h5>Appointed as a Finance Strategist at Lokmat newspaper the Leading Marathi daily.</h5>
            </div>
            <div className={styles.NewsBox}>
            <Image  className={styles.imgo} src="/assets/we.png" alt='logo' width={100} height={100}  /> 
                <h5 style={{marginBottom:'10px'}}><b>2000</b> </h5>
                <h5> Designated as a Strategy Partner with State Bank of India for their credit card business.</h5>
            </div>
            <div className={styles.NewsBox}>
            <Image  className={styles.imgo} src="/assets/mngl.png" alt='logo' width={100} height={100}  /> 
                <h5 style={{marginBottom:'10px'}}><b>2001</b> </h5>
                <h5>Achieved a business for 10k credit cards for State Bank of India.</h5>
            </div>

        </div>

            <div className={styles.btnbox}>
            <Link href="/achievementsmore">
            <button  className={styles.readbtn }>
                Read More 
            </button>
            </Link>
           
            </div>
       
        
    </div>


    )
}
export default Achievements;
