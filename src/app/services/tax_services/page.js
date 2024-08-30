// "use client"
// import React from 'react'
// import Services from '../Services'
// import styles from '../main.module.css'


// const Tax_Services = () => {
    



//   return (
//     <div>
//         <Services title={"Tax Services"} />
//         <div className={styles.datacontainer}>
//             <div className={styles.data} >
//                  <h3>Income Tax</h3>
//                  <p>Professional assistance in income tax planning, filing, and compliance.</p>
//             </div>
//             <div className={styles.data} >
//                  <h3>Goods and Services Tax</h3>
//                  <p>Comprehensive GST services including registration, filing, and advisory.</p>
//             </div>
//             <div className={styles.data} >
//                  <h3>Tax Deducted at Source</h3>
//                  <p>Expert handling of TDS calculations, deductions, and returns.</p>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Tax_Services

"use client";
import React, { useState } from "react";
import Services from "../Services";
import styles from "../main.module.css";
import IncomeTaxDetails from "../../blogs/IncomeTax";
import GstDetails from "../../blogs/Gst";
import TdsDetails from "../../blogs/Tds";

const Tax_Services = () => {
  const [activeService, setActiveService] = useState(null);

  const handleClick = (service) => {
    setActiveService(service);
  };

  const renderActiveService = () => {
    switch (activeService) {
      case "IncomeTax":
        return <IncomeTaxDetails />;
      case "GST":
        return <GstDetails />;
      case "TDS":
        return <TdsDetails />;
      default:
        return null;
    }
  };

  return (
    <div>
      {activeService ? (
        <div className={styles.fullscreenContainer}>
          {renderActiveService()}
          <button className={styles.closeButton} onClick={() => setActiveService(null)}>
            Close
          </button>
        </div>
      ) : (
        <>
          <Services title={"Tax Services"} />
          <div className={styles.datacontainer}>
            <div className={styles.data} onClick={() => handleClick("IncomeTax")}>
              <h3>Income Tax</h3>
              <p>Professional assistance in income tax planning, filing, and compliance.</p>
            </div>
            <div className={styles.data} onClick={() => handleClick("GST")}>
              <h3>Goods and Services Tax</h3>
              <p>Comprehensive GST services including registration, filing, and advisory.</p>
            </div>
            <div className={styles.data} onClick={() => handleClick("TDS")}>
              <h3>Tax Deducted at Source</h3>
              <p>Expert handling of TDS calculations, deductions, and returns.</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Tax_Services;

