import React from "react";
import "./Contact.css"; // ✅ Import styles

const Contact = () => {
  return (
    <div className="contact-container">
      {/* ✅ Contact Info Section (Top of Page) */}
      <div className="contact-info">
        <p><strong>📍 Address:</strong> 1915 N A St, Lake Worth Beach, FL 33460</p>
        <p><strong>📞 Phone:</strong> (561) 585-0130</p>
        <p><strong>📧 Email:</strong> example@gmail.com</p>
      </div>

      <h1 className="text-center contact-title">Contact Us</h1>

      <div className="contact-grid">
        {/* Church Location */}
        <div className="contact-card">
          <h5 className="contact-title text-primary">Our Location</h5>
          <p>Victory Worship Center</p>
          <p>1915 N A St, Lake Worth Beach, FL 33460</p>
          <p><strong>Phone:</strong> (561) 585-0130</p>
          <p><strong>Email:</strong> example@gmail.com</p>
        </div>

        {/* Office Hours */}
        <div className="contact-card">
          <h5 className="contact-title text-success">Office Hours</h5>
          <p><strong>Monday - Friday:</strong> 9 AM - 5 PM</p>
          <p><strong>Sunday Service:</strong> 10 AM - 12 PM</p>
        </div>

        {/* Social Media Links */}
        <div className="contact-card">
          <h5 className="contact-title text-info">Follow Us</h5>
          <p>
            <a href="https://www.facebook.com/groups/56003018318" target="_blank" rel="noopener noreferrer" className="social-link">
              Facebook
            </a>
          </p>
          <p>
            <a href="https://www.youtube.com/@VictoryWorshipCenter" target="_blank" rel="noopener noreferrer" className="social-link">
              YouTube
            </a>
          </p>
        </div>

        {/* Google Map (Full Width with Marker) */}
        <div className="contact-map">
          <h5 className="contact-title text-warning">Find Us on Google Maps</h5>
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3521.718779595406!2d-80.05921828498264!3d26.61923088323345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8d46f8b8b7075%3A0xabc1234567890!2sVictory%20Worship%20Center!5e0!3m2!1sen!2sus!4v1645827910123!5m2!1sen!2sus"
            width="100%"
            height="450"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>

        {/* ✅ Customer Reviews (Fixed Display Issue) */}
        <div className="contact-card reviews-section">
          <h5 className="contact-title text-secondary">What People Say</h5>

          <div className="review">
            <p><strong>Ace Martinez</strong> - "Amazing place! You have to check it out, you will not be disappointed." ⭐⭐⭐⭐⭐</p>
          </div>
          <div className="review">
            <p><strong>Nancy Rios</strong> - "My FAVORITE PLACE to Worship, Praise and give GOD ALL THE GLORY." ⭐⭐⭐⭐⭐</p>
          </div>
          <div className="review">
            <p><strong>Rebecca Baum</strong> - "A fantastic church! The Holy Spirit was there, I am blessed by going there." ⭐⭐⭐⭐⭐</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
