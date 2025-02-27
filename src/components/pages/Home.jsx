import React from "react";
import { motion } from "framer-motion";
import "./Home.css";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import ScrollingContent from "./ScrollingContent";

const Home = () => {
  return (
    <motion.div
      className="home-wrapper"
      initial={{ scale: 0.5, opacity: 0 }} // Start smaller with no opacity
      animate={{ scale: 1, opacity: 1 }}  // Expand to full size and visible
      transition={{ duration: 3, ease: "easeOut" }} // Smooth zoom effect
      style={{ width: "100vw", height: "100vh", overflow: "hidden" }} // Ensure it covers full screen
    >
      {/* Full-Screen Background Video */}
      <div className="video-section">
        <video autoPlay loop muted className="bg-video">
          <source src="/church-bg-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Content on Worship Video */}
        <div className="overlay">
          <h2>Welcome to Victory Worship Center Page</h2>
          <p>Watch us Live!</p>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/groups/56003018318"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="social-icon facebook-icon"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.youtube.com/@VictoryWorshipCenter"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="social-icon youtube-icon"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Sherry Video (With Controls) */}
      <div className="sherry-video-container">
        <video
          controls
          playsInline
          className="sherry-video"
          preload="metadata"
          poster="/images/thumbnail.jpg"
        >
          <source src="/video/sherry.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Scrolling Content Section */}
      <ScrollingContent />
    </motion.div>
  );
};

export default Home;
