// import React from 'react'
// import styles from './FollowUs.module.css'

// export default function FollowUs() {
//   return (
//     <div className={styles.cantainer}>
//         <div className={styles.containerfirst}>
//             <h1 style={{fontWeight:'bold'}}> <span className={styles.Fol}>Fol</span>low Us</h1>
//             <h3 className={styles.subheading}>Find here our latest post</h3>

//             <div className={styles.media}>
//             <div className={styles.facebook}>
//             <iframe  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fcadhirajostwal%2F&amp;tabs=timeline&amp;width=520&amp;height=500&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId" width="100%" height="450"></iframe>
//                  {/* <iframe
//                 src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fcadhirajostwal%2Fphotos&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
//                 width="150%"
//                 height="500"
//                 style={{
//                     border: 'none',
//                     overflow: 'hidden'
//                 }}
//                 scrolling="no"
//                 frameBorder="0"
//                 allowFullScreen
//                 allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
//                 title="Facebook Page Embed"
//                 ></iframe>  */}
//             </div>
//             <div className={styles.instagram}>
            
//              <iframe src="https://www.instagram.com/cadhirajostwal/embed/" width="100%" height="450"></iframe> 
//             </div>
//             </div>
            


            
//         </div>
        

//     </div>
      
//   )
// }

import React from 'react';
import styles from './FollowUs.module.css';

export default function FollowUs() {
  return (
    <div className={styles.container}>
      <div className={styles.containerFirst}>
        <h1 style={{ fontWeight: 'bold', textAlign:'center' }}>
          <span className={styles.Fol}>Fol</span>low Us
        </h1>
        <h3 className={styles.subheading} style={{textAlign:'center'}}>Find here our latest posts</h3>

        <div className={styles.media}>
          <div className={styles.facebook}>
            <a href="https://www.facebook.com/cadhirajostwal" target="_blank" rel="noopener noreferrer">
              <img 
                src='/assets/screenfacebook.png' 
                alt="Facebook Screenshot" 
                className={styles.socialImage}
              />
            </a>
          </div>

          <div className={styles.instagram}>
            <a href="https://www.instagram.com/cadhirajostwal/" target="_blank" rel="noopener noreferrer">
              <img 
                src='/assets/amitsahu.png' 

                alt="Instagram screenshot" 
                className={styles.socialImage}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
