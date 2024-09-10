"use client"
import React, { useState } from 'react'
import styles from './Enquery.module.css'
import { useSaveMeeting } from '../../lib/react-query/queries'

const Enquery = ({ closeModal }) => {
  const { mutateAsync: saveMeeting, isLoading: isLoadingMeeting } =
    useSaveMeeting()

  const [formData, setFormData] = useState({
    whatsappNumber: '',
    subject: '',
    datetime: '',
  })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target

    if (name === 'whatsappNumber') {
      const phoneRegex = /^[0-9\b]+$/ // Only allow digits
      if (value === '' || phoneRegex.test(value)) {
        if (value.length <= 10) {
          setFormData((prevData) => ({
            ...prevData,
            [name]: value,
          }))
        }
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    if (!formData.whatsappNumber || !formData.subject || !formData.datetime) {
      setError('All fields are required.')
      return
    }

    const phoneRegex = /^\d{10}$/
    if (!phoneRegex.test(formData.whatsappNumber)) {
      setError('WhatsApp number must be exactly 10 digits.')
      return
    }

    const data = {
      whatsappNumber: formData.whatsappNumber,
      subject: formData.subject,
      datetime: formData.datetime,
    }

    try {
      await saveMeeting(data)
      setFormData({
        whatsappNumber: '',
        subject: '',
        datetime: '',
      })
      setFormSubmitted(true)
    } catch (error) {
      setError('Failed to send message. Please try again.')
    }
  }

  return (
    <div className={styles.formOverlay}>
      <div className={styles.formContent}>
        <button className={styles.closeButton} onClick={closeModal}>
          &times;
        </button>
        <h2>Book an Appointment</h2>
        {formSubmitted && !error && (
          <div className="successMessage" style={{ color: 'green' }}>
            Meeting scheduled successfully!
          </div>
        )}
        <form onSubmit={handleSubmit} className={styles.appointmentForm}>
          <label htmlFor="whatsappNumber">WhatsApp Number:</label>
          <input
            type="text"
            id="whatsappNumber"
            name="whatsappNumber"
            value={formData.whatsappNumber}
            onChange={handleChange}
            required
          />
          {error && error.includes('WhatsApp number') && (
            <div className="errorMessage" style={{ color: 'red' }}>
              WhatsApp number must be exactly 10 digits.
            </div>
          )}

          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <label htmlFor="datetime">Date and Time:</label>
          <input
            type="datetime-local"
            id="datetime"
            name="datetime"
            value={formData.datetime}
            onChange={handleChange}
            required
          />

          {error && !error.includes('WhatsApp number') && (
            <div className="errorMessage" style={{ color: 'red' }}>
              {error}
            </div>
          )}

          <button
            type="submit"
            className={styles.submitButton}
            disabled={isLoadingMeeting}
          >
            {isLoadingMeeting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Enquery
