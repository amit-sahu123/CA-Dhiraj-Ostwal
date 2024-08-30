import React from 'react'
import Image from 'next/image'
import styles from './Achievemore.module.css'
import Banner from '../../components/Banner'     

const Achievemore = () => {
  return (
  <>
  <Banner  
      imageUrl="/assets/carrer.jpg"
      breadcrumb="Achievements"
      headline="Achievements"
      />
    
    <div className={styles.Association} id="linkachieve">
            <h2><span>Ach</span>ievements</h2>
            <div className={styles.Achievements}>
                <div className={styles.NewsBox}>
                    <Image className={styles.imgo} src="/assets/SPPU.png" alt='logo' width={100} height={100} /> 
                    <h5><b>1998</b> <br />Qualified as a CA CWA and SET examination in first attempt.</h5>
                </div>
                <div className={styles.NewsBox}>
                <Image className={styles.imgo} src="/assets/NYCS.png" alt='logo' width={100} height={100} /> 
                    <h5><b>1999</b> <br />Appointed as a Finance Strategist at Lokmat newspaper the Leading Marathi daily.</h5>
                </div>
                <div className={styles.NewsBox}>
                <Image  className={styles.imgo} src="/assets/we.png" alt='logo' width={100} height={100}  /> 
                    <h5><b>2000</b><br />Designated as a Strategy Partner with State Bank of India for their credit card business.</h5>
                </div>
                <div className={styles.NewsBox}>
                <Image  className={styles.imgo} src="/assets/mngl.png" alt='logo' width={100} height={100}  /> 
                    <h5><b>2001</b> <br />Achieved a business for 10k credit cards for State Bank of India.</h5>
                 </div>
                   <div className={styles.NewsBox}>
                   <Image  className={styles.imgo} src="/assets/ev4.png" alt='logo' width={100} height={100}  /> 
                    <h5> <b>2002</b>  <br/> Assigned Pune Division Stratergy partner for SBI Card. </h5>
                    </div>

                    <div className={styles.NewsBox}>
                    <Image  className={styles.imgo} src="/assets/ev3.png" alt='logo' width={100} height={100}  /> 
                        <h5> <b>2003</b> <br/> Bound for Pan India Human Stratergies for Himalaya Drug Company. </h5>

                    </div>

                    <div className={styles.NewsBox}>
                    <Image  className={styles.imgo} src="/assets/ev1.png" alt='logo' width={100} height={100}  /> 
                        <h5> <b>2004</b> <br/>Got an assignment for Symbiosis Pune (SCMHRD) to built education stratergies and MDPs.</h5>
                    </div>

                    <div className={styles.NewsBox}>
                    <Image  className={styles.imgo} src="/assets/ev2.png" alt='logo' width={100} height={100}  /> 
                        <h5><b>2005</b><br/>  Facilitated by State Bank of India for achieving largest business in West India through our stratergies.</h5>
                    </div>

                    <div className={styles.NewsBox}>
                    <Image  className={styles.imgo} src="/assets/ev9.png" alt='logo' width={100} height={100}  /> 
                        <h5><b>2006</b><br/> Consigned by Reebok India Ltd for building stratergies of retail business in India.</h5>
                    </div>

                    <div className={styles.NewsBox}>
                    <Image  className={styles.imgo} src="/assets/ev5.png" alt='logo' width={100} height={100}  /> 
                        <h5><b>2007</b><br/> Partnered with noted builder in Pune for 300+ flats development. </h5>
                    </div>

                    <div className={styles.NewsBox}>
                    <Image  className={styles.imgo} src="/assets/ev6.png" alt='logo' width={100} height={100}  /> 
                            <h5><b>2008</b><br/> Designed and drafted stratergies for Australian clients for their business expansion. </h5>
                    </div>

                    <div className={styles.NewsBox}>
                    <Image  className={styles.imgo} src="/assets/ev7.png" alt='logo' width={100} height={100}  /> 
                        <h5><b>2009</b><br/> Worked on the 100+ acres land parcel where 216 owners which was financed by German bank through English mortgage. </h5>
                    </div>

                    <div className={styles.NewsBox}>
                    <Image  className={styles.imgo} src="/assets/st.svg" alt='logo' width={100} height={100}  /> 
                        <h5><b>2011</b><br /> Mediated family dispute for a well known business family for assets of 545 crs. </h5>
                    </div>
                    <div className={styles.NewsBox}>
                    <Image  className={styles.imgo} src="/assets/ev8.png" alt='logo' width={100} height={100}  /> 
                        <h5> <b>2020</b> <br /> Assembled and conceived Youtube channel with 100+ videos and 1.1M views. </h5>
                    </div>

            </div>

            
        </div>
        </>
      
    
  )
}

export default Achievemore
