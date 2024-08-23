"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';
// import { useGetAdminProfile } from '../../lib/react-query/queries';



const Footer = () => {
  // const { data: adminProfile1, isLoading: isLoadingAdminProfile, refetch } = useGetAdminProfile();
 

  
  const adminProfile = {
    Facebook: 'https://www.facebook.com/cadhirajostwal',
    LinkedIn: 'https://www.linkedin.com/in/cadhirajostwal/',
    Instagram: 'https://www.instagram.com/cadhirajostwal/',
    YouTube: 'https://www.youtube.com/@CADhirajOstwal',
    Address: '7 SHRIKRISHNA OPP KOFFEE CULTURE FC ROAD PUNE 411004',
    Email: 'Dhiraj.ostwal@gmail.com',
    Phone: '70200 45454',
    WhatsApp: '70200 45454',
    GoogleMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.925382168417!2d-77.03687018464588!3d38.897676279570455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7bea30b2b45%3A0x4e7d0b5f7dbe88d1!2sWhite%20House!5e0!3m2!1sen!2sus!4v1626961234926!5m2!1sen!2sus'
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
                <Link href={adminProfile.Facebook} target="_blank" rel="noopener noreferrer" prefetch={true}>
                  <FaFacebookF className={styles.icons} />
                </Link>
              </li>
              <li>
                <Link href={adminProfile.LinkedIn} target="_blank" prefetch={true}>
                  <FaLinkedinIn className={styles.icons} />
                </Link>
              </li>
              <li>
                <Link href={adminProfile.Instagram} target="_blank" prefetch={true}>
                  <FaInstagram className={styles.icons} />
                </Link>
              </li>
              <li>
                <Link href={adminProfile.YouTube} target="_blank" prefetch={true}>
                  <FaYoutube className={styles.icons} />
                </Link>
              </li>
            </ul>
          </div>
          <div className={`${styles.footerItem} ${styles.quickLink}`}>
            <h4 className={`${styles.caHeading} ${styles.textUppercase}`}>Quick link</h4>
            <ul className={`${styles.caList} ${styles.caQuickLink} ${styles.textCapitalize}`}>
              <li><Link href="/" onClick={handleButtonClick} prefetch={true}>Home</Link></li>
              <li><Link href="/career" onClick={handleButtonClick} prefetch={true}>Career</Link></li>
              <li><Link href="/gallerydetail" onClick={handleButtonClick}prefetch={true}>Gallery</Link></li>
              <li><Link href="/contact" onClick={handleButtonClick} prefetch={true}>Contact</Link></li>
              <li><Link href="/achievementsmore" onClick={handleButtonClick} prefetch={true}>Achievements</Link></li>
              <li><Link href="/profile" onClick={handleButtonClick} prefetch={true}>Profile</Link></li>
              <li><Link href="/news" onClick={handleButtonClick} prefetch={true}>News & Blogs</Link></li>
            </ul>
          </div>
          <div className={`${styles.footerItem} ${styles.office}`}>
            <h4 className={`${styles.caHeading} ${styles.textUppercase}`}>Office</h4>
            <ul className={`${styles.caList} ${styles.caOffice}`}>
              <li><i className="fa fa-map"></i>{adminProfile.Address}</li>
              <li><i className="fa fa-envelope"></i><Link href={`mailto:${adminProfile.Email}`} prefetch={true}>{adminProfile.Email}</Link></li>
              <li><i className="fa fa-phone"></i><Link href={`https://wa.me/${adminProfile.Phone}`} prefetch={true}>{adminProfile.Phone}</Link></li>
              <li><i className="fa fa-mobile"></i>{adminProfile.WhatsApp}</li>
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
