"use client";
import React from "react";
import { useState, useEffect } from "react";
import styles from "./Career.module.css";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import Banner from "../../components/Banner";

import { useSendResume } from "../../lib/react-query/queries";

export default function Career() {
  const { mutateAsync: sendResume, isLoading: isLoadingResume } =
    useSendResume();

  const [formData, setFormData] = useState({
    name: "",
    tel: "",
    email: "",
    interest: "",
    file: null,
  });
  const [error, setError] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "tel") {
      if (/^\d*$/.test(value) && value.length <= 10) {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files ? files[0] : value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (
      !formData.name ||
      !formData.tel ||
      !formData.email ||
      !formData.file ||
      !formData.interest
    ) {
      setError("All fields are required");
      return;
    }

    // Name validation to allow only letters
    if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      setError("Name should only contain letters");
      return;
    }

    // Phone number validation to ensure it's exactly 10 digits
    if (!/^\d{10}$/.test(formData.tel)) {
      setError("Phone number must be exactly 10 digits");
      return;
    }

    const data = {
      name: formData.name,
      tel: formData.tel,
      email: formData.email,
      file: formData.file,
      interest: formData.interest,
    };

    try {
      await sendResume(data);
      setFormData({
        name: "",
        tel: "",
        email: "",
        interest: "",
        file: null,
      });
      setFormSubmitted(true);
    } catch (error) {
      setError("Failed to send resume. Please try again.");
    }
  };

  useEffect(() => {
    if (error || formSubmitted) {
      const timer = setTimeout(() => {
        setError(null);
        setFormSubmitted(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [error, formSubmitted]);

  return (
    <>
      <div className={styles.container}>
        <Banner
          imageUrl="/assets/carrer.jpg"
          breadcrumb="Career"
          headline="Career"
        />

        <div className={styles.secondcontainer}>
          <div className={styles.oppo}>
            <h2>
              CAREER <span style={{ color: "#2a88fa" }}>OPPORTUNITIES</span>
            </h2>
            <p>
              We are proud of our company and the people who work here. They
              help us set new standards for the real estate industry. Our team
              ensures customer satisfaction and construction quality, making us
              a leading real estate company in Pune.
              <br /> <br />
              We seek work-driven, goal-oriented individuals who can help us
              excel. If you are an explorer looking for opportunities, join us.
            </p>
            <img src="assets/careers.png" alt="" />
          </div>
          <div className={styles.onlineform}>
            <form onSubmit={handleSubmit}>
              <h2>APPLY ONLINE </h2>
              <div className={`${styles.formgroup} ${styles.p11}`}>
                <PersonIcon color="primary" />
                <input
                  type="text"
                  className="name"
                  name="name"
                  id="name"
                  placeholder=" Your name*"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className={`${styles.formgroup} ${styles.p11}`}>
                <AddIcCallIcon color="primary" />
                <input
                  type="tel"
                  className="phone"
                  name="tel"
                  id="phone"
                  placeholder=" Phone number*"
                  value={formData.tel}
                  onChange={handleChange}
                />
              </div>
              <div className={`${styles.formgroup} ${styles.p11}`}>
                <EmailIcon color="primary" />
                <input
                  type="email"
                  className="email"
                  name="email"
                  id="email"
                  placeholder=" Email address*"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div
                className={`${styles.formgroup} ${styles.p11} ${styles.p22}`}
              >
                <FileUploadIcon color="primary" />

                <select
                  name="interest"
                  id="interest"
                  value={formData.interest}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select your interest*
                  </option>
                  <option value="Sales">Sales</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Development">Development</option>
                  <option value="Design">Design</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              <div className={`${styles.formgroup} ${styles.p11}`}>
                <CardTravelIcon color="primary" />

                <input
                  type="file"
                  id="file"
                  name="file"
                  accept="application/pdf"
                  onChange={handleChange}
                  style={{ display: "none" }}
                />

                <label htmlFor="file" className={styles.customFileLabel}>
                  <span className="file-text">
                    {formData.file ? formData.file.name : "Upload your CV *"}
                  </span>
                </label>
              </div>

              <div className={`${styles.formgroup} ${styles.marrtop}`}>
                <button type="submit" id="button" name="button"  >
                  {" "}
                  {/* {isLoadingResume ? "Sending..." : "Send To Us"} */}

                  Send To Us
                </button>
              </div>
              {formSubmitted && (
                <p style={{ color: "green" }}>Resume sent successfully!</p>
              )}
              {error && <p style={{ color: "red" }}>{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

