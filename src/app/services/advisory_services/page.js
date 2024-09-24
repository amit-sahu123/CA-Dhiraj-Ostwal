"use client"
import React from 'react'
import Link from 'next/link'
import Services from '../Services'
import styles from '../main.module.css'


const AdvisoryServices = () => {

  return (
    <div>
        <Services title="Advisory Services" />
        <div className={styles.datacontainer}>
            <Link href="" className={styles.data} >
            <h3>Loans and Funding for Business</h3>
            <p>We secure optimal financing solutions tailored to your business growth needs.</p>
            </Link>
            <Link href=""  className={styles.data} >
                
            <h3>Property advisory</h3>
            <p>Expert guidance on real estate investments, valuations, and tax implications.</p>
            </Link>
            <Link href="" className={styles.data} >
            <h3>Investment Advisory</h3>
            <p>Personalized investment strategies to maximize returns while managing risk.</p>
            </Link>
            <Link href="" className={styles.data} >
            <h3>Fixed Deposite Advisory</h3>
            <p>Navigate the FD landscape for the best rates and terms aligned with your goals.</p>   
            </Link>
            <Link href="/blogs/BondAd"  className={styles.data} >
            <h3>Bond Advisory</h3>
            <p>Expert advice on bond investments to optimize your fixed-income portfolio.</p>  
            </Link>
            <Link href=""  className={styles.data} >
            <h3>Subsidy</h3>
            <p>Guide businesses through government subsidies, from identification to application.</p>   
            </Link>
            <Link  href="" className={styles.data} >
            <h3>Financial Fraud</h3>
            <p> Implement robust strategies and systems to protect your business from financial fraud.</p>  
            </Link>
            <Link href=""  className={styles.data} >
            <h3>Economic Offence Wing</h3>
            <p>Support and representation in matters related to economic offences and investigations.</p>   
            </Link>
            <Link href=""  className={styles.data} >
            <h3>Life and General Insurence</h3>
            <p>Select the most suitable insurance policies for comprehensive personal and business coverage.</p>  
            </Link>
            <Link href=""  className={styles.data} >
            <h3>Startup India Registration</h3>
            <p>Streamline your Startup India registration to access government benefits and incentives.</p>
            </Link>
            <Link href=""  className={styles.data} >
            <h3>Import Export Counsultant</h3>
            <p>Navigate international trade complexities with expert guidance on regulations and strategies.</p>
            </Link>

        </div>
    </div>
  )
}

export default AdvisoryServices

// "use client";
// import React from 'react';
// import Services from '../Services';
// import styles from '../main.module.css';

// const AdvisoryServices = () => {
//   return (
//     <div>
//       <Services title="Advisory Services" />
//       <div className={styles.datacontainer}>
//         <a href="/loans-funding" target="_blank" className={styles.data}>
//           <h3>Loans and Funding for Business</h3>
//           <p>We secure optimal financing solutions tailored to your business growth needs.</p>
//         </a>

//         <a href="/property-advisory" target="_blank" className={styles.data}>
//           <h3>Property Advisory</h3>
//           <p>Expert guidance on real estate investments, valuations, and tax implications.</p>
//         </a>

//         <a href="/investment-advisory" target="_blank" className={styles.data}>
//           <h3>Investment Advisory</h3>
//           <p>Personalized investment strategies to maximize returns while managing risk.</p>
//         </a>

//         <a href="/fixed-deposite-advisory" target="_blank" className={styles.data}>
//           <h3>Fixed Deposite Advisory</h3>
//           <p>Navigate the FD landscape for the best rates and terms aligned with your goals.</p>   
//         </a>

//         <a href="/bond-advisory" target="_blank" className={styles.data}>
//           <h3>Bond Advisory</h3>
//           <p>Expert advice on bond investments to optimize your fixed-income portfolio.</p>  
//         </a>

//         <a href="/subsidy" target="_blank" className={styles.data}>
//           <h3>Subsidy</h3>
//           <p>Guide businesses through government subsidies, from identification to application.</p>   
//         </a>

//         <a href="/financial-fraud" target="_blank" className={styles.data}>
//           <h3>Financial Fraud</h3>
//           <p>Implement robust strategies and systems to protect your business from financial fraud.</p>  
//         </a>

//         <a href="/economic-offence-wing" target="_blank" className={styles.data}>
//           <h3>Economic Offence Wing</h3>
//           <p>Support and representation in matters related to economic offences and investigations.</p>   
//         </a>

//         <a href="/life-general-insurance" target="_blank" className={styles.data}>
//           <h3>Life and General Insurance</h3>
//           <p>Select the most suitable insurance policies for comprehensive personal and business coverage.</p>  
//         </a>

//         <a href="/startup-india-registration" target="_blank" className={styles.data}>
//           <h3>Startup India Registration</h3>
//           <p>Streamline your Startup India registration to access government benefits and incentives.</p>
//         </a>

//         <a href="/import-export-consultant" target="_blank" className={styles.data}>
//           <h3>Import Export Consultant</h3>
//           <p>Navigate international trade complexities with expert guidance on regulations and strategies.</p>
//         </a>
//       </div>
//     </div>
//   );
// }

// export default AdvisoryServices;

