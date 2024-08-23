"use client";
import React, { useState, useEffect, useRef } from 'react';
import styles from './Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { YouTube } from '@mui/icons-material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Offcanvas from './Offcanvas';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


export default function Navbar() {
    const [insightsAnchorEl, setInsightsAnchorEl] = useState(null);
    const openInsights = Boolean(insightsAnchorEl);
    const handleInsightsClick = (event) => {
        setInsightsAnchorEl(event.currentTarget);
    };
    const handleInsightsClose = () => {
        setInsightsAnchorEl(null);
    };

    const [servicesAnchorEl, setServicesAnchorEl] = useState(null);
    const openServices = Boolean(servicesAnchorEl);
    const handleServicesClick = (event) => {
        setServicesAnchorEl(event.currentTarget);
    };
    const handleServicesClose = () => {
        setServicesAnchorEl(null);
    };
   
   

    return (
        <>
            <nav className={styles.container}>
                <div className={styles.first}>
                    <Image src="/assets/CALOGO.png" alt="Logo" width={200} height={100} />
                </div>
                <div className={styles.second}>
                    <div className={styles.MenuIcon}>
                        <Offcanvas />
                    </div>
                    <div className={styles.media}>
                        <Link href="https://www.youtube.com/@CADhirajOstwal" className={styles.yt}>
                            <YouTube style={{ fontSize: 32 }} />
                        </Link>
                        <Link href="https://www.instagram.com/cadhirajostwal/" className={styles.ig}>
                            <InstagramIcon style={{ fontSize: 32 }} />
                        </Link>
                        <Link href="https://www.facebook.com/cadhirajostwal" className={styles.fb}>
                            <FacebookIcon style={{ fontSize: 32 }} />
                        </Link>
                        <Link href="https://www.linkedin.com/in/cadhirajostwal/" className={styles.li}>
                            <LinkedInIcon style={{ fontSize: 32 }} />
                        </Link>
                        <Link href="mailto:Dhiraj.ostwal@gmail.com?subject=Hello&body=Message" className={styles.em}>
                            <EmailIcon style={{ fontSize: 32 }} />
                        </Link>
                    </div>
                    <div className={styles.data}>
                        <ul className="nav">
                            <li className="nav-item">
                                <Link href="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Button
                                    id="services-button"
                                    aria-controls={openServices ? 'services-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={openServices ? 'true' : undefined}
                                    onClick={handleServicesClick}
                                    className={styles.menuButton} 
                                >
                                    Services
                                    <ArrowDropDownIcon />
                                </Button>
                                <Menu
                                    id="services-menu"
                                    anchorEl={servicesAnchorEl}
                                    open={openServices}
                                    onClose={handleServicesClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'services-button',
                                    }}
                                >
                                    <MenuItem onClick={handleServicesClose} >
                                        <Link href="/services/tax_services" style={{color:'black',textDecoration:'none'}}>Tax Services</Link>
                                    </MenuItem>
                                    <MenuItem onClick={handleServicesClose}>
                                        <Link href="/services/company_formation_reg" style={{color:'black',textDecoration:'none'}}>Company Formation and Registration</Link>
                                    </MenuItem>
                                    <MenuItem onClick={handleServicesClose}>
                                        <Link href="/services/auditservices" style={{color:'black',textDecoration:'none'}}>Audit Services</Link>
                                    </MenuItem>
                                    <MenuItem onClick={handleServicesClose}>
                                        <Link href="/services/drafting_agreements" style={{color:'black',textDecoration:'none'}}> Drafting and Agreements</Link>
                                    </MenuItem>
                                    <MenuItem onClick={handleServicesClose}>
                                        <Link href="/services/appeals_litigations" style={{color:'black',textDecoration:'none'}}>Appeals and Litigations</Link>
                                    </MenuItem>
                                    <MenuItem onClick={handleServicesClose}>
                                        <Link href="/services/advisory_services" style={{color:'black',textDecoration:'none'}}>Advisory Services</Link>
                                    </MenuItem>
                                    <MenuItem onClick={handleServicesClose}>
                                        <Link href="/services/other_services" style={{color:'black',textDecoration:'none'}}>Other Services</Link>
                                    </MenuItem>
                                </Menu>
                            </li>
                            <li className="nav-item">
                                <Button
                                    id="insights-button"
                                    aria-controls={openInsights ? 'insights-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={openInsights ? 'true' : undefined}
                                    onClick={handleInsightsClick}
                                    className={styles.menuButton} 
                                >
                                    Insights
                                    <ArrowDropDownIcon />
                                </Button>
                                <Menu
                                    id="insights-menu"
                                    anchorEl={insightsAnchorEl}
                                    open={openInsights}
                                    onClose={handleInsightsClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'insights-button',
                                    }}
                                >
                                    <MenuItem onClick={handleInsightsClose}>
                                        <Link href="/achievementsmore" style={{color:'black',textDecoration:'none'}}>Achievements</Link>
                                    </MenuItem>
                                    <MenuItem onClick={handleInsightsClose}>
                                        <Link href="/profile" style={{color:'black',textDecoration:'none'}}>Profile</Link>
                                    </MenuItem>
                                    <MenuItem onClick={handleInsightsClose}>
                                        <Link href="/gallerydetail" style={{color:'black',textDecoration:'none'}}>Gallery</Link>
                                    </MenuItem>
                                    <MenuItem onClick={handleInsightsClose}>
                                        <Link href="/news" style={{color:'black',textDecoration:'none'}}>News</Link>
                                    </MenuItem>
                                    <MenuItem onClick={handleInsightsClose}>
                                        <Link href="/reviews" style={{color:'black',textDecoration:'none'}}>Reviews</Link>
                                    </MenuItem>
                                </Menu>
                            </li>
                            
                            <li className="nav-item">
                                <Link href="/career">Career</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/signin">Signin</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

