import React from 'react'
import styles from './Newsblog.module.css'
import NewsData from './Newsblogdata'

export default function Newsblog() {
  return (
    <div className={styles.container}>
        <div className={styles.first}>
           <div className={styles.news} >News</div>
           <div className={styles.blog}> Blog</div>
        </div>
        <div className={styles.second}>
           <div className={styles.data}>
          {
            NewsData.map((item,index)=>(
              <div key={index} className={styles.info}>
              <h3>{item.nname}</h3>
              <p> {item.descri} </p>
              </div>
            ))
          }
        </div>

        </div>
      
    </div>
  )
}
