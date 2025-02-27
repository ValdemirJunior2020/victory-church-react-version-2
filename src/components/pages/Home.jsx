import React from "react";
import "./Home.css";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import ScrollingContent from "./ScrollingContent";

const Home = () => {
  return (
    <div className="home-wrapper">
      {/* Full-Screen Background Video */}
      <div className="video-section">
        <video autoPlay loop muted playsInline preload="auto" className="bg-video">
          <source src={`${process.env.PUBLIC_URL}/church-bg-video.mp4`} type="video/mp4" />
          <source src={`${process.env.PUBLIC_URL}/church-bg-video.webm`} type="video/webm" />
          <source src={`${process.env.PUBLIC_URL}/church-bg-video.ogg`} type="video/ogg" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Content on Worship Video */}
        <div className="overlay">
          <h2>Welcome to Victory Worship Center Page</h2>
          <p>Watch us Live!</p>
          <div className="social-icons">
            {/* Facebook Icon with Redirect */}
            <a
              href="https://www.facebook.com/groups/56003018318"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="social-icon facebook-icon"
            >
              <FaFacebookF />
            </a>

            {/* YouTube Icon with Redirect */}
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

      {/* Additional Video Section */}
      <div className="sherry-video-container">
        <video 
          controls 
          playsInline 
          preload="metadata"
          className="sherry-video" 
          poster={`${process.env.PUBLIC_URL}/images/thumbnail.jpg`}
        >
          <source src={`${process.env.PUBLIC_URL}/video/sherry.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Scrolling Content Section */}
      <ScrollingContent />
    </div>
  );
};

export default Home;
