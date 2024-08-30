"use client"
import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "./Blog.module.css"; 
import Modal from "../services/Enquery";

const Gst = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Expert GST Services by CA Dhiraj Ostwal</title>
        <meta
          name="description"
          content="Our CA Dhiraj Ostwal provides comprehensive GST services, including registration, compliance, and filing. Simplify your GST obligations with our expert support and accurate solutions."
        />
        <link rel="canonical" href="https://www.cadhirajostwal.com/services/taxservices/gst" />
        <meta
          name="keywords"
          content="gst services, gst verification, GST registration, GST payment, gst meaning, gst return, gst rates, filing gst, fee for gst registration, file for gst, gst register fees, food safety standards authority of india, fee for gst registration, gst registration fees, gst registration cost, gst filing, gst act, GST return filing, process for gst registration, gst registration process, gst register process, procedure of gst registration, process of gst registration, gst registration process, gst services, gst return filing, gst registration process, gst rates in india, gst register process, process of gst registration, registration process in gst, gst registration procedure, gst registration online, gst helpline number, gst in india, gst slab rates, gst returns due dates, gst registration new, GST exemptions, gst registration turnover limit, GST consultancy, gst registration near me, GST compliance, GST refund process"
        />
      </Head>
      <div className={styles["main-container"]}>
        <div className={styles.title}>
          <h1>GST in India: A Comprehensive Guide for Businesses</h1>
        </div>
        <div className={styles.body}>
          <div className={styles.links}>
            <Link href="/services/taxservices/incometax">
              <h1>Income Tax</h1>
            </Link>
            <Link href="/services/taxservices/tds">
              <h1>Tax Deducted at Source (TDS)</h1>
            </Link>
          </div>
          <div className={styles.blog}>
            <p>
              The Goods and Services Tax (GST) has revolutionized India's taxation
              system since its implementation on July 1, 2017. This comprehensive
              guide will walk you through the fundamentals of GST, its
              registration process, key concepts, compliance requirements, and
              beyond.
            </p>
            <h1>1. Understanding the Basics of GST</h1>
            <h3>What is GST?</h3>
            <p>
              GST, or Goods and Services Tax, is a comprehensive indirect tax
              levied on the supply of goods and services in India. It has replaced
              multiple indirect taxes, simplifying the tax structure and creating
              a unified market across the country.
            </p>
            <h3>Benefits of GST for Businesses</h3>
            <p>GST offers numerous advantages for businesses:</p>
            <div className={styles.unordered1}>
              <ul>
                <li>
                  Simplified tax structure: GST has eliminated the cascading
                  effect of multiple taxes, streamlining the taxation process.
                </li>
                <li>
                  Reduced compliance burden: With a single tax system, businesses
                  now deal with fewer tax filings and regulations.
                </li>
                <li>
                  Wider market access: GST has removed inter-state tax barriers,
                  allowing businesses to expand their operations across India more
                  easily.
                </li>
                <li>
                  Enhanced transparency: The digital GST system promotes
                  transparency and reduces tax evasion.
                </li>
                <li>
                  Input Tax Credit (ITC): Businesses can claim credit for taxes
                  paid on inputs, reducing overall tax liability.
                </li>
              </ul>
            </div>
            {/* ...remaining content unchanged... */}
          </div>
          <div className={styles.Ads}>
            <div className={styles["blog-button"]}>
              <div className={styles["whatsapp-button"]}>
                <button
                  className={styles["blog-btn"]}
                  onClick={() =>
                    window.open(
                      "https://wa.me/7020045454?text=Hi%20there,%20I'm%20interested%20in%20your%20services.",
                      "_blank",
                      "noopener noreferrer"
                    )
                  }
                >
                  <img
                    width="25"
                    height="25"
                    src="https://img.icons8.com/color/48/whatsapp--v1.png"
                    alt="whatsapp--v1"
                  />
                  Connect with WhatsApp
                </button>
              </div>
              <div className={styles["appointment-button"]}>
                <button
                  className={styles["blog-btn"]}
                  onClick={() => setModalOpen(true)}
                >
                  <img
                    width="25"
                    height="25"
                    src="https://img.icons8.com/color/48/tear-off-calendar--v1.png"
                    alt="tear-off-calendar--v1"
                  />
                  Book an Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && <Modal closeModal={() => setModalOpen(false)} />}
    </>
  );
};

export default Gst;
