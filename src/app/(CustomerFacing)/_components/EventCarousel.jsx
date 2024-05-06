"use client";

import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const EventCarousel = ({ images }) => {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      showIndicators={true}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
      swipeable={true}
      dynamicHeight={true}
      centerMode={true}
      centerSlidePercentage={70}
      swipeScrollTolerance={50}
      className="event-carousel sm:px-4 md:px-8 lg:px-16"
    >
      {images.map((image, index) => (
        <div key={index} className="carousel-item relative px-2 sm:px-4">
          <Image
            src={image}
            width={400}
            height={400}
            alt={`Slide ${index + 1}`}
            className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 h-auto mx-auto object-cover rounded-lg shadow-md"
          />
        </div>
      ))}
    </Carousel>
  );
};

export default EventCarousel;

// "use client";

// import Image from "next/image";
// import React from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// const EventCarousel = ({ images }) => {
//   return (
//     <Carousel
//       showThumbs={false}
//       showStatus={false}
//       showIndicators={true}
//       infiniteLoop={true}
//       autoPlay={true}
//       interval={3000}
//       swipeable={true}
//       dynamicHeight={true}
//       centerMode={true}
//       centerSlidePercentage={70}      
//       swipeScrollTolerance={50}
//       className="event-carousel"
//     >
//       {images.map((image, index) => (
//         <div key={index} className="carousel-item relative px-2">
//           <Image
//             src={image}
//             width={400}
//             height={400}
//             alt={`Slide ${index + 1}`}
//             className="w-full h-auto object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out transform scale-100 hover:scale-110 z-0 hover:z-10"
//           />
//         </div>
//       ))}
//     </Carousel>
//   );
// };

// export default EventCarousel;

