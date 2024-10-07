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
                <h5 style={{marginBottom:'10px'}}> <b style={{fontSize:'16px'}}>1998</b></h5>
                <h4 style={{fontSize:'16px'}}> Qualified as a CA CWA and SET examination in first attempt.</h4>
            </div>
            <div className={styles.NewsBox}>
            <Image className={styles.imgo} src="/assets/NYCS.png" alt='logo' width={100} height={100} /> 
               <h5 style={{marginBottom:'10px'}}> <b style={{fontSize:'16px'}}>1999</b> </h5>
                <h4 style={{fontSize:'16px'}} >Appointed as a Finance Strategist at Lokmat newspaper the Leading Marathi daily.</h4>
            </div>
            <div className={styles.NewsBox}>
            <Image  className={styles.imgo} src="/assets/we.png" alt='logo' width={100} height={100}  /> 
                <h5 style={{marginBottom:'10px'}}><b style={{fontSize:'16px'}}>2000</b> </h5>
                <h4 style={{fontSize:'16px'}}> Designated as a Strategy Partner with State Bank of India for their credit card business.</h4>
            </div>
            <div className={styles.NewsBox}>
            <Image  className={styles.imgo} src="/assets/mngl.png" alt='logo' width={100} height={100}  /> 
                <h5 style={{marginBottom:'10px'}}><b style={{fontSize:'16px'}}>2001</b> </h5>
                <h4 style={{fontSize:'16px'}}>Achieved a business for 10k credit cards for State Bank of India.</h4>
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
