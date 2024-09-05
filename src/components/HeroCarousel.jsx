import React, { useState, useEffect } from 'react';
import hero1 from '../assets/hero_1.png';


const HeroCarousel = () => {
  // Array of images with src and alt attributes
  const images = [
    { src: hero1, alt: 'Hero One' },
    { src: hero1, alt: 'Hero Two' },
    { src: hero1, alt: 'Hero Three' },
    { src: hero1, alt: 'Hero Four' },
    { src: hero1, alt: 'Hero Five' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide the carousel every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div className="w-full h-[640px] overflow-hidden">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full h-full object-cover transition-all duration-700"
        />
      </div>

      {/* Center Button */}
      <button className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent text-white px-16 py-2 mt-20 border border-white rounded">
        Meet Chef Matt
      </button>
    </div>
  );
};

export default HeroCarousel;
