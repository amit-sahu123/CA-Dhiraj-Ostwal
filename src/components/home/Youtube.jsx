"use client";
// import React, { useState, useEffect } from 'react';
// import styles from './Youtube.module.css';
// import { useGetAllYoutube } from '../../lib/react-query/queries';
// import Spinner from '../../loading/Spinner';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// export default function Youtube() {
//   const { data: youtubeData, isLoading: isLoadingYoutube } = useGetAllYoutube();
  
//   const [videos, setVideos] = useState([]);
//   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

//   useEffect(() => {
//     if (youtubeData) {
//       setVideos(youtubeData.documents);
//     }
//   }, [youtubeData]);

//   if (isLoadingYoutube) {
//     return <Spinner />;
//   }

//   if (!videos || videos.length === 0) {
//     return (
//       <div style={{ textAlign: 'center', padding: '20px' }}>
//         <h1>No videos available</h1>
//       </div>
//     );
//   }

//   const currentVideo = videos[currentVideoIndex].YoutubeUrl;

//   const getEmbedUrl = (url) => {
//     const videoId = url.includes("watch?v=") ? url.split("watch?v=")[1].split("&")[0] : url.split("youtu.be/")[1];
//     return `https://www.youtube.com/embed/${videoId}`;
//   };

//   const youtubeEmbedUrl = getEmbedUrl(currentVideo);

//   const handlePrev = () => {
//     setCurrentVideoIndex((prevIndex) => (prevIndex === 0 ? videos.length - 1 : prevIndex - 1));
//   };

//   const handleNext = () => {
//     setCurrentVideoIndex((prevIndex) => (prevIndex === videos.length - 1 ? 0 : prevIndex + 1));
//   };

//   return (
//     <div className={styles.main}>
//       <div className={styles.container}>
//         <div className={styles.youtubetext}>
//           <h3> YouTube </h3>
//         </div>
//         <div className={styles.videoContainer}>
//           {/* <iframe
//             width="100%"
//             height="100%"
//             src={youtubeEmbedUrl}
//             title="YouTube video player"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             referrerPolicy="strict-origin-when-cross-origin"
//             allowFullScreen
//           ></iframe> */}

//           <iframe
//          width='100%'
//          height='100%'
//          src={youtubeEmbedUrl}
          
//           // title="YouTube video player"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//           referrerPolicy="strict-origin-when-cross-origin"
//           allowFullScreen
//         ></iframe>

          
//         </div>
//         <div className={styles.controls}>
//           <button className={styles.controlButton1} onClick={handlePrev}>
//             {/* <span className="carousel-control-prev-icon" ></span> */}
//             <ArrowBackIosIcon/>
//           </button>
//           <button className={styles.controlButton2} onClick={handleNext}>
//            <ArrowForwardIosIcon/>
//             {/* <span className="carousel-control-next-icon" ></span> */}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client"
import React,{useState} from 'react';
import styles from './Youtube.module.css';
// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// import SkipNextIcon from '@mui/icons-material/SkipNext';

const videos=[
    "https://www.youtube.com/embed/BGKH1FJ2YkQ?si=LdAex3ytJNpvbG1U&amp;start=3",
    "https://www.youtube.com/embed/ftVppmrUrsU?si=yDqmuStFteqy0LaD&amp;start=3", 
    "https://www.youtube.com/embed/L-U8XJAzJak?si=pi_JpP7hlVjTwXug&amp;start=3", 
    "https://www.youtube.com/embed/ypZi5GH6YHY?si=Layi83vSSiSRW66h&amp;start=3" ,
    "https://www.youtube.com/embed/Py_UysMtEPI?si=FRv_IGhqmrJD7eb_&amp;start=3",
];

export default function Youtube() {
    const[currentVideoIndex,setCurrentVideoIndex]=useState(0);

    const handlePrev = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex === 0 ? videos.length - 1 : prevIndex - 1));
      };
    
      const handleNext = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex === videos.length - 1 ? 0 : prevIndex + 1));
      };
    
  return (
    <div className={styles.container}>
      <div className={styles.youtubetext}>
        <h3> YouTube </h3>
      </div>
      <div className={styles.videoContainer}>
        <iframe
         width='100%'
         height='100%'
         src={videos[currentVideoIndex]}
          
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
        
      <div className={styles.controls}>
          <button className={styles.controlButton1} onClick={handlePrev}>
            {/* <span className="carousel-control-prev-icon" ></span> */}
            <ArrowBackIosIcon/>
          </button>
          <button className={styles.controlButton2} onClick={handleNext}>
           <ArrowForwardIosIcon/>
            {/* <span className="carousel-control-next-icon" ></span> */}
          </button>
        </div>

      

    </div>
  );
}


