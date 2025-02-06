// import React, { useState, useEffect } from 'react';

// const ImageSlider = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const slides = [
//     {
//       image: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/P7M7UBFL43RMPIVJDF2BQ5I6JA_size-normalized.jpg&w=1440",
//       text: "Breaking News 1"
//     },
//     {
//       image: "https://www.rollingstone.com/wp-content/uploads/2025/02/GettyImages-2192040369-1.jpg?w=1600&h=900&crop=1",
//       text: "Important Update 2"
//     },
//     {
//       image: "https://i.ytimg.com/vi_webp/dQw4w9WgXcQ/sddefault.webp",
//       text: "Latest Announcement 3"
//     }
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % slides.length);
//     }, 5000); // Change slide every 5 seconds

//     return () => clearInterval(interval);
//   }, []);

//   const styles = {
//     sliderContainer: {
//       position: 'relative',
//       width: '90%',
//       height: '300px',
//       overflow: 'hidden',
//       margin: '20px auto'
//     },
//     slide: {
//       position: 'absolute',
//       width: '100%',
//       height: '100%',
//       opacity: 0,
//       transition: 'opacity 1s ease-in-out'
//     },
//     activeSlide: {
//       opacity: 1
//     },
//     image: {
//       width: '100%',
//       height: '100%',
//       objectFit: 'cover'
//     },
//     caption: {
//       position: 'absolute',
//       bottom: '0',
//       left: '0',
//       right: '0',
//       backgroundColor: 'rgba(0, 0, 0, 0.5)',
//       color: 'white',
//       padding: '10px',
//       textAlign: 'center',
//       fontSize: '1.2em',
//       fontWeight: 'bold'
//     }
//   };

//   return (
//     <div style={styles.sliderContainer}>
//       {slides.map((slide, index) => (
//         <div
//           key={index}
//           style={{
//             ...styles.slide,
//             ...(activeIndex === index ? styles.activeSlide : {})
//           }}
//         >
//           <img
//             src={slide.image}
//             alt={`Slide ${index + 1}`}
//             style={styles.image}
//           />
//           <div style={styles.caption}>
//             {slide.text}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ImageSlider;

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@mui/material";
import { Button } from "@mui/material";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      title: "Breaking News",
      description: "Latest updates from around the world",
    },
    {
      title: "Important Update",
      description: "Critical information you need to know",
    },
    {
      title: "Latest Announcement",
      description: "Stay informed with our newest developments",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="w-[92%] mx-auto">
      <div className="text-center py-2">
        <h1 className="text-2xl font-bold">Featured Stories</h1>
      </div>

      <CardContent className="relative">
        <div className="relative h-96 overflow-hidden rounded-lg">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-opacity duration-500 ${
                activeIndex === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={`https://i.ytimg.com/vi_webp/dQw4w9WgXcQ/sddefault.webp`}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />

              <div className="absolute top-0 left-0 right-0 bg-white/50 p-4 text-white">
                <h2 className="text-xl font-bold text-center">{slide.title}</h2>
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-white/5 p-4 text-white">
                <p className="text-center">{slide.description}</p>
              </div>

              {/* Navigation buttons moved inside the image container */}
              {index === activeIndex && (
                <>
                  <Button
                    variant="outline"
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white z-10"
                    onClick={goToPrevious}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>

                  <Button
                    variant="outline"
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white z-10"
                    onClick={goToNext}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="absolute -bottom-6 left-0 right-0 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                activeIndex === index ? "bg-blue-600" : "bg-gray-300"
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </CardContent>
    </div>
  );
};

export default ImageSlider;
