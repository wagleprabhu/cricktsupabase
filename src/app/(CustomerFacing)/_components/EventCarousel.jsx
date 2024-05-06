"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const EventCarousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [images]);

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  return (
    <div className="relative">
      <div className="relative w-full h-0 pb-[56.25%] sm:pb-[45%] md:pb-[40%] lg:pb-[35%] xl:pb-[30%] overflow-hidden rounded-lg shadow-md">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              fill
              alt={`Slide ${index + 1}`}
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ))}
      </div>
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full px-4">
        <button
          className="bg-white bg-opacity-50 hover:bg-opacity-75 text-gray-800 font-bold py-2 px-4 rounded-full focus:outline-none"
          onClick={goToPreviousSlide}
        >
          <FaChevronLeft />
        </button>
        <button
          className="bg-white bg-opacity-50 hover:bg-opacity-75 text-gray-800 font-bold py-2 px-4 rounded-full focus:outline-none"
          onClick={goToNextSlide}
        >
          <FaChevronRight />
        </button>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full focus:outline-none ${
              index === currentSlide ? "bg-white" : "bg-gray-300"
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default EventCarousel;

// "use client";

// import Image from "next/image";
// import React, { useState, useEffect } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const EventCarousel = ({ images }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
//     }, 3000);

//     return () => {
//       clearInterval(timer);
//     };
//   }, [images]);

//   const goToPreviousSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
//   };

//   const goToNextSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
//   };

//   return (
//     <div className="relative">
//       <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-lg shadow-md">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-opacity duration-500 ${
//               index === currentSlide ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             <Image
//               src={image}
//               fill
//               alt={`Slide ${index + 1}`}
//               className="object-cover"
//               sizes="100vw"
//             />
//           </div>
//         ))}
//       </div>
//       <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full px-4">
//         <button
//           className="bg-white bg-opacity-50 hover:bg-opacity-75 text-gray-800 font-bold py-2 px-4 rounded-full focus:outline-none"
//           onClick={goToPreviousSlide}
//         >
//           <FaChevronLeft />
//         </button>
//         <button
//           className="bg-white bg-opacity-50 hover:bg-opacity-75 text-gray-800 font-bold py-2 px-4 rounded-full focus:outline-none"
//           onClick={goToNextSlide}
//         >
//           <FaChevronRight />
//         </button>
//       </div>
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             className={`w-3 h-3 rounded-full focus:outline-none ${
//               index === currentSlide ? "bg-white" : "bg-gray-300"
//             }`}
//             onClick={() => setCurrentSlide(index)}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EventCarousel;

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
//       className="event-carousel sm:px-4 md:px-8 lg:px-16"
//     >
//       {images.map((image, index) => (
//         <div key={index} className="carousel-item relative px-2 sm:px-4">
//           <Image
//             src={image}
//             width={600}
//             height={600}
//             alt={`Slide ${index + 1}`}
//             className="w-full h-full object-scale-down mx-auto rounded-lg shadow-md"
//           />
//           {/* <Image
//             src={image}
//             width={600}
//             height={600}
//             alt={`Slide ${index + 1}`}
//             className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 h-full mx-auto object-cover rounded-lg shadow-md"
//           /> */}
//         </div>
//       ))}
//     </Carousel>
//   );
// };

// export default EventCarousel;

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
