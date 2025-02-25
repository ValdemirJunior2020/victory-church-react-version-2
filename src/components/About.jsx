import React from "react";
import "./About.css"; // Import CSS

const About = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <h1>About Us</h1>

        <h2>Mission Statement</h2>
        <p>
          <strong>Colossians 3:12-14</strong><br />
          Therefore, as God's chosen people, holy and dearly loved, clothe yourselves with compassion, kindness, humility, patience, and love.
        </p>

        <h2>Greatest Commandment</h2>
        <p>
          To love the Lord thy God with all your heart, with all your soul, with all your mind, with all your strength, and to love your neighbor as yourself.
        </p>

        <h2>What We Believe</h2>
        <p>
          We are a Full Gospel church that believes in all the offices: Apostle, Prophet, Pastor, Teacher, Evangelist.<br />
          We believe in all the gifts of the Spirit and operate in them.<br />
          We are a strong prophetic church.<br />
          We believe the Lord is coming for a pure church.<br />
          We believe He desires to run the church, not man.<br />
          We believe that Jesus is our salvation and the only way to have eternal life.<br />
          We believe that worship is powerful and ushers us into the presence of the Lord.
        </p>

        <h2>Our Goal</h2>
        <p>
          To see the lost saved.<br />
          To encourage believers to grow in their faith.<br />
          To help believers know the voice of the Lord.<br />
          To guide believers in operating in their natural and God-ordained gifts.
        </p>
      </div>
    </div>
  );
};

export default About;
