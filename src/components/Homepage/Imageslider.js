import React, { useState } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "./Imageslider.css"

import imageone from "./slideImages/home5.jpg"
import imagetwo from "./slideImages/home11.jpg"
import imagethree from "./slideImages/home2.jpg"
import imagefour from "./slideImages/home9.jpg"

const firstImage = imageone;
const secondImage = imagetwo;
const thirdImage = imagethree;
const fourthImage = imagefour;

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '70vh',
  border: 'none',
}

const slideImages = [
  {
    url: firstImage,
  },
  {
    url: secondImage,
  },
  {
    url: thirdImage,
  },
  {
    url: fourthImage,
  },
];

const Imageslider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slideImages.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slideImages.length - 1 ? 0 : prevIndex + 1));
  };

//   const customArrowStyle = {
//     fontSize: '24px',
//     color: 'white',
//     background: 'rgba(0, 0, 0, 0.5)',
//     padding: '10px',
//     borderRadius: '50%',
//     cursor: 'pointer',
//   };

  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index)=> (
          <div key={index}>
            <div style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}>
              {/* <span style={spanStyle}>{slideImage.caption}</span> */}
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Imageslider;


// import React from 'react'
// import "./Imageslider.css"
// import HeroSlider, { Slide } from "hero-slider"

// // images
// import imageone from "./slideImages/home5.jpg"
// import imagetwo from "./slideImages/home11.jpg"


// const imageFirst = {imageone};
// const imageSecond = {imagetwo};

// const Imageslider = () => {
//   return (
//     <HeroSlider
//       slidingAnimation="left_to_right"
//       orientation="horizontal"
//       initialSlide={1}
//       onBeforeChange={(previousSlide, nextSlide) => console.log("onBeforeChange", previousSlide, nextSlide)}
//       onChange={nextSlide => console.log("onChange", nextSlide)}
//       onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
//       style={{
//         backgroundColor: "rgba(0, 0, 0, 0,3)"
//       }}
//       settings={{
//         slidingDuration: 250,
//         slidingDelay: 100,
//         shouldAutoplay: true,
//         shouldDisplayButtons: true,
//         autoplayDuration: 5000,
//         height: "100vh"
//       }}
//    >
//       <Slide 
//           background={{
//             backgroundImage: imageFirst,
//             backgroundAttachment: "fixed"
//           }} 
//       />

//       <Slide 
//                 background={{
//                   backgroundImage: imageSecond,
//                   backgroundAttachment: "fixed"
//                 }} 
//             />

//       <Slide 
//                 background={{
//                   backgroundImage: imageFirst,
//                   backgroundAttachment: "fixed"
//                 }} 
//             />

//       <Slide 
//                 background={{
//                   backgroundImage: imageFirst,
//                   backgroundAttachment: "fixed"
//                 }} 
//             />
//     </HeroSlider>
//   )
// }

// export default Imageslider
