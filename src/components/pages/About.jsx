import React from "react";
import "./About.css"; // Keep CSS styles
import AboutImage from "../../assets/images/about.jpg"; // ✅ Import the image

const About = () => {
  return (
    <div
      className="about-container"
      style={{
        backgroundImage: `url(${AboutImage})`, // ✅ Set imported image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="about-content">
        <h1 className="about-title">About Victory Worship Center</h1>

        <p className="about-description">
          Welcome to Victory Worship Center! We are a faith-driven community dedicated to 
          spreading the love of God, moving in the Spirit, and making an impact through worship, 
          prayer, and community outreach.
        </p>

        <h2 className="about-subtitle">Our Mission</h2>
        <p className="about-mission">
          Our mission is to create an atmosphere where people can experience God's presence,
          grow spiritually, and find a place of belonging in the body of Christ.
        </p>

        <h2 className="about-subtitle">What We Believe</h2>
        <ul className="about-list">
          <li>Jesus Christ is the Son of God and the only way to salvation.</li>
          <li>The Bible is the living and inspired Word of God.</li>
          <li>Through prayer, worship, and faith, lives can be transformed.</li>
          <li>We are called to serve our community and spread the gospel.</li>
        </ul>

        <h2 className="about-subtitle">Join Us</h2>
        <p>
          We invite you to be a part of our family! Join us for worship services, 
          Bible study, and outreach programs. No matter where you are in life, there is 
          a place for you at Victory Worship Center.
        </p>
      </div>
    </div>
  );
};

export default About;
