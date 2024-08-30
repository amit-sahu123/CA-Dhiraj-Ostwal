import React  from 'react'
import { useState } from 'react'
import styles from './Services.module.css'
import { useSaveMeeting } from '../../lib/react-query/queries'


export default function Modal() {
  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Book an Appointment</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        {/* <div className="modal-body"> */}
        <div className={styles.container}> 
            <form action=" ">
                <div className={styles.formgroup}>
                  <label htmlFor="number">WhatsApp Number</label>
                  <input type="number" id='number' name='number' placeholder='Enter...'/>
                </div>

                <div className={styles.formgroup}>
                <label htmlFor="subject">Subject</label>
                <input type="text" id='subject' name='subject' placeholder='Enter...' />
                </div>

                <div className={styles.formgroup}>
                <label htmlFor="birthdaytime">Date And Time</label>
                <input type="datetime-local" id="birthdaytime" name="birthdaytime"/>
                </div>

                <div className={styles.formgroup}>
                <button type='submit' className= {`${styles.formgroup} ${styles.btn}`} >Submit</button>
                </div>


            </form>
        
        </div>
        <div className="modal-footer">
          {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
          {/* <button type="button" className="btn btn-primary">Save changes</button> */}
        </div>
      </div>
    </div>
  </div>
  )
}
