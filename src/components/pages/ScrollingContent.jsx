import React from "react";
import "./ScrollingContent.css";

const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
  "/images/image5.jpg",
  "/images/image6.jpg",
  "/images/image7.jpg",
  "/images/image8.jpg",
];

const ScrollingContent = () => {
  return (
    <div className="scrolling-container">
      {/* 7 Image Cards */}
      <div className="image-section">
        {images.map((src, index) => (
          <div key={index} className="image-card">
            <img src={src} alt={`Church Event ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingContent;
