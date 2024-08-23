import React from 'react'
import styles from './Signin.module.css'

export default function Signin() {
  return (
      
    <>
    <section className={styles.maincontainer}>
      <div className={styles.container}>

        <h2>Admin Login</h2>
         
        <div className={styles.data}>
        <form action="">
        <div className={styles.formper}>
            <label htmlFor="email">Email</label>
            <input type="email" id='email' className='email' placeholder='Enter Email' />
        </div>
        <div className={styles.formper}>
            <label htmlFor="password">Password</label>
            <input type="password" id='password' className='password' placeholder='Enter Password'/>
        </div>
        <div className={styles.formper}>
            <button type='submit' className={styles.btn}> Log in</button>
        </div>

        </form>
    
        
        </div>

        
      </div>
    </section>

    </>
  )
}
