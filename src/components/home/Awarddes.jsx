// "use client";
// import { images } from "./Constants";

// // Description component
// const Description = ({ activeImgIndex, clickNext, clickPrev }) => {
//   const { desc } = images[activeImgIndex];

//   return (
//     <div className="p-6 flex flex-col justify-center items-center bg-white rounded-b-2xl w-full">
//       <h5 className="mb-4">{desc}</h5>
//     </div>
//   );
// };

"use client";
import { images } from "./Constants";
import styles from './Awarddes.module.css'; // Import the CSS module

const Description = ({ activeImgIndex, clickNext, clickPrev }) => {
  const { desc } = images[activeImgIndex];

  return (
    <div className={styles.container}>
      <h5>{desc}</h5>
    </div>
  );
};

export default Description;

