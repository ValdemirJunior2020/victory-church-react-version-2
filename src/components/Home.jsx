import React from "react";
import "./Home.css";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import ScrollingContent from "./ScrollingContent";

const Home = () => {
  return (
    <div>
      <div className="home-container">
        {/* Background Video */}
        <video autoPlay loop muted className="bg-video">
          <source src="/church-bg-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Content */}
        <div className="overlay">
          <h1>Welcome to Church</h1>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/groups/56003018318"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="facebook-icon"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.youtube.com/@VictoryWorshipCenter"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="youtube-icon"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Scrolling Content Section */}
      <ScrollingContent />
    </div>
  );
};

export default Home;
