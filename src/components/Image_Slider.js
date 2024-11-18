// src/components/ImageSlider.js
import React, { useState } from "react";
import "./Image_slider.css"; // We'll create this stylesheet next.

const images = [
  {
    src: "path-to-your-image-1", // Add your image paths here.
    title: "School Lab",
  },
  {
    src: "path-to-your-image-2",
    title: "Play Ground",
  },
  {
    src: "path-to-your-image-3",
    title: "School Assembly",
  },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider-container">
      <button className="slider-btn" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="slider-content">
        <img src={images[currentIndex].src} alt={images[currentIndex].title} />
        <h2>{images[currentIndex].title}</h2>
      </div>
      <button className="slider-btn" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default ImageSlider;
