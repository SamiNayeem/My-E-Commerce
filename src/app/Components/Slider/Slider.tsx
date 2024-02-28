"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = ["/strawberry.jpg", "/nuts.jpg", "/dessert.jpg"]; // Add two more of the same images

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  useEffect(() => {
    const interval = setInterval(handleNextSlide, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval); // Cleanup function to clear interval when component unmounts
  }, [currentSlide]);

  return (
    <main>
      <div className="relative">
        {/* Slide images */}
        <div className=" w-full h-96 overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-[600ms] ease-in-out ${
                currentSlide === index ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <Image src={slide} alt={`Slide ${index + 1}`} layout="fill" objectFit="cover" />
              {/* Add caption for each slide */}
            </div>
          ))}
        </div>

        {/* Controller buttons */}
        <button
          onClick={handlePrevSlide}
          className="absolute bottom-0 left-0 z-[1] flex items-center justify-center w-12 h-12 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition-opacity duration-150 ease-in-out"
          type="button"
        >
          {/* Add previous button icon */}
          Prev
        </button>

        <button
          onClick={handleNextSlide}
          className="absolute bottom-0 right-0 z-[1] flex items-center justify-center w-12 h-12 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition-opacity duration-150 ease-in-out"
          type="button"
        >
          {/* Add next button icon */}
          Next
        </button>
      </div>
    </main>
  );
};

export default Slider;
