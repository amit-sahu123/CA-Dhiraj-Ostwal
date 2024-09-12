"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';



const Footer = () => {
 

  
  const adminProfile = {
    Facebook: 'https://www.facebook.com/cadhirajostwal',
    LinkedIn: 'https://www.linkedin.com/in/cadhirajostwal/',
    Instagram: 'https://www.instagram.com/cadhirajostwal/',
    YouTube: 'https://www.youtube.com/@CADhirajOstwal',
    Address: '7 SHRIKRISHNA OPP KOFFEE CULTURE FC ROAD PUNE 411004',
    Email: ' dhiraj.ostwal@gmail.com',
    Phone: '70200 45454',
    GoogleMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.1359398956106!2d73.83913731120742!3d18.52275808249856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bff534505583%3A0x49b15410f40cd6e2!2sCA%20Dhiraj%20Ostwal%20%7C%20Chartered%20Accountant%20%7C%20Strategy%20Coach!5e0!3m2!1sen!2sin!4v1718954796268!5m2!1sen!2sin '
  };

  const handleButtonClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className={styles.caFooter}>
      <div className={styles.footerContainer}>
        <div className={styles.footerRow}>
          <div className={`${styles.footerItem} ${styles.fabout}`}>
            <Image src="/assets/footer-logo.png" className={styles.imgResponsive} alt="Lohia Jain Group" width={200} height={70}  />
            <ul className={`${styles.caList} ${styles.caSocialLink}`}>
              <li>
                <a href={adminProfile.Facebook} target="_blank" rel="noopener noreferrer" >
                  <FaFacebookF className={styles.icons} />
                </a>
              </li>
              <li>
                <Link href={adminProfile.LinkedIn} target="_blank"  rel="noopener noreferrer">
                  <FaLinkedinIn className={styles.icons} />
                </Link>
              </li>
              <li>
                <a href={adminProfile.Instagram} target="_blank" rel="noopener noreferrer" >
                  <FaInstagram className={styles.icons} />
                </a>
              </li>
              <li>
                <a href={adminProfile.YouTube} target="_blank" rel="noopener noreferrer">
                  <FaYoutube className={styles.icons} />
                </a>
              </li>
            </ul>
          </div>
          <div className={`${styles.footerItem} ${styles.quickLink}`}>
            <h4 className={`${styles.caHeading} ${styles.textUppercase}`}>Quick link</h4>
            <ul className={`${styles.caList} ${styles.caQuickLink} ${styles.textCapitalize}`}>
              <li><a href="/" onClick={handleButtonClick} >Home</a></li>
              <li><a href="/career" onClick={handleButtonClick} >Career</a></li>
              <li><a href="/gallerydetail" onClick={handleButtonClick}>Gallery</a></li>
              <li><a href="/contact" onClick={handleButtonClick} >Contact</a></li>
              <li><a href="/achievementsmore" onClick={handleButtonClick} >Achievements</a></li>
              <li><a href="/profile" onClick={handleButtonClick} >Profile</a></li>
              <li><a href="https://ca-dhirah-ostwal-adminpanel-pbf5.vercel.app/" onClick={handleButtonClick} >SignIn</a></li>
            </ul>
          </div>
          <div className={`${styles.footerItem} ${styles.office}`}>
            <h4 className={`${styles.caHeading} ${styles.textUppercase}`} >Office</h4>
            <ul className={`${styles.caList} ${styles.caOffice}`}>
              <li><i className="fa fa-map"></i>{adminProfile.Address}</li>
              <li><i className="fa fa-envelope"></i><Link href={`mailto:${adminProfile.Email}`} >{adminProfile.Email}</Link></li>
              <li><i className="fa fa-phone"></i><Link href={`https://wa.me/${adminProfile.Phone}`} >{adminProfile.Phone}</Link></li>
            </ul>
          </div>
          <div className={`${styles.footerItem} ${styles.latestWorks}`}>
            <h4 className={`${styles.caHeading} ${styles.textUppercase}`}>Locate Us</h4>
            <iframe
              src={adminProfile.GoogleMap}
              width="100%"
              height="230px"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
              title="Lohia Jain Group Location"
            ></iframe>
          </div>
        </div>
      </div>
      <div className={styles.footerBot}>
        <div className={styles.footerContainer}>
          <p className={styles.caText}>Design by <span className={styles.caTextColorYellow1}>EventDTL</span> <span className={styles.caTextColorYellow1}>Team</span>. </p>
          <p className={styles.caText}>All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
